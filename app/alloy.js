var global = this;

(function(global) {

	console.info(' ');
	console.info('------------------------------------------------------------------');
	console.info('| ID:          ' + _.padEnd(Ti.App.id, 50) + '|');
	console.info('| Name:        ' + _.padEnd(Ti.App.name, 50) + '|');
	console.info('| Version:     ' + _.padEnd(Ti.App.version, 50) + '|');
	console.info('| Deployment:  ' + _.padEnd(Ti.App.deployType, 50) + '|');
	console.info('------------------------------------------------------------------');
	console.info(' ');

	// Code that you want to run upon app startup goes here!
	

})(global);