sap.ui.define(
    ["./BaseController", '../model/models'],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("Detail.controller.MainView", {
            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.attachRouteMatched(this.onRouteMatched, this);
                
            },
            onRouteMatched: function(oEvent) {
                debugger;
                models.getData(this.getOwnerComponent(), "/FlightListSet");
            },
            onCloseDetailDetail: function () {
                this.getModel("JSON").setProperty("/layout", "OneColumn");
            },
            onOpenDetailDetail: function () {
                this.getModel("JSON").setProperty("/layout", "TwoColumnsBeginExpanded");
            },
        });
    },
);
