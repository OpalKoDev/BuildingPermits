sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("BuildingPermits.view.SharedBlocks.tab1.GoalsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "BuildingPermits.view.SharedBlocks.tab1.GoalsBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "BuildingPermits.view.SharedBlocks.tab1.GoalsBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
});
