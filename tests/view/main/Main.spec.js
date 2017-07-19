describe('Main view', () => {
  let main;
  var list;
  let results;
  let xhr;
  let requests;

  before(() => {
    // intercept xhr's and builds array of fake requests
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = (req) => requests.push(req);

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

  it('tests fake xhr on controller init', () => {
    expect(requests.length).to.equal(1);
    expect(requests[0].url).to.include('http://google.com/404');
  });

  it('tests that fake xhr response is rendered', () => {
    const req = requests[0];

    /*
    condensed version of:
    req.setStatus(200);
    req.setResponseHeaders({ "Content-Type": "application/json" });
    req.setResponseBody('{ "title": "Wassup!?" }');
    */
    req.respond(
      200,
      { "Content-Type": "application/json" },
      '{ "title": "Wassup!?" }'
    );

    setTimeout(() => {
      expect(main.getTitle()).to.equal('Wassup!?');
    }, 250);
  });

  after(() => {
    xhr.restore();
    main.destroy();
    results[0].destroy();
  });
});
