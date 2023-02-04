import { Influence } from '../Influence';

export class Deck {
  private _influences: Influence[];

  constructor() {
    this._influences = [];
  }

  public add(influence: Influence): void {
    this._influences.push(influence);
  }

  public draw(): Influence | undefined {
    return this._influences.pop();
  }

  get influences(): Influence[] {
    return [...this._influences];
  }
}