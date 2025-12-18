import {
  Grid, Box, Typography, Paper, Avatar, Divider, IconButton, InputBase,
  Button,

  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Images } from "../assets/images";
import Colors from "../assets/style/Colors";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import JobCard from "../components/JobCard";
import { useState } from "react";



const Home = () => {
const [activeTag, setActiveTag] = useState(null);


  const jobsData = [
    {
      promoted: "Promoted",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "Promoted",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "Promoted",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "Promoted",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     
 
    
  ];
   const RecommendedJobsData = [
    {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     
   {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     
    
  ];
   const LatestJobsData = [
    {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     
   {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     {
      promoted: "",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      daysAgo: "1 day ago",
      applicants: 22,
    },
     
    
  ];
  return (
    <Box sx={{ p: 3 }}>

      <Grid container spacing={2}>
        {/* Left column (4) */}
        <Grid size={{ xs:12,sm: 12, md: 4 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #eef2f7",
            }}
          >
            {/* Cover Image */}
            <Box
              sx={{
                height: 110,
                backgroundImage: `url(${Images.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />


            <Box sx={{ display: "flex", justifyContent: "center", mt: -6 }}>
              <Avatar
                src={Images.profile}
                sx={{
                  width: 96,
                  height: 96,
                  border: "4px solid #fff",
                }}
              />
            </Box>


            <Box sx={{ textAlign: "center", px: 2, py: 4, pt: 1, }}>
              <Typography fontWeight={600} fontSize={18}>
                Albert Flores
              </Typography>

              <Typography fontSize={14} color="#333333" mt={0.5}>
                Senior Product Designer | UI/UX
              </Typography>

              <Typography fontSize={14} color="#333333">
                Designer | Graphic Designer | Web...
              </Typography>

              <Typography fontSize={14} color="#333333" mt={0.5}>
                Clinton, Maryland
              </Typography>
            </Box>


          </Paper>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #eef2f7",
              mt: 1
            }}
          >


            <Box sx={{ px: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, pt: 2 }}>
                <Typography fontSize={14} fontWeight={500} color="#333333">
                  Profile Visitors
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#2563eb">
                  140
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                <Typography fontSize={14} fontWeight={500} color="#333333">
                  Resume Viewers
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#2563eb">
                  20
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, pb: 2 }}>
                <Typography fontSize={14} fontWeight={500} color="#333333">
                  My Jobs
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#2563eb">
                  88
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #eef2f7",
              mt: 1
            }}
          >


            {/* Calendar Section */}
            <Box
              sx={{
                p: 2,

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontSize={14} fontWeight={600}>
                  My calendar
                </Typography>
                <Typography fontSize={12} color="#333333">
                  Upcoming Interviews
                </Typography>
              </Box>

              <IconButton size="small">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Right column (8) */}
        <Grid size={{ sm: 12, md: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              pt: 1.5,
              borderRadius: 3,
              border: "1px solid #eef2f7",
              background: "transparent",
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography fontSize={22} fontWeight={550}>
                Find your dream Job,{" "}
                <Box component="span" color="#2563eb">
                  Albert!
                </Box>
              </Typography>
              <Typography fontSize={14} color={Colors.textPrimary}>
                Explore the latest jobs and apply for the best opportunities available today!
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: { xs: "wrap", md: "nowrap" },
                borderRadius: 2,
                px: { xs: 1, md: 2 },
                py: 1.5,
                gap: { xs: 1, md: 0 },
              }}
            >
              <InputBase
                placeholder="Job Title, Company, or Keywords"
                sx={{

                  flex: 1,
                  fontSize: 14,
                  minWidth: { xs: "100%", md: "auto" },
                }}
              />

              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "block" }, my: 2, borderColor: "#E9ECEF" }}
              />

              <Select
                defaultValue=""
                displayEmpty
                IconComponent={KeyboardArrowDownRoundedIcon}
                sx={{
                  minWidth: { xs: "100%", md: 160 },
                  fontSize: 14,
                  fontFamily: '"Neue Haas Display", Arial, sans-serif',
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              >
                <MenuItem value="">Select Location</MenuItem>
                <MenuItem value="ny">New York</MenuItem>
                <MenuItem value="ca">California</MenuItem>
                <MenuItem value="tx">Texas</MenuItem>
              </Select>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "block" }, my: 2, borderColor: "#E9ECEF" }}
              />

              <Select
                defaultValue=""
                displayEmpty
                IconComponent={KeyboardArrowDownRoundedIcon}
                sx={{
                  minWidth: { xs: "100%", md: 130 },
                  fontSize: 14,
                  fontFamily: '"Neue Haas Display", Arial, sans-serif',
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              >
                <MenuItem value="">Job Type</MenuItem>
                <MenuItem value="full">Full Time</MenuItem>
                <MenuItem value="part">Part Time</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
              </Select>

              <Button
                variant="contained"
                sx={{
                  ml: { xs: 0, md: 2 },
                  mt: { xs: 1, md: 0 },
                  width: { xs: "100%", md: "20%" },
                  textTransform: "none",
                  borderRadius: "8px",
                  fontSize: 13,
                  boxShadow: "none !important",
                  backgroundColor: Colors.ButtonBg,
                }}
              >
                <Box component="img" src={Images.searchIconWhite} width="15px" />
                &nbsp; Search
              </Button>
            </Paper>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Typography fontSize={14} fontWeight={500} sx={{ fontFamily: '"Neue Haas Display", Arial, sans-serif', }} color="#737A91">
                Similar:
              </Typography>

{["Frontend", "Backend", "Graphic Designer"].map((tag) => {
  const isActive = activeTag === tag;

  return (
    <Chip
      key={tag}
      label={tag}
      clickable
      onClick={() => setActiveTag(isActive ? null : tag)}
      size="small"
      sx={{
        fontSize: 12,
        fontWeight: 500,
        borderRadius: 1,
         p: 2,
        px: 1.5,
        height: 28,
        fontFamily: '"Neue Haas Display", Arial, sans-serif',

        // text color
        color: isActive ? Colors.linkColor : "#667085",

        // background
        backgroundColor: isActive ? "#FFFFFF" : "transparent",

        // border
        border: "1px solid",
        borderColor: isActive ? Colors.linkColor : "#D0D5DD",

        "&:hover": {
          backgroundColor: isActive ? "#DBEAFE" : "#F9FAFB",
          borderColor: isActive ? Colors.linkColor : "#98A2B3",
        },

        "&.MuiChip-clickable:active": {
          backgroundColor: "#DBEAFE",
        },
      }}
    />
  );
})}


            </Box>
          </Paper>
          <Divider sx={{ my: 1, mx: 3.5, borderColor: '#E9ECEF' }} />
          <Paper
            elevation={0}
            sx={{
            
              overflow: "hidden",
              border: "1px solid #eef2f7",
              background: 'transparent',
              mt: 1,
              m: 3
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography fontSize={18} fontWeight={500}>
                Featured Jobs

              </Typography>
              <Box
                component="span"
                sx={{
                  color: Colors.linkColor,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  // fontSize:'14px',
                  mt:'1px'
                }}
              >
                See Featured Jobs
              </Box>
            </Box>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #eef2f7",
                background: 'transparent',
                mt: 1,

              }}
            >
             
                <Grid container spacing={2}>
                  {jobsData.map((job, index) => (
                    <Grid
                      
                      key={index}
                      size={{ xl:3,lg: 4,md:6,sm:6,xs:12 }}
                    >
                      <JobCard {...job} />
                    </Grid>
                  ))}
                </Grid>

              

            </Paper>
          </Paper>
           <Divider sx={{ my: 1, mx: 3.5, borderColor: '#E9ECEF' }} />
          <Paper
            elevation={0}
            sx={{
            
              overflow: "hidden",
              border: "1px solid #eef2f7",
              background: 'transparent',
              mt: 1,
              m: 3
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography fontSize={18} fontWeight={500}>
                Recommended Jobs

              </Typography>
              <Box
                component="span"
                sx={{
                  color: Colors.linkColor,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  // fontSize:'14px',
                  mt:'1px'
                }}
              >
                See Recommended Jobs
              </Box>
            </Box>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #eef2f7",
                background: 'transparent',
                mt: 1,

              }}
            >
             
                <Grid container spacing={2}>
                  {RecommendedJobsData.map((job, index) => (
                    <Grid
                      
                      key={index}
                      size={{ xl:3,lg: 4,md:6,sm:6,xs:12 }}
                    >
                      <JobCard {...job} />
                    </Grid>
                  ))}
                </Grid>

              

            </Paper>
          </Paper>
             <Divider sx={{ my: 1, mx: 3.5, borderColor: '#E9ECEF' }} />
          <Paper
            elevation={0}
            sx={{
            
              overflow: "hidden",
              border: "1px solid #eef2f7",
              background: 'transparent',
              mt: 1,
              m: 3
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography fontSize={18} fontWeight={500}>
                Latest Jobs

              </Typography>
              <Box
                component="span"
                sx={{
                  color: Colors.linkColor,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  // fontSize:'14px',
                  mt:'1px'
                }}
              >
                See Latest Jobs
              </Box>
            </Box>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #eef2f7",
                background: 'transparent',
                mt: 1,

              }}
            >
             
                <Grid container spacing={2}>
                  {LatestJobsData.map((job, index) => (
                    <Grid
                      
                      key={index}
                      size={{ xl:3,lg: 4,md:6,sm:6,xs:12 }}
                    >
                      <JobCard {...job} />
                    </Grid>
                  ))}
                </Grid>

              

            </Paper>
          </Paper>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Home;
