sap.ui.define(
    ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     *
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     *
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                const oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            getData: function (oComponent, entity, filter) {
                return new Promise((resolve, reject) => {
                    const oDataModel = oComponent.getModel();
                    oDataModel
                        .metadataLoaded()
                        .then(() => {
                            oData
                                .read(entity, {
                                    filters: filter || [],
                                    success: (data) => {
                                        resolve(data['results']);
                                    }
                                });
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            },
            postData: function (oComponent,entity, oEntry) {
                const oDataModel = oComponent.getModel();
                return new Promise(function (resolve, reject) {
                    oDataModel.create(entity, oEntry, {
                        success: function (data) {
                            resolve(data);
                        },
                        error: function (error) {
                            reject(error);
                        }
                    });
                });
            },

        };
    },
);
