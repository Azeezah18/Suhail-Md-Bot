const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_30_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvWnNSSW1CeTNXN1kyaGpXT1RrdUNGSldzV2lMMEJMYkYrVTBHaXZWM0xRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHeGd6Z1F3bFJ1T3JMeU9McG4wcDB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFjZWYwNjA4LWQxZjMtNGJjOS05ZGUzLTg4N2I2ZmU0N2NkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMzcsXG4gICAgICA0MyxcbiAgICAgIDI0MCxcbiAgICAgIDEyNyxcbiAgICAgIDE0MSxcbiAgICAgIDcxLFxuICAgICAgMTEsXG4gICAgICA5NCxcbiAgICAgIDE3NCxcbiAgICAgIDI1MSxcbiAgICAgIDEzNSxcbiAgICAgIDYyLFxuICAgICAgMjQzLFxuICAgICAgMTYxLFxuICAgICAgMTAyLFxuICAgICAgMTY2LFxuICAgICAgMTU2LFxuICAgICAgMjIwLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTUzLFxuICAgICAgMTAwLFxuICAgICAgMTk1LFxuICAgICAgMjQ0LFxuICAgICAgMTIsXG4gICAgICAyMTQsXG4gICAgICAxMDMsXG4gICAgICAyMjQsXG4gICAgICA2NyxcbiAgICAgIDE5NSxcbiAgICAgIDEzMyxcbiAgICAgIDUwLFxuICAgICAgMTc5LFxuICAgICAgMTk1LFxuICAgICAgMjksXG4gICAgICAxNDQsXG4gICAgICAxMDQsXG4gICAgICAzOSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldHSEhOTjZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY0NzY4OTgyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQnVzaW5lc3Mgd2l0aCBBemVlemFoIEFjYWRlbXlcIixcbiAgICBcImxpZFwiOiBcIjc1MDQyMTcxOTU3MzkwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovY2t2Z0pFTzdic0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0J3UTRLb1piNVk4RnZLOWJkZkVDQmwrcHFISFhMMTJBNkkyWUIyekxVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlQ3N6UVpvYXFCTVp6WUgzQUdhbTFYT1M3M0YvZWxhSnhSMkowZjVocVBwanQrZm02cFlQWTZUUUhHU0lVVG80eXBMUXF2OUhsYVhIOXhoN01XaEZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiMVUzaGJFZERXbGVhMEsyTmNtaVFmR3cvUlNoZHFHei9KUW80VTMwTWhUMUpGSzVJTFljOHNJd3BXdmkvSSs2Zzl1bzk3VHhiTXFTbHZmaU8ybEVqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0NzY4OTgyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg4NTE0NDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
