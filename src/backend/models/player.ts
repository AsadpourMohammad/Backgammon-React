export default class Player {
  private _outBar: string[];
  private _endBar: string[];

  constructor(
    private readonly _player: string,
    private readonly _outBarIdx: string,
    private readonly _endBarIdx: string,
    private readonly _pieceColor: string, 
    private readonly _pieceBorderColor: string
  ) {
    this._outBar = [];
    this._endBar = [];
  }

  public get player(): string {
    return this._player;
  }

  public get outBar(): string[] {
    return this._outBar;
  }
  public set outBar(value: string[]) {
    this._outBar = value;
  }

  public get outBarIdx(): string {
    return this._outBarIdx;
  }

  public get endBar(): string[] {
    return this._endBar;
  }
  public set endBar(value: string[]) {
    this._endBar = value;
  }

  public get endBarIdx(): string {
    return this._endBarIdx;
  }

  public get pieceColor(): string {
    return this._pieceColor;
  }

  public get pieceBorderColor(): string {
    return this._pieceBorderColor;
  }

  public clone() {
    const newPlayer = new Player(
      this._player,
      this._outBarIdx,
      this._endBarIdx,
      this._pieceColor, 
      this._pieceBorderColor
    );

    newPlayer.outBar = [...this.outBar];
    newPlayer.endBar = [...this.endBar];

    return newPlayer;
  }
}