import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { ShoppingBasketOutlined } from "@mui/icons-material";
import crown from "../data/crwns.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { logOutUser } from "../../redux/user/signupAction";
import { removeItem } from "../../redux/cart/cart.action";

const pages = ["Shop", "Contact", "Sign Up"];

const pageurls = {
  Shop: "/shop",
  Contact: "/contact",
  "Sign Up": "/sign-up",
  "LOG OUT": "/sign-up",
};

function MainNavigator() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlecheckout = () => {
    setAnchorElUser(null)
    navigate("/checkout")
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartStuff = useSelector((state) => state.cart.cartItems);
  const curUser = useSelector((state) => state.user.current_user);
  console.log("check cart stuff", cartStuff);
  console.log("see current logged in user : ", curUser);

  if (curUser != null) {
    pages[2] = "LOG OUT";
  } else {
    pages[2] = "SIGN IN";
  }

  const handleClear = (event) => {
    // event.preventDefault();

    dispatch(logOutUser(curUser));
    cartStuff.forEach((val) => {
      dispatch(removeItem(val));
    });
  };

  return (
    <AppBar sx={{ zIndex: 1, position: "sticky", marginBottom: 2 , boxShadow:"none"}}>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "white", border: "none" }}
      >
        <Toolbar disableGutters sx={{ border: "none" }}>
          {/* <StorefrontOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 70, marginBottom:1, marginTop:1, color:"black" }}/> */}
          <Box
            component="img"
            sx={{
              paddingRight: 5,
              ":hover": {
                cursor: "grab",
              },
            }}
            alt="The house from the offer."
            src={crown}
            onClick={() => {
              navigate("/home");
            }}
          />
          <Typography
          variant={"overline"}
          sx={{
            display: "block",
            textAlign: "center",
            color: "black",
            letterSpacing: "5px",
            fontWeight: 200,
            fontSize: 12,
            fontFamily: "helvetica",
            paddingRight:60
          }}
        >
          CROWNS CLOTHING
        </Typography>
          {/* <img src={crown} onClick={()=>{navigate("/home")}}  */}
          {/* style={{"paddingRight":"500"}}/> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              backgroundColor: "white",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              href="/home"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "end",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "end",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                alignmentBaseline: "after-edge",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} con>
                  <Typography align="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              backgroundColor: "white",
              border: "none",
              alignItems: "end",
            }}
          >
            <Button
              key="SHOP"
              onClick={() => {
                navigate("/shop");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                alignContent: "right",
                fontFamily: "monospace",
                fontSize: 20,
                paddingInline: 4,
                ":hover":{
                  backgroundColor:"black",
                  color:"white"
                }
              }}
              // href={pageurls[page]}
            >
              SHOP
            </Button>
            <Button
              key="CONTACT"
              onClick={() => navigate("/contact")}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                alignContent: "right",
                fontFamily: "monospace",
                fontSize: 20,
                paddingInline: 4,
                ":hover":{
                  backgroundColor:"black",
                  color:"white"
                }
              }}
              // href={pageurls[page]}
            >
              CONTACT
            </Button>
            <Button
              key={pages[2]}
              onClick={() => {
                if (curUser == null) {
                  navigate(pageurls["Sign Up"]);
                } else {
                  handleClear(curUser);
                  navigate(pageurls["LOG IN"]);
                }
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                alignContent: "right",
                fontFamily: "monospace",
                fontSize: 20,
                paddingInline: 4,
                ":hover":{
                  backgroundColor:"black",
                  color:"white"
                }
              }}
              // href={pageurls[page]}
            >
              {pages[2]}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Badge
                badgeContent={cartStuff.reduce(function (prev, current) {
                  return prev + current.quantity;
                }, 0)}
                color="primary"
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <ShoppingBasketOutlined sx={{ color: "black" }} />
                  {/* <img src={cart} alt='cart'/> */}
                </IconButton>
              </Badge>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {cartStuff.map((setting) => {
                console.log("check setting", setting);
                return (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {/* <Typography textAlign="right">{setting}</Typography> */}
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography
                            component="div"
                            variant="h6"
                            fontFamily="helvetica"
                          >
                            {setting.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.primary"
                            component="div"
                            fontSize="small"
                          >
                            {setting.price} * {setting.quantity}
                          </Typography>
                        </CardContent>
                        {/* <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        ></Box> */}
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 70 }}
                        image={setting.imageUrl}
                        alt={setting.name}
                      />
                    </Card>
                  </MenuItem>
                );
              })}

              <Button
                variant="contained"
                sx={{ width: "90%", m: 2 }}
                onClick={() => {
                  handlecheckout()
                }}
              >
                CHECKOUT
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavigator;
