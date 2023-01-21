import Player from "./player";

export default class ThisTurn {
  private _rolledDice: boolean;
  private _maxMoves: number;
  private _movesMade: number;

  constructor(
    private _turnPlayer: Player,
    private _opponentPlayer: Player,
    private _dices: number[]
  ) {
    if (this._dices.length !== 0) {
      if (this.dices[0] === this.dices[1]) {
        this.dices.push(this.dices[0]);
        this.dices.push(this.dices[0]);
      }

      this._rolledDice = true;
      this._maxMoves = this._dices.reduce((a, b) => a + b, 0);
      this._movesMade = 0;
    } else {
      this._rolledDice = false;
      this._maxMoves = 0;
      this._movesMade = 0;
    }
  }

  public get turnPlayer(): Player {
    return this._turnPlayer;
  }
  public set turnPlayer(value: Player) {
    this._turnPlayer = value;
  }

  public get opponentPlayer(): Player {
    return this._opponentPlayer;
  }
  public set opponentPlayer(value: Player) {
    this._opponentPlayer = value;
  }

  public get rolledDice(): boolean {
    return this._rolledDice;
  }
  public set rolledDice(value: boolean) {
    this._rolledDice = value;
  }

  public get dices(): number[] {
    return this._dices;
  }
  public set dices(value: number[]) {
    this._dices = value;
  }

  public get moves(): number {
    return this._movesMade;
  }
  public set moves(value: number) {
    this._movesMade = value;
  }

  public get maxMoves(): number {
    return this._maxMoves;
  }
  public set maxMoves(value: number) {
    this._maxMoves = value;
  }
}
