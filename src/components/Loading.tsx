import { FC, ReactElement } from "react";
import { Box, Skeleton} from "@mui/material";

const Loading: FC = (): ReactElement => {
  return (
    <Box>
      <Skeleton variant="rectangular" width={400} height={200} animation="wave"/>
    </Box>
  );
};

export default Loading;
