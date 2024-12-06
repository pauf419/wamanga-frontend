import React from "react";
import { BackButton, BackText, ComicsPageSC } from "./styled";
import BackIcon from "@icons/svg/back-filled.svg";
import { getComics } from "@/api/mocks/queries/use-get-comics";

const ComicsPage = ({ params }: { params: { slug: string } }) => {
  const comics = getComics();

  return (
    <ComicsPageSC>
      <BackButton>
        <BackIcon />
        <BackText>Назад</BackText>
      </BackButton>
      {comics.name}
    </ComicsPageSC>
  );
};

export default ComicsPage;
