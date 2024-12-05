import menuItems from "@/utils/menuItems";
import { SwipeableDrawer } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import Link from "next/link";
import { Fragment, useState } from "react";

type MenuItem = {
  id?: string;
  label?: string;
  url?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  subItem?: MenuItem[];
  parentId?: string;
};
type Props = {
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
const VerticalMenu = ({ drawer, setDrawer }: Props) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleClickTreeItem = (nodeId: string, parent: string) => {
    if (expandedItems.includes(nodeId)) {
      const nodeIdIndex = expandedItems.indexOf(nodeId);
      const toggleNodeIds =
        nodeIdIndex != -1 ? expandedItems.slice(0, nodeIdIndex) : [];
      setExpandedItems(toggleNodeIds);
    } else {
      if (!expandedItems.includes(parent)) {
        setExpandedItems([nodeId]);
      } else {
        setExpandedItems((prev) => {
          const indexOfParentId = prev.indexOf(parent);
          prev.splice(indexOfParentId + 1, prev.length - 1);
          return [...prev, nodeId];
        });
      }
    }
  };

  const ChildrenTreeView: React.FC<MenuItem> = ({ subItem, parentId = "" }) => {
    return (
      <>
        {subItem?.map(({ id = "", label, url, target, subItem }) =>
          !subItem ? (
            <Fragment key={id}>
              {url ? (
                <Link
                  href={url}
                  target={target}
                  onClick={() => setDrawer(false)}
                >
                  <TreeItem itemId={id} label={label} />
                </Link>
              ) : (
                <TreeItem
                  itemId={id}
                  label={label}
                  onClick={() => setDrawer(false)}
                />
              )}
            </Fragment>
          ) : (
            <TreeItem
              key={id}
              itemId={id}
              label={label}
              onClick={() => handleClickTreeItem(id, parentId)}
            >
              <ChildrenTreeView subItem={subItem} parentId={id} />
            </TreeItem>
          )
        )}
      </>
    );
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer(open);
    };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={drawer}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        display: { xs: "flex", md: "none" },
        ".MuiDrawer-paper": { width: "280px", py: 2 },
        ".MuiTreeItem-content": {
          borderRadius: 0,
          bgcolor: "transparent !important",
          "&.Mui-expanded.Mui-selected": {
            color: "secondary.contrastText",
            "&:after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "-500%",
              width: "1000%",
              bgcolor: "secondary.100",
              zIndex: -1,
            },
          },
          ".MuiTreeItem-label": { fontSize: "20px" },
          ".MuiSvgIcon-root": { fontSize: "25px" },
        },
        "li .MuiCollapse-root": {
          pl: "7px !important",
        },
      }}
    >
      <SimpleTreeView expandedItems={expandedItems}>
        {menuItems.map(({ id, label, url, target, subItem }) =>
          !subItem ? (
            <Fragment key={id}>
              {url ? (
                <Link
                  href={url}
                  target={target}
                  onClick={() => setDrawer(false)}
                >
                  <TreeItem itemId={id} label={label} />
                </Link>
              ) : (
                <TreeItem
                  itemId={id}
                  label={label}
                  onClick={() => setDrawer(false)}
                />
              )}
            </Fragment>
          ) : (
            <TreeItem
              key={id}
              itemId={id}
              label={label}
              onClick={() => handleClickTreeItem(id, "0")}
            >
              <ChildrenTreeView subItem={subItem} parentId={id} />
            </TreeItem>
          )
        )}
      </SimpleTreeView>
    </SwipeableDrawer>
  );
};
export default VerticalMenu;
