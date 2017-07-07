describe('setup', function () {
  it('tests for Ext framework', function () {
    expect(Ext).to.not.equal(null);
  });

  it('tests for Ext6KarmaMocha namespace', function () {
    expect(Ext6KarmaMocha).to.not.equal(null);
  });
});
