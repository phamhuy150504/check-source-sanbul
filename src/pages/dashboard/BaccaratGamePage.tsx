import React, { useMemo, useState } from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { Box, Container, Tab, Tabs } from "@mui/material";
import Iconify from "@/components/iconify/Iconify";
import GameResult from "@/sections/@dashboard/GameResult";
import GameDescription from "@/sections/@dashboard/GameDescription";
import FreeApi from "@/sections/@dashboard/FreeApi";
import WrapperGame from "@/components/layouts/WrapperGame";
// auth

const BaccaratGamePage = () => {
  const [currentTab, setCurrentTab] = useState("gameresult");

  const TABS = useMemo(() => {
    return [
      {
        value: "gameresult",
        label: "GameResult",
        icon: <Iconify icon="ic:round-account-box" />,
        component: <GameResult />,
      },
      {
        value: "gamedescription",
        label: "GameDescription",
        icon: <Iconify icon="eva:bell-fill" />,
        component: <GameDescription />,
      },
      {
        value: "freeapi",
        label: "FreeAPI",
        icon: <Iconify icon="eva:share-fill" />,
        component: (
          <FreeApi
            src={
              "https://baccarat-sanbul-team2.vercel.app/?api=6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b"
            }
          />
        ),
      },
    ];
  }, []);
  return (
    <>
      <Helmet>
        <title> General: Home | Baccarat - Game</title>
      </Helmet>

      <Container>
       <WrapperGame>
       <iframe
          src="https://baccarat-sanbul-team2.vercel.app/?api=6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b"
          width="900px"
          height="700px"
          frameBorder="0"
          scrolling="no"
        ></iframe>
       </WrapperGame>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs
            sx={{
              ".MuiButtonBase-root.MuiTab-root:not(:last-of-type)": {
                marginRight: "200px",
              },
            }}
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
          >
            {TABS.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                icon={tab.icon}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
};

export default BaccaratGamePage;
