import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`;

export const CommentBox = styled.div`
  flex: 1;
`;
export const CommentContent = styled.div`
  background: var(--gray-700);
  border-radius: 8px;
  padding: 1rem;

  p {
    margin-top: 1rem;
    color: var(--gray-300);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Author = styled.strong`
  display: block;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const DateAndTime = styled.time`
  display: block;
  font-size: 0.75rem;
  line-height: 1.6rem;
  color: var(--gray-400);
`;

export const AuthorAndTime = styled.div``;

export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--gray-400);
  cursor: pointer;
  line-height: 0;
  border-radius: 4px;

  :hover {
    color: var(--red-500);
  }
`;

export const Footer = styled.footer`
  margin-top: 1rem;
`;

export const FooterButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--gray-400);
  cursor: pointer;
  border-radius: 2px;

  display: flex;
  align-items: center;

  :hover {
    color: var(--purple-300);
  }

  svg {
    margin-right: 0.5rem;
  }

  span {
    ::before {
      content: "•";
      padding: 0 0.25rem;
      margin: 0 0.5rem;
    }
  }
`;
