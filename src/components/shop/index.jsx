import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import INTIAL_STATE from "../data/homedata";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "../../redux/cart/cart.action";

const ShopPage = () => {
  // const {searchField } = this.state;
  // const [hats, jackets, sneakers, womens, mens] = INTIAL_STATE.sections;
  //const [hatshop, jacketshop, sneakershop, womenshop, menshop] = SHOP_DATA;
  const dispatch = useDispatch();
  // console.log(hatshop);
  const navigate = useNavigate();

  const [cartArray, setCartArray] = useState([]);

  const cartStuff = useSelector((state) => state.cart.cartItems);
  const SHOP_DATA = useSelector((state) => state.collection.collections);
  console.log(SHOP_DATA);

  const handleAdd = (subItem) => {
    console.log("item : ", subItem);
    setCartArray(subItem);
    console.log(cartArray);
    dispatch(addItem(subItem));
  };
  console.log(cartStuff);

  return (
    <div className="ShopPage">
      {/* <MainNavigator /> */}
      {SHOP_DATA.map((mainItem) => (
        <Box
          sx={{ flexGrow: 1, alignContent: "left", margin: 5 }}
          key={mainItem.id}
        >
          <Grid container spacing={0}>
            <Grid
              item
              xs={0}
              md={9}
              sx={{ alignContent: "center", alignItems: "center" }}
            >
              <Typography
                variant={"overline"}
                sx={{
                  display: "block",
                  textAlign: "left",
                  color: "black",
                  letterSpacing: "5px",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              >
                {mainItem.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={0}
              md={3}
              sx={{
                alignContent: "center",
                alignItems: "center",
                ":hover": { cursor: "grab" },
              }}
              onClick={() => navigate("/shop/" + mainItem.routeName)}
            >
              <Typography
                variant={"overline"}
                sx={{
                  display: "block",
                  textAlign: "center",
                  color: "black",
                  letterSpacing: "5px",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              >
                VIEW ALL
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            sx={{ alignContent: "center", alignItems: "center" }}
          >
            {mainItem.items.slice(0, 4).map((subItem) => {
              console.log("checl1", subItem);
              return (
                <Grid
                  item
                  xs={0}
                  md={3}
                  sx={{
                    alignContent: "center",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Card
                    key={subItem.id}
                    sx={{ maxWidth: 265, ":hover": { cursor: "grab" } }}
                    onClick={() => handleAdd(subItem)}
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
              );
            })}
          </Grid>
        </Box>
      ))}
    </div>
  );
};
export default ShopPage;
