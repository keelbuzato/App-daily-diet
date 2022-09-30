import styled from 'styled-components/native';

export const Box = styled.View`
  ${({ mr }) => mr && `margin-right: ${mr}`}
  ${({ ml }) => ml && `margin-left: ${ml}`}
  ${({ mt }) => mt && `margin-top: ${mt}`}
  ${({ mb }) => mb && `margin-bottom: ${mb}`}
  ${({ m }) => m && `margin: ${m}`}

  ${({ pr }) => pr && `padding-right: ${pr}px`};
  ${({ pl }) => pl && `padding-left: ${pl}px`};
  ${({ pt }) => pt && `padding-top: ${pt}px`};
  ${({ pb }) => pb && `padding-bottom: ${pb}px`};
  ${({ p }) => p && `padding: ${p}px`};

  width: 50%;
`;
