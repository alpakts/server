const { authJwt } = require("../middlewares");
const controller = require("../controllers/company.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/company", [authJwt.verifyToken], controller.add);
  app.get("/api/company/:id",  [authJwt.verifyToken],controller.getById);
  app.get("/api/company", [authJwt.verifyToken], controller.get);
  app.put("/api/company/:id", [authJwt.verifyToken],controller.update)
  app.delete("/api/company/:id", [authJwt.verifyToken],controller.delete)

};
