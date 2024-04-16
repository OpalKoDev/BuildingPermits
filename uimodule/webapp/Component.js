/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */
var oComoponent ='';

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "BuildingPermits/model/models", 'sap/ui/model/odata/v2/ODataModel',
    'BuildingPermits/mockserver/DemoMockServer'], function (UIComponent, Device, models, ODataModel, DemoMockServer) {
        "use strict";

        return UIComponent.extend("BuildingPermits.Component", {
            metadata: {
                manifest: "json",
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                oComoponent = this;


                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");


                var oModel;

                this._oMockServer = new DemoMockServer();

                oModel = new ODataModel(this._oMockServer.getServiceUrl(), {
                    defaultCountMode: "Inline"
                });

                this.setModel(oModel);


            },
        });
    });
