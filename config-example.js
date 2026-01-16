//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors

  //LOGIN CONFIGURATION
  hint: "Search the password on ...", //Can be undefined
  // errorMessage: "Email or password are incorrect. Please try again.",

  //MAIL CONFIGURATION
  // emails: [],
  // chats: [],
  // name: "name",
  // username: "username",
  // domain: "domain.com",
  // photo: "/images/avatar.png",

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};
