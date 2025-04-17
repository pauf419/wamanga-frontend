import { useEffect, useState, type FC } from "react";
import { ButtonWrapper, TeamLinkFlexbox, TeamLinkWrapper } from "./styled";
import Input from "../Input";
import InputSelect from "../InputSelect";
import { GridBox } from "@/app/user/styled";

export type TeamLinkType =
  | "Telegram"
  | "Discord"
  | "TikTok"
  | "Donation"
  | "Other";

export interface ITeamLink {
  type: TeamLinkType;
  text: string;
  link: string;
}

interface IProps {
  onChange: (d: ITeamLink) => void;
}

export const TeamLink: FC<IProps> = ({ onChange }) => {
  const [teamLinkData, setTeamLinkData] = useState<ITeamLink>({
    type: "Other",
    text: "",
    link: "",
  });

  useEffect(() => {
    if (teamLinkData) onChange(teamLinkData);
  }, [teamLinkData]);

  return (
    <TeamLinkWrapper>
      <GridBox>
        <TeamLinkFlexbox>
          <InputSelect
            placeholder="Тип ссылки"
            elements={[
              { index: 0, value: "Telegram" },
              { index: 1, value: "Discord" },
              { index: 2, value: "TikTok" },
              { index: 3, value: "Donation" },
              { index: 4, value: "Other" },
            ]}
          />
          <Input
            onChange={(value) =>
              setTeamLinkData((prev) => ({
                ...prev,
                text: value,
              }))
            }
            type="input"
            placeholder="Текст ссылки"
          />
        </TeamLinkFlexbox>
        <Input
          onChange={(value) =>
            setTeamLinkData((prev) => ({
              ...prev,
              link: value,
            }))
          }
          type="input"
          placeholder="Ссылка"
        />
      </GridBox>
      <ButtonWrapper>
        <button className="button-transparent">Удалить ссылку</button>
      </ButtonWrapper>
    </TeamLinkWrapper>
  );
};
