import Layout from "./Layout";
import AddTableModal from "../components/modal/AddTableModal";
import GetAllTables from "../components/GetAllTables";

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
