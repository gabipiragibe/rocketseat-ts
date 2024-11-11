import styled from "styled-components";

export const Container = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTime = styled.time`
  font-size: 0.875rem;
  color: var(--gray-400);
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.strong`
  display: block;
  color: var(--gray-100);
  line-height: 1.6;
`;

export const AuthorRole = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
`;

export const Post = styled.div`
  margin-top: 2rem;
`;

export const TextContent = styled.p`
  margin-top: 1rem;
`;

export const LinkContent = styled.a`
  font-weight: bold;
  color: var(--purple-500);

  :hover {
    color: var(--purple-3000);
  }
`;

export const CommentForm = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6;
    color: var(--gray-100);
  }

  textarea {
    width: 100%;
    background: var(--gray-700);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.4;
  }
`;

export const DisplayButton = styled.div`
  /* visibility: hidden;
  max-height: 0;

  :focus-within {
    visibility: visible;
    max-height: none;
  } */
  //ajustar
`;

export const CommentButton = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--purple-500);
  color: var(--white);
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : " pointer")};
  transition: background-color 0.2s;
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};

  :not(:disabled):hover {
    background: var(--purple-300);
  }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;
