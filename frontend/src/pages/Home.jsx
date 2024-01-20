import MoviesComponent from "../components/Movies/MoviesComponent";
import TestComponent from "../components/Test/TestComponent";

function Home() {


  return (
    <main className="container">
      <div className="container_center">
        <MoviesComponent />
        <TestComponent />
      </div>
    </main>
  );
}

export default Home;
