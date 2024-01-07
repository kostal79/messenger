import { FC, PropsWithChildren } from "react";
import { ComponentProps } from "../../types/types";

const Tag: FC<PropsWithChildren<ComponentProps>> = ({
  as: TagName = "div",
  children,
  ...otherProps
}: PropsWithChildren<ComponentProps>) => {
  return <TagName {...otherProps}>{children}</TagName>;
};

export default Tag;
