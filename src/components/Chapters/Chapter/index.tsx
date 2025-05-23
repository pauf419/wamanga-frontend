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
import type { Chapter } from "@/api/types/chapter";
import Link from "next/link";
import type { Comic } from "@/api/types/comic";
import { useRouter } from "next/navigation";

interface Props {
  chapter: Chapter;
  title: Comic;
}

export const ChapterUnit = ({ chapter, title }: Props) => {
  const router = useRouter();

  console.log(chapter);

  return (
    <Wrapper
      onClick={() =>
        router.push(
          `/${title.seoGenre}/${title.alternativeName}/${chapter.slug}`
        )
      }
    >
      <Segment>
        <Title>
          {chapter.titleSys
            ? chapter.title
            : `Глава ${chapter.numberChapter} - ${chapter.title}`}
        </Title>
        <Tools>
          <Badges>
            <StatBadge>
              <StatIcon as={LikeIcon} />
              <Stat>{chapter.likes}</Stat>
            </StatBadge>
          </Badges>
          <CreatedAt>
            {timeAgo(new Date(chapter.uploadDate).getTime())}
          </CreatedAt>
        </Tools>
      </Segment>
      <Segment></Segment>
    </Wrapper>
  );
};
