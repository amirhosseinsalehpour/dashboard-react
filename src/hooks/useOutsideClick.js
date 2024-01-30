import { useEffect } from "react";
import { useRef } from "react";

function useOutsideClick(handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handelClick, true);
      return () => document.removeEventListener("click", handelClick, true);
    },
    [handler]
  );
  return ref;
}

export default useOutsideClick;
