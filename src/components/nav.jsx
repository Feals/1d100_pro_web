import { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
import PropTypes from "prop-types";

class Nav extends Component {
  render() {
    return (
      <div id="navigation">
        <NavItem label="L'Association" className="main_nav">
          <NavLink to="/about">A PROPOS</NavLink>
          <Separator />
          <NavLink to="/role-playing-game">
            {`LE JEU DE RÔLE (JDR). C'EST QUOI ?`}
          </NavLink>
          <Separator />
          <NavLink to="/find-us">OÙ NOUS TROUVER</NavLink>
          <Separator />
          <NavLink to="/become-member">DEVENIR MEMBRE</NavLink>
          <Separator />
          <NavLink to="/contact">NOUS CONTACTER</NavLink>
        </NavItem>

        <NavItem label="Nos Tables">
          <NavLink to="/tables">PLANNING</NavLink>
          <Separator />
          {/* <NavLink to="/proposer-une-table">PROPOSER UNE TABLE (MJ)</NavLink> */}
          {/* <Separator /> */}
          {/* <NavLink to="/etre-joueur">ÊTRE JOUEUR (PJ)</NavLink> */}
          {/* <Separator /> */}
          {/* <NavLink to="/les-campagnes">LES CAMPAGNES</NavLink> */}
          {/* <Separator /> */}
          <NavLink to="/starting-rpg">DÉBUTER LE JDR</NavLink>
        </NavItem>

        <NavItem label="La Bibliothèque">
          <NavLink to="/books">LES OUVRAGES</NavLink>
          <Separator />
          <NavLink to="/borrow-book">EMPRUNTER UN LIVRE</NavLink>
        </NavItem>
        <NavItem label="Contact" to="/contact" className="no-submenu"></NavItem>
      </div>
    );
  }
}

class NavItem extends Component {
  state = {
    isOpen: false,
  };

  toggleSubMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { label, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className="nav-item"
        onMouseEnter={() => this.setState({ isOpen: true })}
        onMouseLeave={() => this.setState({ isOpen: false })}
      >
        <span className="nav-label">{label}</span>
        {isOpen && <div className="submenu">{children}</div>}
      </div>
    );
  }
}

class NavLink extends Component {
  render() {
    const { to, children } = this.props;
    return (
      <div className="nav-link">
        <Link to={to}>{children}</Link>
      </div>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class Separator extends Component {
  render() {
    return <div className="separator">--------------</div>;
  }
}

export default Nav;
