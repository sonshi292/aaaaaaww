const {
    Client,
    Events,
    GatewayIntentBits,
} = require("discord.js");


const client = new Client({
    intents:  Object.values(GatewayIntentBits).filter(Number.isInteger)
  });
client.login("MTM3NjEyOTIzNDQ4OTA1MzI0Nw.Gl5enk.ksDvlT-lrBL8P4C3bVxKKwETrLfbKsVqIvTKSI");

client.on(Events.MessageCreate, message => {
   if (message.author.bot) return; 
   if (message.content.includes("糞")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("殺")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
     }
   if (message.content.includes("あほ")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
    if (message.content.includes("馬鹿")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("バカ")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("ばか")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("oum")){
      let reply_text = "オウム真理教";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("OUM")){
      let reply_text = "オウム真理教";
      message.reply(reply_text)
      .catch(console.error);
      return;
   } 
   if (message.content.includes("オウム真理教")){
      let reply_text = "私は教祖らしきBotです";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("麻原")){
      let reply_text = "麻原尊師万歳　君も唱えろ！";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("肝心なところ空中浮遊")){
      let reply_text = "…";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("教祖")){
      let reply_text = "麻原尊師万歳　君も唱えろ！";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("麻原尊師万歳")){
      let reply_text = "あなたにもきっとグルのご加護が訪れます";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("遠藤誠一")){
      let reply_text = "彼は優秀だ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   } 
   if (message.content.includes("早川紀代秀")){
      let reply_text = "私に近い側近";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
if (message.content.includes("新実智光")){
      let reply_text = "古参の幹部";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("土谷正実")){
      let reply_text = "サリンの製造";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
if (message.content.includes("中川智正")){
      let reply_text = "私の主治医（）";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("井上嘉浩")){
      let reply_text = "グルのご加護を";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("彰晃")){
      let reply_text = "私はグルの愛を広める";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
     if (message.content.includes("尊師")){
      let reply_text = "私はグルの愛を広める";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
    if (message.content.includes("ポア")){
      let reply_text = "救済するぞ！";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("しね")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("〇ね")){
      let reply_text = "君は心が汚いポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("サリン事件")){
      let reply_text = "ん、知らないね";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
    if (message.content.includes("創価学会")){
      let reply_text = "サリンを持って襲撃だぁ";
      message.reply(reply_text)
      .catch(console.error);
      return;
     }
      if (message.content.includes("池田大作")){
      let reply_text = "もちろんオウム真理教だね？";
      message.reply(reply_text)
      .catch(console.error);
      return;
     }
   if (message.content.includes("坂本弁護士一家殺害事件")){
      let reply_text = "それは知らんけど君はポアだ";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("真理党")){
      let reply_text = "君は票を入れるのかい？";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
if (message.content.includes("入れない")){
      let reply_text = "…";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("入れる")){
      let reply_text = "そうかい";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
   if (message.content.includes("邪淫")){
      let reply_text = "https://cdn.discordapp.com/attachments/1354000287169515644/1377758362447515678/image.png?ex=683a20f7&is=6838cf77&hm=c41c2e3e56eb6ca025ae7867bcf025d2077813aa88e4cc12adb2bb5e7eacee86&";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
    if (message.content.includes("ロリ")) {
      message.reply("....ぽあ？");
     }
     if (message.content.includes("せっくす")){
      let reply_text = "今回はポアとさせてもらいます";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
     if (message.content.includes("セックス")){
      let reply_text = "今回はポアとさせてもらいます";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
    if (message.content.includes("SEX")){
      let reply_text = "今回はポアとさせてもらいます";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
     if (message.content.includes("ショタ")){
        let reply_text = "シベリア送りまたはポアです";
      message.reply(reply_text)
      .catch(console.error);
      return;
   }
});
   








  

