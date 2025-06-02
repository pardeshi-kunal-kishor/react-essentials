import "./User.css";

function User({ id, name }) {
  return (
    <>
      <h1>{id}</h1>
      <p>{name}</p>
    </>
  );
}

export default User;
