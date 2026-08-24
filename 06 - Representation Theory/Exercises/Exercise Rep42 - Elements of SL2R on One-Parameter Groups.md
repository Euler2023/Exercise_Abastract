---
title: "Exercise Rep42: Elements of SL2R on One-Parameter Groups"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - matrix-logarithms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.2, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise Rep42: Elements of SL2R on One-Parameter Groups

## Problem Statement

> [!question] Miscellaneous Exercise M.2
> Which elements of $SL_2(\mathbb R)$ lie on a one-parameter group?

## Hints

> [!hint]- Hint 1
> If $P=e^X$ with $X\in\mathfrak{sl}_2(\mathbb R)$, classify $X$ by the sign of its determinant.

> [!hint]- Hint 2
> Treat trace $-2$ separately from traces greater than $-2$.

## Solution

> [!success]- Solution
> The answer is
>
> $$
> P\text{ lies on a one-parameter group}
> \iff \operatorname{tr}P>-2\text{ or }P=-I.
> $$
>
> To prove necessity, let $P=e^X$ with $\operatorname{tr}X=0$. The eigenvalues of the real matrix $X$ are either $\pm s$, $\pm i\theta$, or both zero. Accordingly, the eigenvalues of $P$ are positive reciprocal reals, a conjugate pair on the unit circle, or both $1$. Thus $\operatorname{tr}P\ge-2$. Equality occurs only when the eigenvalues of $X$ are odd multiples of $\pm i\pi$, in which case $P=-I$.
>
> Conversely, if $\operatorname{tr}P>2$, then $P$ is conjugate to $\operatorname{diag}(\lambda,\lambda^{-1})$ with $\lambda>0$, so it is the exponential of the corresponding conjugate of $\operatorname{diag}(\log\lambda,-\log\lambda)$. If $-2<\operatorname{tr}P<2$, it is conjugate to $R_{\pm\theta}$ and is the exponential of $\pm\theta J$. If $\operatorname{tr}P=2$, then either $P=I$ or $P=I+N$ with $N^2=0$, and $P=e^N$. Finally, $-I=e^{\pi J}$.
>
> Matrices of trace $-2$ other than $-I$, and all matrices of trace less than $-2$, therefore do not lie on a one-parameter group.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- This is a complete real-logarithm criterion specialized to determinant-one $2\times2$ matrices.
- **Source status:** M.2 was visually checked at [S1, Ch. 9, Misc. Ex. M.2, printed p. 287, PDF p. 299]. The classification is independent.

