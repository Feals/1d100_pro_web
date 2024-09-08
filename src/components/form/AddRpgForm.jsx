import { useDispatch, useSelector } from "react-redux";
import { addRpg, updateRpg, getRpgById } from "../../store/action/rpgAction";
import { addJdrSchema } from "./validationSchemas";
import FormContainer from "./FormContainer";
import FormField from "./FormField";
import { Field, ErrorMessage, FieldArray } from "formik";
import { getAllGenres } from "../../store/action/genreAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageUploadField from "../ImageUploadField";

const AddRpgForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    genres,
    loading: loadingGenres,
    error: errorGenres,
  } = useSelector((state) => state.genres);
  const { rpg, loading: loadingRpg } = useSelector((state) => state.rpgs);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    genreIds: [],
    selectedFile: null,
  });

  useEffect(() => {
    dispatch(getAllGenres());
    if (id) {
      dispatch(getRpgById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (rpg && id) {
      setInitialValues({
        name: rpg.name || "",
        description: rpg.description || "",
        genreIds: rpg.Genres ? rpg.Genres.map((genre) => genre.id) : [],
        selectedFile: null,
      });
    }
  }, [rpg, id]);

  const handleSubmit = (values) => {
    if (id) {
      dispatch(updateRpg({ id, values }));
    } else {
      dispatch(addRpg(values));
    }
  };

  return (
    <div>
      {loadingRpg ? (
        <p>Chargement des données du RPG...</p>
      ) : (
        <FormContainer
          initialValues={initialValues}
          validationSchema={addJdrSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <h2>{id ? "Modifier un JDR" : "Ajouter un JDR"}</h2>
          <FormField label="Nom" name="name" type="text" />
          <FormField label="Description" name="description" type="text" />

          {loadingGenres ? (
            <p>Chargement des genres...</p>
          ) : errorGenres ? (
            <p>Erreur: {errorGenres}</p>
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
                                remove(
                                  initialValues.genreIds.indexOf(genre.id)
                                );
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
                  <ErrorMessage
                    name="genreIds"
                    component="div"
                    className="error"
                  />
                </div>
              )}
            />
          )}

          <ImageUploadField
            name="selectedFile"
            existingImage={rpg ? `http://localhost:1500/${rpg.images}` : null}
          />
        </FormContainer>
      )}
    </div>
  );
};

export default AddRpgForm;
