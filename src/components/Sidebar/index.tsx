import { Avatar } from "../Avatar";
import * as S from "./styles";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <S.Sidebar>
      <S.Cover src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <S.Profile>
        <Avatar src="https://github.com/gabipiragibe.png" />
        <S.ProfileName>Gabriela Piragibe</S.ProfileName>
        <S.ProfileDescription>Web Developer</S.ProfileDescription>
      </S.Profile>
      <S.SidebarFooter>
        <S.EditProfileButton href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </S.EditProfileButton>
      </S.SidebarFooter>
    </S.Sidebar>
  );
}
