import { ThumbsUp, Trash } from "phosphor-react";
import * as S from "./styles";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;

}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  //state é um argumento, é o valor mais recente. 
  //ele vai devolver qual o valor mais atual, como se formasse uma fila

  return (
    <S.Container>
      <Avatar
        hasBorder={false}
        src="https://github.com/gabipiragibe.png"
        alt=""
      />
      <S.CommentBox>
        <S.CommentContent>
          <S.Header>
            <S.AuthorAndTime>
              <S.Author>Gabriela Piragibe</S.Author>
              <S.DateAndTime
                title="19 de setembro às 19:46h"
                dateTime="2024-09-19 19:46:00"
              >
                Cerca de 1h atrás
              </S.DateAndTime>
            </S.AuthorAndTime>
            <S.DeleteButton onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </S.DeleteButton>
          </S.Header>
          <p>{content}</p>
        </S.CommentContent>
        <S.Footer>
          <S.FooterButton onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span style={{padding:"5px"}}>{likeCount}</span>
          </S.FooterButton>
        </S.Footer>
      </S.CommentBox>
    </S.Container>
  );
};
