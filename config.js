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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_03_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTNSNDFYckthWXFQKzBFdU5xVlJ0WHZmNWVLTGpnMGZyRmIyWmNRYzNaTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXNHSVk3SGlRSlM4Smg2d1VtSzUxZ1wiLFxuICBcInBob25lSWRcIjogXCJhZWRjNjc4Ny1lN2EwLTRkOTAtOTU4Yi0wOTA0ZWRiOTFkNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgNzgsXG4gICAgICAyOCxcbiAgICAgIDExOSxcbiAgICAgIDE1MyxcbiAgICAgIDkzLFxuICAgICAgMjE0LFxuICAgICAgMTQsXG4gICAgICA3MSxcbiAgICAgIDE2OCxcbiAgICAgIDEzMyxcbiAgICAgIDE4NyxcbiAgICAgIDc2LFxuICAgICAgMjIsXG4gICAgICAzMyxcbiAgICAgIDEwLFxuICAgICAgOTEsXG4gICAgICA3LFxuICAgICAgMTc2LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgODIsXG4gICAgICAxOTEsXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDExLFxuICAgICAgMTQzLFxuICAgICAgOTQsXG4gICAgICAwLFxuICAgICAgOTAsXG4gICAgICAyMDYsXG4gICAgICAzMixcbiAgICAgIDIxNSxcbiAgICAgIDIwNCxcbiAgICAgIDIxLFxuICAgICAgMTQzLFxuICAgICAgNTMsXG4gICAgICAyMjAsXG4gICAgICAzMyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0VFV1dWOThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTE1Mjg5Njk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjA5NjA1MzQ5MzgwMToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZW82b0lERUlPdjU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlKUG1ZaTdxaVphTGduTGpUakFFRjEza010WUpLQ3lvbXZvWlZsM1RXME09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYXdISVlWZGNTR0YyQlVLNzlGYjlIcFJXTkZIOHZmeVkyUzlCMytQLzBZYjVRaGJKM1prb1prL0hFMnBvem9YWXVJaDN6Qm9MOTgxQzYrUEFuNC90Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMndxOTNYZk9qQ2c1SXVpdi9vUGkxZ2htaGhJY1dhb0JmMVltbzMxZlhDMzd1T2pzY0NiNWhsR0hGdFo5WW04cXV1N29CZDRZYWZqTi9PTlc1Vmh5aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1MTUyODk2OToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM1ODIxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
