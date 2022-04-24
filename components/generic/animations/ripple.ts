import { keyframes } from "styled-components";
const ripple = keyframes`
@keyframes {
	0%   { transform: translate(-100%, -100%); }
	80%  { transform: translate(-100%, -100%) scale(50); }
	100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }
}`
export default ripple;