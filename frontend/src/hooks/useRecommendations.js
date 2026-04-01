import { useEffect, useState } from "react";
import { getRecommendations } from "../services/recommendationService";
export const useRecommendations = (userId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRecommendations(userId);
        setData(res.data);
      } catch(err) {
        console.log("Recommunication Error :" , err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchData();
  }, [userId]);

  return {data , loading};
};