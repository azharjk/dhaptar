# Dhaptar

JavaScript Linear Linked List

## Docs

Adding data to linked list with `push` method
```js
const d = new Dapthar();
d.push(1);
d.push(2);
d.push(3);
d.at(1); // 2
```

Adding data to linked list with `DhaptarNode`
```js
const dn1 = new DhaptarNode(1);
const dn2 = new DhaptarNode(2);
dn1.next = dn2;

const d = new Dhaptar();
d.head = dn1;

d.at(1); // 2
```

*Avaiable attribute*

`.size`

Get the linked list size or length

`.head`

Get the head of linked list

`.tail`

Get the tail of linked list

*Avaiable method*

`.push(data)`

Insert `data` to the tail of linked list

`.at(index)`

Get the `data` at `index`

`.clear()`

Clear the linked list

`.pop()`

Remove the tail of linked list
