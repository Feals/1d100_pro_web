import GenericModal from "./GenericModal";
import AddTableForm from "../form/AddTableForm";

const AddTableModal = () => {
  return (
    <GenericModal initialButtonText="Ouvrir la Modale pour Ajouter une Table">
      <AddTableForm />
    </GenericModal>
  );
};

export default AddTableModal;
