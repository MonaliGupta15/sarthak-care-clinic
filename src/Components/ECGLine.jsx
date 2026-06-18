const ECGLine = () => {
  return (
    <svg
      className="w-full"
      height="60"
      viewBox="0 0 500 50"
    >
      <polyline
        points="0,30 60,30 80,30 90,5 100,48 110,10 120,30 180,30 200,30 210,20 220,38 230,30 500,30"
        fill="none"
        stroke="#E8C547"
        strokeWidth="2"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: 800,
          animation: "drawECG 4s linear infinite",
        }}
      />
    </svg>
  );
};

export default ECGLine;