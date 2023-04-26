const { authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/products", [authJwt.verifyToken], controller.add);
  app.get("/api/products",  [authJwt.verifyToken],controller.get);
  app.get("/api/products/:id",  [authJwt.verifyToken],controller.getById);
  app.put("/api/products/:id", [authJwt.verifyToken],controller.update)
  app.delete("/api/products/:id", [authJwt.verifyToken],controller.delete)


};
