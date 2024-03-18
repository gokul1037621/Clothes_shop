import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import './index.css'

export default function ContactCard() {
  return (
    <Card className="Card"
      sx={{
        //width: 34,
        maxWidth: "100%",
        borderRadius: "25px",
        padding: 15,
        // boxShadow: "10px 10px 10px rgba(34, 35, 58, 0.2)",
        border: "solid 5px",
        borderColor: "gray",

        margin: 10,

        
      }}
    >
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
        sx={{
          borderRadius: "20px",
          width: "100%",
          //height: 0,
          paddingBottom: "min(100%, 240px)",
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      />
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={180}
          color={"common.white"}
          textAlign={"center"}
          sx={{
            "& h2": {
              color: "black",
              letterSpacing: "2px",
              fontSize: "2.15rem",
              fontWeight: 1000,
              lineHeight: 1.45,
              fontFamily: "helvetica",
              mb: "1.275rem",
            },
          }}
        >
          <h2>CROWNS CLOTHING</h2>
        </Box>
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
          }}
        >
          CONTACT INFORMATION NOT AVAILABLE
        </Typography>
      </CardContent>
    </Card>
  );
}
