import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DesignSystemComponentsProps {}

const StyledDesignSystemComponents = styled.div`
  color: pink;
`;

export function DesignSystemComponents(props: DesignSystemComponentsProps) {
  return (
    <StyledDesignSystemComponents>
      <h1>Welcome to DesignSystemComponents!</h1>
    </StyledDesignSystemComponents>
  );
}

export default DesignSystemComponents;
