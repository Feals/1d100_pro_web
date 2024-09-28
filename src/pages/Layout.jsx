import PropTypes from "prop-types";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div id="body">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
