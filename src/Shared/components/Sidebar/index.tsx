import React from "react";
import { GoHome } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Item,
  MenuList,
  LogoSubcontainer,
  ItemsSubcontainer,
  ProfileIconSubcontainer,
} from "./style";

const menus = [
  {
    name: "Inicio",
    url: "/",
    icon: <GoHome size={19} color="var(--color-black-bg)" />,
  },
  {
    name: "Aula",
    url: "/profile",
    icon: <RxVideo size={19} color="var(--color-black-bg)" />,
  },
  {
    name: "Anotacoes",
    url: "/my-experiences",
    icon: <IoDocumentTextOutline size={19} color="var(--color-black-bg)" />,
  },
  {
    name: "Calendario",
    url: "/onboarding",
    icon: <BsCalendarEvent size={19} color="var(--color-black-bg)" />,
  },
];
const meuPerfil = [
  {
    name: "Meu Perfil",
    url: "/profile",
    icon: <IoMdPerson size={19} color="var(--color-black-bg)" />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer className={"opened"}>
      {/* Logo */}
      <LogoSubcontainer>
        <img src="vite.svg" style={{ width: "23px" }}></img>
      </LogoSubcontainer>

      {/* Itens */}
      <ItemsSubcontainer>
        <MenuList>
          {menus.map((menu, index) => (
            <Item key={index}>
              <Link to={`${menu.url}`}>
                <span
                  style={{
                    paddingTop: "0.3rem",
                    paddingRight: "0.3rem",
                  }}
                >
                  {menu.icon}
                </span>
                <p
                  className="opened-content"
                  style={{ fontSize: "0.9rem", fontWeight: "semi-bold" }}
                >
                  {menu.name}
                </p>
              </Link>
            </Item>
          ))}
        </MenuList>
      </ItemsSubcontainer>

      {/* Profile Item */}
      <ProfileIconSubcontainer>
        <MenuList>
          <Item>
            <Link to={"/profile"}>
              <span
                style={{
                  paddingTop: "0.3rem",
                  paddingRight: "0.3rem",
                }}
              >
                {meuPerfil[0].icon}
              </span>
              <p
                className="opened-content"
                style={{ fontSize: "0.9rem", fontWeight: "semi-bold" }}
              >
                {meuPerfil[0].name}
              </p>
            </Link>
          </Item>
        </MenuList>
      </ProfileIconSubcontainer>
    </SidebarContainer>
  );
};

export default Sidebar;
