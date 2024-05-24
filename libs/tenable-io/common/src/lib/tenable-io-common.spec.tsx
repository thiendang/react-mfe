import { render } from '@testing-library/react';

import TenableIoCommon from './tenable-io-common';

describe('TenableIoCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TenableIoCommon />);
    expect(baseElement).toBeTruthy();
  });
});
