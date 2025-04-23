"use client"

import { RootState } from "@/redux/store";
import { useUser } from "@clerk/nextjs";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { v4 } from "uuid"; 

const CheckoutPage = ({ amount }: { amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useUser();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const cartState = useSelector((state: RootState) => state.cart.cart)
    
    const addToOrderHistory = async () => {
        await addDoc(collection(db, "user", `${user?.id}`, "orderHistory"), { 
            order: cartState,
            payment:"credit card" , 
            create_At: new Date(),
            update_At: new Date(),
            id: v4()
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        //トランザクション在庫チェック
        addToOrderHistory()

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://localhost:3000/payment-success?amount=${amount}`,
            },
            
        })


        if (error) {
            setErrorMessage(error.message);
        } else {
            // redirected to `return_url`
        }


        setLoading(false);
    }

    useEffect(() => {
        fetch("api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [amount])

    if (!clientSecret || !stripe || !elements) {
        return (
            <div className="flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-2">
            {clientSecret && <PaymentElement />}

            {errorMessage && <div>{errorMessage}</div>}

            <button
                disabled={!stripe || loading}
                className="bg-black text-white w-full p-2 rounded-lg "
            >
                {!loading ? `Pay $${amount}` : "Processing..."}
            </button>
        </form>
    )
}

export default CheckoutPage