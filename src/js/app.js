import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    throw new Error(err);
  }
})();
