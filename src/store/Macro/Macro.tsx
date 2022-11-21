import { makeAutoObservable } from 'mobx';
import { MacroStep } from './MacroTypes';

class Macro {
  id?: string;

  name: string;

  entities?: MacroStep[];

  constructor() {
    makeAutoObservable(this);
    this.id = '1m';
    this.name = 'Первый макрос';
    this.entities = [
      {
        id: 's1', classList: 'class', tag: 'button', url: 'adf', action: 'click', actionTimeOut: 3000,
      },
      {
        id: 's2', classList: 'class', tag: 'button', url: 'adf',
      },
      {
        id: 's3', classList: 'class', tag: 'button', url: 'adf',
      },
      {
        id: 's4', classList: 'class', tag: 'button', url: 'adf',
      },
    ];
  }
}

export default Macro;
