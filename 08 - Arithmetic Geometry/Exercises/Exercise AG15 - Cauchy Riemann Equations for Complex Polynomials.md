---
title: "Exercise AG15: Cauchy-Riemann Equations for Complex Polynomials"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - complex-polynomials
  - cauchy-riemann-equations
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.4, The Implicit Function Theorem, Ex. A.14, printed p. 522, PDF p. 534; Lemma A.4.2, printed p. 520, PDF p. 532"
created: 2026-08-28
---

# Exercise AG15: Cauchy-Riemann Equations for Complex Polynomials

## Problem Statement

> [!question] Exercise A.14
> Prove Lemma (A.4.2).
>
> With $x=x_0+x_1i$, $y=y_0+y_1i$, and $f=f_0+f_1i$, Lemma A.4.2 states
>
> $$
> \frac{\partial f}{\partial y}
> =\frac{\partial f_0}{\partial y_0}
> +\frac{\partial f_1}{\partial y_0}i,
> $$
>
> and
>
> $$
> \frac{\partial f_0}{\partial y_0}=\frac{\partial f_1}{\partial y_1},
> \qquad
> -\frac{\partial f_0}{\partial y_1}=\frac{\partial f_1}{\partial y_0}.
> $$

## Hints

> [!hint]- Hint 1
> Verify the formulas for constants, $x$, and $y$, and show that they are preserved by sums and products.

## Solution

> [!success]- Solution
> Both assertions are immediate for constants and for $f=x$, since their derivatives with respect to $y$ vanish. For $f=y$, one has $f_0=y_0$, $f_1=y_1$, and the formulas reduce to $1=1+0i$ and the elementary Cauchy-Riemann identities.
>
> The assertions are preserved under addition. It remains to check products. Write
>
> $$
> g=g_0+ig_1,
> \qquad
> h=h_0+ih_1,
> \qquad
> f=gh=f_0+if_1,
> $$
>
> so
>
> $$
> f_0=g_0h_0-g_1h_1,
> \qquad
> f_1=g_0h_1+g_1h_0.
> $$
>
> Assume the lemma for $g$ and $h$. The formal product rule gives
>
> $$
> \frac{\partial f}{\partial y}
> =\frac{\partial g}{\partial y}h+g\frac{\partial h}{\partial y}.
> $$
>
> Substituting part (a) for $g$ and $h$ and multiplying complex numbers, the real and imaginary parts are exactly $\partial f_0/\partial y_0$ and $\partial f_1/\partial y_0$ obtained by differentiating the two displayed formulas. This proves part (a) for $f$.
>
> Differentiating those same formulas with respect to $y_0,y_1$ and substituting the Cauchy-Riemann equations for $g$ and $h$ gives
>
> $$
> \frac{\partial f_0}{\partial y_0}=\frac{\partial f_1}{\partial y_1},
> \qquad
> -\frac{\partial f_0}{\partial y_1}=\frac{\partial f_1}{\partial y_0}.
> $$
>
> Thus the lemma is preserved by products. Every complex polynomial is built from constants, $x$, and $y$ by finitely many sums and products, so structural induction proves Lemma A.4.2 for all $f\in\mathbb C[x,y]$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Implicit Function Theorem for Complex Polynomials|Implicit Function Theorem for Complex Polynomials]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Notes

- **Routing:** Arithmetic Geometry is primary because the analytic identities are used to establish the local manifold structure of complex polynomial zero loci.
- **Source status:** The exercise is [S1, Appendix, §A.4, Ex. A.14, printed p. 522, PDF p. 534]; the full lemma statement is checked at [S1, Lemma A.4.2, printed p. 520, PDF p. 532]. The product-closure proof expands the source's proof sketch independently.
