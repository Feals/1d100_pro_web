import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/action/modalAction";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/GenericModal.css";

const GenericModal = ({ children, initialButtonText }) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState(initialButtonText);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setButtonText(initialButtonText);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>{buttonText}</button>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            {children}
            <button onClick={handleCloseModal}>Fermer la Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

GenericModal.propTypes = {
  children: PropTypes.node.isRequired,
  initialButtonText: PropTypes.string.isRequired,
};

export default GenericModal;
