module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["61566369676527"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "ಠ_ಠ 𝚝𝚞 𝚝'𝚎𝚜 𝚛𝚎𝚐𝚊𝚛𝚍𝚎𝚛 𝚊𝚟𝚊𝚗𝚝 𝚍𝚎 𝚖𝚎 𝚍𝚒𝚛𝚎 𝚍𝚎 𝚝𝚎 𝚛𝚎𝚜𝚙𝚎𝚌𝚝𝚎́ 𝚍𝚎́𝚐𝚊𝚐𝚎 🚮 𝚓𝚎 𝚛𝚎𝚜𝚙𝚎𝚌𝚝 𝚚𝚞𝚎 𝚖𝚘𝚗 ➪𝙱𝙾𝚂𝚂⚠︎",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `☞︎︎︎𝐁𝐎𝐒𝐒☜︎︎︎ ! ➪𝗩𝗢𝗨𝗦 𝗘̄𝗧𝗘𝗦 𝗠𝗔𝗜𝗡𝗧𝗘𝗡𝗔𝗡𝗧 𝗔𝗗𝗠𝗜𝗦 𝗗𝗘 𝗦𝗘 𖤍𝐆𝐑𝐎𝐔𝐏𝐄𖤍`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("👑𝙱𝙾𝚂𝚂👑 𝚕𝚎𝚜 𝚋𝚊𝚝𝚊𝚛𝚍𝚜 𝙽𝙴 𝙼𝙾𝙽 𝙿𝙰𝚂 𝙽𝙾𝙼𝙼𝙴𝚁 𝙿𝙾𝚄𝚁 𝙻'𝙸𝙽𝚂𝚃𝙰𝙽𝚃...🚫", event.threadID);
 }
 },
               }
