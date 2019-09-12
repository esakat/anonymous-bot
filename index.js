if (!process.env.token) {
  console.log('Error: Specify token in environment.');
  process.exit(1);
}
if (!process.env.channel_id) {
  console.log('Error: Specify channel_id in environment.');
  process.exit(1);
}


var Botkit = require('botkit');
var controller = Botkit.slackbot({});
var bot = controller.spawn({
  token: process.env.token
}).startRTM(function (err, bot, payload) {
  if (err) {
    process.exit(1);
    console.log('Error: Cannot to Slack');
  }
});

var strage_file_name = "setting";

controller.on('direct_message', function (bot, message) {
  bot.reply(message, "匿名で投稿しました:mailbox_with_mail:");

  bot.startConversation({ channel: process.env.channel_id }, function (response, convo) {
    convo.say(message);
  })
});