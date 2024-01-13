import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: "15px",
          width: "300px",
          border: "1px solid lightgray",
        }}
      >
        <form method="post">
          <Typography
            variant="h6"
            component="h1"
            sx={{ paddingBottom: "15px", textAlign: "center" }}
          >
            Login
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <FormGroup sx={{ marginBottom: "20px" }}>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
            <FormHelperText>Type username here</FormHelperText>
          </FormGroup>

          <FormGroup sx={{ marginBottom: "20px" }}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormHelperText>Type password here</FormHelperText>
          </FormGroup>

          <Box sx={{ display: "block", margin: "10px", textAlign: "center" }}>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
