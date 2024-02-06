import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function Card({ title, image, description, genres }) {
  const { cardData, setCardData } = useContext(MatchProviderContext);
  const imageUrl = "./public/images/" + image;
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <img src={imageUrl} alt="Poster image" width={200} height={300}></img>
        <h4>Description</h4>
        <p>{description}</p>
        <div>
          {genres.map((genre, i) => {
            return <span key={i}>{genre + " "} </span>;
          })}
        </div>
      </div>
    </>
  );
}
