/* eslint-disable */
import GameSavingLoader from '../app';

test('Получаем сохранение', async () => {
  expect.assertions(1);
  try {
    const saveGame = new GameSavingLoader();
    const data = await saveGame.load();
    const expented = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    return expect(data).toBe(expented);
  } catch (e) {
    expect(e).toEqual('ошибка сохранения!');
  }
});