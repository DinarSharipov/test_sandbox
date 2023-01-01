import React, { useState } from 'react';

const Drawer: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div onClick={() => setShow(!show)}>Открыть/Закрыть</div>
      {
        show && <div>Список</div>
      }
    </div>
  );
};

export default React.memo(Drawer);
