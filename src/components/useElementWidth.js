import { useEffect, useState } from "react";

function useElementWidth(elementId) {
  // STATE
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = document.getElementById(elementId);

    function handleResize() {
      console.log("useElementWidth");
      setWidth(el.getBoundingClientRect().width);
    }

    // EVENT LISTENER
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementId]);

  return width;
}

export default useElementWidth;
