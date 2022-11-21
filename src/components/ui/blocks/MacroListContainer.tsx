import React from 'react';
import { observer } from 'mobx-react';
import Flex from '../../../flex/Flex';
import useStores from '../../../hooks/useStores';

const MacroListContainer: React.FC = () => {
  const { macroList } = useStores();
  return (
    <Flex.Column>
      {
        macroList.entities?.map((entity) => (
          <div key={entity.id}>{entity.name}</div>
        ))
      }
    </Flex.Column>
  );
};

export default observer(MacroListContainer);
