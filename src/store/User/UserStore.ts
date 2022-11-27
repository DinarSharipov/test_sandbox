import { makeAutoObservable } from 'mobx';

class UserStore {
  id?: string;

  constructor() {
    makeAutoObservable(this);
  }
}

export default UserStore;
