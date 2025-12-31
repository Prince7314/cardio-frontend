export default function Gauge({ value }) {
  const angle = (value / 100) * 180 - 90;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-32 overflow-hidden">
        {/* Background Arc */}
        <div className="absolute inset-0 rounded-t-full border-[12px] border-gray-700"></div>

        {/* Needle */}
        <div
          className="absolute bottom-0 left-1/2 w-1 h-28 bg-red-500 origin-bottom transition-transform duration-700"
          style={{ transform: `rotate(${angle}deg)` }}
        />

        {/* Center Dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
      </div>

      <p className="mt-3 text-lg font-semibold">
        Risk Probability:{" "}
        <span className="text-cyan-400">{value}%</span>
      </p>

      <p
        className={`mt-1 font-bold ${
          value >= 50 ? "text-red-400" : "text-green-400"
        }`}
      >
        {value >= 50 ? "HIGH RISK" : "LOW RISK"}
      </p>
    </div>
  );
}
