import { forwardRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  patternHint?: string;
  error?: string;
  disabled?: boolean;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { id, label, type = 'text', placeholder, required, patternHint, error, disabled, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-primary/10 ${
            error
              ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500/10'
              : 'border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 focus:border-primary'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          {...props}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        {patternHint && !error && <p className="text-xs text-zinc-500">{patternHint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
