import { FC } from "react";
import Typography from "../Typography";
import { TypographyProps } from "../interfaces";
type Props =Omit<TypographyProps,'element'>
const Label:FC<Props> = ({ children, ...props }) => {
  return <Typography element="label" {...props}>{children}</Typography>;
}
export default Label;