import { Player } from 'src/database';

const players = [
  {
    username: 'Ofer221',
    fullName: 'Ofer Elfassi',
    group: 'Tigers',
    school: 'Shenkar',
    city: 'Tel-Aviv',
    avatar:
      'https://gravatar.com/avatar/19c0791465b39fc5ebc9434d9b9af7d6?s=400&d=robohash&r=x',
  },
  {
    username: 'DekelBD',
    fullName: 'Dekel Ben-David',
    group: 'Heroes',
    school: 'Shenkar',
    city: 'Givataim',
    avatar:
      'https://gravatar.com/avatar/ccfd17a3d0db909ba0353d88a35ef177?s=400&d=robohash&r=x',
  },
  {
    username: 'Ido100k',
    fullName: 'Ido Dor',
    group: 'Gladiators',
    school: 'Shenkar',
    city: 'Tel-Aviv',
    avatar:
      'https://gravatar.com/avatar/6719ee5b433813a8bfb72a763efb601f?s=400&d=robohash&r=x',
  },
];

const addSamplePlayers = async () =>
  Promise.all(players.map((p) => Player.createPlayer(p)));

const giveSomePoints = async () => {
  await Player.givePoints('ofer221', 200);
  const result = await Player.getPlayerStatus('ofer221');
  console.log(result);
};
const dataInitialization = async () => {
  try {
    // await giveSomePoints();
    await addSamplePlayers();
    return 'Database initialization complete';
  } catch (e) {
    if (e.code && e.code !== 11000)
      throw new Error(`Database initialization failed ${e}`);
    return 'Database initialized';
  }
};

export { dataInitialization };
