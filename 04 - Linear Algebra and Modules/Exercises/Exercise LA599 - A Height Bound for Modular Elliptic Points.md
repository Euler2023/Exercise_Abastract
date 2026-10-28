---
title: "Exercise LA599: A Height Bound for Modular Elliptic Points"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.6, printed p. 63, PDF p. 78"
source_refs:
  - "S7/ch-2/sec-4/ex-6"
created: 2026-10-28
---

# Exercise LA599: A Height Bound for Modular Elliptic Points

## Problem Statement

> [!question] Original Exercise 2.4.6
> Show that $\mathcal N_2$ contains no elliptic points for $SL_2(\mathbb Z)$. (A hint for this exercise is at the end of the book.)
>
> Here $\mathcal N_2=\{\tau\in\mathcal H:\operatorname{Im}\tau>2\}$. An elliptic point is fixed by a matrix inducing a nonidentity fractional linear transformation, so the scalar matrices $I$ and $-I$ do not count.

## Hints

> [!hint]- Hint 1
> If $\gamma\tau=\tau$, the imaginary-part identity forces $|c\tau+d|=1$, where $(c,d)$ is the bottom row of $\gamma$.

> [!hint]- Hint 2
> A nonidentity transformation fixing a point of $\mathcal H$ has $c\ne0$. Use $|c\tau+d|\geq |c|\operatorname{Im}\tau$ to obtain a stronger bound than requested.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution from the determinant-one matrix formula.
>
> Suppose $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ fixes $\tau=x+iy\in\mathcal H$ and $\gamma\notin\{I,-I\}$.
>
> If $c=0$, then $ad=1$ gives $a=d=1$ or $a=d=-1$. Its action is a translation $z\mapsto z+b/d$. A fixed point requires $b/d=0$, so $b=0$ and $\gamma=\pm I$, a contradiction. Hence $c\ne0$ and $|c|\geq1$.
>
> The determinant-one formula for imaginary parts, derived by multiplying the fractional linear expression by its conjugate denominator, gives
> $$
> y=\operatorname{Im}(\gamma\tau)=\frac{y}{|c\tau+d|^2}.
> $$
> Since $y>0$, we have $|c\tau+d|=1$. Thus
> $$
> 1=|c\tau+d|\geq|\operatorname{Im}(c\tau+d)|=|c|y\geq y.
> $$
> Every elliptic point for $SL_2(\mathbb Z)$ therefore satisfies $\operatorname{Im}\tau\leq1$. In particular, none lies in $\mathcal N_2$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The original exercise was checked on the rendered source [S7, Exercise 2.4.6, printed p. 63 / PDF p. 78]. The statement's Appendix A pointer is retained; the hints and proof above are independent.
- **Sharpness:** The stronger bound $\operatorname{Im}\tau\leq1$ is attained at $\tau=i$, fixed by $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, since $-1/i=i$. Thus one cannot replace the bound by a strict inequality.
- **Hypothesis boundary:** Both integrality of the bottom row and exclusion of the identity transformation matter. Every point is fixed by $\pm I$; allowing those matrices would destroy the claim.
- **Routing:** The key step is the explicit height estimate from a two-by-two matrix, so this exercise belongs to Linear Algebra and Modules.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
