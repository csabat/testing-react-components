import cx from 'classnames';
import React, { FC } from 'react';

import styles from './style.module.css';

export enum SpinnerSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface Props {
  className?: string;
  size?: SpinnerSize;
}

const Spinner: FC<Props> = ({ className = '', size = SpinnerSize.MEDIUM }) => {
  const sizeStyles = {
    [styles.large]: size === 'large',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small'
  };

  return (
    <div className={cx(sizeStyles, styles.loader, className)}>
      Loading...
    </div>
  );
};

export default Spinner;