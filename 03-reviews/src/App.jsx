import Review from "./Review";
function App() {
  return (
    <main>
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <div className="main-container">
        <Review />
      </div>
    </main>
  );
}

export default App;
