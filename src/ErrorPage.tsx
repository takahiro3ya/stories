import { useRouteError } from "react-router-dom";

// https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors

// detail setting
// https://github.com/remix-run/react-router/discussions/9628

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
