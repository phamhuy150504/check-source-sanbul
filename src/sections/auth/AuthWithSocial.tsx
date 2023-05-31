// @mui
import { Divider, IconButton, Stack, Link } from "@mui/material";
// auth
import { useAuthContext } from "@/auth/useAuthContext";
// components
import Iconify from "@/components/iconify";
// route
import { Link as RouterLink } from "react-router-dom";
import { PATH_AUTH } from "@/routes/path";

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const { loginWithGoogle, loginWithFacebook } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      if (loginWithFacebook) {
        loginWithFacebook();
      }
      console.log("Facebook LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
      <IconButton onClick={handleFacebookLogin}>
          <Iconify icon="eva:facebook-fill" color="#1973E8" />
        </IconButton>

        <IconButton onClick={handleGoogleLogin}>
          <Iconify icon="eva:google-fill" color="#DF3E30" />
        </IconButton>

      </Stack>
    </div>
  );
}
