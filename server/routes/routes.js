const {Router} = require("express")
const carRoutes = require("./carRoutes")
const transportationRoute = require("./transportationRoute")

const router = Router()

router.use("/car", carRoutes)
router.use("/transportation", transportationRoute)

module.exports = router;