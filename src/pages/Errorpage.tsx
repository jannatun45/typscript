import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
