import React from 'react';
import LabelStyle from './LabelStyle';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({ size, children }) => (
  <LabelStyle.Label size={size}>{children}</LabelStyle.Label>
);

export default React.memo(Label);
