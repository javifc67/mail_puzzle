import { emails, chats } from "./mailDataExample.js";
export const DEFAULT_APP_SETTINGS = {
  emails,
  chats,
  hint: undefined,
  errorMessage: undefined,
  name: "Arnaldo",
  username: "arnaldo.gomez",
  domain: "upm.es",
  photo: "/images/avatar.png",
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
export const MAIL_CATEGORIES = {
  RECEIVED: "received",
  HIGHLIGHTED: "highlighted",
  IMPORTANT: "important",
  POSTPONED: "postponed",
  SENT: "sent",
  DRAFT: "draft"
}
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const MAIL_SCREEN = "MAIL_SCREEN";