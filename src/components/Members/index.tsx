import type { Member as MemberType } from "@/api/types/member";
import {
  Avatar,
  AvatarWrapper,
  OpenLink,
  ProfileWrapper,
  Statuses,
  Username,
  Wrapper,
} from "./styled";

interface Props {
  member: MemberType;
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
