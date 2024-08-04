import React from "react";
import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {};

const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
