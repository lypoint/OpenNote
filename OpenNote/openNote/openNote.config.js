/**
 * Angular js config file
 */
openNote.value("config", {

	/**
	 * Get current version
	 */
	getVersion: function(){
		return "15.07.00";
	},

	/**
	 * Get update URL
	 */
	getUpdateURL: function(){
		return "//stardrive.us/UpdateService/?appName=OpenNote-prod";
	},

	/**
	 * http path to backend rest service
	 */
	servicePath: function(){
		var url = localStorage.getItem("serviceURL");
		if(url)
			return url;

		return "./Service/service.php";
	},

	/**
	 * Used to compute random short fade speed
	 */
	fadeSpeedShort: function(){
		return 250*Math.random()+200;
	},

	/**
	 * Used to compute random long fade speed
	 */
	fadeSpeedLong: function(){
		return 2000*Math.random()+200;
	},

	/**
	 * returns help contents
	 */
	getHelpContent: function(){
		return {
			homeButton: "点击这里回到首页。",
			listArea: "这里展示的是分类目录。你可以拖拽他们重新排序。如果要将一个目录拖拽到另外一个目录中，目标目录需要是打开的。",
			newNoteButton: "在当前目录分类中新建一个记录。",
			newFolderButton: "在当前目录里新建一个子目录。",
			findButton: "打开快速搜索界面",
			folderEditModeButton: "点击这里显示编辑按钮",
			viewArea: "这里是主显示区。显示目录结构和编辑区域。",
			noteBody: "这里是记录内容。在编辑模式下这里是一个编辑器。",
			clearButton: "点击这个按钮可以撤销你的操作。",
			saveButton: "点击这里保存记录。",
			editButton: "点击这里进入编辑模式。",
			noteTitle: "这是记录标题。在编辑模式下，可以在这里编辑标题。"
		}
	},

	/**
	 * Do we want to show the help button
	 */
	showHelpButton: function(){
		return true;
	},

	/**
	 * Get server config
	 * return -
	 */
	getServerConfig: function(){
		return $resource(config.servicePath()+"/config/", {}, {//{} default params
	        get: {
	            method: "GET"
	        }
	    }).$get();
	},

	/**
	 * See if we are dark or light
	 */
	isDarkTheme: function(){
		return false;
	}
});

/**
 * Change link behavior to not be stupid an allow all href links
 * @param $compileProvider
 */
openNote.config(function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist("[\s\S]*");
});
