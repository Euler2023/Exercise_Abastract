---
title: "Exercise AG2: Rational Points on Conics"
topic: arithmetic-geometry
difficulty: beginner
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - rational-points
source: "Classical Diophantine geometry"
created: 2026-01-19
---

# Exercise AG2: Rational Points on Conics

## Problem Statement

> [!question]
> Consider the conic $C: x^2 + y^2 = 1$ (the unit circle).
>
> **(a)** Show that the point $P = (-1, 0)$ lies on $C$.
>
> **(b)** Using the parameterization method: a line through $P$ with slope $t \in \mathbb{Q}$ intersects $C$ at another point. Find this point in terms of $t$.
>
> **(c)** Use part (b) to find all rational points on $C$.
>
> **(d)** Derive the classical parameterization of Pythagorean triples: if $a^2 + b^2 = c^2$ with $\gcd(a,b,c) = 1$ and $c > 0$, express $a, b, c$ in terms of integers $m, n$.

## Hints

> [!hint]- Hint 1
> A line through $(-1, 0)$ with slope $t$ has equation $y = t(x + 1)$.

> [!hint]- Hint 2
> Substitute the line equation into $x^2 + y^2 = 1$ and solve for $x$.

> [!hint]- Hint 3
> For Pythagorean triples: if $(a/c, b/c)$ is a rational point on $x^2 + y^2 = 1$, clear denominators.

## Solution

> [!success]- Solution
>
> **(a)** Check: $(-1)^2 + 0^2 = 1$ ✓
>
> **(b)** Line through $P = (-1, 0)$ with slope $t$: $y = t(x + 1)$.
>
> Substitute into $x^2 + y^2 = 1$:
> $$x^2 + t^2(x+1)^2 = 1$$
> $$(1 + t^2)x^2 + 2t^2 x + (t^2 - 1) = 0$$
>
> We know $x = -1$ is one root. By Vieta's formulas, the product of roots is $\frac{t^2 - 1}{1 + t^2}$.
> So the other root is:
> $$x = \frac{t^2 - 1}{1 + t^2} \cdot \frac{1}{-1} = \frac{1 - t^2}{1 + t^2}$$
>
> Then:
> $$y = t\left(\frac{1 - t^2}{1 + t^2} + 1\right) = t \cdot \frac{2}{1 + t^2} = \frac{2t}{1 + t^2}$$
>
> The second intersection point is $\left(\frac{1 - t^2}{1 + t^2}, \frac{2t}{1 + t^2}\right)$.
>
> **(c)** Every rational point on $C$ (except $P$) corresponds to a unique $t \in \mathbb{Q}$:
> $$C(\mathbb{Q}) = \left\{\left(\frac{1 - t^2}{1 + t^2}, \frac{2t}{1 + t^2}\right) : t \in \mathbb{Q}\right\} \cup \{(-1, 0)\}$$
>
> Writing $t = m/n$ with $\gcd(m, n) = 1$:
> $$\left(\frac{n^2 - m^2}{n^2 + m^2}, \frac{2mn}{n^2 + m^2}\right)$$
>
> **(d)** If $(a/c, b/c)$ is a rational point, then from part (c):
> - $a = n^2 - m^2$ (or $m^2 - n^2$)
> - $b = 2mn$
> - $c = m^2 + n^2$
>
> where $\gcd(m, n) = 1$ and $m, n$ not both odd.
>
> Example: $m = 2, n = 1$ gives $(a, b, c) = (3, 4, 5)$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
