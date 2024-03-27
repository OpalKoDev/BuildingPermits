sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart2 = BlockBase.extend("BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart2",
					type: "XML"
				},
				Expanded: {
					viewName: "BuildingPermits.view.SharedBlocks.personal.PersonalBlockPart2",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart2;
});
