class CasinoPlugin {
  constructor() {

  }
  default (command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel, "Test", "Test");
  }

  commandSlot (command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel, "Slot", "You bet was: " + command.params[0]);
  }
}

module.exports = CasinoPlugin;
