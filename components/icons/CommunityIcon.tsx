import Svg from './Svg';
import { SvgIconProps } from './SvgIconProps';

const CommunityIcon = ({ color }: SvgIconProps) => (
  <Svg width={27} height={28}>
    <path
      d="M21 22H15.6667V26H6.33333C6.33333 22.6344 6.51294 19.8861 4.31884 17.089C3.07499 15.5033 2.33333 13.505 2.33333 11.3333C2.33333 6.17868 6.51201 2 11.6667 2C15.4665 2 18.9651 3.82379 20.4073 7.51039C21.4179 10.0936 22.7843 11.6764 24.3333 14L21 16V22Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="square"
    />
  </Svg>
);

export default CommunityIcon;
