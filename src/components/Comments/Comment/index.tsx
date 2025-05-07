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
import { useUserStore } from "@/app/store";
import { UserRole } from "@/components/RoleSegregator";

interface Props {
  comment: IComment;
  deleteComment: (commendId: string) => void;
}

export const Comment = ({ comment, deleteComment }: Props) => {
  const user = useUserStore((state) => state.user);
  const [replyActive, setReplyActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <Content>
        <AvatarSection>
          <Avatar src={comment.author.avatar} />
        </AvatarSection>
        <ContentSection>
          <UserInfo>
            <Username href={`/user/${comment.author._id}`}>
              {comment.author.username}
              {comment.author.role && comment.author.role !== "user" && (
                <RankIndicator $rank={comment.author.role}>
                  {`
                           
                            ${comment.author.role === "moderator" ? "Модератор" : ""}
                            ${comment.author.role === "admin" ? "Администратор" : ""}
                            ${comment.author.role === "owner" ? "Владелец" : ""}
                        `}
                </RankIndicator>
              )}
            </Username>
            <Timestamp>
              {timeAgo(Number(new Date(comment.createdAt)))}
            </Timestamp>
          </UserInfo>
          <Text>{comment.text}</Text>
          <Tools>
            {(comment.author._id === user?._id ||
              user?.role === UserRole.Admin ||
              user?.role === UserRole.Moderator ||
              user?.role === UserRole.Owner) && (
              <ToggleButton
                className="button-transparent-red"
                onClick={() => deleteComment(comment._id)}
                $active={replyActive}
              >
                Удалить
              </ToggleButton>
            )}
          </Tools>
        </ContentSection>
      </Content>
    </Wrapper>
  );
};
