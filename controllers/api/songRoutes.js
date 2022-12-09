const router = require('express').Router();
const { Music } = require('../../models');
const withAuth = require('../../utils/auth');
const queryString = require('node:querystring');
const axios = require('axios');

//this page contains the link to the spotify authorization page
//contains custom url queries that pertain to my specific app
router.get("/", (req, res) => {
    res.send(
      "<a href='https://accounts.spotify.com/authorize?client_id=" +
        process.env.CLIENT_ID +
        "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Faccount&scope=user-top-read'>Sign in</a>"
    );
  });
  
  //this is the page user is redirected to after accepting data use on spotify's website
  //it does not have to be /account, it can be whatever page you want it to be
router.get("/account", async (req, res) => {
    console.log("spotify response code is " + req.query.code);
    res.send("account page");
  });

router.get("/account", async (req, res) => {
    const spotifyResponse = await axios.post(
        "https://accounts.spotify.com/api/token",
        queryString.stringify({
          grant_type: "authorization_code",
          code: req.query.code,
          redirect_uri: process.env.REDIRECT_URI_DECODED,
        }),
        {
          headers: {
            Authorization: "Basic " + process.env.BASE64_AUTHORIZATION,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    
    console.log(spotifyResponse.data);
  })