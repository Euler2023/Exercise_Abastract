---
title: "Exercise Gal8: Recovering a Quartic Root from a Resolvent Root"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - quartic-polynomials
  - resolvent-cubic
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.15, printed p. 509, PDF p. 521"
created: 2026-08-11
---

# Exercise Gal8: Recovering a Quartic Root from a Resolvent Root

## Problem Statement

> [!question] Exercise 9.15
> Let $K$ be the splitting field of an irreducible quartic polynomial $f(x)$ over $F$, and let the roots of $f(x)$ in $K$ be $\alpha_1,\alpha_2,\alpha_3,\alpha_4$. Assume that the resolvent cubic $g(x)$ has a root
> $$
> \beta_1=\alpha_1\alpha_2+\alpha_3\alpha_4
> $$
> in $F$. Express the root $\alpha_1$ explicitly in terms of nested square roots.

> [!warning] Hypothesis boundary
> The square-root formulas below require $\operatorname{char}F\ne2$. In characteristic $2$, division by $2$ and the usual quadratic formula must be replaced by a different analysis.

## Hints

> [!hint]- Hint 1
> Group the roots into the two pairs $\{\alpha_1,\alpha_2\}$ and $\{\alpha_3,\alpha_4\}$.

> [!hint]- Hint 2
> Set $u=\alpha_1+\alpha_2$, $v=\alpha_3+\alpha_4$, $p=\alpha_1\alpha_2$, and $q=\alpha_3\alpha_4$.

> [!hint]- Hint 3
> First solve a quadratic equation for $u,v$, then recover $p,q$, and finally solve $x^2-ux+p=0$.

## Solution

> [!success]- Solution
> Assume $\operatorname{char}F\ne2$ and use Artin's coefficient convention
> $$
> f(x)=x^4-a_1x^3+a_2x^2-a_3x+a_4.
> $$
> Put
> $$
> u=\alpha_1+\alpha_2,\quad v=\alpha_3+\alpha_4,\quad
> p=\alpha_1\alpha_2,\quad q=\alpha_3\alpha_4.
> $$
> Since $\beta_1=p+q$, the elementary symmetric identities give
> $$
> u+v=a_1,\qquad uv=a_2-\beta_1,\qquad
> pv+qu=a_3,\qquad pq=a_4.
> $$
> Thus $u$ and $v$ are the roots of
> $$
> T^2-a_1T+(a_2-\beta_1)=0.
> $$
> Let
> $$
> d=\sqrt{a_1^2-4a_2+4\beta_1}.
> $$
> If $d\ne0$, choose the labeling so that
> $$
> u=\frac{a_1+d}{2},\qquad
> v=\frac{a_1-d}{2}.
> $$
> From $a_3=pv+(\beta_1-p)u$ one obtains
> $$
> p=\frac{\beta_1u-a_3}{d},\qquad q=\beta_1-p.
> $$
> The roots $\alpha_1,\alpha_2$ now satisfy $T^2-uT+p=0$, so, after choosing the sign corresponding to $\alpha_1$,
> $$
> \alpha_1=
> \frac12\left(
> u+\sqrt{u^2-4p}
> \right),
> \quad
> u=\frac{a_1+\sqrt{a_1^2-4a_2+4\beta_1}}{2},
> \quad
> p=\frac{\beta_1u-a_3}{\sqrt{a_1^2-4a_2+4\beta_1}}.
> $$
> This is an expression by nested square roots over $F$.
>
> For completeness, if $d=0$, then $u=v=a_1/2$. The two pairs of roots are distinct, so $p\ne q$. Put
> $$
> e=\sqrt{\beta_1^2-4a_4},\qquad
> p=\frac{\beta_1+e}{2},\qquad q=\frac{\beta_1-e}{2}.
> $$
> Recover
> $$
> u=\frac{a_3-pa_1}{q-p},\qquad v=a_1-u,
> $$
> and use the same final formula
> $$
> \alpha_1=\frac{u+\sqrt{u^2-4p}}2.
> $$
> At least one of $u-v$ and $p-q$ is nonzero, since otherwise the two unordered root pairs would coincide.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The exercise statement and the definition of $\beta_1$ are source material from [S1, Ch. 16, §9, Ex. 9.15, printed p. 509, PDF p. 521]. The explicit formulas and the degenerate-case branch are independent derivations from the elementary symmetric identities under the stated characteristic restriction. The square-root choices permute the four conjugate roots; no canonical branch is asserted.
