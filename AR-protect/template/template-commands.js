const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')
const guildEmbedColor = new Map();
const StateManager = require('../../utils/StateManager');
var embedsColor = require('../../function/embedsColor')

module.exports = class commabNameCommand extends BaseCommand {
    constructor(){
        super('commabName', 'category', [])
    }

    async run(client, message, args) {
        
    }
}

embedsColor(guildEmbedColor);
