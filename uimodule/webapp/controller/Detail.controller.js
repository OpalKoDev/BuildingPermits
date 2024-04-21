sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("BuildingPermits.controller.Detail", {
            
            onCloseDetailDetail: function () {
                this.getModel("JSON").setProperty("/layout", "OneColumn");
            },
            onOpenDetailDetail: function () {
                this.getModel("JSON").setProperty("/layout", "TwoColumnsBeginExpanded");
            },
        });
    },
);
