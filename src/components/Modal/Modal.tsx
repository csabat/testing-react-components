import React, { FC } from 'react';
import { Portal } from 'react-portal';

const styles = require('./styles.module.css');

interface Props {
  className?: string;
}

const Modal: FC<Props> = ({ className = '', children }) => {
  const modalClassNames = `${styles.modal} ${className}`;
  
  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={modalClassNames}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;