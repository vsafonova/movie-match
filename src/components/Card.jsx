import Button from "./Button";
export default function Card({ title ,image, description, genres }) {
  
  function handleYes() {
    console.log("yes!");
  }

  return (
    <>
      <div className="card-container">
        <h1>{title}</h1>
        <img style={{backgroundImage: "./images/" + image}} alt="Poster image"></img>
        <h4>Description:</h4>
        <p>{description}</p>
        <div>
          <span>Genre 1</span>
          <span>Genre 2</span>
          <span>Genre 3</span>
        </div>
        <Button text={"Yes"} handleClick={handleYes} />
        <Button text={"No"} />
      </div>
    </>
  );
}
