import styled from 'styled-components';
import { HorizontalAlign, VerticalAlign, Space } from './enums';

/** Пропсы флекс контейнера */
interface ContainerProps {
  /** Установить по умолчанию flex-grow, flex-shrink, flex-basis */
  flexInitial?: boolean;
  /** Промежутки между строками в пикселях */
  gap?: number;
}

/** Пропсы флекс строки */
interface RowProps {
  /** Расположение контента по горизонтали */
  horizontal?: HorizontalAlign | Space;
  /** Расположение контента по вертикали */
  vertical?: VerticalAlign | 'baseline' | Space.stretch;
}

/** Пропсы флекс столбца */
interface ColumnProps {
  /** Расположение контента по горизонтали */
  horizontal?: HorizontalAlign | Space.stretch;
  /** Расположение контента по вертикали */
  vertical?: VerticalAlign | Space;
}

/** Флекс контейнер */
const Container = styled.div<ContainerProps>`
  display: flex;
  flex: ${(props) => (props.flexInitial ? 'initial' : 1)};
  gap: ${(props) => `${props.gap}px`};
`;

/** Флекс строка */
const Row = styled(Container)<RowProps>`
  flex-direction: row;
  justify-content: ${(props) => props.horizontal};
  align-items: ${(props) => props.vertical};
`;

/** Флекс столбец */
const Column = styled(Container)<ColumnProps>`  
  flex-direction: column;
  justify-content: ${(props) => props.vertical};
  align-items: ${(props) => props.horizontal};
`;

export default {
  Container, Row, Column,
};
