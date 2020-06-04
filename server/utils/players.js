class Players {
    constructor () {
        this.players = [];
    }
    addPlayer(hostId, playerId, nameId){
        var player = {hostId, playerId, nameId};
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
}

module.exports = {Players};
