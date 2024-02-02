import { useState } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
}

const PaymentComponent = () => {
  const [name, setName] = useState('Mehul');
  const [orderId, setOrderId] = useState('dummy_order_id'); // Use a dummy order ID

  async function displayRazorpay() {
    try {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      const options = {
        key: 'rzp_test_80O2m3SmaMOrVp',
        currency: 'INR',
        amount: 500,
        order_id:'order_NW00fJfXegBLS7', // Use the dummy order_id
        name: 'Donation',
        description: 'Thank you for nothing. Please give us some money',
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name,
          email: 'sdfdsjfh2@ndsfdf.com',
          phone_number: '9899999999',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error loading Razorpay SDK:', error);
    }
  }

  return (
    <div>
      <button onClick={displayRazorpay}>Click</button>
    </div>
  );
};

export default PaymentComponent;




