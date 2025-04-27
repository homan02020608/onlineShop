"use client"

import { RootState } from "@/redux/store";
import { useUser } from "@clerk/nextjs";
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { addDoc, collection } from "firebase/firestore";
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
    const [address, setAddress] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const cartState = useSelector((state: RootState) => state.cart.cart)


    const getAddress = async () => {
        await elements?.getElement("address")?.getValue().then(function (result) {
            setAddress(result.value.address)
        })
        
    }

    const addToOrderHistory = async () => {
        await addDoc(collection(db, "user", `${user?.id}`, "orderHistory"), {
            order: cartState,
            payment: "credit card",
            create_At: new Date(),
            update_At: new Date(),
            address: address,
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

        addToOrderHistory()

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `https://online-shop-xi-seven.vercel.app/payment-success?amount=${amount}`,
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
        <div>
            <form onSubmit={handleSubmit} className="p-2">

                <AddressElement options={{mode:'shipping'}} onChange={(event) => setAddress(event.value)}/>
                {clientSecret && <PaymentElement />}

                {errorMessage && <div>{errorMessage}</div>}

                <button
                    disabled={!stripe || loading}
                    className="bg-black text-white w-full p-2 rounded-lg "
                    //onClick={() => getAddress()}
                >
                    {!loading ? `Pay $${amount}` : "Processing..."}
                </button>



            </form>
            
        </div>
    )
}

export default CheckoutPage