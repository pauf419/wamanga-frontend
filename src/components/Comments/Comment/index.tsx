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

interface Props {
  comment: ComicComment;
}

export const Comment = ({ comment }: Props) => {
  const [replyActive, setReplyActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <Content>
        <AvatarSection>
          <Avatar src={comment.user.avatar} />
        </AvatarSection>
        <ContentSection>
          <UserInfo>
            <Username href={`/user/${comment.user.id}`}>
              {comment.user.username}
            </Username>
            <Timestamp>{timeAgo(comment.createdAt)}</Timestamp>
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
      {replyActive && (
        <ReplyWrapper>
          <Reply cb={() => null} nested />
        </ReplyWrapper>
      )}
    </Wrapper>
  );
};
