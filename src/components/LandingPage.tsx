import { useState } from "react";
import DocuSignLogo from "./DocuSignLogo";
import FloatingShapes from "./FloatingShapes";
import PartnerLogos from "./PartnerLogos";

interface LandingPageProps {
  onSubmit: (email: string) => void;
}

const LandingPage = ({ onSubmit }: LandingPageProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <FloatingShapes />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <DocuSignLogo />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-6 animate-fade-in">
          Everything you need to agree
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Send, sign and manage all your agreements for free.
        </p>

        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center bg-foreground rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email that got the document."
              className="bg-transparent text-background px-6 py-4 w-64 md:w-80 placeholder:text-muted-foreground/60 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-secondary text-foreground px-6 py-4 font-medium hover:bg-secondary/80 transition-colors text-sm"
            >
              Continue
            </button>
          </div>
        </form>
      </main>

      {/* Partner Logos */}
      <footer className="relative z-10 pb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <PartnerLogos />
      </footer>
    </div>
  );
};

export default LandingPage;
