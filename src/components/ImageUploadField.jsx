import { useFormikContext, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const ImageUploadField = ({ name, existingImage }) => {
  const { setFieldValue } = useFormikContext();

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue(name, file);
    }
  };

  return (
    <div>
      <label htmlFor={name}>Image</label>
      {existingImage && (
        <div>
          <img src={existingImage} alt="RPG" width="200" height="200" />
        </div>
      )}
      <input name={name} type="file" onChange={handleFileChange} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

ImageUploadField.propTypes = {
  name: PropTypes.string.isRequired,
  existingImage: PropTypes.string,
};

export default ImageUploadField;
