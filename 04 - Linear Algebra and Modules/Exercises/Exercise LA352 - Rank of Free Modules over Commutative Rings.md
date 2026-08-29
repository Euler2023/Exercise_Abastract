---
title: "Exercise LA352: Rank of Free Modules over Commutative Rings"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - free-modules
  - rank
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 2, printed p. 165, PDF p. 180"
created: 2026-08-29
---

# Exercise LA352: Rank of Free Modules over Commutative Rings

## Problem Statement

> [!question] Lang, Chapter III, Exercise 2
> Generalize the dimension statement of Theorem 5.2 to free modules over a commutative ring.
>
> **Printed hint.** Recall how an analogous statement was proved for free abelian groups, and use a maximal ideal instead of a prime number.

## Hints

> [!hint]- Hint 1
> If $R$ is a nonzero commutative ring and $\mathfrak m$ is a maximal ideal, compare a free $R$-module $M$ with the vector space $M/\mathfrak mM$ over $R/\mathfrak m$.

> [!hint]- Hint 2
> An $R$-basis indexed by $I$ descends to an $(R/\mathfrak m)$-basis indexed by the same set $I$.

## Solution

> [!success]- Independently derived solution
> The generalized statement is: **any two bases of a free module over a nonzero commutative ring with identity have the same cardinality.** This common cardinality is the rank of the free module.
>
> Let $B=(e_i)_{i\in I}$ and $C=(f_j)_{j\in J}$ be two bases of the same free $R$-module $M$. Choose a maximal ideal $\mathfrak m\subset R$ and put $k=R/\mathfrak m$. From the first basis,
>
> $$
> M\cong\bigoplus_{i\in I}R e_i,
> \qquad
> \mathfrak mM\cong\bigoplus_{i\in I}\mathfrak m e_i.
> $$
>
> Therefore
>
> $$
> M/\mathfrak mM\cong\bigoplus_{i\in I}k\overline e_i.
> $$
>
> Thus $(\overline e_i)_{i\in I}$ is a $k$-basis of $M/\mathfrak mM$. Applying the same argument to $C$ shows that $(\overline f_j)_{j\in J}$ is another $k$-basis of the same vector space. The vector-space basis theorem, including the infinite-dimensional case, gives
>
> $$
> |I|=\dim_k(M/\mathfrak mM)=|J|.
> $$
>
> Hence the cardinality of a basis of $M$ is independent of the chosen basis, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Hypothesis boundary:** The maximal-ideal reduction uses a nonzero commutative ring with identity, which is the convention under which the printed hint operates.
- **Source status:** [S2, Ch. III, Ex. 2, printed p. 165, PDF p. 180]. The proof is an independent derivation from the vector-space basis theorem.
- **Figure status:** No source figure is required.
