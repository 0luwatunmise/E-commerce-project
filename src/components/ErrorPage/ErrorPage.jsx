import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage({
  code = "404",
  title = "Page not found",
  message = "Sorry, we couldn't find what you were looking for.",
}) {
  return (
    <div className="error-page">
      <h1 className="error-code">{code}</h1>
      <h2 className="error-title">{title}</h2>
      <p className="error-message">{message}</p>

      <div className="error-actions">
        <Link to="/" className="error-btn primary">Back to Home</Link>
        <button className="error-btn" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;