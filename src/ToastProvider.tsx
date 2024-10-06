import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastPosition } from './common';

type Toast = {
  id: string;
  message: string;
  position: ToastPosition;
  autoDismiss: boolean;
  autoDismissTimeout: number;
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (message: string, userOptions: Partial<typeof DEFAULT_OPTIONS>) => string;
  removeToast: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

const DEFAULT_OPTIONS = {
  position: ToastPosition.TOP_RIGHT,
  autoDismiss: true,
  autoDismissTimeout: 5000,
};

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, userOptions: Partial<typeof DEFAULT_OPTIONS>) => {
    const options = { ...DEFAULT_OPTIONS, ...userOptions };
    const id = crypto.randomUUID();

    setToasts(prev => [...prev, { ...options, id, message }]);

    if (options.autoDismiss) {
      setTimeout(() => {
        removeToast(id);
      }, options.autoDismissTimeout);
    }

    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<ToastPosition, Toast[]>);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {createPortal(
        Object.entries(toastsByPosition).map(([position, toasts]) => (
          <div key={position} className={`toast-container ${position}`}>
            {toasts.map(toast => (
              <div key={toast.id} className="toast" onClick={() => removeToast(toast.id)}>
                {toast.message}
              </div>
            ))}
          </div>
        )),
        document.getElementById('toast-container')!
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
