const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { afterBulkSync } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
  const tagData = await Tag.findAll({
    // be sure to include its associated Product data (also include Product Tag ???)
    include: [{ model: Product, through: ProductTag, as: 'associated_products' }]
  });
  res.status(200).json(tagData)
}
    catch(err) {
      res.status(400).json(err);
    }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  try {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product,through: ProductTag, as: 'associated_products'}]
    // be sure to include its associated Product data 
  });
    if (!tagData) {
      res.status(404).json({message: 'Nothing found with this Tag ID'});
      return;
    }
      res.status(200).json(tagData)
    }
  catch(err) {
    res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  // expects {"tag_name": 'silver'}
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
  router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    // expects {"tag_name": 'silver'}
    Tag.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
      .then((dbTagData) => {
        if (!dbTagData[0]) {
          res.status(404).json({ message: "No tag found with this id" });
          return;
        }
        res.json(dbTagData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  
  
  router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbTagData) => {
        if (!dbTagData) {
          res.status(404).json({ message: "No tag found with this id" });
          return;
        }
        res.json(dbTagData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
