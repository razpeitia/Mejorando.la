var newreg = [];

for(var i = 0; i < registros.length; i++)
	newreg[i] = registros[i].fields;

registros = newreg;

var cursos = [];

for(var i = 0; i < registros.length; i++)
{
	var found = false;

	for(var j = 0; j < cursos.length; j++)
	{
		if(cursos[j].code == registros[i].code)
		{
			found = true;
			break;
		}
	}

	if(!found) cursos.push(registros[i]);
}

Ext.onReady(function () {

	Ext.define('Registro', {
		extend: 'Ext.data.Model',
		fields: [{
			name: 'fecha',
			type: 'date',
			dateFormat: 'Y-m-d'
		}, {
			name: 'nombre',
		}, {
			name: 'pago',
			type: 'boolean'
		}, {
			name: 'telefono'
		}, {
			name: 'email'
		}, {
			name: 'curso'
		}, {
			name: 'code'
		}
		]
	});

	var store = Ext.create('Ext.data.JsonStore', {
		model: 'Registro', 
		data: registros
	});

	var storeCursos = Ext.create('Ext.data.JsonStore', {
		model: 'Registro',
		data: cursos
	});

	var grid = Ext.create('Ext.grid.Panel', {
		emptyText: 'Sin registros a los cursos',
		store: store,
		title: 'Registros de los cursos de Mejorando.la',
		columns: [ { dataIndex: 'fecha', width:120, text: 'Fecha de inscripción', renderer: Ext.util.Format.dateRenderer('F d, Y')},
			{ dataIndex: 'nombre', flex:1, text: 'Nombre' },
			{ dataIndex: 'pago', text: 'Pagado', renderer: function (value) { return value ? 'Si' : 'No'} }, 
			{ dataIndex: 'telefono', text: 'Teléfono' },
			{ dataIndex: 'email', text: 'E-mail', flex:1 } ]
	});

	var combo = Ext.create('Ext.form.ComboBox', {
		fieldLabel: 'Elige un curso',
		store: storeCursos,
		queryMode: 'local',
		displayField: 'curso',
		valueField: 'code',
		listeners: {
			'select': function (combo, records) {
				grid.store.clearFilter();
				grid.store.filter('code', records[0].get('code'));
			}
		}
	});

	Ext.create('Ext.container.Container', {
		renderTo: Ext.getBody(),
		margin:10,
		items: [ combo, grid ]
	});
});