import { Cloud } from '@components/Cloud';
import { css } from '@emotion/react';

export const CloudsContainer = () => {
  return (
    <div css={cloudContainer}>
      <Cloud x={10} y={15} />
      <Cloud x={70} y={20} />
      <Cloud x={80} y={68} />
    </div>
  );
};

const cloudContainer = css`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: calc(100% - 150px);
  z-index: -1;
`;
