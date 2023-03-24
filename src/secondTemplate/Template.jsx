import { Margin } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { MaxWidthWrapper } from "../secondTemplate/MaxWidthWrapper";

import { imageData } from "./data";

export const Template = () => {
  return (
    <Box
    sx={{
      backgroundColor: "#2F2F2F",
      width: '100%',
      height:'100%',
      py:'67px',

      }}
      >
    <MaxWidthWrapper>    
    <Box sx={{
      display:"flex",
      flexDirection:{md:'row',xs:'column'},
      justifyContent:'space-between' 
    }}>  
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'24px',
        width: {lg:'34.22%',md:'40.34%'},
        height: {md:'582px',sm:'520px',xs:'420px'},
        marginLeft:{lg:'64px',md:'32px'},
        marginTop:{lg:'129px',md:'120px'},
      }}>
        <Typography
          sx={{
            width: {sm:"350px",xs:'270px'},
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {lg:"72px",md:'56px',sm:'70px',xs:'51px'},
            lineHeight: {lg:"94px",sm:"76px",xs:'56px'},
            color: "#FEC3C7",
          }}
        >
          <span style={{ color: "#FEC3C7" }}>Design.</span>
          <span style={{ color: "#9AD7F3" }}> Create.</span>
          <span style={{ color: "#6BDFDA" }}> Inspire.</span>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {lg:"24px",md:'16px',sm:'20px',xs:'14px'},
            lineHeight: {sm:"36px",xs:'24px'},
            color: "#FFFFFF",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget.
        </Typography>
        <Button
          sx={{
            width: {sm:'182px',xs:'150px'},
            height: {sm:'66px',xs:'44px'},
            padding: {sm:'24px 48px',xs:'20px 40px'},
            background: "#FFFFFF",
            borderRadius:{ sm:"36px",xs:'20px'},
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {sm:"24px",xs:'20px'},
            lineHeight: "18px",
            color: "#232323",
          }}
        >
          Explore
        </Button>
      </Box>
      <Box sx={{
        width:{lg:'56.55%',md:'55.29%'},
        display:'grid',
        justifyItems:'center',
        gridTemplateColumns:{lg:'repeat(4,1fr)',md:'repeat(3,1fr)',sm:'repeat(4,1fr)',xs:'repeat(2,1fr)'},
        gridGap: {lg:'10px',md:"10px",sm:'15px',xs:'10px'},


      }}>
        {imageData.map((data) => {
          return (
          <Box sx={{
            width: {lg:"152px",md:'132px',sm:'120px',xs:'130px'},
            height:{lg:"182px",md:'150px',sm:'140px',xs:'150px'},
          }}> 
            <img
              src={data}
              alt="images"
              style={{
               width:'100%',
               height:'100%',
              }}
            />
          </Box> 
          );
        })}
      </Box>
      </Box>    
      </MaxWidthWrapper>
    </Box>
  );
};
