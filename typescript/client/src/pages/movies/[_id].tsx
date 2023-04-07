import { IMovie } from "@/interface/movie";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:7070/api/movies/ids");
  const data = await response.json();
  const paths = await data.map((_id: string) => {
    return {
      paths: {
        _id,
      },
    };
  });
  return {
    paths,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const response = await fetch(`http://localhost:7070/api/movies/${params.id}`);
  const data = await response.json();
  return { props: { data } };
};

interface Props {
  data: IMovie | null;
}

const Index: FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<IMovie | undefined>(data);
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
