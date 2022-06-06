import { FC,HTMLAttributes } from "react";
import Typography from "../Typography";
import { TypographyProps } from "../interfaces";
type LabelProps = Omit<TypographyProps,'element'> & HTMLAttributes<HTMLLabelElement>;
const Label:FC<LabelProps> = ({ children, ...props }) => {
  return <Typography element="label" {...props}>{children}</Typography>;
}
export default Label;