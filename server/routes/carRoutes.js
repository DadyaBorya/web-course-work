const {Router} = require("express")
const carController = require("../controllers/CarController")
const {upload} = require("../multer");
const router = Router()

router.post("/create", upload.array("imgCollection", 12), carController.create)
router.get("/", carController.getAll)
router.get("/:id", carController.getById)
router.put("/available", carController.setAvailable)
router.put("/update", upload.array("imgCollection", 12), carController.updateById)

module.exports = router