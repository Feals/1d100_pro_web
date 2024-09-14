import GenericBoutton from "./genericButton";
import PropTypes from "prop-types";

const UnsubscribeButton = ({ onLeave }) => {
  return (
    <GenericBoutton
      actionType="leave"
      onAction={onLeave}
      buttonLabel="Se désinscrire de la table"
    />
  );
};
UnsubscribeButton.propTypes = {
  onLeave: PropTypes.func.isRequired,
};

export default UnsubscribeButton;
