import { Box, Stack } from "@mui/material";
import GreetingLottie from "../GreetingLottie";

function Loader() {
  return (
    <Box height={"100vh"}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"40vh"}
      >
        <Box height={200} width={200} >
          <GreetingLottie animationPath="Lottie/Loading.json" />
        </Box>
      </Stack>
    </Box>
  );
}
export default Loader;
