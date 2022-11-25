import styled from 'styled-components';

const Label = styled.div<{size: 's' | 'm' | 'l'}>`
  ${(props) => {
    switch (props.size) {
      case 's':
        return 'font: 12px/18px sans-serif';
      case 'l':
        return 'font: 20px/24px sans-serif';
      default:
        return 'font: 16px/22px sans-serif';
    }
  }}
`;

export default { Label };
