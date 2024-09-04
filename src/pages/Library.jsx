import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Jdrs from "../components/jdrs";
import AddJdrForm from "../components/form/addJdrForm";

function Library() {
  return (
    <div>
      <body>
        <div id="bloc_page">
          <Header />
          <Nav />
          <AddJdrForm />
          <section>
            <h1 className="blueText">Nos JDRs</h1>
            <Jdrs />
          </section>
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default Library;
