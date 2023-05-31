import React from "react";
import { m } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Button, Typography } from "@mui/material";
// components
import { MotionContainer, varBounce } from "../components/animate";
// assets
import { PageNotFoundIllustration } from "@/assetss/illustrations";
import useLocales from "@/locales/useLocales";

// ----------------------------------------------------------------------

const Page404 = () => {
  const { translate } = useLocales();
  
  return (
    <>
      <Helmet>404 Page Not Found | Baccarat Game</Helmet>

      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
          {`${translate("sorry")}`}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
          {`${translate("Comming soon")}`}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <Button component={RouterLink} to="/" size="large" variant="contained">
        {`${translate("gotoHome")}`}
        </Button>
      </MotionContainer>
    </>
  );
};

export default Page404;
