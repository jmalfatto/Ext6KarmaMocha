describe('Main view', () => {
  let main;
  var list;
  let results;

  before(() => {
    main = Ext.create('Ext6KarmaMocha.view.main.Main');
  });

  it('tests for Main view rendition', () => {
    expect(main).to.not.equal(null);
  });

  it('tests for List view rendition', () => {
    list = main.down('mainlist');

    expect(list).to.not.equal(null);
  });

  it('tests for alert on list row select', () => {
    list.fireEvent('select');

    results = Ext.ComponentQuery.query('messagebox[title="Confirm"]');

    expect(results.length).to.equal(1);
    expect(results[0].hidden).to.equal(false);
  });

  after(() => {
    main.destroy();
    results[0].destroy();
  });
});
