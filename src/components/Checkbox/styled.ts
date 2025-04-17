import styled from "@emotion/styled";

export const CheckboxIcon = styled.svg`
  width: 24px;
  height: 24px;
  display: block;
  flex-shrink: 0;
  fill: currentcolor;
  margin: 8px 8px 8px 0;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CheckboxWrapper = styled.label<{ $raw: boolean }>`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s all ease;

  ${(props) =>
    props.$raw &&
    `
      svg {
        margin: 0!important;
      }
    `}
`;

export const CheckboxIconFilled = styled(CheckboxIcon)`
  display: none;
  color: #5a5ee7;
`;

export const CheckboxIconUnfilled = styled(CheckboxIcon)`
  display: block;
  color: #818792;
`;

export const CheckboxInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked ~ ${CheckboxIconFilled} {
    display: block;
  }

  &:checked ~ ${CheckboxIconUnfilled} {
    display: none;
  }
`;

export const Placeholder = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  user-select: none;
`;
