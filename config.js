
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "233544482494";
global.owner = process.env.OWNER_NUMBER || "233544482494";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0gxT3cwNUpUeFdzRXZPSmNIZzI0aEM2TzA3bmpvcGRjdVBxemdhOUhYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2JiUWlmNWxtYzVsazlQNnk0V3N2R0tpWUJ4d0l3WHFTUDI2TUVoN3Vncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTUFCS2VXYjdXUnZoUFhCZVBhNkxGRTVaZElIRWl1SlpnOEplQjBEcFVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFL3lSTWIrRlVhbXpEam5LcDBoRnVEenpOSEwzQ3FXWnZ6ZUY0V2NaaTBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHN0M1M293OFJQdEZSM3dVLzRkOTZLM2ZxY2dBbnVZdlpSenFpYTl2azQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFSUmRkVWJWVHhEaHh3MmRSTEZSc2RoRFlTWk9zdlVjcUQvdzluRzdId0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURNdms3bDlLWnF1ZFYwZ1FFUHFzL3NQeWtiVGlPcW9XczFxREI4aGNHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHlLbytyYjhNdjJlQ0pSenl6My90WHorTWMweFg5WXN5SEtvNU1YcGxTYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZEdW5zNmhaeDg5RWNxRlZmNDR1OUlZcml3ZXBXTUg5T05oWGlraENwaVhVZmRUVDhLRDlXUmhnRWM3cEE5SkV6OW9zdVl2YU95ZHl5dnRaNWF4b2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiI0V2RUNmo4ak5WK2lVWFRIenppa3lGTitvQndmamdUalk2ems4bzJHODk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwOW9QS0tCMVFmRy12cnNvYVA1eWJ3IiwicGhvbmVJZCI6IjJkNTg0ZWQ4LTIyZDktNGEyOC05MzU3LTViMDhhZjM1YWMyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpcXZPbExMU1EwaE0zd3g4TnhjYmhKQkpqOW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1NDck5KNU5kNC9CNjVEMTZyWVBJQWlKY2NvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNENUU3UlJLIiwibWUiOnsiaWQiOiIyMzM1NDQ0ODI0OTQ6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGo5NFpJSEVQM2lsTFVHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXZhUVBTcVRaaW94MnlnbTVMUUJhdjlxZDR3enh5V2JOaC9KOXhuU3lTcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFFQSEpFY213bXh0VVZGb01kdnFZbHdmdGFublR6WTgvRkFCSUVKUHo1aWJLcnpZVGgxckZZaVhtelNOMEVmNmQrdjJrcnZybUkyNWZpMkZMeWpVREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJGSkw2SzUwWHVxenpLRWlZNm9EaUxwMVlhYnQ1ZzRrMDZlaE0ybi9wVVh5b25lVlNISVRZc1NQRHZQNnB6d2dEclBIOUVWWktmc0xoZng0TWR1WWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTQ0NDgyNDk0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUwya0QwcWsyWXFNZHNvSnVTMEFXci9hbmVNTThjbG16WWZ5ZmNaMHNrciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjEwMjE1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFFQUFNSkoifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Official OnePesewa*",
  author: process.env.PACK_AUTHER || "Official OnePesewa",
  packname: process.env.PACK_NAME || "Official OnePesewa",
  botname: process.env.BOT_NAME || "OFFICIAL ONEPESEWA BOT",
  ownername: process.env.OWNER_NAME || "OFFICIAL ONEPESEWA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Official OnePesewa").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
