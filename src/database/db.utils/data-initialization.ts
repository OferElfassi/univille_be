import { PlayerModel, SchoolModel, UserModel, ClassModel } from 'src/database';

const className = 'Tigers';
const schoolName = 'Shenkar';

const players = [
  {
    username: 'Ofer221',
    fullName: 'Ofer Elfassi',
    group: 'blue',
    avatar:
      'https://gravatar.com/avatar/19c0791465b39fc5ebc9434d9b9af7d6?s=400&d=robohash&r=x',
  },
  {
    username: 'DekelBD',
    fullName: 'Dekel Ben-David',
    group: 'red',
    avatar:
      'https://gravatar.com/avatar/ccfd17a3d0db909ba0353d88a35ef177?s=400&d=robohash&r=x',
  },
  {
    username: 'Ido100k',
    fullName: 'Ido Dor',
    group: 'green',
    avatar:
      'https://gravatar.com/avatar/6719ee5b433813a8bfb72a763efb601f?s=400&d=robohash&r=x',
  },
];

const createSchoolAndClass = async (newSchoolName: string, newClassName) => {
  const school = await SchoolModel.create({ name: newSchoolName });
  await school.createClass(newClassName);
};
const addSamplePlayers = async () =>
  Promise.all(players.map((p) => PlayerModel.createPlayer(p)));

const giveSomePoints = async () => {
  await PlayerModel.givePoints('ofer221', 200);
  // const result = await Player.getPlayerStatus('ofer221');
  // console.log(result);
};
const dataInitialization = async () => {
  console.log('Data initialization');
  await ClassModel.createOne({ name: 'Tigers', score: 6 });

  ClassModel.find({})
    .then((res) => console.log(`ClassModel.find found: ${res}`))
    .catch((err) => console.log(`ClassModel.find error: ${err}`));
  // try {
  //   // await giveSomePoints();
  //   await addSamplePlayers();
  //   await createSchoolAndClass(schoolName, className);
  //   return 'Database initialization complete';
  // } catch (e) {
  //   if (e.code && e.code !== 11000)
  //     throw new Error(`Database initialization failed ${e}`);
  //   return 'Database initialized';
  // }
};

export { dataInitialization };
