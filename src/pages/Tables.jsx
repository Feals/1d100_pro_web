import Layout from "./layout";
import AddTableModal from "../components/modal/addTableModal";
import GetAllTables from "../components/getAllTables";
import "../assets/css/TableAndRpg.css";

function Tables() {
  return (
    <div id="bloc_page">
      <Layout>
        <section>
          <div className={"add_table"}>
            <AddTableModal />
          </div>
          <GetAllTables />
        </section>
      </Layout>
    </div>
  );
}

export default Tables;
