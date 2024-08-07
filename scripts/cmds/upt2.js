module.exports = {
  config: {
    name: "uptime2",
    aliases: ["upt2", "up2"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const uptime = process.uptime();
      
      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `☞${days} 𝐝𝐚𝐲𝐬🍁, 
☞${hours} 𝐡𝐨𝐮𝐫𝐬🍁, 
☞${minutes} 𝐦𝐢𝐧𝐮𝐭𝐞𝐬🍁, 
☞${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝𝐬🍁`;
      
      api.sendMessage(`💀 | 𝐓𝐈𝐌𝐄 𝑐𝑜𝑛𝑞𝑢𝑒𝑟𝑖𝑛𝑔 𝑤𝑜𝑟𝑙𝑑\n${uptimeString}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
