import PropTypes from "prop-types";

const GenericButton = ({
  actionType,
  onAction,
  buttonLabel,
  buttonStyle,
  className,
}) => {
  const getButtonStyle = () => {
    switch (actionType) {
      case "green":
        return { color: "green", ...buttonStyle };
      case "red":
        return { color: "red", ...buttonStyle };
      default:
        return buttonStyle;
      case "blue":
        return { color: "blue", ...buttonStyle };
    }
  };

  return (
    <button onClick={onAction} style={getButtonStyle()} className={className}>
      {buttonLabel}
    </button>
  );
};

GenericButton.propTypes = {
  actionType: PropTypes.oneOf(["green", "red", "blue"]),
  onAction: PropTypes.func.isRequired,
  buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  buttonStyle: PropTypes.object,
  className: PropTypes.string,
};

GenericButton.defaultProps = {
  buttonStyle: {},
};

export default GenericButton;
