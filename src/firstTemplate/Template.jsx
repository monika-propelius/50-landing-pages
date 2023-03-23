import { Box, Button, Typography } from "@mui/material";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const Template = () => {
  return (
    <MaxWidthWrapper>
      <Box
        sx={{
          background:
            "linear-gradient(122.62deg, #C8CCCF 5.59%, #97A3A3 84.01%)",
        }}
      >
        <Box
          sx={{
            width: "90%",
            margin: "auto",
          }}
        >
            <Box>
            <Box sx={{
                position:'absolute',
                left:{xl:'26%',lg:'20%'},
                top : '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '16px',
            }}>
        
                <Typography sx={{   
                    width:'max-content',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '88px',
                    color: '#363830',
                    
                }}>
                    Interior design
                </Typography>
                <Typography sx={{
                    width:'659px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '36px',
                    color: '#363830',
                   
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Faucibus in libero risus semper habitant arcu eget.
                     Et integer facilisi eget.
                </Typography>
                <Button sx={{
                    width: '182px',
                    height: '66px',
                    backgroundColor: '#363830',
                    borderRadius: '36px',
                   fontFamily: 'Poppins',
                   fontStyle: 'normal',
                   fontWeight: 400,
                   fontSize: '24px',
                   lineHeight: '18px',
                   color: '#FFFFFF',
                }}>Explore</Button>
            </Box>
                <img src="/images/right.png" alt="img"/>
            </Box>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};
