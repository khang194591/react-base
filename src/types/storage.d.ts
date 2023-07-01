import { UserDto } from "@/app/store/auth";

declare namespace StorageInterface {
  interface Session {
    demoKey: string;
  }

  interface Local {
    user: UserDto;

    token: string;
    tokenExpiredAt: string;

    refreshToken: string;
    refreshTokenExpiredAt: string;

    language: SupportLanguage;
  }
}
