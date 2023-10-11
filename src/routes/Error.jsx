// import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  // const error = useRouteError();
  // if (isRouteErrorResponse(error)) {
  return (
    <div className="container error">
      <h1>Oops!</h1>
      <img src="https://giffiles.alphacoders.com/354/35481.gif" alt="imagen de error" />
      {/* <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Link className="button" to="/motoland">Return to home</Link> */}
    </div>
  )
  // } else {
  //   return <div className="container">Oops</div>;
  // }
}
export default Error
