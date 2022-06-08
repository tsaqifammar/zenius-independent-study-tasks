import axios from './axios';
import qs from 'qs';

/**
 * Creates a user
 */
async function createUser(username, email, password) {
  const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };
  await axios.post(
    '/users',
    qs.stringify({ username, email, password }),
    config
  );
}

export { createUser };
