import jwt from "jsonwebtoken"
const SECRET_KEY = "doni_rich_men"
const encodeId = (_id: string): string => {
    const token = jwt.sign(_id, SECRET_KEY)
    return token
}

const decodeToken = (token: string) => {
    const id = jwt.decode(token, { complete: true }).payload;
    return id;
}

export {
    decodeToken,
    encodeId
}