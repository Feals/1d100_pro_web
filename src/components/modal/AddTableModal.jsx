import GenericModal from "./genericModal";
import AddTableForm from "../form/addTableForm";

const AddTableModal = () => {
  return (
    <GenericModal initialButtonText="Ajouter une Table">
      <AddTableForm />
    </GenericModal>
  );
};

export default AddTableModal;
