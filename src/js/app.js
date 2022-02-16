import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  async load() {
    try {
      this.data = await read();
      this.result = await json(this.data);
      return this.result;
    } catch (e) {
      return 'ошибка сохранения!';
    }
  }
}

const saveGame = new GameSavingLoader();
saveGame.load();
