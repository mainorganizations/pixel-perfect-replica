const RingLoader = () => {
  return (
    <div className="relative w-32 h-32">
      {/* Outer dashed circle */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30" />
      
      {/* Inner dark circle */}
      <div className="absolute inset-4 rounded-full bg-card-dark border border-muted/50" />
      
      {/* Animated gradient ring */}
      <div className="absolute inset-2 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#C4D96F" />
              <stop offset="60%" stopColor="#E8D547" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="70 200"
          />
        </svg>
      </div>
      
      {/* Small indicator dot */}
      <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-status-green animate-pulse-glow" />
    </div>
  );
};

export default RingLoader;
