import { ReactElement } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export function Loading(): ReactElement {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <Box sx={{ display: { display } }}>
      <CircularProgress color="secondary" />
    </Box>
  );
}
