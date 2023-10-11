import { useEffect, useState } from "react";

import { TRANSITION_MS } from "@/constants/values";

/**
 * 参照
 * How to Animate Mounting Content in React
 * https://letsbuildui.dev/articles/how-to-animate-mounting-content-in-react
 */

/**
 * Usage in component
 * target component display: isMounted || hasTransitionedIn
 * target component active style: isMounted && hasTransitionedIn
 */
export const useMountTransition = (isMounted: boolean, unmountDelay: number = TRANSITION_MS) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return { hasTransitionedIn };
};
