import { ImgHTMLAttributes } from 'react';
import * as S from "./styles";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return <S.Avatar hasBorder={hasBorder} 
  {...props}
  />;
};
