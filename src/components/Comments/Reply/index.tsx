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

interface Props {
  cb: (_: string) => void;
  nested?: boolean;
}

export const Reply = ({ cb, nested = false }: Props) => {
  return (
    <Action $nested={nested}>
      <Form>
        <Icon as={PencilIcon} />
        <Textarea placeholder="Комментарий... (Максимум 500 символов)" />
      </Form>
      <Tools>
        <Icons>
          <Icon as={PictureIcon} />
          <Icon as={SmileIcon} />
          <Icon as={StickerIcon} />
          <Icon as={GifIcon} />
          <SwitchSpacer>
            <Switch cb={() => {}} placeholder="Спойлер" />
          </SwitchSpacer>
        </Icons>
        <SendButton onClick={() => cb("NULL")}>Отправить</SendButton>
      </Tools>
    </Action>
  );
};
