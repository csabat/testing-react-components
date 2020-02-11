import React, { FC } from 'react';

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
  const buttonStyle = {
    [ButtonType.PRIMARY]: styles.primary,
    [ButtonType.SECONDARY]: styles.secondary,
  }
  return (
    <button type={type} className={`${buttonStyle[buttonType]} ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;