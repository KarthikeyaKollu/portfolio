export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 64" {...props}>
    </svg>
  );
}



export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 64">
    <rect x="0" y="0" width="16" height="64" fill="${color}"/>
    <rect x="0" y="24" width="32" height="8" fill="${color}"/>
    <rect x="0" y="48" width="32" height="8" fill="${color}"/>
    <rect x="22" y="0" width="10" height="24" fill="${color}"/>
    <rect x="48" y="0" width="16" height="64" fill="${color}"/>
    <rect x="48" y="24" width="32" height="8" fill="${color}"/>
    <rect x="48" y="48" width="32" height="8" fill="${color}"/>
    <rect x="70" y="0" width="10" height="24" fill="${color}"/>
  </svg>`;
}

