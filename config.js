const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Xlord:<W2lZaRNScHh2AAss>@xlord.4j7hp8d.mongodb.net/?retryWrites=true&w=majority&appName=Xlord"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349051528969";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_25_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzRBYXdwVnZhcWJMRTBkUDZrdjRUd2dRTWJxdzRBRVNsU1hNUkFUS3EvUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXh4a1o4aEpUYWVEVW1hWE5OQm5kUVwiLFxuICBcInBob25lSWRcIjogXCJiYjJkY2I5My0wZGU0LTQ3NzQtODYxYS01MTIzMzdiOWY4ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjIwLFxuICAgICAgNzksXG4gICAgICA1OCxcbiAgICAgIDEwMyxcbiAgICAgIDY1LFxuICAgICAgMjQwLFxuICAgICAgMTIyLFxuICAgICAgMTczLFxuICAgICAgMTI3LFxuICAgICAgMjMxLFxuICAgICAgMTM4LFxuICAgICAgMjE1LFxuICAgICAgMjE2LFxuICAgICAgMTk5LFxuICAgICAgMixcbiAgICAgIDEyNSxcbiAgICAgIDY3LFxuICAgICAgMTA2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDExNSxcbiAgICAgIDE4OSxcbiAgICAgIDE2MixcbiAgICAgIDE5OSxcbiAgICAgIDI0NCxcbiAgICAgIDI0MixcbiAgICAgIDE2NSxcbiAgICAgIDE2NixcbiAgICAgIDMzLFxuICAgICAgMjA4LFxuICAgICAgNjYsXG4gICAgICAxMDUsXG4gICAgICAxODMsXG4gICAgICAyMTQsXG4gICAgICAyMjgsXG4gICAgICAyMzUsXG4gICAgICA5MyxcbiAgICAgIDQ4LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpRTkYxOERLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUxNTI4OTY5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIwOTYwNTM0OTM4MDE6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlvNm9JREVQamg2TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5SlBtWWk3cWlaYUxnbkxqVGpBRUYxM2tNdFlKS0N5b212b1pWbDNUVzBNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN1KzdCc1FoVUx4YjVFRmRzK1VyM0FNZ0owRzFSaVJPTkhUSUdtQkt6TUFoNmo0K0duVzl5eDdGdlZSQVVNbFdiL2xzMFBEZEN2TGVNTTkvRkorVkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlQvclpWQ0o1T2ZWeHlTaXdvY3lRR1czUzZMeWFzUGpTamkrWmNPemRzcVBueW5hVkYwTDVVcDFIMnRuckFzUmtLaFdjT2tDVEIvZnFtSjc1dHdRdkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTE1Mjg5Njk6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODExMThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
