"use client";

import { useEffect, useState } from "react";
import {
  ActionContainer,
  ProgressBarContainer,
  ProgressBarFill,
  UnitsList,
  UnitsListInside,
  UploadErrorWrapper,
  UploadWrapper,
} from "../../styled";
import ControllerComponent from "../Controller";
import ChapterUnitComponent from "../ChapterUnit";
import { createChapter } from "@/api/chapter";
import type { Comic } from "@/api/types/comic";
import Modal from "@/components/Modal";
import type { Chapter } from "@/api/types/chapter";

export interface ChapterUnit {
  id: number;
  notification: boolean;
  volume: number;
  chapter: number;
  translater: string;
  name: string;
  files: FileList | null;
  uploaded: boolean;
}

export interface Props {
  title: Comic;
}

export const ActionPanel = ({ title }: Props) => {
  let lastChapter: Chapter =
    title.chapters.length > 1
      ? title.chapters[title.chapters.length - 1]
      : title.chapters[title.chapters.length];
  if (!lastChapter)
    lastChapter = {
      volumeIndex: 1,
      numberChapter: 0,
    } as Chapter;
  const template: ChapterUnit = {
    id: 1,
    notification: false,
    volume: lastChapter.volumeIndex,
    chapter: lastChapter.numberChapter + 1,
    translater: "",
    name: "",
    files: null,
    uploaded: false,
  };

  const [unitsAmount, setUnitsAmount] = useState<ChapterUnit[]>([template]);
  const [uploadModalActive, setUploadModalActive] = useState<boolean>(false);
  const [unitsUploaded, setUnitsUploaded] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);

  const onCreate = (amount: number) => {
    setUnitsAmount((prev) => {
      const newUnits: ChapterUnit[] = Array.from(
        { length: amount },
        (_, index) => {
          const id =
            prev.length > 0
              ? Math.max(...prev.map((u) => u.id)) + index + 1
              : index + 1;
          const newChapter =
            prev.length > 0
              ? Math.max(...prev.map((u) => u.chapter)) + index + 1
              : index + 1;
          return {
            ...template,
            id,
            volume: 1,
            chapter: newChapter,
            name: "",
            uploaded: false,
          };
        }
      );

      return [...prev, ...newUnits];
    });
  };

  const onUpload = async () => {
    setUnitsUploaded(0);
    setErrors([]);
    setUploadModalActive(true);
    const uploadedSuccessfully: number[] = [];
    for (let i = 0; i < unitsAmount.length; i++) {
      try {
        await createChapter({
          mangaId: title._id,
          numberChapter: unitsAmount[i].chapter,
          title: unitsAmount[i].name,
          lang: "Russian",
          files: unitsAmount[i].files,
          hide: false,
          views: 0,
          teamId: unitsAmount[i].translater,
          mangaAlternativeName: title.alternativeName,
          volumeIndex: unitsAmount[i].volume,
        });
        setUnitsUploaded((prev) => prev + 1);
        setUnitsAmount((prev) => {
          return prev.map((unit) => {
            if (unit.id === unitsAmount[i].id)
              return {
                ...unit,
                uploaded: true,
              };
            return unit;
          });
        });
      } catch (e) {
        console.error(e);
        if (e && typeof e === "object" && "response" in e) {
          const err = e as { response: { data: { message: string } } };
          setErrors((prev) => [...prev, err.response.data.message]);
        }
      }
    }
  };

  const updateUnitFiles = (id: number, fileList: FileList | null) => {
    setUnitsAmount((prev) => {
      return prev.map((unit) => {
        if (unit.id === id)
          return {
            ...unit,
            files: fileList,
          };
        return unit;
      });
    });
  };

  const updateUnit = <K extends keyof ChapterUnit>(
    id: number,
    key: K,
    value: ChapterUnit[K]
  ) => {
    setUnitsAmount((prev) =>
      prev.map((unit) => {
        if (unit.id !== id) return unit;

        const updatedUnit = {
          ...unit,
          [key]: value,
        };

        if (key === "volume") {
          updatedUnit.name = unit.name.replaceAll(
            `Том ${unit.volume}`,
            `Том ${value}`
          );
        }

        if (key === "chapter") {
          updatedUnit.name = unit.name.replaceAll(
            `Глава ${unit.chapter}`,
            `Глава ${value}`
          );
        }

        if (key === "name" && typeof value === "string") {
          const volumeMatch = value.match(/Том (\d+)/);
          const chapterMatch = value.match(/Глава (\d+)/);

          if (volumeMatch) {
            updatedUnit.volume = Number(volumeMatch[1]);
          }

          if (chapterMatch) {
            updatedUnit.chapter = Number(chapterMatch[1]);
          }
        }

        return updatedUnit;
      })
    );
  };

  const onDelete = (id: number) => {
    setUnitsAmount((prev) => prev.filter((unit) => unit.id !== id));
  };

  const onChecked = (checked: boolean) => {};

  useEffect(() => {
    if (!uploadModalActive) {
      setUnitsAmount((prev) => {
        return prev.filter((unit) => unit.uploaded !== true);
      });
    }
  }, [uploadModalActive]);

  return (
    <ActionContainer>
      <Modal
        state={uploadModalActive}
        setState={setUploadModalActive}
        title={`Загрузка данных (${unitsAmount.length})`}
      >
        <UploadWrapper>
          <b>
            Загружено: {unitsUploaded}/{unitsAmount.length}
          </b>
          <ProgressBarContainer>
            <ProgressBarFill
              $progress={(unitsUploaded / unitsAmount.length) * 100}
            />
          </ProgressBarContainer>
          {errors.length ? (
            errors.map((error, index) => (
              <UploadErrorWrapper key={index}>{error}</UploadErrorWrapper>
            ))
          ) : (
            <></>
          )}
        </UploadWrapper>
      </Modal>
      <UnitsList>
        <UnitsListInside>
          {unitsAmount.map((unit) => (
            <ChapterUnitComponent
              key={unit.id}
              onDelete={onDelete}
              unit={unit}
              updateUnit={updateUnit}
              updateUnitFiles={updateUnitFiles}
            />
          ))}
        </UnitsListInside>
      </UnitsList>
      <ControllerComponent
        onUpload={onUpload}
        onCreate={onCreate}
        onChecked={onChecked}
      />
    </ActionContainer>
  );
};

export default ActionPanel;
