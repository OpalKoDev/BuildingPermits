sap.ui.define(["sap/ui/core/mvc/Controller", '../model/models'], function (BaseController, models) {
    "use strict";

    return BaseController.extend("BuildingPermits.controller.Main", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Main").attachPatternMatched(this.onRouteMatched, this);
            
        },
        onRouteMatched: function(oEvent) {
            debugger;
            models.getData(this.getOwnerComponent(), "/FlightListSet");
        },
    });
});
