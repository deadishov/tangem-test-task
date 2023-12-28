import BannerBottom from "./components/BannerBottom";
import BannerTop from "./components/BannerTop";

function App() {
  return (
    <div className="content">
      <BannerTop />
      <div className="container">
        <BannerBottom />
      </div>
    </div>
  );
}

export default App;
