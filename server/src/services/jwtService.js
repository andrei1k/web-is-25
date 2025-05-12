import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

class JwtService {

    constructor(){
        this.secret = process.env.JWT_SECRET_KEY
        this.expire = process.env.JWT_EXPIRES_IN
    }

    generateToken(payload) {

        console.log(this.secret, this.expire)
        return jwt.sign(payload, this.secret, {expiresIn: this.expire})
    }

    verify(token) {
        return jwt.verify(token, this.secret)
    }
}

export const jwtService = new JwtService();