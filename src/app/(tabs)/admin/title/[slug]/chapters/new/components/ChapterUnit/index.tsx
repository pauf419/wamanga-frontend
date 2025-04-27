"use client";

import { Dropdown } from "@/components/Dropdown";
import {
  Action,
  VolumeInput,
  VolumeInputBody,
  VolumeInputHeader,
  VolumeInputWrapper,
} from "../../styled";
import type { ChapterUnit } from "../ActionPanel";
import ClockIcon from "@icons/svg/clock.svg";
import { useState } from "react";
import type { Team } from "@/api/types/team";
import { simpleSearch } from "@/api/team";

interface Props {
  unit: ChapterUnit;
  updateUnitFiles: (id: number, files: File[] | null) => void;
  updateUnit: <K extends keyof ChapterUnit>(
    id: number,
    key: K,
    value: ChapterUnit[K]
  ) => void;
  onDelete: (id: number) => void;
}

export const ChapterUnitComponent = ({
  unit,
  updateUnit,
  updateUnitFiles,
  onDelete,
}: Props) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const onSearch = async (query: string) => {
    const teams = await simpleSearch(query);
    setTeams(teams);
  };

  return (
    <Action key={unit.id} $uploaded={unit.uploaded}>
      <VolumeInputWrapper>
        <VolumeInputHeader>
          <div>Том</div>
          <div>Глава</div>
        </VolumeInputHeader>
        <VolumeInputBody>
          <VolumeInput
            $left
            defaultValue={unit.volume}
            onChange={(e) =>
              updateUnit(unit.id, "volume", Number(e.target.value))
            }
          />
          <VolumeInput
            $left={false}
            defaultValue={unit.chapter}
            onChange={(e) =>
              updateUnit(unit.id, "chapter", Number(e.target.value))
            }
          />
        </VolumeInputBody>
      </VolumeInputWrapper>
      <VolumeInputWrapper>
        <VolumeInputHeader>Переводчик</VolumeInputHeader>
        <Dropdown
          search
          onSearch={onSearch}
          cb={(e) => updateUnit(unit.id, "translater", e.key)}
          items={teams.map((team) => {
            return {
              key: team._id,
              name: team.name,
            };
          })}
        />
      </VolumeInputWrapper>
      <VolumeInputWrapper>
        <VolumeInputHeader>Название Главы</VolumeInputHeader>
        <input
          placeholder="Введите название главы"
          className="input-default"
          defaultValue={unit.name}
          onChange={(e) => updateUnit(unit.id, "name", e.target.value)}
          style={{ width: 250 }}
        />
      </VolumeInputWrapper>
      <button className="button-filled button-filled-icon-inside">
        <ClockIcon />
      </button>
      <input
        type="file"
        id={`unit-${unit.id}`}
        style={{ display: "none" }}
        multiple
        onChange={(e) => {
          if (!e.target.files) return;
          const sortedFiles = Array.from(e.target.files).sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { numeric: true })
          );
          updateUnitFiles(unit.id, sortedFiles);
        }}
      />
      <label
        htmlFor={`unit-${unit.id}`}
        className="button-filled label-primary"
      >
        {unit.files && unit.files.length > 0
          ? `Выбрано ${unit.files.length} файл(ов)`
          : "Выбрать"}
      </label>
      <button
        className="button-filled button-red"
        onClick={() => onDelete(unit.id)}
      >
        Удалить
      </button>
    </Action>
  );
};

export default ChapterUnitComponent;
