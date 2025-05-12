import { jwtService } from '../services/jwtService.js'

export function authMiddleware(req, res, next) {
    
    const headerValue = req.headers.authorization;

    const [type, token] = headerValue.split(' ');

    if (type !== 'Bearer' || !token){
        res.status(401).json({message: "Invalid token"})
    }

    req.user = jwtService.verify(token)

    next()
}