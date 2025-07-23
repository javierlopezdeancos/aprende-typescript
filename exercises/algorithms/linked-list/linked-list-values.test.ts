import { createNode } from './create-node-factory';
import type { NodeType } from './node-type';
import { linkedListValues, linkedListValuesRecursiveVersion } from './linked-list-values';

let a: NodeType<string>,
  b: NodeType<string>,
  c: NodeType<string>,
  d: NodeType<string>,
  e: NodeType<string>,
  f: NodeType<string>;

describe('linked list: linked list values', () => {
  beforeEach(() => {
    // Creating nodes to our mock linked list
    // A -> B -> C -> D
    d = createNode<string>({ value: 'D' });
    c = createNode<string>({ value: 'C', next: d });
    b = createNode<string>({ value: 'B', next: c });
    a = createNode<string>({ value: 'A', next: b });
  });

  test('should return all linked list values into an array in the correct order. Case 1', () => {
    const expected = linkedListValues(a);
    expect(expected).toEqual(['A', 'B', 'C', 'D']);
  });

  test('should return all linked list values into an array in the correct order. Case 2', () => {
    const expected = linkedListValuesRecursiveVersion(a);
    expect(expected).toEqual(['A', 'B', 'C', 'D']);
  });
});
