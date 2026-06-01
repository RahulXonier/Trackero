import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const CheckOutButton = () => {
  const initialOption = {
    'client-id': 'AcLNLWqsNzvXpXgVQyKJkd856uc02Z6aL9cc8evhWXmVMfVRxp_aFwRRqoZixiJ3IpXRyb19NrNO6hm_',
    currency: 'USD',
    intent: 'capture'
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '10.00'
          }
        }
      ]
    })
  }

  const onApproved = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction complete by ${name}`)

      console.log('Transaction Details :', details)
    })
  }

  const onError = (err) => {
    alert(`An error occurred ${err}`)
    console.log("error :", err)
  }


  return (
    <div className='max-w-[750px] min-h-[200px] mx-auto my-20'>
      <PayPalScriptProvider options={initialOption}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApproved}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default CheckOutButton