import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SHOP_DATA from "../data/shop";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import { useParams } from "react-router-dom";

const GeneralItemsPage = () => {
  // const {searchField } = this.state;

  let { route } = useParams();
  console.log("check route", route);
  const category = SHOP_DATA.filter((val) => {
    return val.routeName === route;
  });
  console.log("category data  = ", category);

  const categorydata = category[0];

  const dispatch = useDispatch();
  const handleAdd = (subItem) => {
    console.log("item : ", subItem);
    dispatch(addItem(subItem));
  };
  return (
    <div className={categorydata.title}>
      {/* <MainNavigator /> */}

      <Box sx={{ flexGrow: 1, alignContent: "left", margin: 5 }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={0}
            md={12}
            sx={{ alignContent: "center", alignItems: "center" }}
          >
            <Typography
              variant={"overline"}
              sx={{
                display: "block",
                textAlign: "center",
                color: "black",
                letterSpacing: "5px",
                fontWeight: 400,
                fontSize: 25,
              }}
            >
              {categorydata.title}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          sx={{ alignContent: "center", alignItems: "center" }}
        >
          {categorydata.items.map((subItem) => (
            <Grid
              item
              xs={0}
              md={3}
              key={subItem.id}
              sx={{
                alignContent: "center",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Card
                sx={{ maxWidth: 265, ":hover": { cursor: "grab" } }}
                onClick={() => handleAdd(subItem)}
                key={subItem.id}
              >
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "fill",
                    width: undefined,
                    aspectRatio: 0.8,
                    height: undefined,
                  }}
                  image={subItem.imageUrl}
                  title={subItem.id}
                />
                <CardContent sx={{ maxHeight: 50 }}>
                  <Typography
                    variant={"overline"}
                    md={9}
                    sx={{
                      display: "grid",
                      textAlign: "left",
                      color: "black",
                      letterSpacing: "5px",
                      fontWeight: 400,
                      fontSize: 10,
                    }}
                  >
                    {subItem.name}
                  </Typography>
                  <Typography
                    variant={"overline"}
                    md={3}
                    sx={{
                      display: "grid",
                      textAlign: "right",
                      color: "black",
                      letterSpacing: "5px",
                      fontWeight: 400,
                      fontSize: 10,
                      marginTop: -3,
                    }}
                  >
                    {subItem.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default GeneralItemsPage;
