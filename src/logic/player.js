export default class Player {
    constructor(player, playerOutBarIdx, playEndBarIdx) {
        this.player = player;
        this.playerOutBar = [];        
        this.playerOutBarIdx = playerOutBarIdx;
        this.playEndBar = [];
        this.playEndBarIdx = playEndBarIdx;
    }

    setPlayerOutBar(playerOutBar) {
        this.playerOutBar = playerOutBar;
    }

    setPlayerEndBar(playEndBar) {
        this.playEndBar = playEndBar;
    }
}