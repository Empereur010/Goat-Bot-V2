module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "Z.saïd く ✨",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("ouaip Salut mon pote tranquille ? aller pose moi t'a question du jour 🥀😌👌");
}
};
