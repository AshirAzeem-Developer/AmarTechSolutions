import React from "react";
import { Link } from "react-router-dom";

const NoPageFoundComponent = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for cannot be found.</p>

      <p>
        If you think this is an error, please report it to the{" "}
        <a href="mailto:admin@example.com">admin</a>.
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default NoPageFoundComponent;
