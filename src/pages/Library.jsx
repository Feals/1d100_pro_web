import Layout from "./Layout";
import AddRpgForm from "../components/form/AddRpgForm";

function Library() {
  return (
    <div id="bloc_page">
      <Layout>
        <AddRpgForm />
        <section>
          <h1 className="blueText">Nos JDRs</h1>
        </section>
      </Layout>
    </div>
  );
}

export default Library;
