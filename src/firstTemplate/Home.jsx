import { Box, Button, Typography } from "@mui/material"
import { MaxWidthWrapper } from "./MaxWidthWrapper"


export const Home = () =>{
    return (
        
        <Box sx={{
        background: 'linear-gradient(122.62deg, #C8CCCF 5.59%, #97A3A3 84.01%)',}}>  
        <MaxWidthWrapper>
        <Box sx={{
            position: 'relative',
            height: '855px',
            
        }}>
       
             <Box sx={{
                width:{lg:'500px',md:'450px',sm:'385px',xs:"100%"},
                height:{lg:'465px',sm:'400px',xs:'450px'},
                position: 'absolute',
                right: {lg:'20px',sm:'0px'},

            }}> 
                <img src="/images/right.png" alt="first image" style={{
                    width:'100%',
                    height:'100%',
                    objectFit:'cover'   
                }}/>
            </Box> 
            <Box sx={{
                position:'absolute',
                left:{lg:'20%',md:'25%',sm:'20%'},
                top : '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '16px',
            }}>
        
                <Typography sx={{   
                    width:{sm:'max-content',xs:'fit-content'},
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: {lg:'80px',md:'56px',xs:'50px'},
                    padding:{sm:'0px',xs:'0px 10px'},
                    color: '#363830',
                    margin:{sm:'0px',xs:'auto'},
                    lineHeight:{sm:'0',xs:'40px'}
                    
                }}>
                    Interior design
                </Typography>
                <Typography sx={{
                    width:{lg:'659px',md:'500px',sm:'400px'},
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: {lg:'22px',md:'20px',sm:'18px',sx:"20px"},
                    lineHeight: '36px',
                    color: '#363830',
                    padding:{sm:'0px',xs:'0px 20px'}
                   
                   
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Faucibus in libero risus semper habitant arcu eget.
                     Et integer facilisi eget.
                </Typography>
                <Button sx={{
                    width: '182px',
                    height: '66px',
                    backgroundColor:'#363830',
                    borderRadius: '36px',
                   fontFamily: 'Poppins',
                   fontStyle: 'normal',
                   fontWeight: 400,
                   fontSize: {lg:'24px',sm:'20px'},
                   lineHeight: '18px',
                   color: '#FFFFFF',
                   margin:{sm:'0px',xs:'auto'}
                }}>Explore</Button>
            </Box>
            <Box sx={{ 
                position: 'absolute',
                zIndex: '1',
                left: {lg:'372px',md:'30%',sm:'20%'},
                bottom: {sm:'98px',xs:'0px'},
                background: 'linear-gradient(95.95deg, rgba(255, 255, 255, 0.3) 6.59%, rgba(255, 255, 255, 0.18) 96.07%)',
                backdropFilter: 'blur(12px)',
                borderRadius:{ sm:'144px',xs:'0'},
                display:'flex',
                flexDirection:{sm:'row',xs:'column'},
                justifyContent: 'center',
                alignItems: 'center',
                padding:{lg:'40px 88px',sm:'39px 28px'},
                gap:{lg:'18px',sm:'18px'}
                

            }}>
                <Box >
                    <Typography sx={{
                        width:'fit-content',
                        lineHeight:'50px',
                        borderBottom:'2px solid black',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: {lg:'20px',md:'18px',sm:'16px'},
                        lineHeight: '36px',
                        color: '#363830',
                    }}>5.8</Typography>
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',sm:'10px'},
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
                        fontSize: {lg:'20px',md:'18px',sm:'16px'},
                        lineHeight: '36px',
                        color: '#363830',
                    }}>99+</Typography>
                    
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',sm:'10px'},
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
                        fontSize: {lg:'20px',md:'18px',sm:'16px'},
                        lineHeight: '36px',
                        color: '#363830',
                    }}>110k</Typography>
                   
                    <Typography sx={{
                        marginTop:'10px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: {lg:'14px',md:'12px',sm:'10px'},
                        lineHeight: {lg:'20px',md:'18px'},
                        color: '#363830',
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Faucibus in libero risus semper habitant arcu eget.
                    </Typography>
                    <Typography></Typography>
                </Box>
            </Box> 
        <Box sx={{
            width:{lg:'500px',md:'450px',sm:'385px'},
            height:{lg:'465px',md:'435px',sm:'434px'},
            position: {sm:'absolute',xs:'relative'},
            top:{xl:'31vh',lg:'45vh',sm:'48vh',xs:'98vh'},
            bottom: '0',
           

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