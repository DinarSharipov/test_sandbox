import { observable } from 'mobx';

class BaseStateStore {
  @observable
    isLoading?: boolean;

  @observable
    isSuccess?: boolean;

  @observable
    isError?: boolean;

  @observable
    error?: string;

  constructor() {

  }
}

export default BaseStateStore;
