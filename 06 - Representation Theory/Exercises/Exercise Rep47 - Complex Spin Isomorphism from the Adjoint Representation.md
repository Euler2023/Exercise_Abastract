---
title: "Exercise Rep47: Complex Spin Isomorphism from the Adjoint Representation"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-representation
  - special-orthogonal-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.13, printed p. 289, PDF p. 301"
created: 2026-08-24
---

# Exercise Rep47: Complex Spin Isomorphism from the Adjoint Representation

## Problem Statement

> [!question] Miscellaneous Exercise M.13
> Use the adjoint representation of $SL_2(\mathbb C)$ (Exercise M.11) to define an isomorphism
>
> $$
> SL_2(\mathbb C)/\{\pm I\}\cong SO_3(\mathbb C).
> $$

## Hints

> [!hint]- Hint 1
> Restrict the invariant trace form to the three-dimensional space $\mathfrak{sl}_2(\mathbb C)$.

> [!hint]- Hint 2
> Compare the dimensions and differentials, then use connectedness of $SO_3(\mathbb C)$.

## Solution

> [!success]- Solution
> The trace form
>
> $$
> B(X,Y)=\operatorname{tr}(XY)
> $$
>
> is nondegenerate on the three-dimensional complex vector space $\mathfrak{sl}_2(\mathbb C)$. By Exercise Rep45, conjugation preserves it, so the adjoint representation gives
>
> $$
> \operatorname{Ad}:SL_2(\mathbb C)\longrightarrow SO(\mathfrak{sl}_2,B)\cong SO_3(\mathbb C).
> $$
>
> Its kernel consists of matrices commuting with all trace-zero matrices, hence is $\{\pm I\}$. Its differential is
>
> $$
> \operatorname{ad}:\mathfrak{sl}_2(\mathbb C)\longrightarrow\mathfrak{so}(\mathfrak{sl}_2,B),
> \qquad X\mapsto[Y\mapsto[X,Y]].
> $$
>
> The kernel of $\operatorname{ad}$ is the center of $\mathfrak{sl}_2$, which is zero. Both Lie algebras have complex dimension $3$, so the differential is an isomorphism. The image of $\operatorname{Ad}$ therefore contains a neighborhood of the identity. Since $SO_3(\mathbb C)$ is connected, this open subgroup is the whole group. The First Isomorphism Theorem now gives
>
> $$
> SL_2(\mathbb C)/\{\pm I\}\cong SO_3(\mathbb C).
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- This is the complex adjoint form of the double-cover phenomenon already seen in $SU_2\to SO_3$.
- **Proof boundary:** Surjectivity uses connectedness of $SO_3(\mathbb C)$ together with the local differential argument.
- **Source status:** M.13 was visually checked at [S1, Ch. 9, Misc. Ex. M.13, printed p. 289, PDF p. 301]. The adjoint-kernel and surjectivity proof are independent.
