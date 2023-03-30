import Image from "next/image";
import React from "react";
import { Genre, Movie, Element } from "../../../types/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../../../atoms/modalAtom";

type Props = {
  movie: Movie;
  //   movie: Movie| DocumentData;
};

const ThumbNail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]  md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={""}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
};

export default ThumbNail;
