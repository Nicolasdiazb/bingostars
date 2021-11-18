const vanillaSharing = require("vanilla-sharing")

class Players {
    constructor () {
        this.players = [];
    }
    addPlayer(hostId, playerId, nameId, profilePic){
        var onGame = new Boolean(false);
        var player = {hostId, playerId, nameId, profilePic, onGame};
        this.players.push(player);
        return player;
    }
    removePlayer(playerId){
        var player = this.getPlayer(playerId);
        
        if(player){
            this.players = this.players.filter((player) => player.playerId !== playerId);
        }
        return player;
    }
    getPlayer(playerId){
        return this.players.filter((player) => player.playerId === playerId)[0]
    }
    updatePlayerId(newPlayerId, _playerId){
        var playerToChange = this.players.filter((player) => player.playerId === _playerId)[0];
        playerToChange.playerId = newPlayerId; 
    }
    getPlayers(hostId){
        return this.players.filter((player) => player.hostId === hostId);
    }
    sharePlayers(data){
        var type = data.type;
        var title = `Únete a una partida rápida usando el codigo ${data.code} o dando click al siguiente vinculo. Bingo Legends, es muy entretenido.`;
        var link = data.url+'/'+data.code
        var url;
        switch (type) {
            case 'whatsapp':
                url = vanillaSharing.getWhatsappUrl({
                    title: title,
                    url: link
                });
            break;
            case 'messenger':
                url = vanillaSharing.messenger({
                    url: `${title} ${link}`,
                    fbAppId: 'string',
                })
            break;
            case 'twitter':
                url = vanillaSharing.getTwUrl({
                    url: link,
                    title: title,
                    hashtags: ['BingoLegends'],
                })
            break;
            default:
                url = null
            break;
        }
        return url;
    }
       
}

module.exports = {Players};
