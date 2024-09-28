import Layout from "./layout";
import AddTableModal from "../components/modal/addTableModal";
import GetAllTables from "../components/getAllTables";
import "../assets/css/TableAndRpg.css";
import { useSelector } from "react-redux";

function Tables() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div id="bloc_page">
      <Layout>
        <section>
          {token ? (
            <div className={"add_table"}>
              <AddTableModal />
            </div>
          ) : (
            <p>Vous devez être connecté pour proposer une table</p>
          )}

          <GetAllTables />
        </section>
      </Layout>
    </div>
  );
}

export default Tables;
