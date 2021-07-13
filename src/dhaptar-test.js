QUnit.module('DhaptarNode', () => {
  QUnit.test('Intantiate new DhaptarNode', assert => {
    const dn = new DhaptarNode(1);

    assert.equal(dn.data, 1);
    assert.equal(dn.next, null)
  });

  QUnit.test('Linking DhaptarNode to another DhaptarNode', assert => {
    const dn1 = new DhaptarNode(1);
    const dn2 = new DhaptarNode(2);
    dn1.next = dn2;

    assert.deepEqual(dn1.next, dn2);
  });
});

QUnit.module('Dhaptar', hooks => {
  let d;

  hooks.beforeEach(assert => {
    d = new Dhaptar();

    // Also check for `Instantiate new Dhaptar`
    assert.equal(d.size, 0);
    assert.equal(d.head, null);
    assert.equal(d.tail, null);
  });

  QUnit.test('Inserting DhaptarNode to Dhaptar head', assert => {
    d.push(1);

    assert.equal(d.size, 1);
    assert.equal(d.head.data, 1);
    assert.equal(d.tail.data, 1);
  });

  QUnit.test('Inserting DhaptarNode to Dhaptar head manually', assert => {
    const dn = new DhaptarNode(1);
    d.head = dn;

    assert.equal(d.size, 1);
    assert.deepEqual(d.head, dn);
    assert.deepEqual(d.tail, dn);
  });

  QUnit.test('Inserting DhaptarNode to Dhaptar tail manually', assert => {
    const dn = new DhaptarNode(1);
    d.tail = dn;

    assert.equal(d.size, 1);
    assert.deepEqual(d.head, dn);
    assert.deepEqual(d.tail, dn);
  });

  QUnit.test('Inserting multiple data to Dhaptar tail manually', assert => {
    const dn1 = new DhaptarNode(1);
    const dn2 = new DhaptarNode(2);
    dn1.next = dn2;

    d.tail = dn1;
    assert.equal(d.size, 2);
    assert.deepEqual(d.head, dn1);
    assert.deepEqual(d.tail, dn2);
  });

  QUnit.test('Inserting multiple data to Dhaptar', assert => {
    d.push(1);
    d.push(2);

    assert.equal(d.size, 2);
    assert.equal(d.head.data, 1);
    assert.equal(d.tail.data, 2);
  });

  QUnit.test('Inserting multiple data to Dhaptar manually', assert => {
    const dn1 = new DhaptarNode(1);
    const dn2 = new DhaptarNode(2);
    dn1.next = dn2;

    d.head = dn1;
    assert.equal(d.size, 2);
    assert.deepEqual(d.head, dn1);
    assert.deepEqual(d.tail, dn2);
  });

  QUnit.test('Removing last DhaptarNode in Dhaptar', assert => {
    d.push(1);
    assert.equal(d.size, 1);
    assert.equal(d.head.data, 1);
    assert.equal(d.tail.data, 1);

    d.pop();
    assert.equal(d.size, 0);
    assert.equal(d.head, null);
    assert.equal(d.tail, null);
  });

  QUnit.test('Clearing a Dhaptar head list', assert => {
    d.push(1);
    assert.equal(d.size, 1);
    assert.equal(d.head.data, 1)
    assert.equal(d.tail.data, 1);

    d.clear();
    assert.equal(d.size, 0);
    assert.equal(d.head, null)
    assert.equal(d.tail, null);
  });

  QUnit.test('Accessing empty Dhaptar head', assert => {
    assert.throws(() => {
      d.at(0);
    });
  });

  QUnit.test('Accessing Dhaptar at certain index', assert => {
    d.push(1);
    d.push(2);

    assert.equal(d.at(0).data, 1);
    assert.equal(d.at(1).data, 2);
  });

  QUnit.test('Accessing Dhaptar at certain index but it is invalid', assert => {
    d.push(1);

    assert.throws(() => {
      d.at(1);
    });
  });

  QUnit.test('Accessing Dhaptar that inserted manually', assert => {
    const dn = new DhaptarNode(1);
    d.head = dn;

    assert.deepEqual(d.at(0), dn);
  });

  QUnit.test('Dhaptar accessor return DhaptarNode', assert => {
    const dn = new DhaptarNode(1);
    d.push(1);

    assert.deepEqual(d.head, dn);
    assert.deepEqual(d.tail, dn);
    assert.deepEqual(d.at(0), dn);
  });
});
