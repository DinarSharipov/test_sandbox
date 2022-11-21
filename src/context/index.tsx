import { createContext } from 'react';
import MacroList from '../store/MacroList/MacroList';

/** Все сторы для хука */
export const storeContext = createContext({
  macroList: new MacroList(),
});
