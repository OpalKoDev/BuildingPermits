sap.ui.define([
	"sap/base/util/ObjectPath",
	"sap/ushell/services/Container"
], function (ObjectPath) {
	"use strict";

	// define ushell config
	ObjectPath.set(["sap-ushell-config"], {
		defaultRenderer: "fiori2",
		bootstrapPlugins: {
			RuntimeAuthoringPlugin: {
				component: "sap.ushell.plugins.rta",
				config: {
					validateAppVersion: false
				}
			},
			PersonalizePlugin: {
				component: "sap.ushell.plugins.rta-personalize",
				config: {
					validateAppVersion: false
				}
			}
		},
		renderers: {
			fiori2: {
				componentData: {
					config: {
						enableSearch: false,
						rootIntent: "Shell-home"
					}
				}
			}
		},
		services: {
			LaunchPage: {
				adapter: {
					config: {
						groups: [
							{
								tiles: [
									{
										tileType: "sap.ushell.ui.tile.StaticTile",
										properties: {
											title	 : "היתר בניה",
											subtitle : "",
											icon     : "sap-icon://bbyd-dashboard",
											targetURL: "#BuildingPermits-tile&/BuildingPermit/123"
										}
									},
									{
										tileType: "sap.ushell.ui.tile.StaticTile",
										properties: {
											title	 : "יצירת היתר בניה",
											subtitle : "",
											icon     : "sap-icon://bbyd-dashboard",
											targetURL: "#BuildingPermits-tile&/Create"
										}
									}
								]
							}
						]
					}
				}
			},
			ClientSideTargetResolution: {
				adapter: {
					config: {
						inbounds: {
							display: {
								semanticObject: "BuildingPermits",
								action: "tile",
								title	 : "היתר בניה",
								signature: {
									parameters: {},
									additionalParameters: "allowed"
								},
								resolutionResult: {
									applicationType: "SAPUI5",
									additionalInformation: "SAPUI5.Component=BuildingPermits",
									url: sap.ui.require.toUrl("BuildingPermits")
								}
							},
							manage: {
								semanticObject: "BuildingPermits",
								action: "tile",
								title	 : "יצירת היתר בניה",
								signature: {
									parameters: {},
									additionalParameters: "allowed"
								},
								resolutionResult: {
									applicationType: "SAPUI5",
									additionalInformation: "SAPUI5.Component=zcompl_dash",
									url: sap.ui.require.toUrl("BuildingPermits")
								}
							}
						}
					}
				}
			},
			NavTargetResolution: {
				config: {
					enableClientSideTargetResolution: true
				}
			}
		}
	});

	var oFlpSandbox = {
		init: function () {
			/**
			 * Initializes the FLP sandbox
			 * @returns {Promise} a promise that is resolved when the sandbox bootstrap has finshed
			 */

			// sandbox is a singleton, so we can start it only once
			if (!this._oBootstrapFinished) {
				this._oBootstrapFinished = sap.ushell.bootstrap("local");
				this._oBootstrapFinished.then(function () {
					sap.ushell.Container.createRenderer().placeAt("content");
				});
			}

			return this._oBootstrapFinished;
		}
	};

	return oFlpSandbox;
});