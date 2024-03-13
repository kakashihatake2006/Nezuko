const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "919389379221";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://Redo:Redo@cluster0.iwmez.mongodb.net/myFirstDatabase?retryWrites=true";
global.prefa = process.env.PREFIX || "+";
global.ggle = process.env.GOOGLE_API || "AIzaSyDiPos9JPXolt0UBUSbrMSAAJYZLug5gIQ";
global.wter = process.env.WEATHER_API || "85e001bf8619486d80f63636241303";
global.sessionId = process.env.SESSION_ID || "TEST";
global.malid = process.env.MAL_USERNAME || "Kakashu2006";
global.malpass = process.env.MAL_PASSWORD || "R02ZJXBBWA";
global.port = process.env.PORT || 8080;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
