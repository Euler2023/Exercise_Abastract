---
title: "Exercise F19: Loop Changes in Polynomial Images of Circles"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - fundamental-theorem-of-algebra
  - winding-number
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 10, Ex. 10.3, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise F19: Loop Changes in Polynomial Images of Circles

## Problem Statement

> [!question] Exercise
> With notation as at the end of the section, a comparison of the images $f(C_r)$ for varying radii shows another interesting geometric feature: For large $r$, the curve $f(C_r)$ makes $n$ loops around the origin. Its total curvature is $2\pi n$. Assuming that the coefficient $a_1$ is not zero, the linear term $a_1z+a_0$ dominates $f(z)$ for small $z$. Then for small $r$, $f(C_r)$ makes a single loop around $a_0$. Its total curvature is only $2\pi$. Something happens to the loops as $r$ varies. Explain.

## Hints

> [!hint]- Hint 1
> Parametrize the image by $w_r(\theta)=f(re^{i\theta})$ and differentiate.

> [!hint]- Hint 2
> The tangent can vanish only when $f'(re^{i\theta})=0$.

## Solution

> [!success]- Solution
> Put
> $$
> w_r(\theta)=f(re^{i\theta}),\qquad 0\le\theta\le2\pi.
> $$
> Its tangent vector is
> $$
> w_r'(\theta)=ire^{i\theta}f'(re^{i\theta}).
> $$
> If the circle $C_r$ contains no critical point of $f$, this tangent never vanishes. Its turning number is the winding number of $z f'(z)$ along $C_r$. By the argument principle,
> $$
> \operatorname{turn}(f(C_r))
> =1+\#\{c:f'(c)=0, |c|<r\},
> $$
> with critical points counted with multiplicity. Thus the signed total curvature is
> $$
> 2\pi\left(1+\#\{c:f'(c)=0, |c|<r\}\right).
> $$
> For small $r$, no critical point lies inside and the turning is $1$; for large $r$, all $n-1$ critical points lie inside and the turning is $n$.
>
> The topology of the drawn curve can change only when $r=|c|$ for a critical point $c$. At that radius the parametrized image has zero velocity at $f(c)$ and typically develops a cusp; as the radius crosses the critical value, a loop is created, destroyed, or merged. A critical point of multiplicity $m$ changes the turning number by $m$. Several critical points of the same modulus cause simultaneous changes.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

The notation $C_r$ and the small/large-radius observations come from S1, printed pp. 471–472, PDF pp. 483–484. The argument-principle calculation is an independently supplied standard complex-analysis argument. “Total curvature” here means signed total turning; absolute curvature need not obey this formula.
