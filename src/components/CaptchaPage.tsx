import { useState } from "react";
import { Lock } from "lucide-react";

interface CaptchaPageProps {
  onVerify: () => void;
}

const CaptchaPage = ({ onVerify }: CaptchaPageProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);
    setTimeout(() => {
      onVerify();
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 md:p-12 max-w-xl w-full animate-scale-in">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center shadow-lg">
            <Lock className="w-8 h-8 text-yellow-800" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">
            Identity Shield
          </p>
          <h1 className="text-foreground text-xl md:text-2xl font-bold tracking-wide uppercase mb-3">
            Please verify you are not a bot
          </h1>
          <p className="text-muted-foreground text-sm">
            Complete the challenge below to instantly access the Document page.
          </p>
        </div>

        {/* Captcha Box */}
        <div className="captcha-box rounded-md p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleCheck}
              className={`w-7 h-7 border-2 rounded transition-all flex items-center justify-center ${
                isChecked 
                  ? 'bg-primary border-primary' 
                  : 'border-muted-foreground/50 hover:border-muted-foreground'
              }`}
            >
              {isChecked && (
                <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className="text-background text-sm">I'm not a robot</span>
          </div>
          
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 40 40" className="w-10 h-10 mb-1">
              <path
                d="M20 3C11 3 3 11 3 20s8 17 17 17c9 0 17-8 17-17S29 3 20 3zm0 30c-7 0-13-6-13-13S13 7 20 7s13 6 13 13-6 13-13 13z"
                fill="#4A90E2"
              />
              <path
                d="M20 7v13l9 5"
                stroke="#4A90E2"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="text-xs text-muted-foreground/80">reCAPTCHA</span>
            <span className="text-[10px] text-muted-foreground/60">Privacy - Terms</span>
          </div>
        </div>

        {/* Access Button */}
        <button
          onClick={onVerify}
          disabled={!isChecked}
          className={`w-full py-4 rounded-md font-semibold uppercase tracking-wider text-sm transition-all ${
            isChecked
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer'
              : 'bg-primary/50 text-primary-foreground/70 cursor-not-allowed'
          }`}
        >
          Access Document
        </button>
      </div>
    </div>
  );
};

export default CaptchaPage;
