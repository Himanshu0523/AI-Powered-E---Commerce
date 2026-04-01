const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const User = require("../models/user.model");


passport.serializeUser((user , done) => {
  done(null , user.id);
});

passport.deserializeUser(async (id , done) => {
  const user = await User.findById(id);
  done(null , user);
});

/*
GOOGLE STRATEGY
*/

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },

    async (accessToken, refreshToken, profile, done) => {

      const email = profile.emails[0].value;

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email,
          password: "oauth"
        });

      }

      done(null, user);

    }
  )
);



/*
GITHUB STRATEGY
*/

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback"
    },

    async (accessToken, refreshToken, profile, done) => {

      const email = profile.emails?.[0]?.value || `${profile.username}@github.com`;

      let user = await User.findOne({ email });

      if (!user) {

        user = await User.create({
          name: profile.username,
          email,
          password: "oauth"
        });

      }

      done(null, user);

    }
  )
);



/*
LINKEDIN STRATEGY
*/

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: "/api/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"]
    },

    async (accessToken, refreshToken, profile, done) => {

      const email = profile.emails[0].value;

      let user = await User.findOne({ email });

      if (!user) {

        user = await User.create({
          name: profile.displayName,
          email,
          password: "oauth"
        });

      }

      done(null, user);

    }
  )
);



module.exports = passport;