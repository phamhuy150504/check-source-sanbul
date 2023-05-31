import React from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// auth
import { useSettingsContext } from "@/components/settings";


const BaccaratGamePage = () => {

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Home | Roulette - Game</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
      <Stack textAlign={"center"}>
      <Typography variant="h1">Comming soon.....</Typography>
      </Stack>
      </Container>
    </>
  );
};

export default BaccaratGamePage;
