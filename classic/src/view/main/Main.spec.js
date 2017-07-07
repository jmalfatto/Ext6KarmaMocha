describe('Main view', function () {
  var main,
      list,
      results;

  before(function () {
    main = Ext.create('Ext6KarmaMocha.view.main.Main', {
      renderTo: Ext.getBody()
    });
  });

  it('tests for Main view rendition', function () {
    expect(main).to.not.equal(null);
  });

  it('tests for List view rendition', function () {
    list = main.down('mainlist');

    expect(list).to.not.equal(null);
  });

  it('tests for alert on list row select', function () {
    list.fireEvent('select');

    results = Ext.ComponentQuery.query('messagebox[title="Confirm"]');

    expect(results.length).to.equal(1);
    expect(results[0].hidden).to.equal(false);
  });

  after(function () {
    main.destroy();
    results[0].destroy();
  });
});
