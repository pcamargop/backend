import { Request, Response, Application, Router } from "express";

import { VentaController } from "../controllers/venta.controller";

export class ventaRoutes {
  public ventaController: VentaController = new VentaController();

  public routes(app: Application): void {
    app.route("/ventas/test").get(this.ventaController.test);
    app.route("/ventas").get(this.ventaController.getAllVenta);
    app.route("/ventas").post(this.ventaController.createVenta);
    app.route("/ventas/:id").get(this.ventaController.getOneVenta);
    app.route("/ventas/:id").put(this.ventaController.updateVenta);
    app.route("/ventas/:id").delete(this.ventaController.deleteTipoVenta);
  }
}
