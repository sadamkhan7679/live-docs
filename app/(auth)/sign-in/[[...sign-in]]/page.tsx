import React from "react";
import { SignIn } from "@clerk/nextjs";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default SignInPage;
