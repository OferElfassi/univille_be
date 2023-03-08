// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/first */
import * as dotenv from 'dotenv-flow';

dotenv.config({ path: `${__dirname}/..` });
// delay 2 seconds to allow the .env file to be loaded
require('./database');

setTimeout(() => {
  // eslint-disable-next-line global-require
  require('./server');
}, 2000);

import { Database } from './database';

//

// Database.logStatus();
// App.start(process.env.PORT);
