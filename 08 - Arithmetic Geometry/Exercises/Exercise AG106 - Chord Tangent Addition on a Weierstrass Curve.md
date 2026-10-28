---
title: "Exercise AG106: Chord Tangent Addition on a Weierstrass Curve"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.1, Exercise 7.1.4, printed pp. 260\u2013261, PDF pp. 273\u2013274"
source_refs:
  - "S7/ch-7/sec-1/ex-4"
created: 2026-10-28
---

# Exercise AG106: Chord Tangent Addition on a Weierstrass Curve

## Problem Statement

> [!question] Original Exercise 7.1.4
> (a) Show that the casewise definitions of $\lambda$ and $\mu$ make $y=\lambda x+\mu$ the secant through $P,Q$ when $P\ne Q$ and the tangent at $P$ when $P=Q$.
>
> (b) Show that the algebraic definition (7.3) of elliptic curve addition corresponds to the geometric description (7.2). (A hint for this exercise is at the end of the book.)
>
> (c) The points $(2,\pm5)$ satisfy $y^2=4x^3-7$. Find another point $(x,y)\in\mathbb Q^2$ that does so as well.

> **Context and notation.** The curve is $y^2=4x^3-g_2x-g_3$. For the nonvertical cases, printed pp. 257–258 / PDF pp. 270–271 define
> $$
> \lambda=
> \begin{cases}(y_Q-y_P)/(x_Q-x_P),&x_P\ne x_Q,\\
> (12x_P^2-g_2)/(2y_P),&P=Q,\end{cases}
> $$
> $$
> \mu=
> \begin{cases}(x_Qy_P-x_Py_Q)/(x_Q-x_P),&x_P\ne x_Q,\\
> (-4x_P^3-g_2x_P-2g_3)/(2y_P),&P=Q.\end{cases}
> $$
> Equation (7.3) is $P+Q=(r,s)$ with $r=\lambda^2/4-x_P-x_Q$ and $s=-\lambda r-\mu$. Equation (7.2) says $P+Q=-R$ when $P,Q,R$ are collinear, with intersection multiplicities.

## Hints

> [!hint]- Hint 1
> Solve for a secant, differentiate for a tangent, and compare the intercepts.

> [!hint]- Hint 2
> Substitute the line into the cubic and use the sum of its three roots.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Assume first that the points are affine and that $P+Q\ne0_E$, as in the source definitions.
>
> **(a)** If $x_P\ne x_Q$, solving the two linear equations $y_P=\lambda x_P+\mu$ and $y_Q=\lambda x_Q+\mu$ gives the stated $\lambda,\mu$. If $P=Q$ and $y_P\ne0$, differentiating $y^2=4x^3-g_2x-g_3$ gives $2y_Py'=12x_P^2-g_2$, the stated tangent slope. Its intercept is
> $$
> y_P-\lambda x_P
> =\frac{2y_P^2-12x_P^3+g_2x_P}{2y_P}
> =\frac{-4x_P^3-g_2x_P-2g_3}{2y_P}.
> $$
> When $Q=-P$, including a two-torsion tangent with $y_P=0$, the line is vertical and the sum is $0_E$; these are the excluded affine-formula cases.
>
> **(b)** Substituting the line into the cubic gives
> $$
> 4x^3-\lambda^2x^2-(2\lambda\mu+g_2)x-(\mu^2+g_3)=0.
> $$
> Two roots are $x_P,x_Q$, with multiplicity two at tangency. Vieta's relation makes the third root
> $$
> x_R=\lambda^2/4-x_P-x_Q=r.
> $$
> The third intersection has $y_R=\lambda r+\mu$, and reflection in the $x$-axis gives $P+Q=(r,-\lambda r-\mu)=(r,s)$, exactly (7.3). Vertical lines and the point at infinity give the remaining group-law cases.
>
> **(c)** Double $P=(2,5)$ on $y^2=4x^3-7$:
> $$
> \lambda=\frac{48}{10}=\frac{24}{5},\quad
> \mu=5-\frac{48}{5}=-\frac{23}{5},
> $$
> $$
> x_{2P}=\frac{144}{25}-4=\frac{44}{25},\qquad
> y_{2P}=-\frac{24}{5}\frac{44}{25}+\frac{23}{5}=-\frac{481}{125}.
> $$
> The check is exact:
> $$
> \left(\frac{481}{125}\right)^2
> =\frac{231361}{15625}
> =4\left(\frac{44}{25}\right)^3-7.
> $$
> Thus either sign of the displayed $y$ gives a further rational point.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 260–261 / PDF pp. 273–274. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Appendix:** The hint for (b), printed p. 425 / PDF p. 436, was checked on the original page; it uses precisely the cubic-root argument above.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
