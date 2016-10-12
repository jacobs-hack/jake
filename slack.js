const express = require('express');
const config = require('./app/config.js');
const Wit = require('node-wit').Wit;

const WIT_TOKEN = config.wit.serverAccessToken;

const SLACK_TOKEN = config.slack.slack_token;

var controller = Botkit.slackbot({
  debug: false,
  log: true,
  logLevel: 2
});

var bot = controller.spawn({
  token: SLACK_TOKEN
})startRTM();

controller.hears('.*', ['direct_message', 'direct_mention'], function(bot, message){
  var wit = witbot.process(message.text, bot, message);

  wit.hears("schedule", 0.5, function(bot, message, outcome){
    var response = {
      text: "Here is the schedule:\n \
      *Saturday:*\n \
      09:30  Registration\n \
      10:30  Opening Ceremony & Sponsor Presentations\n \
      11:30  Team-building Session\n \
      12:00  Hacking begins\n \
      13:00  BlackRock workshop\n \
      14:00  Lunch\n \
      15:00  Swift workshop\n \
      16:00  MLH Bloomberg No Light\n \
      17:00  Vim Workshop\n \
      19:00  Dinner\n \
      20:00  Cup Stacking (Mini-Event)\n \
      22:00  Sleeping Area opens\n\n \
      *Sunday:*\n \
      00:00  Midnight Meal\n \
      01:00  Werewolf\n \
      08:00  Breakfast\n \
      12:00  Hacking ends, Science fair begins\n \
      13:00  Lunch is served\n \
      14.30  Judges retreat for deliberations.\n \
      15:00  Top 5 presentations announced\n \
      15:15  Finalists present\n \
      16:00  Prize-giving Presentation + Closing Ceremony\n \
      16.45  End\n\n \
      Link to live schedule: https://hacklondon.org/schedule"
    }
    bot.reply(message, response);
  })

  wit.hears("map", 0.5, function(bot, message, outcome){
    var mapMessage = {
      text: "Map: https://drive.google.com/uc?export=view&id=0Bw8MREGeZ1i7R1JrX1pqcEpYZzA",
      unfurl_links: "true",
      unfurl_media: "true",
    };
    bot.reply(message, mapMessage);
  })

  wit.hears("code_of_conduct", 0.5, function(bot, message, outcome){
    var response = {
      text: "Code of Conduct\nhttp://static.mlh.io/docs/mlh-code-of-conduct.pdf\n \
      As part of this event, you have agreed to the code of conduct."
    }
    bot.reply(message, response);
  })

  wit.hears("devpost", 0.5, function(bot, message, outcome){
    var response = {
      text: "Devpost\nhttp://hacklondon2016.devpost.com/"
    }
    bot.reply(message, response);
  })

  wit.hears("emergency", 0.5, function(bot, message, outcome){
    var response = {
      text: " \
      If this is an emergency:\n \
      Inform @josh or @kp (+44<REDACTED>) immediately.\n \
      Call Security at this number:\n \
      `020 7679 2222`\n\n \
      If this is an incident you want to report, talk to any of the `organizers` and email incidents@mlh.io or call +44<REDACTED>"
    }
    bot.reply(message, response);
  })

  wit.hears("hardware", 0.5, function(bot, message, outcome){
    var response = {
      text: "MLH is located in the South Cloister\n \
Here is a list of the hardware MLH brought:\n \
      Oculus Rift\n \
      Thalmic Myo\n \
      Leap Motion\n \
      Intel Edison\n \
      Arduino \n \
      Spark Core\n \
      Muse Headset\n \
      Pebble\n \
      Tessel\n \
      Nest"
    }
    bot.reply(message, response);
  })

  wit.hears("help", 0.5, function(bot, message, outcome){
    var response = {
      text: "At the moment I am capable of informing you about the following things:\n \
        `code of conduct`: Location MLH code of conduct\n \
        `devpost`: Devpost Link where you can submit your hack\n \
        `emergency`: What to do in an emergency\n \
        `hardware`: The hardware that MLH brought\n \
        `help`: You just used this command :robot_face:\n \
        `internet`: How to connect to the internet\n \
        `judging`: How judging will work\n \
        `judges`: A list of the judges\n \
        `judging schedule`: The judging schedule\n \
        `map`: A map with the relevant places\n \
        `organizers`: A list of the main organizers\n \
        `schedule`: The event schedule\n \
        `sponsors`: The 2016 HackLondon Sponsors\n \
        `sposor name here`: This will well you some information and the location of the sponsor\n \
        `travel reimbursements`: Some more information about travel reimbursements\n \
        `prizes`: Information about prizes\n \
        `twitter`: Suggested hashtags to use (Hint: It's #hacklondon)\n \
        `welcome`: A link to the welcome pack\n \
        `headless challenge`: An explanation of the headless challenge"
    }
    bot.reply(message, response);
  })

  wit.hears("judging", 0.5, function(bot, message, outcome){
    var response = {
      text: "Here is how the judging will work:\n \
      You will have 3 minutes to present (including questions) and remember: no powerpoint presentation or equivalent! Just the hack!"
    }
    bot.reply(message, response);
  })


  wit.hears("sponsors", 0.5, function(bot, message, outcome){
    var response = {
      text: "Here is a list of our wonderful sponsors:\n \
        Capital One\n \
        J.P. Morgan\n \
        Pusher\n \
        Bloomberg\n \
        BlackRock\n \
        ANDigital\n \
        Whitbread\n \
        Skyscanner\n \
        Goldman Sachs\n \
        chirp.io\n \
        hackajob\n \
        Uepaa (p2pkit)\n"
    }
    bot.reply(message, response);
  })

  wit.hears("organizers", 0.5, function(bot, message, outcome){
    var response = {
      text: "Here is a list of the main organizers:\n \
KP\n \
Josh\n \
Zahra\n \
Fares"
    }
    bot.reply(message, response);
  })


  wit.hears("travel", 0.5, function(bot, message, outcome){
    var response = {
      text: "Here is the link to the travel reimbursements page:\n \
      http://hacklondon.org/travel.html"
    }
    bot.reply(message, response);
  })


  wit.hears("prizes", 0.5, function(bot, message, outcome){
    var response = {text: ""};
    var randomNumber = Math.floor(Math.random() * 10);

    switch(randomNumber){
      case 0: response.text = "It's not all about the prizes"; break;
      default: response.text = "*Prizes*:\n     *Grand Prize*: TrackR Bravo + Amazon Fire Tablet\n \
    *Runner Up*: Syma X5-SC1 Drone + Xiaomi Fitness Tracker\n \
    *Fresher Hack*: PowerCube + Amazon Voucher\n \
    *Headless Challenge*: Arduino Touch Screen + Multicoloured 40P Jumper Cables + Kuman Projec Arduino UNO R3 Board\n \
    *Most Entertaining*: A _very_ special surprise :tada:";
    }
    bot.reply(message, response);
  })
})
});
