import { useEffect } from 'react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div className="lb open" onClick={onClose} role="dialog" aria-modal="true">
      <button aria-label="Close" onClick={onClose}>&times;</button>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
