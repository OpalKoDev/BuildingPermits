sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/core/util/MockServer"
], function(BaseObject, MockServer){
	"use strict";

	/* Export requires an absolute path */
	var SERVICE_URL = "https://fake.host.com/localService/";

	var DemoMockServer = BaseObject.extend("BuildingPermits.mockserver.DemoMockServer", {
		constructor : function(bTree, sMockdataPath) {
			BaseObject.apply(this);

			var oMockServer = new MockServer({
				rootUri: SERVICE_URL
			});

			this._oMockServer = oMockServer;

			var sMockdataUrl = sap.ui.require.toUrl(sMockdataPath || "BuildingPermits/mockserver");
			oMockServer.simulate(sMockdataUrl + "/metadata.xml", sMockdataUrl);
			this.start();
		}

	});

	DemoMockServer.prototype.getServiceUrl = function() {
		return SERVICE_URL;
	};

	DemoMockServer.prototype.start = function() {
		this._oMockServer.start();
	};

	DemoMockServer.prototype.stop = function() {
		this._oMockServer.stop();
	};

	DemoMockServer.prototype.destroy = function(oView) {
		this.stop();
		if (oView) {
			var oModel = oView.getModel();
			oView.setModel();
			if (oModel) {
				oModel.destroy();
			}
		}
		this._oMockServer.destroy();
		this._oMockServer = null;
	};

	return DemoMockServer;
});