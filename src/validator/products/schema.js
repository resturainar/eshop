const Joi = require('joi');

const ProductsPayloadSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().allow('', null),
});

const ProductsImageHeaderSchema = Joi.object({
  'content-type': Joi.string().valid(
      'image/apng',
      'image/avif',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/webp').required(),
}).unknown();

module.exports = { ProductsPayloadSchema, ProductsImageHeaderSchema };