Ext.onReady(function () {

	Ext.define('User', {
		extend: 'Ext.data.Model', 
		fields: [
		{ name: 'name' },
		{ name: 'red' },
		{ name: 'messages' }
		]
	});

	var store = Ext.create('Ext.data.JsonStore', {
		model: 'User', 
		data: usuarios
	});

	var grid = Ext.create('Ext.grid.Panel', {
		emptyText: 'Sin usuarios de chat',
		store: store,
		title: 'Usuarios del chat de mejorando.la',
		columns: [
			{ dataIndex: 'name', flex:1, text: 'Nombre' },
			{ dataIndex: 'red', text: 'Red' }, 
			{ dataIndex: 'messages', text: '# Mensajes' },
		]
	});

	Ext.create('Ext.container.Container', {
		renderTo: Ext.getBody(),
		margin:10,
		items: [ grid ]
	});
});