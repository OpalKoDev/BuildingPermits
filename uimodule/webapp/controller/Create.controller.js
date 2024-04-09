sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
    "use strict";

    return BaseController.extend("BuildingPermits.controller.Create", {
        onInit() {

            this._oWizard = this.byId("wizard");
			this._iSelectedStepIndex = 0;
			this._oSelectedStep = this._oWizard.getSteps()[this._iSelectedStepIndex];
            this.handleButtonsVisibility();
        },

        onNextWizard() {
			this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
			const oNextStep = this._oWizard.getSteps()[this._iSelectedStepIndex + 1];

			if (this._oSelectedStep && !this._oSelectedStep.bLast) {
				this._oWizard.goToStep(oNextStep, true);
			} else {
				this._oWizard.nextStep();
			}

			this.getOwnerComponent().getModel("JSON").setProperty("/wizard/step" + this._iSelectedStepIndex +"/accept", true);
			
			this._iSelectedStepIndex++;
			this._oSelectedStep = oNextStep;

			this.handleButtonsVisibility();
        },
		onPrevWizard: function () {
			this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
			const oPreviousStep = this._oWizard.getSteps()[this._iSelectedStepIndex - 1];

			if (this._oSelectedStep) {
				this._oWizard.goToStep(oPreviousStep, true);
			} else {
				this._oWizard.previousStep();
			}

			this._iSelectedStepIndex--;
			this._oSelectedStep = oPreviousStep;

			this.handleButtonsVisibility();
		},
		handleNavigationChange: function (oEvent) {
			this._oSelectedStep = oEvent.getParameter("step");
			this._iSelectedStepIndex = this._oWizard.getSteps().indexOf(this._oSelectedStep);
			this.handleButtonsVisibility();
		},
        handleButtonsVisibility: function () {
			const oModel = this.getOwnerComponent().getModel("JSON");
			switch (this._iSelectedStepIndex){
				case 0:
					oModel.setProperty("/nextButtonVisible", true);
					oModel.setProperty("/nextButtonEnabled", true);
					oModel.setProperty("/backButtonVisible", false);
					oModel.setProperty("/reviewButtonVisible", false);
					oModel.setProperty("/finishButtonVisible", false);
					break;
				case 1:
					oModel.setProperty("/nextButtonVisible", false);
					oModel.setProperty("/finishButtonVisible", true);
					oModel.setProperty("/backButtonVisible", true);
					// oModel.setProperty("/reviewButtonVisible", true);
					break;
				default: break;
			}
			
		},
    });
});
