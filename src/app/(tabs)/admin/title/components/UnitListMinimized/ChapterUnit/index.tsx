import type { Chapter } from "@/api/types/chapter";
import { MiniBoxWrapper } from "@/app/(tabs)/admin/styled";
import { useState, type FC } from "react";
import { ActionsWrapper, DeleteHandler } from "../styled";
import {
  DeleteActionWrapper,
  DeleteDialogWrapper,
  DeleteTitle,
  LinkS,
} from "../../ComicUnit/styled";
import Popover from "@mui/material/Popover";

interface Props {
  titleSlug: string;
  chapter: Chapter;
  onDelete: (_: string) => void;
}

export const ChapterListUnit: FC<Props> = ({
  titleSlug,
  chapter,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleDelete = async () => {
    try {
      onDelete(chapter._id);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? chapter._id : undefined;

  return (
    <MiniBoxWrapper $uploaded={false}>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        <DeleteDialogWrapper>
          <DeleteTitle>Подтвердите удаление главы</DeleteTitle>
          <DeleteActionWrapper>
            <button
              className="button-transparent"
              onClick={() => handleClose()}
            >
              Отмена
            </button>
            <button className="button-filled" onClick={() => handleDelete()}>
              Удалить
            </button>
          </DeleteActionWrapper>
        </DeleteDialogWrapper>
      </Popover>
      <h3>Глава {chapter.numberChapter}</h3>
      <ActionsWrapper>
        <LinkS href={`/admin/title/${titleSlug}/chapters/${chapter.slug}`}>
          Редактировать
        </LinkS>
        <DeleteHandler onClick={handleClick}>Удалить</DeleteHandler>
      </ActionsWrapper>
    </MiniBoxWrapper>
  );
};
