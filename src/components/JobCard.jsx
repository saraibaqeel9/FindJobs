import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Colors from "../assets/style/Colors";
import { Images } from "../assets/images";

const JobCard = ({
  promoted = "Promoted",
  title = "UI/UX Designer",
  company = "Teams",
  location = "Seattle, USA (Remote)",
  daysAgo = "1 day ago",
  applicants = 22
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #E1E1E1",
        borderRadius: '10px',
        fontFamily: '"Neue Haas Display", Arial, sans-serif !important',
     
        position: "relative",
        background: 'white'
      }}
    >
      <Box sx={{ p: 3,py:0.8 ,pb:1.5}}>
       
        <Typography variant="caption" fontWeight={600} color="#333333" sx={{ mb: 1, fontFamily: '"Neue Haas Display", Arial, sans-serif', }}>
          {promoted}
        </Typography>

  
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center',mt:!promoted ? '5px':0 }}>
          <Box sx={{ backgroundColor: '#FAFAFA', borderRadius: '10px', width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component={'img'} src={Images.teams} width={'19px'}>

            </Box>
          </Box>
          <Box sx={{display:'block'}}> 
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 14,color:'#333333',  fontFamily: '"Neue Haas Display", Arial, sans-serif !important', }}>
            {title}
          </Typography>
            <Typography variant="body2" color="#333333" sx={{ mb: 1,fontSize:12 }}>
            {company}
          </Typography>
          </Box>
        
        </Box>


        
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: Colors.textSecondary }} />
          <Typography variant="body2" sx={{fontSize:'12px'}} color={Colors.textSecondary}>
            {location}
          </Typography>
        </Box>

        
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: Colors.textSecondary }} />
          <Typography variant="body2" sx={{fontSize:'12px'}} color={Colors.textSecondary}>
            {daysAgo} | <span style={{ color: "#0154AA"}}>{applicants} applicants</span>
          </Typography>
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ bgcolor: Colors.ButtonBg, textTransform: 'capitalize', borderRadius: 2 }} fullWidth>
            Apply Now
          </Button>

     
          <IconButton

            size="small"

          >
            <BookmarkBorderIcon sx={{ fontSize: '32px', color: '#AAAAAA' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;
