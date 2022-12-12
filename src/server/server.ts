import * as http from 'http';
import { App } from './App';
import 'reflect-metadata';

const PORT = process.env.PORT || 3000;
const server = http.createServer(App.instance);
server.listen(PORT, () => {
  console.log(`Server is listening on :${PORT}`);
});
