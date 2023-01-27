import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  const errorStatusMessage = `${error.status} ${error.statusText}`
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{errorStatusMessage || error.message}</p>
      <p>{error.data}</p>
      <Link to={'/'}>Back to root</Link>
    </div>
  );
}