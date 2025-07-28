import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary alart-dismissible">{children}</div>
  );
};

export default Alert;
