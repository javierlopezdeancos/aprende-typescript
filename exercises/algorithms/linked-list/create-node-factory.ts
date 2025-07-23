import type { NodeType } from './node-type';

export const createNode = <V>({ value, next }: NodeType<V>): NodeType<V> => ({
  value,
  next,
});
