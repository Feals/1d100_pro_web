import { useDispatch, useSelector } from "react-redux";
import {
  addTable,
  updateTable,
  getTableById,
} from "../../store/action/tableAction";
import { addTableSchema } from "./validationSchemas";
import FormContainer from "./formContainer";
import FormField from "./formField";
import { Field, ErrorMessage } from "formik";
import { getAllRpgs } from "../../store/action/rpgAction";
import { useEffect, useState } from "react";
import DatePickerField from "../DatePickerField";
import PropTypes from "prop-types";

const AddTableForm = ({ tableId }) => {
  const dispatch = useDispatch();

  const {
    rpgs,
    loading: loadingRpgs,
    error: errorRpgs,
  } = useSelector((state) => state.rpgs);
  const {
    table,
    loading: loadingTable,
    error: errorTable,
  } = useSelector((state) => state.tables);

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
    if (tableId && (!table || table.id !== tableId)) {
      dispatch(getTableById(tableId));
    }
  }, [dispatch, tableId, table]);

  useEffect(() => {
    if (table && tableId && table.id === tableId) {
      setInitialValues({
        name: table.name || "",
        description: table.description || "",
        nbPlayers: table.nb_players || "",
        rpgId: table.rpg_id || null,
        sessionDate: table.session_date ? new Date(table.session_date) : null,
        author: userId,
      });
    }
  }, [table, userId, tableId]);

  const handleSubmit = (values) => {
    const tableData = {
      ...values,
      rpgId: parseInt(values.rpgId, 10),
      author: userId,
    };

    if (tableId) {
      dispatch(updateTable({ tableId, values: tableData }));
    } else {
      dispatch(addTable(tableData));
    }
  };

  return (
    <div>
      {loadingTable ? (
        <p>Chargement des données de la table...</p>
      ) : errorTable ? (
        <p>Erreur: {errorTable}</p>
      ) : (
        <FormContainer
          initialValues={initialValues}
          validationSchema={addTableSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <h2>{tableId ? "Modifier une Table" : "Ajouter une Table"}</h2>

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

AddTableForm.propTypes = {
  tableId: PropTypes.number,
};

export default AddTableForm;
