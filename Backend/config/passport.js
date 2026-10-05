import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { db } from "../src/prisma/db.ts";


passport.use(
    new GoogleStrategy({
     clientID: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: "/auth/google/callback",    
    },
    async (accessToken, refreshToken, profile, done) => {
        try{
                const email = profile.emails?.[0]?.value;

                let user = await db.orm.public.User.where({ "googleId": profile.id}).first()

                if(!user && email){
                    user = await db.orm.public.User.where({ "email": email }).first()
                    
                    if(user){
                        await db.orm.public.User
                            .where({ "email": email })
                            .update({ "googleId": profile.id})
                    }
                }

                if(!user){
                    if(!email){
                        throw new Error("Google profile did not provide an email address")
                    }

                    user = await db.orm.public.User.create({
                        "email": email,
                        "googleId": profile.id,
                        "name": profile.displayName,
                        "username": profile.displayName,
                    })
                }

                return done(null, user)
            }catch(err){
                return done(err)
            }
        }    
    )
)

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
    try{
        const user = await db.orm.public.User.where({ "id": id}).first()
        done(null, user)
    } catch (err){
        done(err)
    }
})