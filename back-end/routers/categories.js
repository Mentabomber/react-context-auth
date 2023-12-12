const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");

router.post("/", categoriesController.store);

router.get("/", categoriesController.showAllCategories);

// router.get("/", categoriesController.showAll);

// router.put("/:slug",categoriesController.update);

// router.delete("/:slug",categoriesController.destroy);


module.exports = router;