# Chapter 1 Union Find

## Section 1 Dynamic Connectivity

Given a set of N objects:

-   Union: connect two objects
-   Connected: is there a path connecting the two objects?

**Connected components**: Maximal set of objects that are mutually connected

## Section 2 Quick Find [eager approach]

Time Complexity

-   initialize: O(n)
-   connected/find: O(1)
-   union: O(n)

## Secion 3 Quick Union [lazy approach]

Time Complexity

-   initialize: O(n)
-   connected/find: O(n)
-   union: O(n)

## Section 4 Quick Union Improvements

### Improvement 1: weighting

Weighted quick-union:
_average distance from a node to a root should be smaller_

-   Modify quick-union to avoid tall trees
-   Keep track of size of each tree
-   Balance by linking root of smaller tree to root of large tree

Proposition: depth of any node x is at most lgn

Time Complexity

-   initialize: O(n)
-   union: O(lgn)
-   connected/find: O(lgn)

### Improvement 2: path compression

Path compression quick-union: _after computing the root of p, set the id of each examined node to point to that root_

### Conclusion

Both weighted quick-union and path compression quick-union share the same idea: to faltten the tree.

M union-find operations on a set of N objects

-   quick-find: M N
-   quick-union: M N
-   weighted QU: N + M logN
-   QU + path compression: N + M logN
-   weighted QU + path compression: N + M lg\*N
