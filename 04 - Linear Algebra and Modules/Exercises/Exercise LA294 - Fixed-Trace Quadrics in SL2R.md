---
title: "Exercise LA294: Fixed-Trace Quadrics in SL2R"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadrics
  - conjugacy-classes
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.1, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise LA294: Fixed-Trace Quadrics in SL2R

## Problem Statement

> [!question] Miscellaneous Exercise M.1
> Let $G=SL_2(\mathbb R)$, let $A=\begin{pmatrix}x&y\\z&w\end{pmatrix}$ be a matrix in $G$, and let $t$ be its trace. Substituting $t-x$ for $w$, the condition $\det A=1$ becomes $x(t-x)-yz=1$. For fixed trace $t$, the locus of solutions of this equation is a quadric in $x,y,z$-space. Describe the quadrics that arise this way, and decompose them into conjugacy classes.

## Hints

> [!hint]- Hint 1
> Put $u=x-t/2$, $v=(y+z)/2$, and $r=(y-z)/2$.

> [!hint]- Hint 2
> The sign of $t^2-4$ distinguishes hyperbolic, parabolic, and elliptic matrices.

## Solution

> [!success]- Solution
> The change of variables gives
>
> $$
> u^2+v^2-r^2=\frac{t^2-4}{4}.
> $$
>
> Hence:
>
> - If $|t|>2$, the locus is a one-sheeted hyperboloid. Every matrix has two distinct real reciprocal eigenvalues, and the entire quadric is one $SL_2(\mathbb R)$-conjugacy class.
> - If $|t|<2$, the locus is a two-sheeted hyperboloid. Write $t=2\cos\theta$ with $0<\theta<\pi$. Its two sheets are the two conjugacy classes represented by rotations $R_\theta$ and $R_{-\theta}$; an orientation-preserving change of basis cannot interchange them.
> - If $t=2$, the locus is the cone $u^2+v^2-r^2=0$. Its vertex is the identity matrix, and the two punctured nappes are the two nontrivial unipotent conjugacy classes.
> - If $t=-2$, the same cone occurs. Its vertex is $-I$, and the two punctured nappes are the two noncentral classes with eigenvalue $-1$.
>
> These cases give the full geometric and conjugacy decomposition.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The two-sheeted elliptic locus is the geometric manifestation of the two orientation-sensitive real conjugacy classes with the same characteristic polynomial.
- **Source status:** M.1 was visually checked at [S1, Ch. 9, Misc. Ex. M.1, printed p. 287, PDF p. 299]. The coordinate reduction and orbit decomposition are independent.

