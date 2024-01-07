import React from "react";
import styles from "./Avatar.module.css";
import DefaultAvatar from "../../assets/default_avatar.svg?react";
import clsx from "clsx";
import { AvatarProps } from "../../types/types";



const Avatar: React.FC<AvatarProps> = ({
  url,
  additionalClassName,
  "data-testid": testId
}: AvatarProps) => {
  const className: string = clsx(styles.box, additionalClassName);
  return (
    <div className={className} data-testid={testId}>
      {!url && <DefaultAvatar />}
      {url && <img src={url} alt="avatar" />}
    </div>
  );
};

export default Avatar;
