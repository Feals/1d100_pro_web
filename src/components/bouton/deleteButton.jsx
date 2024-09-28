import GenericBoutton from "./genericButton";
import PropTypes from "prop-types";
import garbageImage from "../../../public/images/garbage.svg";
import "../../assets/css/svg.css";

const DeleteButton = ({ onDelete }) => {
  return (
    <GenericBoutton
      actionType="red"
      onAction={onDelete}
      buttonLabel={<img src={garbageImage} alt="Supprimer" />}
      className={`button_without_style`}
    />
  );
};
DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
