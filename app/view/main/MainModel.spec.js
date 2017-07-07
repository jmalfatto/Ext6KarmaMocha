describe('MainModel', function () {
  it('tests for MainModel instance and data', function () {
    const model = Ext.create('Ext6KarmaMocha.view.main.MainModel');
    const data = model.getData();

    expect(model).to.not.equal(null);
    expect(data).to.have.property('loremIpsum');
  });
});
