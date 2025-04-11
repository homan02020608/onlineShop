import { AddressElement } from '@stripe/react-stripe-js'
import React from 'react'

const AddressForm = () => {
  return (
    <form>
        <AddressElement options={{mode:'shipping'}}/>
    </form>
  )
}

export default AddressForm