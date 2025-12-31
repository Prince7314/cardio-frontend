import GlowBar from "./GlowBar";

export default function Navbar({ active, setActive }) {
  return (
    <div className="mb-8">
      <GlowBar />

      <div className="flex justify-between items-center px-8 py-4">
        {/* LOGO */}
        <h1 className="text-3xl font-extrabold tracking-widest text-cyan-400">
          ❤️ C<span className="text-white">ARDIO</span>
        </h1>

        {/* MENU */}
        <div className="flex gap-8 text-lg">
          {["Home", "Info", "Model"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative ${
                active === tab
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
