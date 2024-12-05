//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUF2US9lcUhMZHBockY4Mk5oRkwvQmRnNTFEMXBHVG8zT3M3YTdUdU4zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRks1dnlaT0lrZGt4VWRFQ1MvTlJ5dUNGYTgxYlphdklxckdVMGE1aFEzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTDM5N3JRWG5YdVRLTjVmTEZVMSthcW0yZ2JkV0kybXlaT0xLQkpBVkdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmK2E1Ym52WjRxV1huK1hCcXNjaXFKTUtWQVRWNHMrK3lxdDZRUjQ5SGp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLYnhoRzdSOGVFUlE3RldhQ0E5eEdqNkR2SG9OZUdXYUU3Y2hTUmU1R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdZemlCTlY2OEUyQVlKK0JiVGpHc3lYS3laSm9JZ1QxNUVnSmhnUWliMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElqblhsVGlabkhmR0piK1RSVkZqaUJsd0VhWUgxWUZjZE13VlU3Y0ozWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkxWd1NPT3NMcm9oKzNZNTZkTHpjNTVqZXNtRkhHb1c4SEFmOE9sSzhFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXNExRS0Z2R3lWaFBGSW8vSTVlUlZzcFp2dUpzbUFXczBXeXQ2VWpHVVpnaTBTRXNERUtyNFBCQ0NzMDQwNndoRnliNE1nK2VBRTdGN1VITXJSL0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJOYjZqR1l2aDJ5L3FSN0JyaGRwR3NPNFh3REZPVkwwK1ZyVFJ6QXdRSFBJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzkwMDI1NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUM2NEEyMTk5MkY3Mzg1RTYyMjFCNTNGMTgwQ0I4NTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzQzNjE3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUmNWbV9UeGtTNmF3bTRzRHpJTzEtZyIsInBob25lSWQiOiJhMTdmOWE4NC1jYzM0LTQ0ZGUtYmRhMC1mYzc2MDM3MTlhNDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVVnRWF2QkFieWt1WUs4dFFzR0NuNUJxcXk4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVxYURYeGJiV2VTOU1sbmpIQ2lSMzRwQ2Vtaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyRTdTWUVFUiIsIm1lIjp7ImlkIjoiMjM0OTA3OTAwMjU2Mzo3MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTQk0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wrV3phRUZFSURHeUxvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNSODRpNDJ1TXFRRDMxUnpjdWFiU1NYNUtacVlXS0lsQkpWamlzWm9DbTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVDeFZVOWpMR0QxMms1YW80eE4rYlJoU05UOTJ2VEVieC82T1lrY2l0bHR3WkNHTnNXc2U0WGtkKzFhQW00T1cyOGplUVhzb2M0VDB6UE8yZEhRQUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2K0hXTVY2ZmtGM0I2eGxqWEoyQnl1MU5NUDlaV24ySlVqY29qRmtOYTk1UmRtN3RQbVhTRm5JN3hsZktvK2RvT0piNUVOQXZUN3o5OGRLdUk4VVFCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzkwMDI1NjM6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWtmT0l1TnJqS2tBOTlVYzNMbW0wa2wrU21hbUZpaUpRU1ZZNHJHYUFwdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzQzNjE3NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQWmkifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
