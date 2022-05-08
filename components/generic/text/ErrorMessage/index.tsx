import { FC } from "react";
import Typography from "../Typography";
import { TypographyProps } from "../interfaces";
type Props = Omit<TypographyProps, "element">;
const ErrorMessage:FC<Props> = ({ children,show, ...props }) => {
  return <Typography show={show} element="p" marginY="small" color='danger' {...props}>{children}</Typography>;
}
export default ErrorMessage;