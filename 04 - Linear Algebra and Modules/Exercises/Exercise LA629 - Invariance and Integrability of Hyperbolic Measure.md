---
title: "Exercise LA629: Invariance and Integrability of Hyperbolic Measure"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.4, Exercise 5.4.1, printed p. 184, PDF p. 198"
source_refs:
  - "S7/ch-5/sec-4/ex-1"
created: 2026-10-28
---

# Exercise LA629: Invariance and Integrability of Hyperbolic Measure

## Problem Statement

> [!question] Original Exercise 5.4.1
> (a) Show that the hyperbolic measure, $d\mu(\tau)=dx\,dy/y^2$ for $\tau=x+iy\in\mathcal H$, is $GL_2^+(\mathbb R)$-invariant. (A hint for this exercise is at the end of the book.)
>
> (b) Let $\varphi:\mathcal H\longrightarrow\mathbb C$ be continuous and bounded, and let $\alpha\in SL_2(\mathbb Z)$. Show that the integral $\int_{\mathcal D^*}\varphi(\alpha(\tau))d\mu(\tau)$ converges.
>
> Here $\mathcal D^*=\{x+iy\in\mathcal H:|x|\leq1/2,\ |x+iy|\geq1\}\cup\{\infty\}$, and the added point has measure zero.

## Hints

> [!hint]- Hint 1
> For $F(z)=(az+b)/(cz+d)$ compute both $\operatorname{Im}F(z)$ and the real Jacobian determinant.

> [!hint]- Hint 2
> For (b), bound the absolute value of the integrand by a constant and integrate $y^{-2}$ over the fundamental region.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Let $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in GL_2^+(\mathbb R)$, put $\Delta=ad-bc>0$, and write $F(z)=\alpha z=u+iv$. Subtraction of complex conjugates and differentiation give
> $$
> v=\frac{\Delta y}{|cz+d|^2},\qquad
> F'(z)=\frac{\Delta}{(cz+d)^2}.
> $$
> By the Cauchy–Riemann equations the real Jacobian is $u_xv_y-u_yv_x=u_x^2+u_y^2=|F'(z)|^2$. Therefore
> $$
> \frac{du\,dv}{v^2}
> =\frac{\Delta^2|cz+d|^{-4}\,dx\,dy}{\Delta^2y^2|cz+d|^{-4}}
> =\frac{dx\,dy}{y^2}.
> $$
> This proves invariance for every positive determinant, including scalar multiples of a representative matrix.
>
> **(b).** Choose $B$ such that $|\varphi(z)|\leq B$ on $\mathcal H$. Since $\alpha$ preserves $\mathcal H$, the same bound holds for $\varphi\circ\alpha$. Over the finite part of the region, the area is
> $$
> \begin{aligned}
> \int_{\mathcal D}d\mu
> &=\int_{-1/2}^{1/2}\int_{\sqrt{1-x^2}}^\infty\frac{dy\,dx}{y^2}\\
> &=\int_{-1/2}^{1/2}\frac{dx}{\sqrt{1-x^2}}
> =\arcsin(1/2)-\arcsin(-1/2)=\frac\pi3.
> \end{aligned}
> $$
> Hence $\int_{\mathcal D^*}|\varphi(\alpha z)|d\mu\leq B\pi/3<\infty$. This proves absolute convergence of the complex integral. Its values at the added cusp do not affect the integral.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants]]
- [[07 - Modular Forms/Concepts/Modular Group]]
- [[07 - Modular Forms/Concepts/Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.4.1, printed p. 184 / PDF p. 198]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The measure and domain definitions were checked on printed p. 182 / PDF p. 196. The Appendix A hint on differential forms is printed p. 422 / PDF p. 433. This proof uses the explicit real Jacobian instead.
- **Imported calculus inputs:** The real change-of-variables theorem and the Cauchy–Riemann equations are used; the Jacobian and area computations are supplied.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
