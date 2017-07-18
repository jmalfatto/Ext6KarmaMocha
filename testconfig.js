/*
alternative way to load scripts, instead of karma proxies
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'APP': 'http://' + window.location.host + '/absolute/Users/jason/projects/karma-extjs/example/APP/src'
    },
    disableCaching: true
});*/

/* This is required to load APP.mixin.Badge dynamically
*  as per the requirement in Ext6KarmaMocha.view.main.Main.
*  This creates a warning "[Ext.define] Duplicate class name ...specified...",
*  presumably because Karma already loaded the file from its "files" config.
*/
Ext.Loader.setConfig({
    enabled: true
});

Ext.MessageBox = Ext.Msg = new Ext.window.MessageBox();
