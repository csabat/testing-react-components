import React, { FC } from 'react';
import { Portal } from 'react-portal';

import useClickAway from '../../hooks/useClickAway';

const styles = require('./styles.module.css');

interface Props {
  className?: string;
  onClose: () => void;
  isOpen: boolean
}

const Modal: FC<Props> = ({ isOpen, className = '', children, onClose }) => {
  const modalClassNames = `${styles.modal} ${className}`;
  const ref = React.useRef(null);

  useClickAway(ref, onClose);

  if (!isOpen) {
    return null;
  }
  
  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={modalClassNames}>
          <div ref={ref} className={styles.wrapper}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;