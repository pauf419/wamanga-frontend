import {
  Action,
  Textarea,
  Icon,
  Tools,
  Icons,
  Form,
  SwitchSpacer,
  SendButton,
} from "./styled";
import PencilIcon from "@icons/svg/pencil-stroked.svg";
import PictureIcon from "@icons/svg/picture.svg";
import SmileIcon from "@icons/svg/smile.svg";
import StickerIcon from "@icons/svg/sticker.svg";
import GifIcon from "@icons/svg/gif.svg";
import { Switch } from "@/components/Switch";
import { useUserStore } from "@/app/store";
import { Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { CreateCommentDto } from "@/api/comment";
import type { Comic } from "@/api/types/comic";
import type { Chapter } from "@/api/types/chapter";

interface Props {
  cb: (_: CreateCommentDto) => void;
  nested?: boolean;
  manga: Comic;
  chapter?: Chapter | null;
}

export const Reply = ({ cb, nested = false, manga, chapter = null }: Props) => {
  const user = useUserStore((state) => state.user);

  const [comment, setComment] = useState<CreateCommentDto>({
    authorId: user ? user._id : "",
    text: "hello",
    mangaId: manga._id,
    chapterId: chapter ? chapter._id : undefined,
    isSpoilered: false,
    userId: undefined,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (user && user._id)
      setComment((prev) => {
        return {
          ...prev,
          authorId: user._id,
        };
      });
  }, [user]);

  return (
    <Action $nested={nested}>
      <Form>
        <Icon as={PencilIcon} />
        <Textarea
          ref={textareaRef}
          onChange={(e) => {
            adjustHeight();
            setComment((prev) => {
              return {
                ...prev,
                text: e.target.value,
              };
            });
          }}
          placeholder="Комментарий... (Максимум 500 символов)"
        />
      </Form>
      <Tools>
        <Icons>
          <Icon as={PictureIcon} />
          <Icon as={SmileIcon} />
          <Icon as={StickerIcon} />
          <Icon as={GifIcon} />
          <SwitchSpacer>
            <Switch
              cb={(b) =>
                setComment((prev) => {
                  return {
                    ...prev,
                    isSpoilered: b,
                  };
                })
              }
              placeholder="Спойлер"
            />
          </SwitchSpacer>
        </Icons>
        {user ? (
          <SendButton onClick={() => cb(comment)}>Отправить</SendButton>
        ) : (
          <Tooltip title="Только авторизованные пользователи могут отправлять комментарии">
            <SendButton className="primary-disabled">Отправить</SendButton>
          </Tooltip>
        )}
      </Tools>
    </Action>
  );
};
