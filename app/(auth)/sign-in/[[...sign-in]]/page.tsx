import React from "react";
import { SignIn } from "@clerk/nextjs";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
