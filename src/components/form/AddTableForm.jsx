import { useDispatch, useSelector } from "react-redux";
import {
  addTable,
  updateTable,
  getTableById,
} from "../../store/action/tableAction";
import { addTableSchema } from "./validationSchemas";
import FormContainer from "./FormContainer";
import FormField from "./FormField";
import { Field, ErrorMessage } from "formik";
import { getAllRpgs } from "../../store/action/rpgAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddTableForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    rpgs,
    loading: loadingRpgs,
    error: errorRpgs,
  } = useSelector((state) => state.rpgs);

  const { table, loading: loadingTable } = useSelector((state) => state.tables);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    nbPlayer: null,
    rpgId: "",
  });

  useEffect(() => {
    dispatch(getAllRpgs());
    if (id) {
      dispatch(getTableById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (table && id) {
      setInitialValues({
        name: table.name || "",
        description: table.description || "",
        nbPlayer: table.nbPlayer,
        rpgId: table.RpgId || "", // Ensure it is an empty string if no RpgId
      });
    }
  }, [table, id]);

  const handleSubmit = (values) => {
    if (id) {
      dispatch(updateTable({ id, values }));
    } else {
      dispatch(addTable(values));
    }
  };

  return (
    <div>
      {loadingTable ? (
        <p>Chargement des données de la table...</p>
      ) : (
        <FormContainer
          initialValues={initialValues}
          validationSchema={addTableSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <h2>{id ? "Modifier une Table" : "Ajouter une Table"}</h2>
          <FormField label="Nom" name="name" type="text" />
          <FormField label="Description" name="description" type="text" />
          <FormField label="Nombre de joueurs" name="nbPlayer" type="number" />
          {loadingRpgs ? (
            <p>Chargement des JDRs...</p>
          ) : errorRpgs ? (
            <p>Erreur: {errorRpgs}</p>
          ) : (
            <div>
              <label htmlFor="RpgId">Sélectionner un JDR</label>
              <Field as="select" name="rpgId">
                <option value="" label="Sélectionner un JDR" disabled />
                {rpgs.map((rpg) => (
                  <option key={rpg.id} value={rpg.id}>
                    {rpg.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="rpgId" component="div" className="error" />
            </div>
          )}
        </FormContainer>
      )}
    </div>
  );
};

export default AddTableForm;
