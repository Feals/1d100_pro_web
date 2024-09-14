import GenericBoutton from "./genericButton";
import PropTypes from "prop-types";

const SubscribeButton = ({ onJoin }) => {
  return (
    <GenericBoutton
      actionType="join"
      onAction={onJoin}
      buttonLabel="S'inscrire à la table"
    />
  );
};
SubscribeButton.propTypes = {
  onJoin: PropTypes.func.isRequired,
};
export default SubscribeButton;
