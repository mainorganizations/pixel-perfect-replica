const DocuSignLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-sm" />
        <div className="absolute top-1 left-1 w-3 h-3 bg-foreground/90 rounded-sm" />
      </div>
      <span className="text-foreground text-xl font-semibold tracking-tight">docusign</span>
    </div>
  );
};

export default DocuSignLogo;
