---
title: "Exercise G170: Orbits of Three-Element Subsets of D3"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - subsets
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 10, Ex. 10.1, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G170: Orbits of Three-Element Subsets of D3

## Problem Statement

> [!question] Exercise 10.1
> Determine the orders of the orbits for left multiplication on the set of subsets of order $3$ of $D_3$.

## Hints

> [!hint]- Hint 1
> There are $\binom63=20$ subsets. Orbit size is $6$ divided by the order of the setwise stabilizer.

> [!hint]- Hint 2
> The rotation subgroup of order $3$ and its other coset form one exceptional orbit.

## Solution

> [!success]- Solution
> Let $R\le D_3$ be the rotation subgroup of order $3$. Its two left cosets $R$ and $sR$ are three-element subsets and are exchanged transitively by $D_3$. Their stabilizer is $R$, so they form one orbit of size
>
> $$
> [D_3:R]=2.
> $$
>
> No three-element subset can be stabilized by an involution: the involution acts freely by left multiplication on $D_3$, so its orbits on the underlying group all have even size, whereas an invariant subset would be a union of such orbits. Any other nontrivial stabilizer would therefore have order $3$ and make the subset a coset of $R$, already counted.
>
> The remaining $20-2=18$ subsets have trivial stabilizer and hence lie in orbits of size $6$. There are three such orbits. Thus the orbit orders are
>
> $$
> 2, 6, 6, 6.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- The parity argument eliminates order-two stabilizers without listing all twenty subsets.
- **Source status:** [S1, Ch. 6, §10, Ex. 10.1, printed p. 192, PDF p. 204]; independent orbit count.

