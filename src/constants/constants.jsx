export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  avatarImg: "/images/email.png",
  userName: "User Name",
  backgroundImg: "/images/bg-screen.png",
  endScreenVideo: "/videos/loading.mp4",
  usernameRequired: "FALSE",
  passwordPlaceholder: "Password",
  webUrl: "https://example.com",
  actionAfterSolve: "VIDEO",
};

export const THEMES = {
  BASIC: "BASIC",
  FUTURISTIC: "FUTURISTIC",
  STANDARD: "STANDARD",
  RETRO: "RETRO",
};

export const THEME_ASSETS = {
  [THEMES.RETRO]: {},
  [THEMES.STANDARD]: {
    backgroundImg: "/images/bg-screen.png",
    endScreenVideo: "/videos/loading.mp4",
  },
  [THEMES.FUTURISTIC]: {},
};

export const ACTION_AFTER_SOLVE = {
  WEB: "WEB",
  VIDEO: "VIDEO",
}

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const MAIL_SCREEN = "MAIL_SCREEN";