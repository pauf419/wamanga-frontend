import type { ComicComment } from "@/api/types/comic-comment";
import {
  Avatar,
  AvatarSection,
  Content,
  ContentSection,
  Fires,
  Icon,
  ReplyWrapper,
  Text,
  Timestamp,
  ToggleButton,
  Tools,
  UserInfo,
  Username,
  Wrapper,
} from "./styled";
import { timeAgo } from "@/utils/timestamp-resolver";
import { Reply } from "../Reply";
import { useState } from "react";
import FireIcon from "@icons/svg/fire.svg";
import type { IComment } from "@/api/types/comment";
import { RankIndicator } from "@/app/user/styled";

interface Props {
  comment: IComment;
}

export const Comment = ({ comment }: Props) => {
  const [replyActive, setReplyActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <Content>
        <AvatarSection>
          <Avatar src={comment.author.avatar} />
        </AvatarSection>
        <ContentSection>
          <UserInfo>
            <Username href={`/user/${comment.author.id}`}>
              {comment.author.username}
              <RankIndicator $rank={comment.author.role}>
                {comment.author.role &&
                  comment.author.role !== "user" &&
                  `
                           
                            ${comment.author.role === "moderator" ? "Модератор" : ""}
                            ${comment.author.role === "admin" ? "Администратор" : ""}
                            ${comment.author.role === "owner" ? "Владелец" : ""}
                        `}
              </RankIndicator>
            </Username>
            <Timestamp>
              {timeAgo(Number(new Date(comment.createdAt)))}
            </Timestamp>
          </UserInfo>
          <Text>{comment.text}</Text>
          <Tools>
            <ToggleButton
              onClick={() => setReplyActive(!replyActive)}
              $active={replyActive}
            >
              {replyActive ? "Закрыть" : "Ответить"}
            </ToggleButton>
            <ToggleButton $active={false} onClick={() => null}>
              <Icon as={FireIcon} />
              <Fires>12</Fires>
            </ToggleButton>
          </Tools>
        </ContentSection>
      </Content>
    </Wrapper>
  );
};
