interface StyleRules {
  [key: string]: string;
}

const setStyle = (styles: StyleRules, target: HTMLElement) => {
  Object.entries(styles).forEach(([k, v]) => (target.style[k as any] = v));
};

export { setStyle };
