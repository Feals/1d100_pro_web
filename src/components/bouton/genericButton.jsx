import PropTypes from "prop-types";

const GenericButton = ({ actionType, onAction, buttonLabel, buttonStyle }) => {
  const getButtonStyle = () => {
    switch (actionType) {
      case "join":
        return { color: "green", ...buttonStyle };
      case "leave":
        return { color: "red", ...buttonStyle };
      default:
        return buttonStyle;
      case "modal":
        return { color: "blue", ...buttonStyle };
    }
  };

  return (
    <button onClick={onAction} style={getButtonStyle()}>
      {buttonLabel}
    </button>
  );
};

GenericButton.propTypes = {
  actionType: PropTypes.oneOf(["join", "leave", "modal"]),
  onAction: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
};

GenericButton.defaultProps = {
  buttonStyle: {},
};

export default GenericButton;
