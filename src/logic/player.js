export default class Player {
    constructor(player, outBarIdx, endBarIdx) {
        this.player = player;
        this.outBar = [];        
        this.outBarIdx = outBarIdx;
        this.endBar = [];
        this.endBarIdx = endBarIdx;
    }

    setPlayerOutBar(outBar) {
        this.outBar = outBar;
    }

    setPlayerEndBar(endBar) {
        this.endBar = endBar;
    }
}