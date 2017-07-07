describe('setup', function () {
  it('tests for Ext framework', function () {
    expect(Ext).to.not.equal(null);
  });

  it('tests for Ext6KarmaMocha namespace', function () {
    expect(Ext6KarmaMocha).to.not.equal(null);
  });

  it('tests for MainModel instance and data', function () {
    const model = Ext.create('Ext6KarmaMocha.view.main.MainModel');
    const data = model.getData();

    expect(model).to.not.equal(null);
    expect(data).to.have.property('loremIpsum');
  });
});
