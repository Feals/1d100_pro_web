import Layout from "./Layout";
import AddRpgForm from "../components/form/AddRpgForm";
import GetAllRpgs from "../components/GetAllRpgs";

function Library() {
  return (
    <div id="bloc_page">
      <Layout>
        <AddRpgForm />
        <section>
          <h1 className="blueText">Nos JDRs</h1>
          <GetAllRpgs />
        </section>
      </Layout>
    </div>
  );
}

export default Library;
