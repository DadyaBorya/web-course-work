const {Router} = require("express")
const transportationController = require("../controllers/TransportationController")
const router = Router()

router.post("/create", transportationController.create)
router.get("/", transportationController.getAll)
router.post("/status", transportationController.setStatus)

module.exports = router;