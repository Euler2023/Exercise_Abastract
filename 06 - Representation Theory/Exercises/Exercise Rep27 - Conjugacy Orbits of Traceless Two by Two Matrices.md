---
title: "Exercise Rep27: Conjugacy Orbits of Traceless Two by Two Matrices"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-action
  - conjugacy-classes
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.3, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep27: Conjugacy Orbits of Traceless Two by Two Matrices

## Problem Statement

> [!question] Exercise 6.3
> The group $SL_2$ operates by conjugation on the space of trace-zero matrices. Decompose this space into orbits.

## Hints

> [!hint]- Hint 1
> For $X=\begin{pmatrix}x&y\\z&-x\end{pmatrix}$, the determinant is invariant and $X^2=-\det(X)I$.

> [!hint]- Hint 2
> When $\det X>0$ or $X$ is nonzero nilpotent, orientation separates two $SL_2(\mathbb R)$-orbits.

## Solution

> [!success]- Solution
> Put $d=\det X$. The orbit decomposition is:
>
> - For each $d<0$, one orbit, represented by $\operatorname{diag}(a,-a)$ with $a=\sqrt{-d}$.
> - For each $d>0$, two orbits, represented by $aJ$ and $-aJ$, where $a=\sqrt d$ and $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
> - For $d=0$, the zero orbit and two nonzero nilpotent orbits, represented by $E=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $-E$.
>
> Indeed, when $d<0$, $X$ has real eigenvalues $\pm a$; choosing eigenvectors and adjusting one by a scalar gives an oriented eigenbasis, yielding the stated representative. When $d>0$, $X/a$ is a complex structure. A basis $(v,(X/a)v)$ has a definite orientation; orientation-preserving conjugation cannot reverse it, producing the two signs. When $d=0$ and $X\ne0$, choose $v$ with $Xv\ne0$; the sign of the oriented basis $(Xv,v)$ similarly distinguishes $E$ from $-E$. These constructions also show transitivity within every listed class. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- Over $GL_2(\mathbb R)$ the two sign-orbits in the elliptic and nonzero nilpotent cases merge; the determinant-one restriction is essential.
- **Source status:** Ex. 6.3 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The real-orbit classification is independent.
