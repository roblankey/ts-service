import fetch from 'node-fetch';

import logger from '../util/logger';
import { API_URL } from '../util/secrets';
import { User } from '../models/user';

export const getUsers = (): Promise<User[]> => {
  logger.info(`Reading from ${API_URL}`);
  return new Promise(resolve => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(body => {
        resolve(body);
      });
  });
};
