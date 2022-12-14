import { DependencyList, EffectCallback, useEffect } from "react";

export const useDebouncedEffect = (
   effect: EffectCallback,
   delay: number,
   dependencies: DependencyList = []
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
