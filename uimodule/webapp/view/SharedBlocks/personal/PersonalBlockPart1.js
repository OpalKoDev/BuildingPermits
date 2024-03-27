sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart1 = BlockBase.extend("BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart1",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart1;
});
