export default function Card() {
  return (
    <>
      <div className="card-container">
        <h1>Title</h1>
        <img src="https://picsum.photos/200" alt="Poster image"></img>
        <h4>Description:</h4>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
          impedit fuga doloribus inventore ducimus, alias cum enim,
          exercitationem veritatis illo, quasi dolore. Ab velit aperiam
          consectetur eligendi harum beatae.
        </p>
        <div>
          <span>Genre 1</span>
          <span>Genre 2</span>
          <span>Genre 3</span>
        </div>
        <Button text={"Yes"} />
        <Button text={"No"} />
      </div>
    </>
  );
}
