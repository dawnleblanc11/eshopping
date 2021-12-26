// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
  });
// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete:'NULL',
  });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
      model: 'product_tag',
      unique: false,
    },
    as: 'associated_tags',
    //foreignKey: 'product_id'
  });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    //through: ProductTag,
    //as: 'product_tag',
    //foreignKey: 'tag_id'
    through: {
      model: 'product_tag',
      unique: false,
    },
    as: 'associated_products', 
  });

  
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};