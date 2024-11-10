import { styled, Grid2 } from "@mui/material";

// main container //
const SidebarContainer = styled("div")`
  height: 96%;
  width: 11%;
  position: relative;
  border-radius: 1px;
  display: block;
  background: var(--color-blue-primary);
  position: absolute;
  overflow: hidden;
  z-index: 3;
  flex-grow: 1;
  transition: width 0.12s;

  @media (max-width: 800px) {
    width: 5%;
  }

  &.opened {
    & *.opened-content {
      color: var(--color-black-bg);
      flex-grow: 1;
    }
  }

  @keyframes surge {
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

//Subcontainers:
const LogoSubcontainer = styled(Grid2)({
  display: "flex",
  justifyContent: "center",
  height: "7%",
});

const ItemsSubcontainer = styled(Grid2)({
  height: "82%",
});

const ProfileIconSubcontainer = styled(Grid2)({
  width: "100%",
  display: "flex",
});

const MenuList = styled("ul")`
  width: 100%;
  list-style: none;
  padding: 0;
  font-weight: 600;

  li {
    &:hover {
      background: var(--pastel-blue-secondary);
    }

    a {
      & > *:first-child {
        width: 35px;
        text-align: center;
      }
    }

    &.active {
      background: var(--color-blue-primary);
    }
  }
`;

const Item = styled("li")`
  border-radius: 10px;

  a {
    padding: 8px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
    }
  }
`;

export {
  SidebarContainer,
  MenuList,
  Item,
  LogoSubcontainer,
  ItemsSubcontainer,
  ProfileIconSubcontainer,
};
