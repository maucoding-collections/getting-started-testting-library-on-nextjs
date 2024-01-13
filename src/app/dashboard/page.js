import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DashboardPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
      }}
    >
      <Typography as="h1" component="h1">
        This is Dashboard&nbsp;
        <small>Go go get ready!!!</small>
      </Typography>
    </Box>
  );
};

export default DashboardPage;
