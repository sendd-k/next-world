const router = require("express").Router();
const { WorldsApi } = require("../vrcApi");

//gets world data from vrc api from keyword
router.post("/", async (req, res) => {
  const search = req.body.text;

  WorldsApi.searchWorlds(
    false,
    "popularity",
    undefined,
    undefined,
    12,
    "descending",
    0,
    search
  ).then((worldResults) => {
    res.json(worldResults.data);
  });
});

//gets world info from VRC API by world id
router.get("/:worldId", async (req, res) => {
  const worldId = req.params.worldId;
  WorldsApi.getWorld(worldId).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
