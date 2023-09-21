const express = require("express");
var hostModel = require("../models/hostModel.js");
const router = express.Router();

var {
  getAllHosts,
  saveHost,
  getHostBYID,
  UpdateHostIfo,
  deleteHost,
} = require("../controllers/hostController.js");
// router.route("/").get().post();
// router.route("/:id").get().patch().delete();

// post host
router.post("/", async (req, res) => {
  var name = req.body;
  try {
    var newHost = await saveHost(name);

    res.status(201).json({ host: newHost });
  } catch (err) {
    res.status(500).json({ message: err });
    // res.status(500).json({ message: "Couldn't save host" });
  }
});

// get all hosts
router.get("/", async (req, res) => {
  try {
    var hosts = await getAllHosts();
    res.json({ hosts });
  } catch (err) {
    res.status(500).json({ message: "Couldn't find hosts" });
  }
});

router.get("/:id", (req, res) => {
  var { id } = req.params;
  getHostBYID(id, res);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    address,
    price,
    numberOfRooms,
    numberOfBedrooms,
    guestNumber,
    images,
    category,
    comment,
    description,
    currencySymbol,
  } = req.body;
  UpdateHostIfo(
    id,
    res,
    address,
    price,
    numberOfRooms,
    numberOfBedrooms,
    guestNumber,
    images,
    category,
    comment,
    description,
    currencySymbol
  );
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteHost(id, res);
});
module.exports = router;
