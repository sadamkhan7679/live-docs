"use client";
import React from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/ui/loader";
import { useUser } from "@clerk/nextjs";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.actions";

type ProviderProps = {
  children: React.ReactNode;
  // projectId: string;
  // room: string;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const { user: clerkUser } = useUser();
  return (
    <LiveblocksProvider
      // publicApiKey={
      //   "pk_dev_rhpXV9zIn1a5n_6tEZ4QJn_Od7qN7yh3eES9f_MYuG1n-9bPVQyOlHIKJC_Ba0Dp"
      // }
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });

        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        });

        return roomUsers;
      }}
    >
      {/*<RoomProvider id="my-room">*/}
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      {/*</RoomProvider>*/}
    </LiveblocksProvider>
  );
};

export default Provider;
