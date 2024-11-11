import * as S from "./styles";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}
export const Avatar = ({ src, hasBorder = true, alt }: AvatarProps) => {
  return <S.Avatar src={src} hasBorder={hasBorder} alt={alt} />;
};
