// /* eslint-disable no-unused-vars */
import { BaseMetadata, ThreadData } from "@liveblocks/core";

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

export type RoomAccesses = Record<string, AccessType>;

export type UserType = "creator" | "editor" | "viewer";

export type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

export type CreateDocumentParams = {
  userId: string;
  email: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

export type ShareDocumentParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

export type UserTypeSelectorParams = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: string) => void;
};

export type ShareDocumentDialogProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

export type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

export type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

export type DeleteModalProps = { roomId: string };

export type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };
