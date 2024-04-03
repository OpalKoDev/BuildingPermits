sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Detail.controller.MainView", {
            onInit: function () {
               
            },
            onCloseDetailDetail: function() {
                this.getModel("JSON").setProperty("/layout","OneColumn");
            },
            onOpenDetailDetail: function() {
                this.getModel("JSON").setProperty("/layout","TwoColumnsBeginExpanded");
            }
        });
    },
);
