# Chapter 3 Stack and Queue

## Section 1 Stack

LIFO

### Linked Stack

Use linked list node to create a stack

Proposition: Every operation takes constant time in the worst case.

### Array Stack

Since the implementations of array are different between JavaScript and Java.

JavaScript Array Stack does not face the issue of underflow or overflow or loitering.

-   Underflow: throw exception if pop from an empty stakc
-   Overflow: use resizing array for array implementation
-   Loitering: holding a reference to an object when it is no longer needed
