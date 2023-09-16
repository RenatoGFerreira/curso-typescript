import Joi from "joi"
import { User } from "../protocols/user.protocol"
import { CreateUser } from "index"


const userSchema = Joi.object<CreateUser>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})