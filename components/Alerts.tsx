import React, { useState } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const closeAlert = () => {
    setVisible(false);
  };

  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
      <button type="button" className="close" onClick={closeAlert}>
        <span>&times;</span>
      </button>
    </div>
  );
};

export default Alert;