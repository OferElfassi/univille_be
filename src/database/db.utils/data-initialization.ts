import {
  PlayerModel,
  SchoolModel,
  UserModel,
  ClassModel,
  MissionModel,
  GameModel,
  TeacherModel,
} from 'src/database';

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

const teachers = [
  {
    username: 'teacher1',
    fullName: 'teacher1',
    className: 'Tigers',
  },
];

const games = [
  {
    name: 'find the monkeys',
    code: '123456',
    startTime: new Date(),
    duration: 5,
    teacher: 'teacher1',
  },
];

const targets = [
  {
    title: 'monkey1',
    location: { x: 32.084042, y: 34.818988 },
    image: 'https://www.safari.co.il/Images/_croppedImage20183814_3103167.png',
  },
];

const hints = [
  [
    {
      index: 1,
      hint: 'you are close, but not there yet',
      type: 'text',
      title: 'Where is the monkey?',
      location: { x: 32.082188, y: 34.818209 },
      image: '',
    },
    {
      index: 2,
      hint: 'On the next tower to the right, look up and maybe you will see it',
      type: 'text',
      title: 'Are you looking up?',
      location: { x: 32.083139, y: 34.818414 },
      image: '',
    },
    {
      index: 3,
      hint: 'Sometimes you need to look down',
      type: 'text',
      title: 'Are you looking down?',
      location: { x: 32.083937, y: 34.818596 },
      image: '',
    },
  ],
];

const missions = [
  {
    name: 'mission1',
    image:
      'https://calcalit-rg.co.il/wp-content/uploads/2020/01/33238ImageFile2.jpg',
    target: {},
    hints: [],
  },
];

const createMission = async (missionData, hintList, targetData) => {
  try {
    const newMission = await MissionModel.create({
      ...missionData,
      target: targetData,
      hints: hintList,
    });
    console.log('mission created', newMission);
    return newMission;
  } catch (error) {
    throw new Error(`Error creating mission: ${error.message}`);
  }
};

const createTeacher = async (teacher) => {
  try {
    const newTeacher = await TeacherModel.create(teacher);
    console.log('teacher created', newTeacher);
    return newTeacher;
  } catch (error) {
    throw new Error(`Error createTeacher: ${error.message}`);
  }
};

const createPlayer = async (playerData) => {
  try {
    const newPlayer = await PlayerModel.createPlayer(playerData);
    console.log('player created', newPlayer);
    return newPlayer;
  } catch (error) {
    throw new Error(`Error createPlayer: ${error.message}`);
  }
};

const createSchoolAndClass = async (newSchoolName: string, newClassName) => {
  try {
    const newSchool = await SchoolModel.create({ name: newSchoolName });
    const newClass = await newSchool.createClass(newClassName);
    console.log('school and class created', newSchool, newClass);
    return newClass;
  } catch (error) {
    throw new Error(`Error createSchoolAndClass: ${error.message}`);
  }
};
const createGame = async (game, teacher) => {
  try {
    game.startTime = new Date();
    const newGame = await GameModel.createGame(game, teacher.id);
    console.log('game created', newGame);
    return newGame;
  } catch (error) {
    throw new Error(`Error createGame: ${error.message}`);
  }
};

const clearData = async () => {
  console.log('clearing data');
  try {
    await PlayerModel.deleteMany({});
    await ClassModel.deleteMany({});
    await SchoolModel.deleteMany({});
    await UserModel.deleteMany({});
    await MissionModel.deleteMany({});
    await GameModel.deleteMany({});
  } catch (err) {
    console.log('error in clearing data', err.message);
  }
};
const dataInitialization = async () => {
  console.log('Data initialization');
  // try {
  //   await clearData();
  //   const teacher1 = await createTeacher(teachers[0]);
  //   const class1 = await createSchoolAndClass(schoolName, className);
  //   const mission1 = await createMission(missions[0], hints[0], targets[0]);
  //   const player1 = await createPlayer(players[0]);
  //   const player2 = await createPlayer(players[1]);
  //   const player3 = await createPlayer(players[2]);
  //   await class1.addPlayer(player1.id);
  //   await class1.addPlayer(player2.id);
  //   await class1.addPlayer(player3.id);
  //   await class1.addTeacher(teacher1.id);
  //   const game1 = await createGame(games[0], teacher1);
  //   await game1.addMission(mission1.id);
  //   await game1.addPlayer(player1.id);
  console.log('data initialized');
  // } catch (err) {
  //   console.log('error in data initialization', err.message);
  // }
};
export { dataInitialization };
