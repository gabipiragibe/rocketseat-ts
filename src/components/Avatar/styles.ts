import styled from "styled-components";

interface AvatarProps {
  hasBorder: boolean;
}

export const Avatar = styled.img<AvatarProps>`
  ${({ hasBorder }) => `
    width: ${hasBorder ? "5rem" : "3rem"};
    height: ${hasBorder ? "5rem" : "3rem"};
    border-radius: 8px;
    border: ${hasBorder ? "4px solid var(--gray-800)" : "none"};
    outline: ${hasBorder ? "2px solid var(--purple-500)" : "none"};
  `}
`;
