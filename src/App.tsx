import { useRef, useState } from 'react';
import { ToastPosition } from './common';
import './styles.css';
import { useToast } from './useToast';

const App = () => {
  const { addToast, removeToast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string | null>(null);

  const onAddToast = () => {
    if (!inputRef.current?.value) return;

    setId(
      addToast(inputRef.current.value, {
        position: ToastPosition.TOP_CENTER,
        autoDismiss: true,
        autoDismissTimeout: 5000,
      })
    );
  };

  const onRemoveToast = (id: string) => {
    removeToast(id);
  };

  return (
    <div className="form">
      <input ref={inputRef} type="text" />
      <button onClick={onAddToast}>Add Toast</button>
      <button onClick={() => (id != null ? onRemoveToast(id) : null)}>Remove Last Toast</button>
    </div>
  );
};

export default App;
