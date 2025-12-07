const RingLoader = () => {
  return (
    <div className="relative w-24 h-24">
      {/* Outer dashed circle */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30" />
      
      {/* Inner dark circle */}
      <div className="absolute inset-3 rounded-full bg-card-dark border border-muted/50" />
      
      {/* Animated gradient ring */}
      <div className="absolute inset-1.5 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="ringGradient">
              <stop offset="0%" stopColor="transparent">
                <animate
                  attributeName="stop-color"
                  values="transparent; transparent; transparent"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="30%">
                <animate
                  attributeName="stop-color"
                  values="#C4D96F; #14B8A6; #8B5CF6; #C4D96F"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="60%">
                <animate
                  attributeName="stop-color"
                  values="#E8D547; #06B6D4; #EC4899; #E8D547"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent">
                <animate
                  attributeName="stop-color"
                  values="transparent; transparent; transparent"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
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
      <div className="absolute top-1.5 left-5 w-1.5 h-1.5 rounded-full bg-status-green animate-pulse-glow" />
    </div>
  );
};

export default RingLoader;