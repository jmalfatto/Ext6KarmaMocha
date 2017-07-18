Ext.Loader.loadScript({
  onLoad: function () {
    console.log('hi'); // not called

    Ext.application({
      inhibitLaunch: true,
      bootDependencies: [ ],
      bootDependenciesThen: function () {

      }
    });
  }
});
