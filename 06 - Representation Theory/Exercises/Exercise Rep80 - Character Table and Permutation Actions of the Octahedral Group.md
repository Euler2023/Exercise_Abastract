---
title: "Exercise Rep80: Character Table and Permutation Actions of the Octahedral Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.4, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep80: Character Table and Permutation Actions of the Octahedral Group

## Problem Statement

> [!question] Exercise 6.4
> **(a)** Identify the five conjugacy classes in the octahedral group $O$, and find the orders of its irreducible representations. **(b)** Decompose the permutation characters for its actions on the six faces of the cube, three pairs of opposite faces, eight vertices, four pairs of opposite vertices, six pairs of opposite edges, and two inscribed tetrahedra. **(c)** Compute the character table for $O$.

## Hints

> [!hint]- Hint 1
> Use $O\cong S_4$ via its action on the four body diagonals.

## Solution

> [!success]- Solution
> Under $O\cong S_4$, the five classes have cycle types $1,(12),(12)(34),(123),(1234)$ and sizes $1,6,3,8,6$. The irreducible degrees are $1,1,2,3,3$. In that class order the character table is
>
> $$
> \begin{array}{c|rrrrr}
> 1&1&1&1&1&1\\ \varepsilon&1&-1&1&1&-1\\
> \tau&2&0&2&-1&0\\ \sigma&3&1&-1&0&-1\\
> \sigma\varepsilon&3&-1&-1&0&1
> \end{array}.
> $$
>
> Fixed-point counting and inner products give, in the order asked,
>
> $$
> \begin{aligned}
> \mathbb C[\text{faces}]&=1\oplus\tau\oplus\sigma\varepsilon,\\
> \mathbb C[\text{opposite face pairs}]&=1\oplus\tau,\\
> \mathbb C[\text{vertices}]&=1\oplus\varepsilon\oplus\sigma\oplus\sigma\varepsilon,\\
> \mathbb C[\text{opposite vertex pairs}]&=1\oplus\sigma,\\
> \mathbb C[\text{opposite edge pairs}]&=1\oplus\tau\oplus\sigma,\\
> \mathbb C[\text{tetrahedra}]&=1\oplus\varepsilon.
> \end{aligned}
> $$
>
> Dimensions and character values verify each equality. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.4, printed p. 318, PDF p. 330]; decompositions are independent.

