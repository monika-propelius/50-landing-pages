import { Box } from "@mui/material";
import React from "react";


export const MaxWidthWrapper = ({children})=>{
    return(
        <Box
      sx={{
        maxWidth:'1920px',
        width: {
          xs:'90%',
          sm:'85%',
          md: "95%",
          lg: "90%",
          xl: "90%",
        },

        margin: "auto",
      }}
    >
      {children}
    </Box>
    )
}