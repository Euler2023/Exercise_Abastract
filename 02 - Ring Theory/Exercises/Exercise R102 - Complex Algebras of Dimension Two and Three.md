---
title: "Exercise R102: Complex Algebras of Dimension Two and Three"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-dimensional-algebras
  - product-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.4, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R102: Complex Algebras of Dimension Two and Three

## Problem Statement

> [!question] Exercise M.4
> **(a)** Classify rings $R$ containing $\mathbb C$ and having dimension $2$ as vector spaces over $\mathbb C$.
>
> **(b)** Do the same for dimension $3$.

## Hints

> [!hint]- Hint 1
> Finite-dimensional commutative $\mathbb C$-algebras split into local factors. Classify the possible dimensions of the factors and powers of their maximal ideals.

## Solution

> [!success]- Solution
> We classify unital commutative $\mathbb C$-algebras up to $\mathbb C$-algebra isomorphism.
>
> **(a)** If $R=\mathbb C[\alpha]$, the quadratic relation of $\alpha$ either has two distinct roots or one double root. Thus the two possibilities are
>
> $$
> \mathbb C\times\mathbb C,
> \qquad
> \mathbb C[\varepsilon]/(\varepsilon^2).
> $$
>
> **(b)** Decompose $R$ into finite-dimensional local factors. The dimension partitions give the semisimple type $\mathbb C^3$ and the mixed type $\mathbb C\times\mathbb C[\varepsilon]/(\varepsilon^2)$. It remains to classify a local algebra of length $3$. Its maximal ideal $\mathfrak m$ has dimension $2$. If $\mathfrak m^2=0$, the algebra is
>
> $$
> \mathbb C[u,v]/(u,v)^2.
> $$
>
> Otherwise $\dim\mathfrak m^2=1$ and $\mathfrak m^3=0$. In characteristic zero, polarization shows that some $u\in\mathfrak m$ has $u^2\ne0$; then $u,u^2$ form a basis of $\mathfrak m$, giving
>
> $$
> \mathbb C[u]/(u^3).
> $$
>
> Hence there are four dimension-$3$ types:
>
> $$
> \mathbb C^3,\quad
> \mathbb C\times\mathbb C[\varepsilon]/(\varepsilon^2),\quad
> \mathbb C[u]/(u^3),\quad
> \mathbb C[u,v]/(u,v)^2.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **External standard input:** The finite-dimensional commutative-algebra decomposition into local Artinian factors, together with nilpotence of a local maximal ideal, is used as a named structural input.
- **Routing rationale:** Although vector-space dimension is essential, the classification is controlled by multiplication, maximal ideals, and nilpotence, so the primary toolkit is ring theory.
- **Source status:** The problem is from [S1, Ch. 11, Misc. Exercises, Ex. M.4, printed p. 358, PDF p. 370]. The classification is an independent derivation with the stated external input.
