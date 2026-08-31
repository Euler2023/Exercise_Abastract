---
title: "Exercise G106: Primitive Elements in Prime Fields below $20$"
topic: group-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - group-theory
  - cyclic-groups
  - finite-fields
  - primitive-elements
source: Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.7, printed p. 99, PDF p. 111
created: 2026-08-23
---

# Exercise G106: Primitive Elements in Prime Fields below $20$

## Problem Statement

> [!question] Exercise 1.7
> By finding primitive elements, verify that $\mathbb F_p^\times$ is cyclic for every prime $p<20$.

## Hints

> [!hint]- Hint 1
> For a candidate $g$, it is enough to rule out orders dividing $(p-1)/q$ for prime divisors $q$ of $p-1$.

## Solution

> [!success]- Solution
> The primes are $2,3,5,7,11,13,17,19$. Primitive elements may be chosen as follows:
> 
> $$
> \begin{array}{c|cccccccc}
> p&2&3&5&7&11&13&17&19\\ \hline
> g&1&2&2&3&2&2&3&2
> \end{array}
> $$
> 
> For $p=3$, $2\ne1$. For $p=5$, $2^2\equiv4\ne1$. For $p=7$, $3^2\equiv2$ and $3^3\equiv-1$. For $p=11$, $2^2\equiv4$ and $2^5\equiv-1$. For $p=13$, $2^4\equiv3$ and $2^6\equiv-1$. For $p=17$, $3^8\equiv-1$. For $p=19$, $2^6\equiv7$ and $2^9\equiv-1$. These checks rule out every proper order obtained by dividing $p-1$ by a prime divisor, so the listed $g$ has order $p-1$. Therefore each $\mathbb F_p^\times$ is cyclic.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.7, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
