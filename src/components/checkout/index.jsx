import * as React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.action";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { AddCircleOutline, ClearAllOutlined, DeleteOutline } from "@mui/icons-material";
import Button from "@mui/material/Button";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartStuff = useSelector((state) => state.cart.cartItems);
  const curUser = useSelector((state) => state.user.current_user);

  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  const handleClear = (subItem) => {
    dispatch(clearItem(subItem));
  };

  const handleRemove = (subItem) => {
    dispatch(removeItem(subItem));
  };

  const handleAdd = (subItem) => {
    dispatch(addItem(subItem))
  }

  var cartEmptyMessage = "";
  if (cartStuff.length === 0) {
    cartEmptyMessage = "CART IS EMPTY";
  }

  var helloUser = "";
  if (curUser != null) {
    helloUser = curUser.username + "'s CART";
  }
  console.log("check cart stuff", cartStuff);
  console.log("check current user", helloUser, curUser);
  return (
    <div>
      <Typography
        variant={"overline"}
        sx={{
          display: "block",
          textAlign: "center",
          color: "black",
          letterSpacing: "3px",
          fontWeight: 200,
          fontSize: 12,
        }}
      >
        {helloUser}
      </Typography>
      {cartStuff.map((setting) => {
        console.log("check setting", setting);
        return (
          <Card
            elevation={0}
            sx={{
              display: "flex",
              padding: 2,
              borderRadius: "16px",
              marginRight: 5,
              border: "solid 2px",
              margin: 2,
            }}
          >
            <CardContent sx={{ pr: 2, minWidth: "75%", maxWidth: "75%" }}>
              <Box mb={5}>
                <Box
                  component="h3"
                  sx={{
                    fontSize: 17,
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    marginBottom: 0,
                    marginRight: 1.5,
                    display: "inline-block",
                  }}
                >
                  {setting.name}
                </Box>
              </Box>
              <Box
                component="h6"
                sx={{
                  fontSize: 14,
                  color: "black",
                  mb: "1.275rem",
                  width: "100%",
                }}
              >
                Cost per item : {setting.price} * {setting.quantity}
              </Box>
              <Box
                component="h6"
                sx={{
                  fontSize: 14,
                  color: "black",
                  mb: "1.275rem",
                  width: "100%",
                }}
              >
                Total Cost : {setting.price * setting.quantity}
              </Box>
              <Box
                sx={{
                  fontSize: 17,
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  marginBottom: 0,
                  marginRight: 1.5,
                  display: "inline-block",
                }}
              >
                <DeleteOutline
                  sx={{ paddingRight: 20 }}
                  onClick={() => handleClear(setting)}
                />
                <ClearAllOutlined sx={{paddingRight:20}} onClick={() => handleRemove(setting)}/>
                <AddCircleOutline onClick={() => {handleAdd(setting)}}/>
              </Box>
            </CardContent>

            <CardMedia
              image={setting.imageUrl}
              sx={{
                minWidth: "25%",
                maxWidth: "25%",
                height: undefined,
                objectFit: "contain",

                backgroundColor: "grey.200",
                borderRadius: "15px",
              }}
            />
          </Card>
        );
      })}

      <Typography
        variant={"overline"}
        sx={{
          display: "block",
          textAlign: "center",
          color: "black",
          letterSpacing: "3px",
          fontWeight: 200,
          fontSize: 12,
        }}
      >
        {cartEmptyMessage}
      </Typography>

      

      <Typography
        variant={"overline"}
        sx={{
          display: "block",
          textAlign: "center",
          color: "black",
          letterSpacing: "3px",
          fontWeight: 200,
          fontSize: 12,
        }}
      >
        Total cost ={" "}
        {cartStuff.reduce(function (prev, current) {
          return prev + current.quantity * current.price;
        }, 0)}
      </Typography>

      <StripeCheckout
        token={onToken}
        stripeKey="sk_test_51OuWgbSJaWDEKUwFahpvi6qkJTlhm48oKp6Ak50V6HwqI6JzdwbLVXuiClZ2leUvKO83qV1nUWiiLSk90VXtSH4D00HuX2tuNF"
      >
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: "90%",
            alignItems: "center",
            mb: 2,
            m: 5,
            backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", backgroundColor: "white" },
          }}
          // onClick={() => {
          //   navigate("/payment");
          // }}
        >
          PROCEED TO PAYMENT
        </Button>
      </StripeCheckout>
    </div>
  );
}
