---
title: "Exercise LA189: Two Finite-Rank Integral Operators"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - integral-operators
  - eigenvalues
  - kernels
  - images
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.6, printed p. 153, PDF p. 165"
created: 2026-08-24
---

# Exercise LA189: Two Finite-Rank Integral Operators

## Problem Statement

> [!question] Miscellaneous Problem M.6
> On the space $C[0,1]$, let
>
> $$
> (Tf)(u)=\int_0^1A(u,v)f(v)\,dv.
> $$
>
> For $A(u,v)=uv$, determine the image, the nonzero eigenvalues, and the kernel in terms of vanishing integrals. Do the same for $A(u,v)=u^2+v^2$.

## Hints

> [!hint]- Hint 1
> In each case, rewrite $Tf$ using only finitely many scalar moments of $f$.

## Solution

> [!success]- Solution
> For $A(u,v)=uv$,
>
> $$
> (Tf)(u)=u\int_0^1vf(v)\,dv.
> $$
>
> Hence
>
> $$
> \operatorname{im}T=\operatorname{span}\{u\},\qquad
> \ker T=\left\{f:\int_0^1vf(v)\,dv=0\right\}.
> $$
>
> Since $T(u)=u/3$, the only nonzero eigenvalue is $1/3$.
>
> For $A(u,v)=u^2+v^2$, set
>
> $$
> a=\int_0^1f(v)\,dv,\qquad b=\int_0^1v^2f(v)\,dv.
> $$
>
> Then $(Tf)(u)=au^2+b$, so
>
> $$
> \operatorname{im}T=\operatorname{span}\{1,u^2\},\qquad
> \ker T=\left\{f:\int_0^1f=0, \int_0^1v^2f(v)\,dv=0\right\}.
> $$
>
> In the ordered basis $(1,u^2)$ of the image, the restriction has matrix
>
> $$
> \begin{pmatrix}\frac13&\frac15\\1&\frac13\end{pmatrix},
> $$
>
> because $T(1)=1/3+u^2$ and $T(u^2)=1/5+u^2/3$. Its eigenvalues, and therefore all nonzero eigenvalues of $T$, are
>
> $$
> \lambda=\frac13\pm\frac1{\sqrt5}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Scope boundary:** These operators act on an infinite-dimensional space but have ranks $1$ and $2$, so their nonzero spectral calculations reduce to finite-dimensional linear algebra.
- **Source status:** The kernel functions $uv$ and $u^2+v^2$, the integration limits, and every requested output were visually checked at [S1, Ch. 5, Miscellaneous Problems, Ex. M.6, printed p. 153, PDF p. 165]. The solution is independent.
