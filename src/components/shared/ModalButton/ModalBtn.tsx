import ContactModal from "@/components/contact/ContactModal";
import { useState } from "react";

const ModalBtn = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="font-lato shadow-md bg-[#F28E2C] hover:bg-[#d88a3c] transition-all duration-300 text-white capitalize lg:w-[40%] w-[100%] py-2 rounded-[5px] text-center">
      <button onClick={openModal} className="font-lato ">
        Contact Us!
      </button>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalBtn;
