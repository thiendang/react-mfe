import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TenableIoCommonProps {}

const StyledTenableIoCommon = styled.div`
  color: pink;
`;

export function TenableIoCommon(props: TenableIoCommonProps) {
  return (
    <StyledTenableIoCommon>
      <h1>Welcome to TenableIoCommon!</h1>
    </StyledTenableIoCommon>
  );
}

export default TenableIoCommon;
