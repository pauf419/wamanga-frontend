import type { Member } from "@/api/types/member";
import {
  Avatar,
  AvatarWrapper,
  OpenLink,
  ProfileWrapper,
  Statuses,
  Username,
  Wrapper,
} from "./styled";
import { PrimaryButton } from "../Button";

interface Props {
  member: Member;
}

export const Member = ({ member }: Props) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={member.avatar} />
      </AvatarWrapper>
      <ProfileWrapper>
        <Username>{member.username}</Username>
        <Statuses>
          <p>{member.role}</p>
        </Statuses>
        <OpenLink href="dfsdf">Открыть профиль</OpenLink>
      </ProfileWrapper>
    </Wrapper>
  );
};
