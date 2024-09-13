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
import DatePickerField from "../DatePickerField";

const AddTableForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    rpgs,
    loading: loadingRpgs,
    error: errorRpgs,
  } = useSelector((state) => state.rpgs);
  const { table, loading: loadingTable } = useSelector((state) => state.tables);

  const token = useSelector((state) => state.auth.token);
  const userId = token ? token.userId : null;

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    nbPlayers: null,
    rpgId: null,
    sessionDate: null,
    author: userId,
  });

  useEffect(() => {
    dispatch(getAllRpgs());
    if (id) {
      dispatch(getTableById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log("table", table);
    if (table && id) {
      setInitialValues({
        name: table.name || "",
        description: table.description || "",
        nbPlayers: table.nbPlayers || "",
        rpgId: table.rpgId || null,
        sessionDate: table.sessionDate ? new Date(table.sessionDate) : null,
        author: userId,
      });
    }
  }, [table, id, userId]);

  const handleSubmit = (values) => {
    const tableData = {
      ...values,
      rpgId: parseInt(values.rpgId, 10),
      author: userId,
    };

    if (id) {
      dispatch(updateTable({ id, values: tableData }));
    } else {
      dispatch(addTable(tableData));
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
          <FormField label="Nombre de joueurs" name="nbPlayers" type="number" />

          {loadingRpgs ? (
            <p>Chargement des JDRs...</p>
          ) : errorRpgs ? (
            <p>Erreur: {errorRpgs}</p>
          ) : (
            <div>
              <label htmlFor="rpgId">Sélectionner un JDR</label>
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

          <DatePickerField
            label="Date de session"
            name="sessionDate"
            minDate={new Date()}
            filterDate={(date) => date.getDay() === 6}
          />
        </FormContainer>
      )}
    </div>
  );
};

export default AddTableForm;
