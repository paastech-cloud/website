import { getRandom } from '@/helper/getRandom';
import { css } from '@emotion/react';

type CloudProps = {
  x: number;
  y: number;
};

export const Cloud = (props: CloudProps) => {
  const baseSize = getRandom(7, 10);

  const cloudsCss = css`
    ${cloudShape(baseSize)};
    position: absolute;
    bottom: ${props.y}%;
    left: ${props.x}%;
  `;

  return (
    <div css={cloudsCss}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const cloudShape = (baseSize: number) => css`
  animation: move ${baseSize * 2}s ease-in-out infinite; // Adjust the multiplication factor here
  border-radius: 10px;
  margin: 30px 0 0 0;

  width: 60px;
  height: 10px;
  aspect-ratio: 54 / 5;
  transform: scale(${baseSize});

  background: #f7e7eb;

  div {
    box-shadow: inset -2px -3px 0 0 #f7e7eb;
    position: absolute;

    border-radius: 50%;
    width: 12px;
    height: 12px;

    left: 0;
    bottom: 0;

    background: #fafbf0;
    z-index: 10;

    &:first-of-type {
      & + div {
        transform: scale(1.6, 1.6);
        margin: 0 0 4px 13px;
        z-index: 9;

        & + div {
          transform: scale(2.4, 2.4);
          margin: 0 0 9px 32px;
          z-index: 8;

          & + div {
            transform: scale(1.3, 1.3);
            margin: 0 0 2px 50px;
            z-index: 7;
          }
        }
      }
    }
  }
`;
