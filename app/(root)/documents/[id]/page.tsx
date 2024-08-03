import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Editor } from "@/components/modules/editor/Editor";
import Header from "@/components/modules/Header";

type DocumentPageProps = {};

const DocumentPage: React.FC<DocumentPageProps> = () => {
  return (
    <div>
      <Header className="text-white">
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Share</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default DocumentPage;
