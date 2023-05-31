import React from "react";

// @mui
import { Box, BoxProps } from "@mui/material";
// hooks
import useResponsive from "@/hooks/useResponsive";
// config
import { HEADER } from "@/config-global";
// components

// ----------------------------------------------------------------------

const SPACING = 8;

const Main = ({ children, sx, ...other }: BoxProps) => {
  const isDesktop = useResponsive("up", "lg");
 
  return (
    <Box
        component="main"
        sx={{
          pt: `${HEADER.H_MOBILE + SPACING}px`,
          pb: `${HEADER.H_MOBILE + SPACING}px`,
          ...(isDesktop && {
            px: 2,
            pt: `${HEADER.H_DASHBOARD_DESKTOP + 80}px`,
            pb: `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px`,
          }),
        }}
      >
        {children}
      </Box>
  );
};

export default Main;
