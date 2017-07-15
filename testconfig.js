Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'APP': 'http://' + window.location.host + '/absolute/Users/jason/projects/karma-extjs/example/APP/src'
    },
    disableCaching: true
});

Ext.MessageBox = Ext.Msg = new Ext.window.MessageBox();
