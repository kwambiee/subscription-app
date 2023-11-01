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
  const [mpesaPhoneNumber, setMpesaPhoneNumber] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment is being made");
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

      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label
            htmlFor="PhoneNumber"
            className="block text-sm font-medium mb-2"
          >
            Enter your phone number
          </label>
          <input
            value={mpesaPhoneNumber}
            onChange={(e) => setMpesaPhoneNumber(e.target.value)}
            placeholder="2547xxxxxxxx"
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Pay Now
        </button>
      </form>
    </Modal>
  );
}

export default PaymentModal;
