import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const result = await json(data);
    const obj = JSON.parse(result);
    return new GameSaving(obj);
  }
}
