import styled from "styled-components";

export const Sidebar = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -2rem;
`;

export const ProfileName = styled.strong`
  margin-top: 1rem;
  color: var() (--gray-100);
  line-height: 1.6;
`;

export const ProfileDescription = styled.span`
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
`;

export const EditProfileButton = styled.a`
  background: transparent;
  color: var(--purple-500);
  border: 1px solid var(--purple-500);
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  :hover {
    background: var(--purple-500);
    color: var(--white);
  }

  transition: color 0.3s, background 0.3s;
`;

export const SidebarFooter = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1rem;
`;
