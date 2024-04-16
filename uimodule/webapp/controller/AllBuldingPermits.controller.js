sap.ui.define([
	'sap/ui/core/mvc/Controller',
	
], function (Controller) {
	"use strict";

	return Controller.extend("BuildingPermits.controller.AllBuldingPermits", {
		onInit: function () {
			
		},
		onBeforeExport: function (oEvt) {
			var mExcelSettings = oEvt.getParameter("exportSettings");

			// Disable Worker as Mockserver is used in Demokit sample
			mExcelSettings.worker = false;
		},
		// onExit: function () {
		// 	this._oMockServer.destroy(this.getView());
		// }
	});
});
