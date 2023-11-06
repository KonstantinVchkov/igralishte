import { useState, useEffect } from "react";
import { ReturnType } from "@/types/GlobalTypes";

export const useFetch = <T>(url: string): ReturnType<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error 404: Not found");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};
