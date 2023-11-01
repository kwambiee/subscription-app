import React, { useState } from "react";
import Modal from "react-modal";
import PaymentModal from "@/components/PaymentModal";

// Modal.setAppElement("#__next"); // Set the app element for accessibility

const modules = ["SolarCalc", "PumpCalc", "Licences", "Training", "HeatCalc"];
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

function CustomModal({ isOpen, closeModal, title }) {
  const [options, setOptions] = useState([]);
  const [selectedModules, setSelectedModules] = useState([
    "SolarCalc",
    "PumpCalc",
    "Licences",
    "Training",
    "HeatCalc",
  ]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleClick = (e) => {
    //add to options array
    if (!options.includes(e.target.value)) {
      setOptions([...options, e.target.value]);
    }
  };

  const handleContinue = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentModalClose = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        s
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyles}
      >
        <div className="text-right font-extrabold text-4xl">
          <button onClick={closeModal}>&times;</button>
        </div>
        <div className="flex flex-col">
          {/* Add your modal content here */}
          <h2 className="text-center text-2xl font-extrabold p-4">{title}</h2>
          {title == "Custom Plan" ? (
            <>
              <div className="flex w-full justify-around mb-4">
                <div>
                  <h4 className="text-lg font-semibold py-4">
                    Select your plans
                    <br />
                    <span className="italic font-medium text-sm ">
                      (Select more than one)
                    </span>
                  </h4>
                  <div className="flex flex-col space-y-2">
                    {selectedModules.map((module) => (
                      <button
                        className="bg-white border shadow px-12 py-1 rounded mb-2 hover:scale-90 hover:shadow-lg cursor-pointer transition-transform duration-300${
                          "
                        value={module}
                        onClick={handleClick}
                      >
                        {module}
                      </button>
                    ))}
                  </div>
                </div>

                <div class="bg-gray-500 w-[0.5px] mx-4 mt-4"></div>

                <div>
                  <h4 className="text-lg font-semibold py-4">Selected Plans</h4>
                  {options.length > 0 ? (
                    <div className="grid">
                      {options.map((option) => (
                        <button
                          className="bg-white border shadow px-12 py-4 mb-2 hover:scale-95 hover:shadow-lg cursor-pointer transition-transform duration-300"
                          value={option}
                          onClick={() => {
                            setOptions(
                              options.filter((item) => item !== option)
                            );
                          }}
                        >
                          {option}
                          <span className="hover:opacity-100 hover:scale-125 opacity-0 text-red-500 transition-opacity pl-16  ">
                            x
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                className=" flex-none mx-auto mt-8 text-center cursor-pointer bg-white w-[20%] rounded px-6 py-2"
                onClick={handleContinue}
              >
                Continue
              </button>
            </>
          ) : null}
        </div>
      </Modal>

      {isPaymentModalOpen ? (
        <PaymentModal
          isOpen={isOpen}
          onRequestClose={handlePaymentModalClose}
        />
      ) : null}
    </>
  );
}

export default CustomModal;
