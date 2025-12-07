const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left square */}
      <div className="floating-shape absolute top-24 left-32 w-16 h-16 rounded-lg animate-float opacity-40" />
      
      {/* Top right rounded rectangle */}
      <div className="floating-shape absolute top-32 right-40 w-24 h-10 rounded-full animate-float-delayed opacity-30" />
      
      {/* Left side bar */}
      <div className="floating-shape absolute top-48 left-48 w-20 h-6 rounded-full animate-float opacity-25" />
      
      {/* Left triangle */}
      <div className="absolute top-[55%] left-24 animate-float-delayed opacity-30">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-purple-light/30" />
      </div>
      
      {/* Right side square */}
      <div className="floating-shape absolute top-[45%] right-32 w-14 h-14 rounded-lg animate-float opacity-35" />
      
      {/* Bottom left small square */}
      <div className="floating-shape absolute bottom-48 left-40 w-10 h-10 rounded-md animate-float-delayed opacity-25" />
      
      {/* Center top bar */}
      <div className="floating-shape absolute top-36 left-1/3 w-16 h-5 rounded-full animate-float opacity-20" />
    </div>
  );
};

export default FloatingShapes;
