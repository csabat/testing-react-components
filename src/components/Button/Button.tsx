import React, { FC } from 'react';
import cx from 'classnames';

const styles = require('./styles.module.css');

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props {
  label: string;
  onClick?: () => void;
  buttonType: ButtonType;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<Props> = ({ type = "button", label, onClick, buttonType, className = '' }) => {
  const buttonClassNames = cx({
    [styles.primary]: buttonType === ButtonType.PRIMARY,
    [styles.secondary]: buttonType === ButtonType.SECONDARY,
  }, className);

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;