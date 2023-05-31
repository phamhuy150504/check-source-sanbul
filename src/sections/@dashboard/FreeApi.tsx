import { Box, Typography, useTheme, Paper, alpha, Stack } from "@mui/material";

const TEXTDATA = [
  "time: round time",
  "gameId: round (a unique round value that increases by 1 each round)",
  "round: a value that repeats from round 1 to round 288 per day",
  "drawn: normal (regular ball lottery number), powerball (powerball number)",
  "result: result",
  "poe (Powerball even odd): o (odd), e (even)",
  "puo (Powerball unover): u (un), o (over)",
  "oe (regular ball even): o (odd), e (even)",
  "uo ( Normal ball unover): u (un), o (over)",
  "bms (large/small): b (large), m (medium), s (small)",
];

type Props = {
  src: string;
}

const FreeApi = ({src}: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h3" color={`${theme.palette.primary.main}`}>
        Game screen
      </Typography>
      <Typography variant="body2" fontWeight={"bold"}>
        If you insert the iFrame address after adjusting the width, you can use
        only game images on PC and mobile screens.
      </Typography>
      <Typography variant="body2" fontWeight={"bold"}>
        *Minimum width=900px
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          py: 1,
          px: 2,
          mt: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[600], 0.08),
        }}
      >
        <Typography variant="body2" fontWeight={"bold"}>
          {`<iframe src=${src} width=""
          height="" scrolling="no" frameborder="0"> </iframe>`}
        </Typography>
      </Paper>

      {/* <Typography mt={3} variant="h3" color={`${theme.palette.primary.main}`}>
        Results API
      </Typography> */}
      {/* 
      <Typography variant="body2" fontWeight={"bold"}>
        By calling the API address, you can check the latest episode and
        specific episode results in JSON format in real time.
      </Typography> */}

      {/* <Stack direction={"column"} mt={2}>
        <Typography variant="body1" fontWeight={"bold"}>
          Call the latest result
        </Typography>
        <Typography variant="body2" fontWeight={"bold"}>
          http://game.tgame365.com/powerball/result
        </Typography>
      </Stack> */}

      <Stack direction={"column"} mt={2}>
        {/* <Typography variant="body1" fontWeight={"bold"}>
          Specific round within 24 hours
        </Typography>
        <Typography variant="body2" fontWeight={"bold"}>
          http://game.tgame365.com/powerball/result/round/172
        </Typography> */}

        {/* <Typography variant="body1" fontWeight={"bold"} mt={2}>
          JSON result
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            py: 1,
            px: 2,
            mt: 3,
            bgcolor: (theme) => alpha(theme.palette.grey[600], 0.08),
          }}
        >
          <Typography variant="body2" fontWeight={"bold"}>
            ("time":"2022-07-19
            05:55:00","gameId":1358,"round":71,"drawn":"normal":[28,6,23,19,2]
            ,"powerball":6,
            "result":"poe":"e","puo":"o","uo":"o","oe":"e","bms":" m")
          </Typography>
        </Paper> */}
      </Stack>

      {/* <Stack mt={2} direction={"column"}>
        {TEXTDATA.map((text, index) => (
          <Typography variant="body1" fontWeight={"bold"} key={index}>
            {text}
          </Typography>
        ))}
      </Stack> */}
    </Box>
  );
};

export default FreeApi;
