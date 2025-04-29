"use client";

import type { Comic } from "@/api/types/comic";
import { GridContainer } from "../../styled";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import { ComicUnit } from "../components/ComicUnit";
import { simpleSearch } from "@/api/title";

interface Props {
  preset: Comic[];
}

const AvailableTitlesBody = ({ preset }: Props) => {
  const [search, setSearch] = useState<string>();
  const [sendTimeout, setSendTimeout] = useState<any>();
  const [titles, setTitles] = useState<Comic[]>(preset);

  const searchTitles = async (query: string) => {
    try {
      const titles = await simpleSearch(query);
      setTitles(titles);
    } catch (e) {
      console.error(e);
      setTitles([]);
    }
  };

  useEffect(() => {
    clearTimeout(sendTimeout);
    if (search) {
      const tid = setTimeout(() => {
        searchTitles(search);
      }, 800);
      setSendTimeout(tid);
    }
  }, [search]);

  return (
    <>
      <Input
        type="input"
        placeholder="Поиск"
        onChange={(value) => setSearch(value)}
      />
      <GridContainer>
        {titles.map((title) => (
          <ComicUnit comic={title} key={title._id} />
        ))}
      </GridContainer>
    </>
  );
};

export default AvailableTitlesBody;
