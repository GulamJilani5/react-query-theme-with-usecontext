export default function Error({ error }) {
  return (
    <>
      <p>Error: {error}</p>
      <Link to="/">Got to home page</Link>
    </>
  );
}
