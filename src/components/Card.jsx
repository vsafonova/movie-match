import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";
export default function Card({ title, image, description, genres }) {
  const { cardData, setCardData } = useContext(MatchProviderContext);

  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <img
          style={{ backgroundImage: "./images/" + image }}
          alt="Poster image"
        ></img>
        <h4>Description:</h4>
        <p>{description}</p>
        <div>
          {genres.map((genre, i) => {
            return <span key={i}>{genre}</span>;
          })}
        </div>
      </div>
    </>
  );
}
