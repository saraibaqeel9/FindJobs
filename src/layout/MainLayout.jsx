import { Container } from "@mui/material";
import Header from "../components/Header";


const MainLayout = ({ children }) => {
  return (
  
    <div style={styles.container}>
      <Header />
        <Container maxWidth={'xl'} sx={{px:"0 !important"}}>
      <main style={styles.main}>{children}</main>
      </Container>
     
    </div>
  
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    bgcolor:'#F4F4F4'
  },
  main: {
    // padding: "24px",
    flex: 1,
  },
};

export default MainLayout;
