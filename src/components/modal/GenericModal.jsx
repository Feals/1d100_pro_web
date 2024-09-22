import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/action/modalAction";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/GenericModal.css";
import GenericButton from "../bouton/genericButton";

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
      <GenericButton
        actionType="modal"
        onAction={() => handleOpenModal()}
        buttonLabel={buttonText}
      />
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            {children}
            <GenericButton
              actionType="modal"
              onAction={handleCloseModal}
              buttonLabel="Fermer la Modal"
            />
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
