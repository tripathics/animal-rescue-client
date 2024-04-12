export type TitleType = "mr" | "mrs" | "miss" | "dr";
export type UserRole = "user" | "admin" | "alumni";
export type SexType = "male" | "female" | "others";
export type CategoryType = "gen" | "obc" | "sc" | "st" | "ews" | "others";

export interface UserType {
  id: string;
  email: string;
  role: UserRole[];
  title: TitleType;
  first_name: string;
  last_name?: string | null;
  avatar: string;
  profile_locked: boolean | null;
}

export interface UserContextType {
  user: UserType | null;
  admin: boolean;
  loading: boolean;
  login: (user: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  fetchUser: () => Promise<void>;
}
