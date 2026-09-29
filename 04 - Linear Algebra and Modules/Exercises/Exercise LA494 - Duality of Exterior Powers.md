---
title: "Exercise LA494: Duality of Exterior Powers"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 3, printed p. 753, PDF p. 768"
created: 2026-09-29
---

# Exercise LA494: Duality of Exterior Powers

## Problem Statement

> [!question] Lang XIX.3
> Let $E$ be a finite dimensional free module over the commutative ring $R$. Let $E^\vee$ be its dual module. For each integer $r\ge1$ show that $\bigwedge^rE$ and $\bigwedge^rE^\vee$ are dual modules to each other, under the bilinear map such that
>
> $$
> (v_1\wedge\cdots\wedge v_r,\ v'_1\wedge\cdots\wedge v'_r)
> \longmapsto \det(\langle v_i,v'_j\rangle),
> $$
>
> where $\langle v_i,v'_j\rangle$ is the value of $v'_j$ on $v_i$, as usual, for $v_i\in E$ and $v'_j\in E^\vee$.

## Hints

> [!hint]- Hint 1
> The determinant is alternating and multilinear separately in the vectors and in the linear functionals.

> [!hint]- Hint 2
> Evaluate the pairing on an exterior basis and the corresponding exterior basis of the dual.

## Solution

> [!success]- Independent derivation
> The expression $\det(v'_j(v_i))$ is multilinear in each $v_i$ and each $v'_j$. If two $v_i$ agree, two rows agree and the determinant vanishes; if two $v'_j$ agree, two columns agree and it vanishes. Applying the universal property of the exterior power to the two groups of variables therefore gives a well-defined bilinear pairing
>
> $$
> \bigwedge^rE\times\bigwedge^r E^\vee\longrightarrow R.
> $$
>
> Choose a basis $e_1,\ldots,e_n$ and its dual $\epsilon_1,\ldots,\epsilon_n$. For increasing size-$r$ subsets $I,J$,
>
> $$
> \langle e_I,\epsilon_J\rangle=\det(\delta_{i_a,j_b})
> =\begin{cases}1&I=J,\\0&I\ne J.\end{cases}
> $$
>
> If $I\ne J$, an index of $I$ is absent from $J$ and gives a zero row. If $I=J$, the matrix is the identity. Thus the two exterior bases are dual. In particular the map
>
> $$
> \bigwedge^rE^\vee\longrightarrow
> \operatorname{Hom}_R(\bigwedge^rE,R)
> $$
>
> sends one basis to the dual basis and is an isomorphism. Interchanging the two finite free modules gives the reverse duality as well. The construction uses only evaluation, so is independent of the bases used to prove nondegeneracy. For $r>n$ both modules and their duals are zero. For completeness, degree zero has the usual multiplication pairing $R\times R\to R$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules]]

## Notes

The statement and the order of the evaluation pairing were checked at [S2, Ch. XIX, Exercise 3, printed p. 753, PDF p. 768]. Here duality means the two induced Hom maps are isomorphisms, a stronger assertion than mere injectivity of those maps over a general ring. Finite freeness supplies that conclusion.
