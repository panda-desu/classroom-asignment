import { IMovie } from "@/interface/movie";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [movie, setMovie] = useState<IMovie | undefined>();
  const { query } = useRouter();
  const { _id } = query;

  useEffect(() => {
    if (_id) {
      fetch("http://localhost:7070/api/movies/" + _id)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [_id]);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div>{movie.title}</div>
        <div>a</div>
      </div>
    </div>
  );
};

export default Index;
