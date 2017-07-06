/*global Ext Ext6KarmaMocha*/
/*global describe it expect*/

describe('setup', function () {
  it('tests for Ext framework', function () {
    expect(Ext).to.not.equal(null);
  });

  it('tests for Ext6KarmaMocha namespace', function () {
    expect(Ext6KarmaMocha).to.not.equal(null);
  });

  it('tests for MainModel instance and data', function () {
    var model = Ext.create('Ext6KarmaMocha.view.main.MainModel');
    var data = model.getData();

    expect(model).to.not.equal(null);
    expect(data).to.have.property('loremIpsum');
  });

  it('tests for Main view rendition', function () {
    var view = Ext.create('Ext6KarmaMocha.view.main.Main', {
      renderTo: Ext.getBody()
    });

    expect(view).to.not.equal(null);
  });
});