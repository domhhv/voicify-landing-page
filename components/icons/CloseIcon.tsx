import Svg from './Svg';
import { SvgIconProps } from './SvgIconProps';

const CloseIcon = ({ color }: SvgIconProps) => (
  <Svg width={24} height={24}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);

export default CloseIcon;
