ApplicationWindow(title) ->
	self = Ti.UI.createWindow
		title:title,
		backgroundColor:'white'
	
	button = Ti.UI.createButton
		height: 44,
		width: 200,
		title: L 'openWindow'
		top: 20
	
	self.add(button)
	
	button.addEventListener('click', (e) ->
		# containingTab attribute must be set by parent tab group on
		# the window for this work
		self.containingTab.open(Ti.UI.createWindow
			title: L 'newWindow'
			backgroundColor: 'white'
		)
	)
	
	return self;

module.exports = ApplicationWindow;