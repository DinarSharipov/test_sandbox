import React from 'react';
import { storeContext } from '../context';

/** Хук для работы со стором */
const useStores = () => React.useContext(storeContext);

export default useStores;
