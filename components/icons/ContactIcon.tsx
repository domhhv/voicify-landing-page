import Svg from './Svg';
import { SvgIconProps } from './SvgIconProps';

const ContactIcon = ({ color }: SvgIconProps) => (
  <Svg width={30} height={30}>
    <path
      d="M18.6667 25L26.6667 3.33337L5 11.3334L14.6667 15.3334L18.6667 25Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Svg>
);

export default ContactIcon;
