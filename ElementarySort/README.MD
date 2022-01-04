# Chapter 4 Elementary Sort

## Selection Sort

Proposition: selection sort uses $(N-1) + (N-2) + ... + 1 + 0 ~ N^2/2$ compares and N exchanges.

Doesn't matter the array is sorted or not

## Insertion Sort

Proposition: usese $~1/4N^2$ compares and $~1/4N^2$ exchanges on average.

Insertion sort is about twice faster than selection sort.

Does matter the array is sorted or not

Best case: If the array is sorted, it uses $(N-1)$ compares and 0 exchange.

Worst case: if the array is in descending order, it uses $1/2N^2$ compares and $1/2N^2$ exchanges.

Partially sorted arrays: number of exchanges equals the number of inversions.

$number of compares = exchanges + (N - 1)$

## Shell Sort

Idea: h-sort array for decreasing sequence of values of h.

Increment sequence:

-   Power of two [1, 2, 4, 8, 16, 32, ... ] NOT GOOD
-   Power of two minus one [1, 3, 7, 15, ... ] MAYBE
-   $3x + 1$ [1, 4, 13, 40, ... ] east to compute OK
-   Sedgewick [1, 5, 19, 41, 109, 209, 505, 929, 2161, 3905, ...] GOOD tough to beat in empiricial studies. Merging of $(9 * 4^i) - (9 * 2^i) + 1$ and $4^i - (3 * 2^i) + 1$

Propositon: worst-case number of compares used by shellsort with the $3x+1$ increment is $O(N^\frac{3}{2})$

Why are we interested in shellsort?

-   simple idea leading to substantial performance gain
-   fast unless array size is huge
-   tiny, fixed footprint for code
-   hardware sort prototype

## Shaffle sort

Goal: rearrange array so that result is a uniformly random permutation. $O(N)$

Knuth shuffle:

-   In iteration i, pick integer r between 0 and i uniformly at random.
-   Swap $a[i]$ and $a[r]$
