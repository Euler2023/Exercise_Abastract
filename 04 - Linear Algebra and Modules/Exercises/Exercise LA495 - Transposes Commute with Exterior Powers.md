---
title: "Exercise LA495: Transposes Commute with Exterior Powers"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 4, printed p. 753, PDF p. 768"
created: 2026-09-29
---

# Exercise LA495: Transposes Commute with Exterior Powers

## Problem Statement

> [!question] Lang XIX.4
> Notation being as in the preceding exercise, let $F$ be another $R$-module which is free, finite dimensional. Let $f:E\to F$ be a linear map. Relative to the bilinear map of the preceding exercise, show that the transpose of $\bigwedge^r f$ is $\bigwedge^r({}^tf)$, i.e. is equal to the $r$-th alternating product of the transpose of $f$.

## Hints

> [!hint]- Hint 1
> The transpose $f^\vee:F^\vee\to E^\vee$ is composition with $f$.

> [!hint]- Hint 2
> Evaluate both candidate transposes against $v_1\wedge\cdots\wedge v_r$ and $\lambda_1\wedge\cdots\wedge\lambda_r$.

## Solution

> [!success]- Independent derivation
> Write $f^\vee(\lambda)=\lambda\circ f$. By the determinant pairing of LA494, for $v_i\in E$ and $\lambda_j\in F^\vee$,
>
> $$
> \begin{aligned}
> \left\langle\bigwedge^r f(v_1\wedge\cdots\wedge v_r),
> \lambda_1\wedge\cdots\wedge\lambda_r\right\rangle
> &=\det(\lambda_j(f(v_i)))\\
> &=\det((f^\vee\lambda_j)(v_i))\\
> &=\left\langle v_1\wedge\cdots\wedge v_r,
> \bigwedge^r f^\vee(\lambda_1\wedge\cdots\wedge\lambda_r)\right\rangle.
> \end{aligned}
> $$
>
> Decomposable exterior vectors span both exterior powers, so the identity holds for arbitrary inputs by bilinearity. The perfect pairings identify $\bigwedge^r E^\vee$ with $(\bigwedge^r E)^\vee$ and similarly for $F$. Under these identifications the displayed identity is exactly the defining property of the transpose. Its uniqueness proves
>
> $$
> (\bigwedge^r f)^\vee=\bigwedge^r(f^\vee).
> $$
>
> This includes the degrees in which one exterior power vanishes: both sides are the same uniquely specified map between the corresponding zero and nonzero modules. In degree zero, both maps are the identity of $R$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations]]

## Notes

The problem was checked at [S2, Ch. XIX, Exercise 4, printed p. 753, PDF p. 768]. The perfect pairing used here is proved independently in [[04 - Linear Algebra and Modules/Exercises/Exercise LA494 - Duality of Exterior Powers|LA494]]. No inner product or choice of an orthonormal basis is involved.
