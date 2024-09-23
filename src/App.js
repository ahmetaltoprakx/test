import "./styles.css";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="app-container">
      <Spline scene="https://prod.spline.design/g5ckTtWF3f8EW9vL/scene.splinecode" />

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#about">Hakkında</a>
          </li>
          <li>
            <a href="#products">Ürünler</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
