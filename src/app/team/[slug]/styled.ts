"use client";

import { Download } from "@/components/Chapters/Chapter/styled";
import { colors } from "@/const";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 0 24px;
  color: ${colors.text};
  display: grid;
  align-content: start;
  margin-top: 80px;
`;

export const Banner = styled.div<{ $background: string }>`
  background: url(${(props) => props.$background});
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  border-radius: 16px 16px 0 0;
  position: relative;
  margin-bottom: 24px;

  &::after {
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(17, 18, 19) 100%);
    top: 0px;
    z-index: 1;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const BannerBlock = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Acknowledgments = styled(BannerBlock)`
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #9da0f7ff;
  color: #000;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  padding: 0 8px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const TabsWrapper = styled(BannerBlock)`
  bottom: 0;
  right: 16px;
`;

export const Profile = styled(BannerBlock)`
  bottom: 0;
  padding: 0px 24px;
  display: flex;
`;

export const Avatar = styled.div<{ $avatar: string }>`
  background: url(${(props) => props.$avatar});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const Names = styled.div`
  margin-left: 24px;
  margin-top: 0px;
  text-align: left;
  padding: 44px 0px;
`;

export const ShortName = styled.h4`
  font-size: 1.5rem;
`;

export const LongName = styled.div`
  line-height: 1.5;
  font-size: 1rem;
  opacity: 0.72;
`;

export const Content = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  width: 100%;
`;

export const StatsWrapper = styled.div`
  display: grid;
  gap: 32px;
`;

export const StatsBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-content: start;
`;

export const StatsBlock = styled.div`
  background: ${colors.badgeBg};
  padding: 24px;
  min-height: 154px;
  gap: 16px;
  border-radius: 16px;
  display: grid;
`;

export const StatsIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const LikesIcon = styled(StatsIcon)`
  color: rgb(195, 93, 211);
`;

export const TitlesIcon = styled(StatsIcon)`
  color: rgb(54, 179, 126);
`;

export const ChaptersIcon = styled(StatsIcon)`
  color: rgb(50, 167, 226);
`;

export const ViewsIcon = styled(StatsIcon)`
  color: rgb(243, 172, 64);
`;

export const StatsAmount = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const StatsContent = styled.div`
  display: grid;
`;

export const StatsDesc = styled.div`
  color: rgb(143, 150, 163);
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Links = styled.div`
  padding: 24px;
  display: grid;
  gap: 8px;
  border: 1px solid rgba(143, 150, 163, 0.24);
  border-radius: 16px;
`;

export const LinksTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  padding: 6px 0;
`;

export const LinkCursor = styled.a``;

export const CursorIconWrapper = styled.div`
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 8px;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(29, 30, 32);
`;

export const LinkIcon = styled(Icon)`
  color: rgb(143, 150, 163);
  width: 20px;
  height: 20px;
`;

export const ProjectsWrapper = styled.div``;

export const TabTitle = styled.h4`
  font-size: 1.5rem;
  ont-weight: 700;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Tools = styled.div`
  display: flex;
  gap: 8px;
`;
export const SortingButton = styled(Download)`
  width: 40px;
  height: 40px;
`;

export const SortingIcon = styled.svg<{ $active: boolean }>`
  width: 20px;
  height: 20px;

  ${(props) => props.$active && "transform: rotateZ(180deg);"}
`;

export const TeamProjects = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const MembersWrapper = styled.div``;
