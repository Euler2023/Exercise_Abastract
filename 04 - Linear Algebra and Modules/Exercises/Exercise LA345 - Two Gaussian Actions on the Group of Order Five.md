---
title: "Exercise LA345: Two Gaussian Actions on the Group of Order Five"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - gaussian-integers
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.1, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA345: Two Gaussian Actions on the Group of Order Five

## Problem Statement

> [!question] Miscellaneous Problem M.1
> In how many ways can the additive group $\mathbb Z/5\mathbb Z$ be given the structure of a module over the Gaussian integers?

## Hints

> [!hint]- Hint 1
> The action of $i$ must be an additive endomorphism whose square is $-1$.

## Solution

> [!success]- Solution
> Every additive endomorphism of $\mathbb Z/5\mathbb Z$ is multiplication by a residue $a\in\mathbb F_5$. A $\mathbb Z[i]$-module structure is determined by the image of $i$, and the defining relation $i^2=-1$ requires
>
> $$
> a^2=-1=4\pmod5.
> $$
>
> The two solutions are $a=2$ and $a=3=-2$. Each defines an action by
>
> $$
> (m+ni)\cdot v=(m+na)v.
> $$
>
> Thus there are
>
> $$
> \boxed{2}
> $$
>
> module structures on the fixed additive group. They are not isomorphic as $\mathbb Z[i]$-modules: an additive automorphism is scalar multiplication and cannot conjugate the scalar $2$ to $3$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Module Theory is primary because specifying the scalar $i$ determines the action.
- **Source status:** [S1, Ch. 14, Misc. M.1, printed p. 440, PDF p. 452]. The count is independent.
