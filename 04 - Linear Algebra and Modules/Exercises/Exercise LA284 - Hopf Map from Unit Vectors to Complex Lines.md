---
title: "Exercise LA284: Hopf Map from Unit Vectors to Complex Lines"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - complex-projective-line
  - hopf-map
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 2, Ex. 2.3, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA284: Hopf Map from Unit Vectors to Complex Lines

## Problem Statement

> [!question] Exercise 2.3 — unit vectors and subspaces in $\mathbb C^2$
> A proper subspace $W$ of the vector space $\mathbb C^2$ has dimension $1$. Its slope is defined to be $\lambda=y_2/y_1$, where $(y_1,y_2)$ is a nonzero vector in $W$. The slope can be any complex number, or, when $y_1=0$, $\lambda=\infty$.
>
> **(a)** Let $z=v_1+v_2i$. Write the formula for stereographic projection $\pi$ in (9.2.2) and its inverse function $\sigma$ in terms of $z$.
>
> **(b)** The function that sends a unit vector $(y_1,y_2)$ to $\sigma(y_2/y_1)$ defines a map **form** the unit sphere $S^3$ in $\mathbb C^2$ to the two-sphere $S^2$. Compute the function $\sigma(y_2/y_1)$ on unit vectors $(y_1,y_2)$.
>
> **(c)** What pairs of points of $S^2$ correspond to pairs of subspaces $W$ and $W'$ that are orthogonal with respect to the standard Hermitian form on $\mathbb C^2$?
>
> [!warning] Source issue
> Part (b) prints “a map form the unit sphere”; the intended word is “from.” The printed wording is preserved above.

## Hints

> [!hint]- Hint 1
> Replace the two real coordinates in the plane by the complex coordinate $z$.

> [!hint]- Hint 2
> If $(y_1,y_2)$ is a unit vector, then $1+|y_2/y_1|^2=1/|y_1|^2$.

> [!hint]- Hint 3
> A unit vector orthogonal to $(y_1,y_2)$ is $(-\overline{y_2},\overline{y_1})$.

## Solution

> [!success]- Solution
> **(a)** For $(x_0,x_1,x_2)\in S^2$ away from the north pole,
>
> $$
> \pi(x_0,x_1,x_2)=
> \frac{x_1+ix_2}{1-x_0}.
> $$
>
> Conversely, for $z\in\mathbb C$,
>
> $$
> \sigma(z)=
> \left(
> \frac{|z|^2-1}{|z|^2+1},
> \frac{2\operatorname{Re}z}{|z|^2+1},
> \frac{2\operatorname{Im}z}{|z|^2+1}
> \right),
> $$
>
> and $\sigma(\infty)=(1,0,0)$.
>
> **(b)** If $|y_1|^2+|y_2|^2=1$ and $y_1\ne0$, then
>
> $$
> \sigma(y_2/y_1)=
> \left(
> |y_2|^2-|y_1|^2,\,
> 2\operatorname{Re}(y_2\overline{y_1}),\,
> 2\operatorname{Im}(y_2\overline{y_1})
> \right).
> $$
>
> The same formula gives $(1,0,0)$ when $y_1=0$. Multiplying $(y_1,y_2)$ by a unit complex scalar leaves all three coordinates unchanged, so the map depends only on the complex line $W$.
>
> **(c)** The orthogonal line is spanned by
>
> $$
> (-\overline{y_2},\overline{y_1}).
> $$
>
> Substitution into the formula in part (b) negates every coordinate. Hence orthogonal complex lines correspond exactly to antipodal points of $S^2$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- This map $S^3\to S^2$ is the Hopf map; its fibres are the unit scalar multiples of a fixed vector.
- **Source status:** The full multipart statement, including the printed typo, was visually verified at [S1, Ch. 9, Ex. 2.3, printed p. 284, PDF p. 296]. The formulas and antipodal characterization are independent derivations.
