//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  userName: "User Name", //Specify the user name to be displayed
  // avatarImg: "/images/Profile_avatar_placeholder_large.png", //Specify the avatar image URL
  hint: "Enter your PIN to access the system", //Specify a hint message to be displayed
  // endScreenVideo: "", //Specify a video URL to be played in the end screen
  usernameRequired: "TRUE", // user can set the user name
  passwordPlaceholder: "Set your password here", //Specify the password placeholder displayed
  actionAfterSolve: "WEB", //actionAfterSolve can be "WEB" or "VIDEO".
  webUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-3.729040324687958%2C40.45154568040693%2C-3.725226223468781%2C40.45325400930273", //Specify a web URL to be opened after solving the puzzle

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};
