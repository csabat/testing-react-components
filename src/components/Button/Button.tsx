import React, { FC } from 'react';

const styles = require('./styles.module.css');

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props {
  label: string;
  onClick: () => void;
  type: ButtonType;
}

const Button: FC<Props> = ({ label, onClick, type }) => {
  const buttonStyle = {
    [ButtonType.PRIMARY]: styles.primary,
    [ButtonType.SECONDARY]: styles.secondary,
  }
  return (
    <button className={buttonStyle[type]} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;