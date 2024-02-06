import { useContext } from "react";
import { MatchProviderContext } from "../providers/matchProvider";

export default function Card({ title, image, description, genres }) {
  const { cardData, setCardData } = useContext(MatchProviderContext);
  const imageUrl = "./public/images/" + image;
  return (
    <>
      <div
        className="card"
        style={{ backgroundImage: "url(" + imageUrl + ")" }}
      >
        <div className="card-detail">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-footer">
            {genres.map((genre, i) => {
              return <span class="card-tags" key={i}>{genre + " "} </span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
