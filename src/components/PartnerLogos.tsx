const PartnerLogos = () => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {/* Microsoft */}
      <div className="grid grid-cols-2 gap-0.5 w-12 h-12">
        <div className="bg-red-500 rounded-sm" />
        <div className="bg-green-500 rounded-sm" />
        <div className="bg-blue-400 rounded-sm" />
        <div className="bg-yellow-400 rounded-sm" />
      </div>
      
      {/* Salesforce Cloud */}
      <div className="w-14 h-10">
        <svg viewBox="0 0 60 40" className="w-full h-full">
          <ellipse cx="30" cy="25" rx="20" ry="12" fill="#00A1E0" />
          <ellipse cx="20" cy="20" rx="12" ry="10" fill="#00A1E0" />
          <ellipse cx="40" cy="22" rx="10" ry="8" fill="#00A1E0" />
        </svg>
      </div>
      
      {/* Loom-like */}
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
        <div className="w-5 h-4 bg-foreground rounded-sm transform rotate-12" />
      </div>
      
      {/* Google-like ring */}
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 rounded-full border-4 border-transparent" 
             style={{ borderTopColor: '#4285F4', borderRightColor: '#EA4335', borderBottomColor: '#FBBC05', borderLeftColor: '#34A853' }} />
        <div className="absolute inset-2 bg-background rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400" />
      </div>
      
      {/* Meta-like */}
      <div className="w-14 h-10 flex items-center justify-center">
        <div className="w-10 h-6 rounded-full border-4 border-red-500" />
      </div>
      
      {/* SAP */}
      <div className="bg-cyan-400 px-2 py-1 rounded">
        <span className="text-foreground font-bold text-sm">SAP</span>
      </div>
    </div>
  );
};

export default PartnerLogos;
