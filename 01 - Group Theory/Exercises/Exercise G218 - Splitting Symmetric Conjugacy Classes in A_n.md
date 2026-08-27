---
title: "Exercise G218: Splitting Symmetric Conjugacy Classes in A_n"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.11, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G218: Splitting Symmetric Conjugacy Classes in A_n

## Problem Statement

> [!question] Exercise 5.11
> **(a)** Describe how an even $S_n$-class decomposes into $A_n$-classes using its centralizer. **(b)** Determine the class equations of $A_4,A_5$. **(c)** Describe the decomposition for permutations of odd order.

## Hints

> [!hint]- Hint 1
> An $S_n$-class splits iff its centralizer contains no odd permutation.

## Solution

> [!success]- Solution
> An even $S_n$-class stays one $A_n$-class when $Z_{S_n}(p)$ contains an odd permutation; otherwise it splits into two equal classes. Equivalently, splitting occurs exactly for cycle types with distinct odd parts, including $1$-cycles. Therefore
>
> $$
> |A_4|=12=1+3+4+4,qquad |A_5|=60=1+15+20+12+12.
> $$
>
> The split types are $3,1$ in $A_4$ and $5$ in $A_5$. An odd-order permutation has only odd cycles; its class splits precisely when those lengths are all distinct, and otherwise remains one orbit. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.11, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
