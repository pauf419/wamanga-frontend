import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  height: 35px;
  background: transparent;
  border: none;
  outline: none;
  padding-left: 13px;
  color: #fff;
  font-weight: 700;
`;

export const DropdownHeader = styled.div<{ $adaptive: boolean }>`
  display: flex;
  width: 260px;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid rgba(143, 150, 163, 0.32);
  cursor: pointer;
  align-items: center;

  ${(props) =>
    props.$adaptive &&
    `
      max-width: 200px;
      ${SearchInput} {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `}
`;

export const Icon = styled.svg<{ $active: boolean }>`
  width: 1em;
  height: 1em;
  margin-right: 16px;
  color: rgb(143, 150, 163);
  transition: 0.2s all ease;
  ${(props) => props.$active && "transform: rotateZ(180deg)"}
`;

export const SelectedName = styled.div`
  padding-right: 32px;
  min-height: 1.4375em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 8.5px 14px;
`;

export const DropdownPanel = styled.div<{ $active: boolean }>`
  width: 260px;
  position: absolute;
  background-color: rgba(29, 30, 32, 0.8);
  backdrop-filter: blur(6px);
  padding: 8px 0px;
  border-radius: 12px;
  transform: scale(0);
  transition: 0.2s all ease;
  z-index: 10;
  ${(props) =>
    props.$active &&
    `
            transform: scale(1)
        `};
`;

export const PanelElement = styled.div<{ $selected: boolean }>`
  cursor: pointer;
  transition: 0.2s all ease;

  ${(props) => props.$selected && "background: rgba(143, 150, 163, 0.16);"}

  &:hover {
    background: rgba(115, 118, 124, 0.16);
  }
`;

export const Blurer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
