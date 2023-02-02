import { User } from './userListTypes';

async function fetch() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json()).then((data) => data.then((a) => a));

  return response;
}
