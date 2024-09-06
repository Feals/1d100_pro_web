import { useDispatch, useSelector } from "react-redux";
import { addRpg } from "../../store/action/rpgAction";
import { addJdrSchema } from "./validationSchemas";
import FormContainer from "./FormContainer";
import FormField from "./FormField";
import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import PropTypes from "prop-types";
import { getAllGenres } from "../../store/action/genreAction";
import { useEffect } from "react";

const AddRpgForm = () => {
  const dispatch = useDispatch();
  const { genres, loading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const initialValues = {
    name: "",
    description: "",
    genreIds: [],
    selectedFile: null,
  };

  const handleSubmit = (values) => {
    dispatch(addRpg(values));
  };

  return (
    <FormContainer
      initialValues={initialValues}
      validationSchema={addJdrSchema}
      onSubmit={handleSubmit}
    >
      <h2>Ajouter un JDR</h2>
      <FormField label="Nom" name="name" type="text" />
      <FormField label="Description" name="description" type="text" />

      {loading ? (
        <p>Chargement des genres...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : (
        <FieldArray
          name="genreIds"
          render={({ push, remove }) => (
            <div>
              <label htmlFor="genres">Genres</label>
              {genres.length > 0 ? (
                genres.map((genre) => (
                  <div key={genre.id}>
                    <label>
                      <Field
                        type="checkbox"
                        name="genreIds"
                        value={genre.id}
                        checked={initialValues.genreIds.includes(genre.id)}
                        onChange={() => {
                          if (initialValues.genreIds.includes(genre.id)) {
                            remove(initialValues.genreIds.indexOf(genre.id));
                          } else {
                            push(genre.id);
                          }
                        }}
                      />
                      {genre.genre}
                    </label>
                  </div>
                ))
              ) : (
                <p>Pas de genres disponibles</p>
              )}
              <ErrorMessage name="genreIds" component="div" className="error" />
            </div>
          )}
        />
      )}

      <ImageUploadField name="selectedFile" />
    </FormContainer>
  );
};

const ImageUploadField = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <label htmlFor={name}>Image</label>
      <input
        name={name}
        type="file"
        onChange={(event) => {
          const file = event.currentTarget.files[0];
          setFieldValue(name, file);
        }}
      />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

ImageUploadField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AddRpgForm;
