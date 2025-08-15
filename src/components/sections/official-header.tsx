import Script from 'next/script';

export function OfficialHeader() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/opticrd/official-header/main.js" defer />

      {/* @ts-expect-error - This is a custom element */}
      <official-header />
    </>
  );
}
