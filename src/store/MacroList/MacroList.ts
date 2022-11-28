import { makeAutoObservable } from 'mobx';
import { MacroInfo } from './MacroListTypes';

class MacroList {
  entities?: MacroInfo[];

  state: 

  constructor() {
    makeAutoObservable(this);
    this.entities = [
      { id: '1m', name: 'Первый макрос' },
      { id: '2m', name: 'Второй макрос' },
      { id: '3m', name: 'Третий макрос' },
    ];
  }

  public fetch() {
    try {
      console.log('fetch');
    } catch (error) {
      console.warn(error);
    }
  }
}

export default MacroList;
