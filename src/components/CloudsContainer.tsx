import { getRandom } from '@/helper/getRandom';
import { Cloud } from '@components/Cloud';
import { css } from '@emotion/react';

export const CloudsContainer = () => {
  return (
    <div css={cloudContainer}>
      <Cloud x={getRandom(10, 15)} y={getRandom(12, 14)} />
      <Cloud x={getRandom(65, 80)} y={getRandom(15, 20)} />
      <Cloud x={getRandom(75, 85)} y={getRandom(65, 70)} />
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
