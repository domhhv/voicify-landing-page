import Svg from './Svg';
import { SvgIconProps } from './SvgIconProps';

const HomeIcon = ({ color }: SvgIconProps) => (
  <Svg width={26} height={28}>
    <path
      d="M7.66668 20.3334H18.3333M2.33334 11V25.6667H23.6667V11L13 2.33337L2.33334 11Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="square"
    />
  </Svg>
);

export default HomeIcon;
