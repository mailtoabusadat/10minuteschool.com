"use client";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import { MdArrowUpward } from "react-icons/md";

type Props = {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
};

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
const BackToTop = (props: Props) => {
  return (
    <ScrollTop {...props}>
      <Fab
        size="small"
        aria-label="scroll back to top"
        sx={{ svg: { fontSize: "24px" } }}
        color="info"
      >
        <MdArrowUpward />
      </Fab>
    </ScrollTop>
  );
};
export default BackToTop;
