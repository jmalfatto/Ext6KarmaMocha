describe('setup', () => {
  it('tests for Ext framework', () => {
    expect(Ext).to.not.equal(null);
  });

  it('tests for Ext6KarmaMocha namespace', () => {
    expect(Ext6KarmaMocha).to.not.equal(null);
  });

  it('tests for chai namespace', () => {
    expect(chai).to.not.equal(null);
  });

  it('tests for sinon namespace', () => {
    expect(sinon).to.not.equal(null);
    expect(sinon.spy).to.be.a('function');
  });
});
