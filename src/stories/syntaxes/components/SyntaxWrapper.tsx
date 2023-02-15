import type { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const SyntaxWrapper: FC<Props> = ({ children }) => <div>{children}</div>;
