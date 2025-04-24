"use client";

import type { Comic } from "@/api/types/comic";
import { GridContainer } from "../../styled";
import { useState } from "react";
import Input from "@/components/Input";
import { ComicUnit } from "../components/ComicUnit";

interface Props {
  titles: Comic[];
}

const AvailableTitlesBody = ({ titles }: Props) => {
  const [search, setSearch] = useState<string>();

  return (
    <>
      <Input
        type="input"
        placeholder="Поиск"
        onChange={(value) => setSearch(value)}
      />
      <GridContainer>
        {titles
          .filter((title) =>
            search
              ? title.name
                  .trim()
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
              : true
          )
          .map((title) => (
            <ComicUnit comic={title} key={title._id} />
          ))}
      </GridContainer>
    </>
  );
};

export default AvailableTitlesBody;
