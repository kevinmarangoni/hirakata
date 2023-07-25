'use client'

import React, { useEffect, useState } from "react";
import styled, { useTheme} from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

// import ThemeSwitch from "/src/general-components/ThemeSwitch.jsx";
// import { ChakraProvider } from "@chakra-ui/react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { motion } from "framer-motion";

import { menu } from "./menuData";
import OutsideClickHandler from "react-outside-click-handler";

const LateralNav:React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const [locale] = useState(router.pathname);
  const [selectedTheme, setSelectedTheme] = useState(0);

  const [isCollapsed, setisCollapsed] = useState(false);
  const [menuList, setMenuList] = useState(menu ?? []);

  useEffect(() => {
    setMenuList(menu);
  }, []);

  type TConditionalStyle = {
    open: {
      width: string;
    };
    close: {
      width: string;
    };
  };

  const conditionalStyle:TConditionalStyle = {
    open: {
      width: `275px`
    },
    close: {
      width: `85px`
    }
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => isCollapsed && setisCollapsed(!isCollapsed)}
    >
      <Container isCollapsed={isCollapsed} conditionalStyle={conditionalStyle}>
        <Content>
          <div>
            <Top isCollapsed={isCollapsed}>
              <Logo isCollapsed={isCollapsed}>
                <Link href={"/"}>
                  Hirakata
                </Link>
              </Logo>
              {isCollapsed ? (
                <CollapseButtonOpen isCollapsed={isCollapsed}>
                  <button
                    onClick={() => {
                      setisCollapsed(!isCollapsed);
                    }}
                  >
                    {!isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </button>
                </CollapseButtonOpen>
              ) : (
                <CollapseButtonClose isCollapsed={isCollapsed}>
                  <button
                    onClick={() => {
                      setisCollapsed(!isCollapsed);
                    }}
                  >
                    {!isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </button>
                </CollapseButtonClose>
              )}
            </Top>
            <Middle>
              <Menu>
                <div>
                  {menuList.length > 0 &&
                    menuList.map((item:any, index:number) => {
                      return (
                        <ListItem
                          item={item}
                          key={index}
                          isCollapsed={isCollapsed}
                          locale={locale}
                          theme={theme}
                          conditionalStyle={conditionalStyle}
                          isSelected={item.path === router.pathname}
                          selectedChildren={
                            item.subs &&
                            item.subs.find((it:any) => it.path === router.pathname)
                          }
                        />
                      );
                    })}
                </div>
              </Menu>
            </Middle>
          </div>
          <Bottom>
            {/* <ChakraProvider>
              <ThemeSwitchContainer>
                <ThemeSwitch
                  setSelectedTheme={setSelectedTheme}
                  isCollapsed={isCollapsed}
                />
              </ThemeSwitchContainer>
            </ChakraProvider> */}
          </Bottom>
        </Content>
      </Container>
    </OutsideClickHandler>
  );
};

export default LateralNav;

interface IStyles {
  conditionalStyle: {
    open: {
      width: string;
    };
    close: {
      width: string;
    };
  };
  isCollapsed: boolean;
  isSelected: boolean;
}

const Container = styled.div<IStyles>`
  position: absolute;
  left: 0;
  width: ${(props) =>
    props.isCollapsed
      ? props.conditionalStyle.open.width
      : props.conditionalStyle.close.width};
  height: 100vh;
  /* background-color: ${(props) =>
    props.theme.colors.header.backgroundColor.internal}; */
  overflow-y: scroll !important;
  overflow-x: visible;
  &::-webkit-scrollbar {
    width: 0px;
    border: none;
  }
  * {
    //border: 1px dashed ${(props) => props.theme.colors.texts.mainTextColor};
  }
  padding: 10px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Logo = styled.div<IStyles>`
  /* width: 150px; */
  display: flex;
  padding: ${(props) => (props.isCollapsed ? `10px` : `15px`)};
  img {
    transition: unset !important;
    width: ${(props) => (props.isCollapsed ? `100%` : `40px`)};
    height: ${(props) => (props.isCollapsed ? `45px` : `40px`)};
    min-height: 45px;
    min-width: ${(props) => props.isCollapsed && `140px`};
  }
`;

const CollapseButtonOpen = styled.div`
  display: flex;
  align-items: center;
  button {
    /* background-color: ${(props) =>
      props.theme.colors.header.secondaryColor.internal}; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    overflow: hidden;
    border-radius: 5px;
  }
  * {
    color: white;
  }
  :hover {
    scale: 1.05;
    //transform: translateX(-15%);
  }
`;

const CollapseButtonClose = styled.div`
  width: 100%;
  button {
    width: 100%;
    /* background-color: ${(props) =>
      props.theme.colors.header.secondaryColor.internal}; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    overflow: hidden;
    border-radius: 5px;
  }
  * {
    color: white;
  }
  :hover {
    scale: 1.05;
    //transform: translateX(15%);
  }
`;

const Middle = styled.div`
  display: flex;
`;

const Menu = styled.div`
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const UserContainer = styled.div``;

const ThemeSwitchContainer = styled.div``;

//----------------------------------------------------------------------

interface IListItem {
  item: any
  locale: string
  isCollapsed: boolean
  theme: any
  isSelected: boolean
  selectedChildren: any
  conditionalStyle: any
}

export const ListItem: React.FC<IListItem> = ({
  item,
  locale,
  isCollapsed,
  theme,
  isSelected,
  selectedChildren,
  conditionalStyle,
}) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const buttonColor =
    theme.name === "dark"
      ? theme.colors.general.blue
      : theme.colors.general.purple;

  return (
    <ItemContainer>
      <FatherLi
        onClick={(event) => {
          router.push(item.path);
        }}
        buttonColor={buttonColor}
        isSelected={isSelected}
        isCollapsed={isCollapsed}
      >
        <div>
          <IconSpan isSelected={isSelected}>{item.icon}</IconSpan>
          {isCollapsed && <LabelSpan>{item.label}</LabelSpan>}
        </div>
        {item.subs.length > 0 && (
          <ExpandButton
            isCollapsed={isCollapsed}
            expanded={expanded}
            style={{ zIndex: 99 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ExpandButton>
        )}
      </FatherLi>
      {item.subs.length > 0 && expanded && (
        <DropdownMenu>
          {item.subs.map((subItem: any, subIndex: number) => {
            const isChildrenSelected = selectedChildren?.path === subItem.path;
            return (
              <ChildrenLi
                isSelected={isChildrenSelected}
                buttonColor={buttonColor}
                key={subIndex}
                onClick={() => {
                  router.push(subItem.path);
                }}
              >
                <div>
                  <IconSpan>{subItem.icon}</IconSpan>
                  {isCollapsed && <LabelSpan>{subItem.label}</LabelSpan>}
                </div>
              </ChildrenLi>
            );
          })}
        </DropdownMenu>
      )}
    </ItemContainer>
  );
};

const ItemContainer = styled(motion.div)<IStyles>`
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    flex-wrap: wrap;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      column-gap: 10px;

      span {
        /* color: ${(props) =>
          props.isSelected && props.theme.colors.header.mainTextColor.external};
        */
      }
    }
    :hover {
      /* background-color: ${(props) =>
        props.theme.colors.header.secondaryColor.internal};
      color: ${(props) => props.theme.colors.header.mainTextColor.external}; */
      scale: 1.03;
      * {
        color: white;
      }
    }
  }
`

const FatherLi = styled.li<IStyles>`
  /* background-color: ${(props) => props.isSelected && props.buttonColor}; */
  display: flex;
  justify-content: ${(props) =>
    props.isCollapsed ? `space-between` : `center !important`};

  * {
    color: ${(props) => props.isSelected && "#fff"};
  }
`;

const ExpandButton = styled.button<IStyles>`
  * {
    color: ${(props) => props.theme.colors.texts.mainTextColor};
  }
  scale: ${(props) => (props.isCollapsed ? `1` : `1`)};
  background-color: transparent;
  :hover {
    scale: 1.1;
  }
`;

const DropdownMenu = styled.div`
  //border: 1px dashed ${(props) => props.theme.colors.texts.mainTextColor};
`;

const ChildrenLi = styled.li<IStyles>`
  /* background-color: ${(props) => props.isSelected && props.buttonColor}; */
  justify-content: ${(props) =>
    props.isCollapsed ? `space-between` : `center`};

  * {
    color: ${(props) => props.isSelected && "#fff"};
  }
`;

const IconSpan = styled.span`
  //border: 1px dashed ${(props) => props.theme.colors.texts.mainTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    /* color: ${(props) => props.isSelected && "white"}; */
  }
`;

const LabelSpan = styled.span`
  //border: 1px dashed ${(props) => props.theme.colors.texts.mainTextColor};
`;
