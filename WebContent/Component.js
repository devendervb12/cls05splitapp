
sap.ui.core.UIComponent.extend("emax.cls05Product.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
		
	}
});




