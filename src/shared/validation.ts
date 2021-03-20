import * as Joi from "joi";

export function validate(schema: Joi.ObjectSchema, object:any) {
    return schema.validate(object);
}