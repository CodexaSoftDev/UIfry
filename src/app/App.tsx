import Frame54 from "../imports/Frame54/Frame54";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="relative w-full" style={{ aspectRatio: '1440 / 5500' }}>
          <div className="absolute inset-0 scale-[min(100vw/1440,1)] origin-top-left">
            <Frame54 />
          </div>
        </div>
      </div>
    </div>
  );
}