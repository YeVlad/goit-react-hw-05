import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchCredits from "../../functions/searchCredits";

export default function Cast() {
  const [cast, setCast] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const credit = await searchCredits(movieId);
        setCast(credit);
        console.log(credit);
      } catch (error) {
        console.log("ops");
      }
    };
    fetchCast();
  }, []);
  if (cast) {
    return <ul></ul>;
  }
}
