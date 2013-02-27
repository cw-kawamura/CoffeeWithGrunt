class Util
	constructor: () ->
		
	#アラート
	@alert: (message,title) ->
		if (!title)
			title = ''
		
		Ti.UI.createAlertDialog(
			message: message
			title: title
		).show()
	
module.exports = Util