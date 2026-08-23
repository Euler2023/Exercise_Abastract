---
title: "Exercise LA99: Fibers of the Determinant over $\\mathbb F_p$"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - finite-fields
  - counting
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.1, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA99: Fibers of the Determinant over $\mathbb F_p$

## Problem Statement

> [!question] Exercise M.1
> For $F=\mathbb F_p$, consider $\det:F^{2\times2}\to F$. Show that it is surjective, that all nonzero determinant values occur equally often, and that more matrices have determinant $0$ than determinant $1$.

## Hints

> [!hint]- Hint 1
> Diagonal matrices prove surjectivity.

> [!hint]- Hint 2
> Scaling one row gives bijections between nonzero fibers.

> [!hint]- Hint 3
> Use the known count of $GL_2(\mathbb F_p)$.

## Solution

> [!success]- Solution
> The matrix $\operatorname{diag}(a,1)$ has determinant $a$, so the map is surjective. For $a,b\ne0$, scaling the first row by $b/a$ is a bijection from the fiber over $a$ to the fiber over $b$. Thus every nonzero fiber has the same size.
> 
> The fiber over $1$ is $SL_2(\mathbb F_p)$ and has
> 
> $$
> N=p(p^2-1)=p^3-p
> $$
> 
> elements. Since there are $p^4$ total matrices, the zero fiber has
> 
> $$
> p^4-(p-1)N=p^3+p^2-p=N+p^2
> $$
> 
> elements, strictly more than the fiber over $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.1, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
