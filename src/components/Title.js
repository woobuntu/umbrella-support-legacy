import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Title() {
  const logoSrc =
    "https://woobuntu-umbrella.s3.ap-northeast-2.amazonaws.com/logo.png";
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logoSrc}
          style={{
            width: "3rem",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <Typography>함께쓰는우산 후원안내</Typography>
      </Toolbar>
    </AppBar>
  );
}
