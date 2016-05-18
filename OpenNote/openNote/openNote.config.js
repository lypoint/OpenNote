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
			homeButton: "�������ص���ҳ��",
			listArea: "����չʾ���Ƿ���Ŀ¼���������ק���������������Ҫ��һ��Ŀ¼��ק������һ��Ŀ¼�У�Ŀ��Ŀ¼��Ҫ�Ǵ򿪵ġ�",
			newNoteButton: "�ڵ�ǰĿ¼�������½�һ����¼��",
			newFolderButton: "�ڵ�ǰĿ¼���½�һ����Ŀ¼��",
			findButton: "�򿪿�����������",
			folderEditModeButton: "���������ʾ�༭��ť",
			viewArea: "����������ʾ������ʾĿ¼�ṹ�ͱ༭����",
			noteBody: "�����Ǽ�¼���ݡ��ڱ༭ģʽ��������һ���༭����",
			clearButton: "��������ť���Գ�����Ĳ�����",
			saveButton: "������ﱣ���¼��",
			editButton: "����������༭ģʽ��",
			noteTitle: "���Ǽ�¼���⡣�ڱ༭ģʽ�£�����������༭���⡣"
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
