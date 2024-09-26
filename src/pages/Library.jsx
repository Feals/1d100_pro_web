import Layout from "./layout";
import AddRpgForm from "../components/form/addRpgForm";
import GetAllRpgs from "../components/getAllRpgs";

function Library() {
  return (
    <div id="bloc_page">
      <Layout>
        <section>
          <AddRpgForm />
          <h1 className="blueText">Nos JDRs</h1>
          <GetAllRpgs />
        </section>
      </Layout>
    </div>
  );
}

export default Library;
