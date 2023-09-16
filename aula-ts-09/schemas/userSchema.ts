import Joi from "joi"
import { User } from "../protocols/user-protocols"

const userSchema = Joi.object<User>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()

})