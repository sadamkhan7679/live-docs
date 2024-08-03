import React from "react";
import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {};

const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
