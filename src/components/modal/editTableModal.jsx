import GenericModal from "./genericModal";
import AddTableForm from "../form/addTableForm";
import PropTypes from "prop-types";

const EditTableModal = ({ tableId }) => {
  return (
    <GenericModal initialButtonText="Modifier la Table">
      <AddTableForm tableId={tableId} />
    </GenericModal>
  );
};

EditTableModal.propTypes = {
  tableId: PropTypes.number,
};

export default EditTableModal;
