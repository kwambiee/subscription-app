import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "70%",
    height: "80vh",
    borderRadius: "10px",
    background: "linear-gradient(to bottom, #cff0ff, #7dd2fa, #31b7f5)",
  },
  overlay: {
    backgroundColor: "transparent",
  },
};

function PaymentModal({ isOpen, onRequestClose }) {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [mpesaPhoneNumber, setMpesaPhoneNumber] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Payment Modal"
      style={customStyles}
    >
      <h2 className="text-center text-2xl font-extrabold p-4">
        Payment Information
      </h2>

      <form>
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium mb-2"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="p-2 w-full border rounded-md"
          >
            <option value="creditCard">Credit Card</option>
            <option value="mpesa">Mpesa</option>
          </select>
        </div>

        {paymentMethod === "creditCard" && (
          <div className="mb-4">
            <label
              htmlFor="creditCardNumber"
              className="block text-sm font-medium mb-2"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
              placeholder="Credit Card Number"
              id="creditCardNumber"
              className="p-2 w-full border rounded-md"
            />
          </div>
        )}

        {paymentMethod === "mpesa" && (
          <div className="mb-4">
            <label
              htmlFor="mpesaPhoneNumber"
              className="block text-sm font-medium mb-2"
            >
              Mpesa Phone Number
            </label>
            <input
              type="text"
              value={mpesaPhoneNumber}
              onChange={(e) => setMpesaPhoneNumber(e.target.value)}
              placeholder="Mpesa Phone Number"
              id="mpesaPhoneNumber"
              className="p-2 w-full border rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Submit Payment
        </button>
      </form>
    </Modal>
  );
}

export default PaymentModal;
