import { Box, Button, Typography } from "@mui/material"
import { MaxWidthWrapper } from "./MaxWidthWrapper"


export const Home = () =>{
    return (
        
        <Box sx={{
        background: 'linear-gradient(122.62deg, #C8CCCF 5.59%, #97A3A3 84.01%)',}}>  
        <MaxWidthWrapper>
        <Box sx={{
            position: 'relative',
            height: '100vh',
            
        }}>
       <Box
            sx={{
              width: { lg: "500px", md: "450px", sm: "385px", xs: "100%" },
              height: { lg: "465px", sm: "400px", xs: "285px" },
              position: "absolute",
              display:'block',
              right: { lg: "20px", sm: "0px" },
            }}
          >
            <img
              src="/images/right.png"
              alt="first image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
        </Box>
        <Box
            sx={{
              position: "absolute",
              left:{lg:'20%',md:'25%',sm:'20%'},
              top: {sm:'50px',xs:"30px"},
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              gap: {sm:"16px",xs:'10px'},
            }}
          >
            <Typography
              sx={{
                width: {sm:"max-content",xs:'fit-content'},
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: {lg:'80px',md:'56px',xs:'32px'},
                padding:{sm:'0px',xs:'0px 10px'},
                color: '#363830',
                margin:{sm:'0px',xs:'auto'},
                lineHeight:'50px',
                textAlign:{sm:'start',xs:"center"}
              }}
            >
              Interior design
            </Typography>
            <Typography
              sx={{
                width:{lg:'659px',md:'500px',sm:'400px'},
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {lg:'22px',md:'20px',sm:'18px',xs:"12px"},
                lineHeight: {sm:"36px",xs:'20px'},
                color: "#363830",
                padding:{sm:'0px',xs:'0px 33px'}

              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </Typography>
            <Button
              sx={{
                width: {sm:"182px",xs:'120px',},
                height: {sm:"66px",xs:'38px'},
                backgroundColor: "#363830",
                borderRadius: "36px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: {sm:"24px",xs:'14px'},
                lineHeight: "18px",
                color: "#FFFFFF",
                margin:{sm:'0',xs:'auto'}
              }}
            >
              Explore
            </Button>
          </Box>
          <Box sx={{ 
                position: 'absolute',
                display:'block',
                zIndex: '1',
                left: {lg:'372px',md:'30%',sm:'20%'},
                bottom: {sm:'98px',xs:'321px'},
                background: 'linear-gradient(95.95deg, rgba(255, 255, 255, 0.3) 6.59%, rgba(255, 255, 255, 0.18) 96.07%)',
                backdropFilter: 'blur(12px)',
                borderRadius:{ sm:'144px',xs:'0'},
                display:'flex',
                flexDirection:{sm:'row',xs:'column'},
                justifyContent: 'center',
                alignItems: 'center',
                padding:{lg:'40px 88px',sm:'39px 28px',xs:'18px 18px'},
                gap:{lg:'18px',sm:'18px'},
                textAlign:{sm:'start',xs:'center'}
                

            }}>
                <Box >
                    <Typography sx={{
                        width:'fit-content',
                        lineHeight:'50px',
                        borderBottom:'2px solid black',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: {lg:'20px',md:'18px',sm:'16px',xs:'12px'},
                        lineHeight: {sm:'36px',xs:'16px'},
                        color: '#363830',
                       margin:{sm:'0px',xs:'8px auto'},
                    }}>5.8</Typography>
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',xs:'10px'},
                        lineHeight: {lg:'20px',md:'18px'},
                        color: '#363830',
                    }}  
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Faucibus in libero risus semper habitant arcu eget.
                    </Typography>
                </Box>
                <Box>
                <Typography  sx={{
                        width:'fit-content',
                        lineHeight:'50px',
                        borderBottom:'2px solid black',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: {lg:'20px',md:'18px',sm:'16px',xs:'12px'},
                        lineHeight: {sm:'36px',xs:'16px'},
                        color: '#363830',
                        margin:{sm:'0px',xs:'8px auto'},
                    }}>99+</Typography>
                    
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',xs:'10px'},
                        lineHeight: {lg:'20px',md:'18px'},
                        color: '#363830',
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Faucibus in libero risus semper habitant arcu eget.
                    </Typography>
                </Box>
                <Box>
                <Typography sx={{
                        width:'fit-content',
                        lineHeight:'50px',
                        borderBottom:'2px solid black',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: {lg:'20px',md:'18px',sm:'16px',xs:'12px'},
                        lineHeight: {sm:'36px',xs:'16px'},
                        color: '#363830',
                        margin:{sm:'0px',xs:'8px auto'},
                    }}>110k</Typography>
                   
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',xs:'10px'},
                        lineHeight: {lg:'20px',md:'18px'},
                        color: '#363830',
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Faucibus in libero risus semper habitant arcu eget.
                    </Typography>
                    <Typography></Typography>
                </Box>
          </Box> 
          <Box sx={{
            width:{lg:'500px',md:'450px',sm:'385px',xs:'100%'},
            height:{lg:'465px',md:'435px',sm:'434px',xs:'300px'},
            position: 'absolute',
            bottom: '0',
           display:'block'
        }}> 
            <img src="/images/left.png" alt="second image" style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
            }}/>
        </Box> 


      
        </Box>
        </MaxWidthWrapper>
        </Box>
    )
}