import "./style.css";
export default function Joueur(props) {
  
  return (
    <div className="joueur">
    <h2>{props.joueur.nom}</h2>
    <img src={props.joueur.image} />
    <p>{props.joueur.description}</p>
    </div>
  )
}