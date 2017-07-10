var LinkedList = require('../modules/LinkedList.js');

describe("CreateList", function () {
  it("Should create an object with an array inside", function () {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});

describe('addNodeToBeginning', function () {
  it('should create a node with data and next', function () {
    var list = new LinkedList();
    list.AddToTheBeginning('test');
    expect(list.head.data).toBe('test');
    expect(list.head.next).toBe(null);
    expect(list._length).toBe(1);
  })
})

describe('addNodeToBeginningUndefined', function () {
  it('should create a node with data and next', function () {
    var list = new LinkedList();
    list.AddToTheBeginning();
    expect(list.head.data).toBe(undefined);
    expect(list.head.next).toBe(null);
    expect(list._length).toBe(1);
  })
})

describe('addNodeToEnd', function () {
  it('should create a node with data and next', function () {
    var list = new LinkedList();
    list.AddToTheEnd('test');
    expect(list.head.data).toBe('test');
    expect(list.head.next).toBe(null);
    expect(list._length).toBe(1);
  })
})

describe('add2Nodes', function () {
  it('should create 2 nodes with data and next', function () {
    var list = new LinkedList();
    list.AddToTheBeginning('head');
    list.AddToTheEnd('last');
    expect(list.head.data).toBe('head');
    expect(list.head.next.data).toBe('last');
    expect(list.head.next.next).toBe(null);
    expect(list._length).toBe(2);
  })
})

describe('deleteNode', function () {
  it('should create a node with data and next', function () {
    var list = new LinkedList();
    list.AddToTheBeginning('head');
    list.AddToTheEnd('middle');
    list.AddToTheEnd('last');
    list.DeleteItem('middle')
    expect(list.head.data).toBe('head');
    expect(list.head.next.data).toBe('last');
    expect(list._length).toBe(2);
  })
})

describe('deleteNodeByIndex', function () {
  it('should create a node with data and next', function () {
    var list = new LinkedList();
    list.AddToTheBeginning('head');
    list.AddToTheEnd('middle');
    list.AddToTheEnd('last');
    list.RemoveItemByIndex(1);
    expect(list.head.data).toBe('head');
    expect(list.head.next.data).toBe('last');
    expect(list._length).toBe(2);
  })
})

