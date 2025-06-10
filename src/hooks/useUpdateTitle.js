import { useEffect } from "react";

export const useUpdateTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};
