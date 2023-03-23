import { Box } from "@mui/material";
import React from "react";


export const MaxWidthWrapper = ({children})=>{
    return(
        <Box
      sx={{
        maxWidth:'1920px',
        width: {
          sm:'100%',
          md: "95%",
          lg: "90%",
          xl: "75%",
        },
        margin: "auto",
      }}
    >
      {children}
    </Box>
    )
}