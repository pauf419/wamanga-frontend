"use client";

import {
  Acknowledgments,
  Names,
  StatsBlocks,
  StatsWrapper,
  Tools,
} from "../team/[slug]/styled";
import styled from "@emotion/styled";

export const ProfileContent = styled(StatsWrapper)`
  grid-template-columns: none;
  gap: 16px;
`;

export const ProfileStatsBlocks = styled(StatsBlocks)`
  gap: 16px;
`;

export const DefaultContainer = styled.div`
  padding-top: 24px;
  display: grid;
  gap: 24px;
`;

export const BookmarksContainer = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const ToolsFlex = styled(Tools)`
  justify-content: space-between;
`;

export const ToolsBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BookmarkEditorContainer = styled.div`
  display: grid;
  gap: 12px;
`;

export const GridBox = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
`;

export const Flexbox = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 672px) {
    display: grid;
  }
`;

export const ImageWrapper = styled.div``;

export const FlexboxInputWrapper = styled.div`
  min-width: 400px;
  display: grid;
  gap: 12px;
  color: rgb(94, 99, 110);

  @media (max-width: 672px) {
    min-width: 0;
  }
`;

export const InputTitle = styled.div``;

export const WarningBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const WarningIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const WarningText = styled.div`
  color: rgb(143, 150, 163);
  line-height: 1.5;
  font-size: 0.75rem;
  width: 100%;
`;

export const TeamWrapper = styled.div`
  background-color: rgb(29, 30, 32);
  display: flex;
  border-radius: 16px;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
}
`;

export const LevelStats = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const IDStat = styled.h6`
  display: flex;
align-items: flex-end;
    gap: 4px;
    opacity: .5;
}
`;

export const StatKey = styled.span`
  color: rgb(143, 150, 163);
  font-weight: 700;
  line-height: 1.57143;
  font-size: 13px;
`;

export const StatValue = styled(StatKey)`
  font-size: 13px;
  color: rgb(255, 255, 255);
`;

export const LevelBarWrapper = styled.div`
  background: #9da0f74a;
  width: 100px;
  height: 4px;
  border-radius: 4px;
`;

export const LevelBarThumb = styled.div`
  background: rgb(117, 120, 231);
  height: 4px;
  border-radius: 4px;
`;

export const LevelStat = styled.h6`
  margin: 0px;
  line-height: 1.57143;
  font-size: 14px;
  font-family: Raleway, "Raleway Fallback", Helvetica, Arial, sans-serif;
  font-weight: 800;
`;

export const LevelIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #5a5ee7;
  color: #fff;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  padding: 0 8px;
`;

export const RankIndicator = styled(LevelIndicator)<{ $rank: string }>`
  background: #8f96a352;
  margin-top: 4px;

  ${(props) => {
    switch (props.$rank) {
      case "user":
        return `
        background: #BDBDBD40;
        color: #D4D4D4;
        `;
      case "moderator":
        return `
          background: #FFBF5140;
          color: #FFBF51;
        `;
      case "admin":
        return `
          background: #FF515140;
          color: #FF5151;
        `;
      case "owner":
        return `
           color: rgb(201 152 255);
          background: rgb(98 58 227 / 79%);
        `;
    }
  }}
`;

export const EditBannerButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 16px;
  right: 16px;
  height: 30px;
  padding: 4px 10px;
  font-size: 13px;
`;

export const ProfileStats = styled(Names)`
  display: grid;
  gap: 6px;
  justify-items: start;
`;

export const TeamInfo = styled.div`
  display: flex;
  gap: 12px;
`;

export const TeamAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const TeamContent = styled.div`
  display: grid;
  align-content: space-around;
`;

export const TeamTitle = styled.b``;

export const TeamDescription = styled.p``;

export const SettingsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 900px) {
    display: grid;
  }
`;

export const SettingsBlock = styled.div`
  background-color: rgb(29, 30, 32);
  padding: 16px;
  border-radius: 16px;
  width: 100%;
`;

export const SettingsBlockTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
`;

export const ParamsWrapper = styled.div`
  display: grid;
  gap: 24px;
`;

export const SettingsBlockParam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ParamName = styled.h6`
  margin: 0px;
  font-weight: 600;
  line-height: 1.57143;
  font-size: 0.875rem;
  color: rgb(143, 150, 163);
`;

export const UserSettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
`;

export const UserSettingsBlock = styled.div<{ $type: boolean }>`
  width: 100%;
  display: grid;
  align-items: start;
  gap: 16px;

  ${(props) =>
    props.$type
      ? `
      grid-template-columns: auto auto;
      `
      : `
      grid-template-columns: calc(40% - 16px) 60%;
      `}

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const UserAvatarPreview = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  object-fit: cover;
`;
