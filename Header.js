import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa"; // 햄버거 아이콘

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 171, 201);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
   margin-left: 40px;
  margin-right: 100px; /* 로고와 메뉴 사이 간격 조정 */
`;

const Nav = styled.nav`
  display: flex;
  gap: 60px;        /* 간격 */

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 기본적으로 숨김 */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ color }) => color || "black"}; /* props로 색상 변경 */
  
  &:hover {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  margin-left: auto; /* 햄버거 메뉴를 오른쪽 끝으로 정렬 */
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>여가</Logo>

      {/* 데스크탑 메뉴 (로고 바로 옆에 배치) */}
      <Nav>
        <NavLink href="#" color="#ff5733">HOME</NavLink>
        <NavLink href="#" color="#000000">잠잘 곳</NavLink>
        <NavLink href="#" color="#000000">먹을 곳</NavLink>
        <NavLink href="#" color="#000000">가는 도시</NavLink>
        <NavLink href="#" color="#000000">현지인 상품</NavLink>
      </Nav>

      {/* 모바일 메뉴 버튼 */}
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </MenuIcon>

      {/* 모바일 메뉴 */}
      <MobileNav isOpen={menuOpen}>
        <NavLink href="#" color="#ff5733">HOME</NavLink>
        <NavLink href="#" color="#33a1ff">잠잘 곳</NavLink>
        <NavLink href="#" color="#33ff57">먹을 곳</NavLink>
        <NavLink href="#" color="#ffc733">가는 도시</NavLink>
        <NavLink href="#" color="#c733ff">현지인 상품</NavLink>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
