import Layout from "./layout";
import AddRpgForm from "../components/form/addRpgForm";
import GetAllRpgs from "../components/getAllRpgs";
import { useSelector } from "react-redux";

function Library() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div id="bloc_page">
      <Layout>
        <section>
          {token ? (
            <div className={"add_table"}>
              <AddRpgForm />
            </div>
          ) : (
            <p>Vous devez être connecté pour créer une fiche de JDR</p>
          )}
          <GetAllRpgs />
        </section>
      </Layout>
    </div>
  );
}

export default Library;
