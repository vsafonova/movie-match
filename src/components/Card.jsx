export default function Card({ isCurrent, title, image, description, genres }) {
  const imageUrl = "./images/" + image;
  return (
    <>
      <div
        className={isCurrent + ' card'}
        style={{ backgroundImage: "url(" + imageUrl + ")" }}
      >
        <div className="card-detail">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-footer">
            {genres.map((genre, i) => {
              return (
                <span className="card-tags" key={i}>
                  {genre + " "}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
