const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}𝐇𝐑𝐒 ${minutes}𝐌𝐈𝐍 ${seconds}𝐒𝐄𝐂`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "➪𝐌𝐀 𝐉𝐎𝐔𝐑𝐍𝐄́𝐄 ✈︎",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "🍁❌⭕❌🍁";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.ibb.co/5r2qScZ/image.jpg";
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `𖠌☆𝐌𝐈𝐂𝐊𝐄𝐘☆𖠌 \────────\

🥷 | 𝐌𝐀 𝐂𝐎𝐔𝐑𝐒𝐄 |🥷﹞\  
${uptimeString}

\──────── \

📅 | 𝐃𝐀𝐓𝐄﹞: 

𖤍☞︎︎︎${date}☜︎︎︎𖤍

\────────\n 𝐓𝐄𝐌𝐏: 

𖤍☞︎︎︎${time}☜︎︎︎𖤍

\──────── \

👑 | 𝘛𝘰𝘵𝘢𝘭 𝘜𝘴𝘦𝘳𝘴﹞\allUsers.length}\──────── \

🏢 | 𝘛𝘰𝘵𝘢𝘭 𝘛𝘩𝘳𝘦𝘢𝘥𝘴﹞\llThreads.length}\| 𝐀𝐈𝐍𝐄 ﹞: 

𖤍${ping}𖤍𝐌𝐒𖤍
\──────── \

 𝐒𝐓𝐀𝐓𝐔𝐒:
 
${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
