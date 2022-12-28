import React, { useState } from 'react';

const Accordion: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)}>
      <div>Name</div>
      {
        show && <div>Inner</div>
      }
    </div>
  );
};

export default React.memo(Accordion);
