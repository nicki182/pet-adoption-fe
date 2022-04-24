import { FC } from "react";
import Typography from "../Typography";
import { TypographyProps } from "../interfaces";
type Props = Omit<TypographyProps, "element">;
const ErrorMessage:FC<Props> = ({ children, ...props }) => {
  return <Typography element="p" color='danger' {...props}>{children}</Typography>;
}
export default ErrorMessage;