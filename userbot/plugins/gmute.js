/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
DisOwen - Ber4tbey
*/
const db = require('quick.db')
const Db = require('./sql/gmute');
const Discord = require('discord.js');
const Language = require("../../language")
const Lang = Language.getString('gmode');
const Owen = require("../../bot")
module.exports.run = async (bot, message, args) => {
  if (message.channel.type == "dm") {
        Owen.editmsg(message, Owen.dmerror())
        return; }


  let guild = message.guild
  let replymsg = message.mentions.users.first()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return Owen.editmsg(message,Lang.IM_NOT_ADMIN);
  if (message.mentions.users.size < 1) return Owen.editmsg(message,Lang.GIVE_ME_USER);
  if(message.isMemberMentioned(bot.user)) return Owen.editmsg(message,Lang.NOT_GMUTE_ME);


      
   
   const gmid = require('quick.db')
   a = gmid.fetch(replymsg.id);
   
  if(a == replymsg.id) {
      Owen.editmsg(message,"Zaten küresel olarak susturulmuş");
  } else {
   await Db.addgmute(replymsg.id)
   Owen.editmsg(message,Lang.GMUTE_SUCCES)
  

 
    }}

module.exports.config = {
    command: "gmute",
    description: `${Lang.GMUTE_DESC}`
}