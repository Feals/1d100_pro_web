import Layout from "./layout";
import AddTableModal from "../components/modal/addTableModal";
import GetAllTables from "../components/getAllTables";

function Tables() {
  return (
    <div id="bloc_page">
      <Layout>
        <AddTableModal />
        <section>
          <h1 className="blueText">Nos Tables</h1>
          <GetAllTables />
        </section>
      </Layout>
    </div>
  );
}

export default Tables;
