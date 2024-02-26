import Svg from './Svg';
import { SvgIconProps } from './SvgIconProps';

const VoiceIcon = ({ color }: SvgIconProps) => (
  <Svg width={26} height={26}>
    <path
      d="M7.66666 2.33337V23.6667M2.33333 10.3334V15.6667M13 7.66671V18.3334M18.3333 5.00004V21M23.6667 10.3334V15.6667"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="square"
    />
  </Svg>
);

export default VoiceIcon;
