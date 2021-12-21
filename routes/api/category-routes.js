const router = require('express').Router();
const { Category } = require('../../models');

// GET /api/categories - the api/categories endpoint

router.get('/', (req, res) => {
// Access the Category model and run .findAll() method
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
    // be sure to include its associated Products
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err=> {
      console.log(err);
      res.status(500).json(err);
    })
});

// find one category by its `id` value
// GET /api/categories/1
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Product,
            attributes: ["id", "product_name", "price", "stock", "category_id"],
          },
        ],
      })
        .then(dbCategoryData => {
          if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
          }
          res.json(dbCategoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

 // create a new category
// POST /api/categories
router.post('/', (req, res) => {
    // expects {category_name: 'shoes'}
Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a category by its `id` value
// PUT /api/categories/1
router.put('/:id', (req, res) => {
        // expects {category_name: 'Shoes'}
      
        // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
        Category.update(req.body, {
          where: {
            id: req.params.id
          }
        })
          .then(dbCategoryData => {
            if (!dbCategoryData[0]) {
              res.status(404).json({ message: 'No category found with this id' });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          }); 
});

// delete a category by its `id` value
// DELETE /api/categories/1
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCategoryData => {
          if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
          }
          res.json(dbCategoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });



});

module.exports = router;