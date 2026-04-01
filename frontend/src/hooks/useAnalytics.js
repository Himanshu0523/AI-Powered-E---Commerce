import { useEffect, useState } from "react";
import { getAnalytics } from "../services/analyticsService";

export const useAnalytics = () => {
  const [data, setData] = useState(null);

  try{
    useEffect(() => {
      getAnalytics().then((res) => setData(res.data));
    }, []);
  }catch{
    console.error("Message ", error)
  }

  return data;
};