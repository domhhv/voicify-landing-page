import { CSSProperties, ReactNode } from 'react';

type SvgProps = {
  width: number;
  height: number;
  children: ReactNode;
  style?: CSSProperties;
};

const Svg = ({ width, height, children, style = {} }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    {children}
  </svg>
);

export default Svg;
