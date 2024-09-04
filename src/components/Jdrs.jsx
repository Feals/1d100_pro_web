import { Link } from "react-router-dom";

class Jdrs {
  constructor() {
    this.state = {
      allJDR: [],
    };
  }

  componentDidMount() {
    fetch("/jdr/lesJDR")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ allJDR: data });
        console.log("Tous les jdr:", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des jdr :", error);
        this.setState({
          error: "Une erreur s'est produite lors de la récupération des JDR.",
          loading: false,
        });
      });
  }

  render() {
    const { allJDR } = this.state;

    return (
      <div>
        <h2>JDRs :</h2>
        {allJDR.arrayJdr ? (
          allJDR.arrayJdr.map((jdr) => {
            const genres = JSON.parse(jdr.genres);
            return (
              <div key={jdr.id}>
                <p>id: {jdr.id}</p>
                <p>nom: {jdr.nom}</p>
                <p>description: {jdr.description}</p>
                <p>images:</p>

                <img
                  src={`http://localhost:5000/${jdr.images}`}
                  alt="jdr"
                ></img>

                <p>Genres : </p>

                {Array.isArray(genres) ? ( // Vérifiez si c'est un tableau
                  genres.map((genre, index) => <p key={index}>{genre} </p>)
                ) : (
                  <p>Genres non valides</p> // Affichez un message si ce n'est pas un tableau
                )}
                <Link to={`/jdr/${jdr.id}`}>Voir les détails</Link>
              </div>
            );
          })
        ) : (
          <p>Chargement des JDR...</p>
        )}
      </div>
    );
  }
}
export default Jdrs;
