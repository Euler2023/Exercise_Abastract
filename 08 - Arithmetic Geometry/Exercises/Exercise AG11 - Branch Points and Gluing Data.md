---
title: "Exercise AG11: Branch Points and Gluing Data"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - monodromy
  - riemann-surfaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 9, Ex. 9.2, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise AG11: Branch Points and Gluing Data

## Problem Statement

> [!question] Exercise
> Determine the branch points and the gluing data for the Riemann surfaces of:
>
> **(a)** $x^2-t^2+1$; **(b)** $x^4-t-1$; **(c)** $x^3-3tx-4t$; **(d)** $x^3-3x^2-t$;
>
> **(e)** $x^3-t(t-1)$; **(f)** $x^3-3tx^2+t$; **(g)** $x^4+4x+t$; **(h)** $x^3-3tx-t-t^2$.

## Hints

> [!hint]- Hint 1
> Solve $f(t,x)=f_x(t,x)=0$. A $k$-fold root with $f_t\ne0$ contributes a $k$-cycle.

> [!hint]- Hint 2
> Gluing permutations are defined only up to simultaneous conjugation. Use one common sheet numbering for all branch points of a polynomial.

> [!hint]- Hint 3
> In part (h), inspect the local equation at $(t,x)=(1,-1)$ instead of assuming that every repeated fibre root gives nontrivial monodromy.

## Solution

> [!success]- Solution
> The following choices use counterclockwise loops and one common numbering of sheets. Different cuts or numbering simultaneously conjugate the permutations; this does not change the covering.
>
> **(a)** $f_x=2x$. Thus $x=0$ and $t=\pm1$. Each fibre has a double root and $f_t=-2t\ne0$, so
> $$
> B=\{-1,1\},\qquad \sigma_{-1}=\sigma_1=(12).
> $$
>
> **(b)** $f_x=4x^3$, so the only candidate is $(t,x)=(-1,0)$. The root has multiplicity $4$ and $f_t=-1$, hence
> $$
> B=\{-1\},\qquad \sigma_{-1}=(1234).
> $$
>
> **(c)** From $f_x=3(x^2-t)$, put $t=x^2$. Then
> $$
> f(x^2,x)=-2x^2(x+2).
> $$
> At $t=0$ the fibre is $x^3$, while at $t=4$ it has one double root. Since $f_t=-3x-4$ is nonzero at both relevant points,
> $$
> B=\{0,4\},\qquad \sigma_0=(123),\quad \sigma_4=(12).
> $$
>
> **(d)** Here $f_x=3x(x-2)$. The critical pairs are $(0,0)$ and $(-4,2)$, both with a double root and $f_t=-1$. Connectedness forces the transpositions to be distinct, so one may take
> $$
> B=\{-4,0\},\qquad \sigma_{-4}=(12),\quad\sigma_0=(23).
> $$
>
> **(e)** Since $f_x=3x^2$, the branch points are $t=0,1$, and each fibre has a triple root. Positive loops around the two simple zeros of $t(t-1)$ multiply a cube root by the same primitive cube root of unity. Thus
> $$
> B=\{0,1\},\qquad \sigma_0=\sigma_1=(123).
> $$
>
> **(f)** The equation $f_x=3x(x-2t)=0$ gives $t=0,\pm\tfrac12$. At $t=0$ there is a triple root; at $t=\pm\tfrac12$ there is a double root. The three sheets have trivial monodromy around a sufficiently large circle, so the finite monodromies can be chosen with product $1$:
> $$
> B=\left\{-\tfrac12,0,\tfrac12\right\},
> $$
> $$
> \sigma_{-1/2}=(12),\qquad
> \sigma_0=(123),\qquad
> \sigma_{1/2}=(23).
> $$
> Indeed $(12)(123)(23)=1$ with right-to-left composition.
>
> **(g)** The critical equation is $x^3=-1$. Let $\omega=e^{2\pi i/3}$. At $x=-1,-\omega,-\omega^2$, the corresponding values are $t=3,3\omega,3\omega^2$. All are simple critical points, so all local monodromies are transpositions. With suitable nonintersecting cuts, one common labeling is
> $$
> B=\{3,3\omega,3\omega^2\},
> $$
> $$
> \sigma_3=(12),\qquad
> \sigma_{3\omega}=(23),\qquad
> \sigma_{3\omega^2}=(34).
> $$
> Their product is a $4$-cycle, inverse to the monodromy at infinity.
>
> **(h)** The equations $f=f_x=0$ give $t=0,1$. At $t=0$ the fibre is $x^3$, and $f_t(0,0)=-1$, so $\sigma_0=(123)$. At $(1,-1)$, however, $f_t=0$. Setting $u=t-1$ and $y=x+1$ gives
> $$
> f=y^3-3y^2-3uy-u^2.
> $$
> Its lowest-degree part is a nondegenerate quadratic form, so the two local branches are analytic and are not exchanged around $u=0$. Thus $t=1$ is a singular-fibre candidate but not a true branch point:
> $$
> \sigma_1=1.
> $$
> The true branch set is therefore $B_{\mathrm{true}}=\{0\}$; if every exceptional fibre is retained in the cut set, use $B=\{0,1\}$ with data $((123),1)$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

S1 Proposition 15.9.13, printed p. 469, PDF p. 481, is used for the local $k$-cycle criterion. The computations and the treatment of the false branch point in part (h) are independent derivations. Permutations depend on cuts and sheet numbering; only their simultaneous-conjugacy class is intrinsic.
