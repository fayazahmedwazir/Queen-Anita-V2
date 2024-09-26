//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://fayazwazir:ahmed@cluster0.gktgbd9.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://fayazwazir:ahmed@cluster0.gktgbd9.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "923029810479";
global.owner = process.env.OWNER_NUMBER || "923349353483";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b5c9d0fff25f2a9328493.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0psUkdoVG54eldvd1B1bUJHeEZxSE4wczk3TmZyc2F1NkNMd0Z1QmhIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NMRmlxanlrME5uUFYzVVQzWmhNdnhkajd6UzlEd0s5WjJxN0lQT2V4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUtySVpUS1JvNC9VNUdPeW9DdDM2YU5NSEpyZFJjRWdLNml2WWZ6dEZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VS9UM0JqUXNoUFNJYXhQbzdXWjgxUWJJclJiWGZReFUrWi8vR1pNalZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MakFNb2JmS3FZNTFMNWczWGgvVkU5VFNsdkx0NERVM2VZZ1MrRXNVVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgxMUpiNi9rWFRQUjQ4L21TSDZSNjRVaSttLzNOQko1dnNVd1pVWWErZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdFNU1aRnpTZFMwRXdRWXhVekV1cHNCSEtQdGk2NXdIZ21UYTFzanBudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVVvbGhieXdzNG9xT1dZZEVFUlN3RTkrRkVIT2JsVXNJWWZ0RVNIRkFpUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlvWE9wdHkzR2ptOXhMbGF6MnJTempjUFc1aGZKOWEycnRxQjg4cVNWR3M1Q0Y0dStLUTkvNmp6Z0ZreW50WnhXTzJ0SUlEK3Zxcng1cjc3ZUsrVkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IkFKazdidi96cWlIaTc0WmVIbVI5d3oybFJYMXRNUHBieEUwUk0yV2E0Sm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ5MzUzNDgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU4RDIwRENERDQ0QjdFNzg4MTE3MUVEQzcwQUM0ODFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjczMzI5OTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlF2ZHhQNlcxU3RHZ3gzMXVyTEhyRGciLCJwaG9uZUlkIjoiZjFiZGE4NjMtYTJkYS00YmE4LTg1OTctYTM2NWRiMzZmMjkxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1Wis0MDBwM2d0MkIvaXM2NzlSd3VvOUJqND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TVdiY3htQU1aSEVoS0ZrMFpmNk5Ub2xEa3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1I1RlFXMUQiLCJtZSI6eyJpZCI6IjkyMzM0OTM1MzQ4Mzo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeV8J2XovCdl6cg8J2XlfCdl6wg8J2XmfCdl5TwnZes8J2XlPCdl60ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YWjNoWVE1NFRVdHdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBqZTlKVHMxb0JMZ3cwTExrTU5JWmp4MXJnZ2pueFpHd1M2ZEs1QTZoMUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVlZFQySU96SjRFWXM1NUF3T3JiNjJZVXdQUnl3TVNLL2w5N2RJeFJUdkU5RDhJTlBZYmMxbG5CWDIzMUVJaXIvMjBNMTJjSE93TEJVZWRZaFlLV0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkMSsyUkFVa2Q5Y2ZvRXZ1VnVaNGZUSmI0RGlNZnZ3Y2NCMjRnNCtVVGVuVUpRL1luV3E0ZG13N3dYMEFPL0ZPRnhvV21nNHNhQ0pGS1NRYkxaTWpDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0OTM1MzQ4Mzo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNDN2U1U3TmFBUzRNTkN5NUREU0dZOGRhNElJNThXUnNFdW5TdVFPb2RTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzMyOTg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBqdyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "RjCyHL9jLZ7rR9tY3FtSTNrA",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "7fba16439256e256d74059a14538ad22",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
