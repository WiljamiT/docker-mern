import React from "react";
import LogInMessage from "../components/Message/LogInMessage";
import MoviesComponent from "../components/Movies/MoviesComponent";
import TestComponent from "../components/Test/TestComponent";

function Home({ isAuthenticated }) {
  return (
    <main className="container">
      <div className="container_center">
        <MoviesComponent isAuthenticated={isAuthenticated} />
        {!isAuthenticated ? <LogInMessage /> : <TestComponent />}
      </div>
    </main>
  );
}

export default Home;
