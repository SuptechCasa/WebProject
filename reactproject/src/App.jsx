import Joueur from "./joueur/joueur";
import { joueurs } from "./data/data_joueurs";
import "./App.css";

export default function App() {
  return (
    <>
    <h1>Les joueurs</h1>
    <div id="container">
     {joueurs.map((joueur) => (
      <Joueur key={joueur.nom} joueur={joueur} />
    ))}
    </div>
    </>
  )
}
