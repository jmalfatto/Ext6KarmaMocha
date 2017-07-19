/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Ext6KarmaMocha.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  init: function (view) {
    // to test sinon and scenario where api is unavailable during test run, fire xhr that ends in 404
    Ext.Ajax.request({
      url: 'http://google.com/404'
    }).then((response) => {
      var response = Ext.decode(response.responseText);

      view.setTitle(response.title);
    });
  },

  onItemSelected: function () {
    Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
  },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});
