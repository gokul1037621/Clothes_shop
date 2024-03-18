import { Cards } from "../card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import INTIAL_STATE from "../data/homedata";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

const Home = () => {
  var i = 0;
  var columnWidth = 4;

  const navigate = useNavigate();
  const curUser = useSelector((state) => state.user.current_user);
  var helloUser = "";
  if (curUser != null) {
    helloUser = "HELLO THERE, "+curUser.username;
  }
  return (
    <div className="Home">
      {/* <MainNavigator /> */}
      <Typography
          variant={"overline"}
          sx={{
            display: "block",
            textAlign: "left",
            color: "black",
            letterSpacing: "5px",
            fontWeight: 200,
            fontSize: 12,
            fontFamily: "helvetica",
            margin:1
          }}
        >
          {helloUser}
        </Typography>
      
      <Box sx={{ flexGrow: 1, alignContent: "center" }}>
        <Grid
          container
          spacing={0}
          sx={{ alignContent: "center", alignItems: "center" }}
        >
          {INTIAL_STATE.sections.map((category) => {
            i = i + 1;
            if (i === 4) {
              columnWidth = 6;
            }
            return (
              <Grid
                item
                xs={2}
                md={columnWidth}
                sx={{ alignContent: "center", alignItems: "center" }}
                onClick={() => navigate(`/shop/${category.title}`)}
              >
                <Cards card={category} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default Home;
