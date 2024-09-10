import Layout from "./Layout";
import AddTableForm from "../components/form/AddTableForm";
import GetAllTables from "../components/GetAllTables";

function Tables() {
  return (
    <div id="bloc_page">
      <Layout>
        <AddTableForm />
        <section>
          <h1 className="blueText">Nos Tables</h1>
          <GetAllTables />
        </section>
      </Layout>
    </div>
  );
}

export default Tables;
