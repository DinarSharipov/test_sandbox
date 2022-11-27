import styled from 'styled-components';
import Flex from '../../../flex/Flex';

const Container = styled(Flex.Column)`
  background-color: lightgrey;
  border-radius: 4px;
  height: 50px;
`;

const OptionsRelative = styled(Flex.Column)`
  position: relative;
`;

const OptionsAbsolute = styled(Flex.Column)`
  position: absolute;
  top: 0;
`;

const Option = styled(Flex.Row)`
  padding: 10px;
  background-color: lightblue;
  :hover{
    background-color: aqua;
  }
  border-bottom: 1px solid lightgrey;
`;

export default {
  Container,
  Option,
  OptionsRelative,
  OptionsAbsolute,
};
