import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";

export default function PaystackIntegration() {
  const publicKey = "pk_your_public_key_here";
  const amount = 100 * 100; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const paywithpaystack = (e)=>{
	e.preventDefault()
	const paystack = new PaystackPop();
	paystack.newTransaction({
		key:"pk_test_276077ab02f5ccaa3f0e995727354c74e159f540",
		amount,
		email,
		name,
		phone,
		onSuccess(transaction){
			let message = `Payment Complete Reference ${transaction.reference}`
			alert(message)
			setEmail("")
			setName("")
			setPhone("")
		},
		onCancel(){

		}
	})

  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] h-[500px] rounded-md  shadow-md">
		<div className="">
			<h1 className="p-3 bg-blue-400 w-full h-auto text-3xl font-semibold text-center">Make a payment</h1>
		</div>
		<div className="p-10">
        <div className="checkout-field">
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
			className="w-[200px] h-[30px] shadow-md m-3"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={email}
			className="w-[200px] h-[30px] shadow-md m-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
			className="w-[200px] h-[30px] shadow-md m-3"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="p-3 bg-green-400 hover:bg-green-200 rounded-md w-[400px]" onClick={paywithpaystack}>Pay</button>
		</div>
      </div>
    </div>
  );
}
