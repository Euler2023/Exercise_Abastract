---
title: "Exercise LA493: Exterior Traces and the Characteristic Polynomial"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 2, printed p. 753, PDF p. 768"
created: 2026-09-29
---

# Exercise LA493: Exterior Traces and the Characteristic Polynomial

## Problem Statement

> [!question] Lang XIX.2
> Let $E$ be a free module of dimension $n$ over the commutative ring $R$. Let $f:E\to E$ be a linear map. Let $\alpha_r(f)=\operatorname{tr}\bigwedge^r(f)$, where $\bigwedge^r(f)$ is the endomorphism of $\bigwedge^r(E)$ into itself induced by $f$. We have
>
> $$
> \alpha_0(f)=1,\qquad \alpha_1(f)=\operatorname{tr}(f),\qquad
> \alpha_n(f)=\det f,
> $$
>
> and $\alpha_r(f)=0$ if $r>n$. Show that
>
> $$
> \det(1+f)=\sum_{r\ge0}\alpha_r(f).
> $$
>
> [Hint: As usual, prove the statement when $f$ is represented by a matrix with variable coefficients over the integers.] Interpret the $\alpha_r(f)$ in terms of the coefficients of the characteristic polynomial of $f$.

## Hints

> [!hint]- Hint 1
> Expand $\bigwedge^r f$ in the basis indexed by increasing $r$-element subsets. Its diagonal entries are principal minors.

> [!hint]- Hint 2
> In $\det(I+tA)$, choose the $tA$ entry in a subset of columns and the identity entry in the complementary columns.

## Solution

> [!success]- Independent derivation
> Choose a basis $e_1,\ldots,e_n$, with $f(e_j)=\sum_i a_{ij}e_i$. For increasing subsets $I,J$ of size $r$, multilinearity gives
>
> $$
> \bigwedge^r f(e_J)=\sum_{\lvert I\rvert=r}\det(A_{I,J})e_I,
> \qquad e_I=e_{i_1}\wedge\cdots\wedge e_{i_r}.
> $$
>
> The determinant occurs because the coefficient of $e_I$ is the signed sum over all assignments of the selected row indices to the selected columns. Taking diagonal entries yields
>
> $$
> \alpha_r(f)=\sum_{\lvert I\rvert=r}\det(A_{I,I}).
> $$
>
> By multilinearity of the determinant in columns, the coefficient of $t^r$ in $\det(I+tA)$ is the sum of the determinants with $A$ columns in a size-$r$ set $I$ and identity columns elsewhere. Expanding along the latter columns forces the corresponding fixed row positions. The remaining determinant is $\det(A_{I,I})$, with positive cofactor sign because the deleted row and column index sets agree. Therefore, in $R[t]$,
>
> $$
> \det(I+tA)=\sum_{r=0}^n\alpha_r(f)t^r.
> $$
>
> Setting $t=1$ proves the requested identity. Equivalently, this is a polynomial identity first valid for the universal matrix over $\mathbb Z[a_{ij}]$ and then specialized to any $R$, exactly as the hint suggests; no eigenvalues or division are used.
>
> The same expansion of $\det(TI-A)$ gives
>
> $$
> \det(TI-f)=\sum_{r=0}^n(-1)^r\alpha_r(f)T^{n-r}.
> $$
>
> Thus $\alpha_r(f)$ is $(-1)^r$ times the coefficient of $T^{n-r}$ in the characteristic polynomial. The empty minor is $1$, and the unique full minor is $\det(A)$; these also verify the stated formulas at $r=0,n$. For $r>n$, the exterior power is zero. When $n=0$, both determinants are the empty determinant $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]

## Notes

The complete statement and universal-matrix hint were checked at [S2, Ch. XIX, Exercise 2, printed p. 753, PDF p. 768]. The principal-minor proof is independent and works over arbitrary commutative rings, including rings with zero divisors.
