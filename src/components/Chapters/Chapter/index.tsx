import {
  Badges,
  CreatedAt,
  Download,
  Icon,
  Segment,
  Stat,
  StatBadge,
  StatIcon,
  Title,
  Wrapper,
} from "./styled";
import { timeAgo } from "@/utils/timestamp-resolver";
import type { ComicChapter } from "@/api/types/comic-chapter";
import { Tools } from "./styled";
import DownloadIcon from "@icons/svg/download-chapter.svg";
import LikeIcon from "@icons/svg/like.svg";
import ViewIcon from "@icons/svg/view.svg";
import CommentIcon from "@icons/svg/comment.svg";

interface Props {
  chapter: ComicChapter;
}

export const Chapter = ({ chapter }: Props) => {
  return (
    <Wrapper>
      <Segment>
        <Title>{chapter.name}</Title>
        <Tools>
          <Badges>
            <StatBadge>
              <StatIcon as={LikeIcon} />
              <Stat>{chapter.likesCount}</Stat>
            </StatBadge>
            <StatBadge>
              <StatIcon as={ViewIcon} />
              <Stat>{chapter.viewsCount}</Stat>
            </StatBadge>
            <StatBadge>
              <StatIcon as={CommentIcon} />
              <Stat>{chapter.commentsCount}</Stat>
            </StatBadge>
          </Badges>
          <CreatedAt>{timeAgo(chapter.createdAt)}</CreatedAt>
        </Tools>
      </Segment>
      <Segment>
        <Download>
          <Icon as={DownloadIcon} />
        </Download>
      </Segment>
    </Wrapper>
  );
};
