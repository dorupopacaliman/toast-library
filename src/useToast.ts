import { useContext } from 'react';
import { ToastContext } from './ToastProvider';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === null) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
