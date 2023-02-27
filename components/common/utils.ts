const agentHas = (keyword: string) => {
  return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
};

export const isSafari = () => {
  return (
    typeof window !== "undefined" &&
    (!!(window as any).ApplePaySetupFeature || !!(window as any).safari) &&
    agentHas("Safari") &&
    !agentHas("Chrome") &&
    !agentHas("CriOS")
  );
};
