---
title: "Exercise Rep56: Averaging a Skew-Symmetric Form"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 3, Ex. 3.4, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep56: Averaging a Skew-Symmetric Form

## Problem Statement

> [!question] Exercise 3.4
> Let $(\ ,\ )$ be a nondegenerate skew-symmetric form on a vector space $V$, and let $\rho$ be a representation of a finite group $G$ on $V$. Prove that the averaging process (10.3.7) produces a $G$-invariant skew-symmetric form on $V$, and show by example that the form obtained in this way needn't be nondegenerate.

## Hints

> [!hint]- Hint 1
> Skew-symmetry is preserved by sums and pullbacks.

> [!hint]- Hint 2
> Average the standard area form under a reflection.

## Solution

> [!success]- Solution
> Define
>
> $$
> B_G(v,w)=\frac1{|G|}\sum_{g\in G}B(\rho(g)v,\rho(g)w).
> $$
>
> Every summand is skew-symmetric, so $B_G(w,v)=-B_G(v,w)$. Reindexing $g$ by $gh$ gives $B_G(\rho(h)v,\rho(h)w)=B_G(v,w)$, hence invariance.
>
> Nondegeneracy can be lost. Let $G=C_2$ act on $\mathbb R^2$ by the reflection $S=\operatorname{diag}(1,-1)$, and let
>
> $$
> J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}
> $$
>
> be the matrix of the standard nondegenerate skew form. Since $S^{\mathsf T}JS=-J$, its average is
>
> $$
> \frac12(J+S^{\mathsf T}JS)=0,
> $$
>
> which is degenerate. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- **Source status:** [S1, Ch. 10, §3, Ex. 3.4, printed p. 315, PDF p. 327]; the reflection example is independently supplied.

