import { useEffect, useState } from "react";
import LandingPage from "../imports/LandingPage/LandingPage";

const DESIGN_W = 1440;
const DESIGN_H = 5370;

export default function App() {
  const [scale, setScale] = useState(() =>
    Math.min(1, window.innerWidth / DESIGN_W)
  );

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_W));
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <main
        id="main-content"
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: DESIGN_W,
          height: DESIGN_H * scale,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            willChange: "transform",
          }}
        >
          <LandingPage />
        </div>
      </main>
    </div>
  );
}
