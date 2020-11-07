import React from 'react';

export default function TextareaDebounced(props: {
  style?: React.CSSProperties;
  onChange: (s: string) => void;
  input?: string;
}) {
  const [value, setValue] = React.useState<string | undefined>(props.input);
  // eslint-disable-next-line
  const delayedSet = React.useCallback<(args?: string) => void>(debounce(props.onChange, 500), [
    props.onChange,
    debounce,
  ]);
  React.useEffect(() => {
    delayedSet(value);
  }, [value, delayedSet]);

  return (
    <textarea
      style={{ width: '100%', ...props.style }}
      rows={5}
      onChange={e => setValue(e.target.value)}
      value={value}
    ></textarea>
  );
}

function debounce(func: (args: any) => any, wait: number) {
  let timeout: undefined | number;
  return function (args: any) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => func(args), wait);
  };
}
