"use client";
import menuItems from "@/utils/menuItems";
import { List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

type CustomSubMenu = {
  id?: string;
  label?: string;
  url?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  subItem?: CustomSubMenu[];
  setMenuHover?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const CustomSubMenu: React.FC<CustomSubMenu> = ({ subItem, setMenuHover }) => {
  const [hover, setHover] = useState<string | undefined>(undefined);
  return (
    <List
      sx={{
        position: "absolute",
        top: 0,
        left: "100%",
        transition: "all 0.3s ease",
        bgcolor: "secondary.main",
        color: "white.light",
        minWidth: "220px",
      }}
    >
      {subItem?.map(({ id, label, url, target, subItem }: CustomSubMenu) => {
        const props = { subItem, hover, setHover };
        return (
          <ListItem
            sx={{
              "&:hover": {
                bgcolor: "secondary.light",
                color: "white.light",
                "a:hover": { color: "white.light" },
              },
              ".MuiListItemText-root": {
                padding: "8px 12px",
              },
            }}
            key={id}
            onMouseEnter={() => setHover(id)}
            onMouseLeave={() => setHover(undefined)}
            onClick={() => {
              if (url && setMenuHover) {
                setMenuHover(undefined);
              }
            }}
          >
            {url ? (
              <Link href={url} target={target}>
                <ListItemText primary={label} />
              </Link>
            ) : (
              <ListItemText primary={label} />
            )}
            {subItem && hover == id && <CustomSubMenu {...props} />}
          </ListItem>
        );
      })}
    </List>
  );
};

const HorizontalMenu = () => {
  const [menuHover, setMenuHover] = useState<string | undefined>(undefined);
  return (
    <List
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        columnGap: "10px",
        li: {
          position: "relative",
          p: 0,
          "a,.MuiListItemText-root": {
            width: "100%",
            cursor: "pointer",
            m: 0,
          },
          ".MuiTypography-root": {
            whiteSpace: "nowrap",
            textTransform: "uppercase",
          },
        },
      }}
    >
      {menuItems.map(({ id, label, url, target, subItem }: CustomSubMenu) => {
        const props = { subItem, setMenuHover };
        return (
          <ListItem
            sx={{
              py: "0 !important",
              "&:hover": {
                bgcolor: "secondary.main",
                color: "white.light",
              },
              ">.MuiListItemText-root": {
                m: 0,
                px: 2,
                ".MuiTypography-root": {
                  lineHeight: { xs: "56px", sm: "64px" },
                  fontSize: "17px",
                  fontWeight: 600,
                },
              },
              ">.MuiList-root": {
                top: "100%",
                left: 0,
              },
            }}
            key={id}
            onMouseEnter={() => setMenuHover(id)}
            onMouseLeave={() => setMenuHover(undefined)}
          >
            {url ? (
              <Link href={url} target={target}>
                <ListItemText primary={label} />
              </Link>
            ) : (
              <ListItemText primary={label} />
            )}
            {subItem && menuHover == id && <CustomSubMenu {...props} />}
          </ListItem>
        );
      })}
    </List>
  );
};
export default HorizontalMenu;
