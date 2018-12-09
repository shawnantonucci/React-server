const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.user(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Google API
// https://console.developers.google.com