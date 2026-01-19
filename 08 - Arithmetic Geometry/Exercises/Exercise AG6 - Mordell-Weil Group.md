---
title: "Exercise AG6: Mordell-Weil Group"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - mordell-weil
source: "Classical elliptic curve theory"
created: 2026-01-19
---

# Exercise AG6: Mordell-Weil Group

## Problem Statement

> [!question]
> Consider the elliptic curve $E: y^2 = x^3 + 1$ over $\mathbb{Q}$.
>
> **(a)** Find the point $P = (2, 3)$ on $E$. Verify it lies on the curve.
>
> **(b)** Using the group law formulas, compute $2P$.
>
> Recall: For $P = (x_1, y_1)$ with $y_1 \neq 0$:
> $$\lambda = \frac{3x_1^2}{2y_1}, \quad x_3 = \lambda^2 - 2x_1, \quad y_3 = \lambda(x_1 - x_3) - y_1$$
>
> **(c)** Show that $P$ has infinite order by computing $3P$ and observing the height grows.
>
> **(d)** The curve $E$ has $E(\mathbb{Q})_{\text{tors}} \cong \mathbb{Z}/6\mathbb{Z}$. Find a torsion point of order 3.

## Hints

> [!hint]- Hint 1
> For (b): Carefully substitute $x_1 = 2, y_1 = 3$ into the doubling formulas.

> [!hint]- Hint 2
> For (c): If $P$ had finite order $n$, then $nP = \mathcal{O}$. Points of finite order have bounded height.

> [!hint]- Hint 3
> For (d): 3-torsion points satisfy $3T = \mathcal{O}$, or equivalently, $T = -2T$. Look for points with small coordinates.

## Solution

> [!success]- Solution
>
> **(a)** Check $P = (2, 3)$:
> $$y^2 = 9, \quad x^3 + 1 = 8 + 1 = 9$$ ✓
>
> **(b)** Compute $2P$:
> $$\lambda = \frac{3 \cdot 2^2}{2 \cdot 3} = \frac{12}{6} = 2$$
>
> $$x_3 = 2^2 - 2 \cdot 2 = 4 - 4 = 0$$
>
> $$y_3 = 2(2 - 0) - 3 = 4 - 3 = 1$$
>
> So $2P = (0, 1)$.
>
> Verify: $1^2 = 1$ and $0^3 + 1 = 1$ ✓
>
> **(c)** Compute $3P = 2P + P = (0, 1) + (2, 3)$:
>
> For adding distinct points:
> $$\lambda = \frac{3 - 1}{2 - 0} = \frac{2}{2} = 1$$
>
> $$x_3 = 1^2 - 0 - 2 = -1$$
>
> $$y_3 = 1(0 - (-1)) - 1 = 1 - 1 = 0$$
>
> So $3P = (-1, 0)$.
>
> This is a 2-torsion point! So $6P = 2 \cdot 3P = \mathcal{O}$.
>
> Wait, this means $P$ has finite order 6! Let me recheck...
>
> Actually, $(-1, 0)$ satisfies $0^2 = (-1)^3 + 1 = 0$ ✓, and it's 2-torsion.
>
> So the order of $P$ divides 6. Check $2P = (0, 1)$: is this $\mathcal{O}$? No.
> Check $3P = (-1, 0)$: is this $\mathcal{O}$? No.
>
> Since $3P$ is 2-torsion, $6P = 2(3P) = \mathcal{O}$.
>
> So $P = (2, 3)$ is a **torsion point of order 6**!
>
> **(d)** A point of order 3 satisfies $3T = \mathcal{O}$, meaning $2T = -T$.
>
> From above: $2P = (0, 1)$ and $3P = (-1, 0)$.
>
> Check if $(0, 1)$ has order 3: compute $2(0, 1) = ?$
>
> $\lambda = \frac{3 \cdot 0^2}{2 \cdot 1} = 0$
>
> $x_3 = 0 - 0 = 0$ (Hmm, this gives the same $x$-coordinate)
>
> Actually with $\lambda = 0$: $x_3 = 0 - 2 \cdot 0 = 0$, $y_3 = 0 \cdot (0 - 0) - 1 = -1$.
>
> So $2(0, 1) = (0, -1) = -(0, 1)$, meaning $3(0, 1) = \mathcal{O}$.
>
> Therefore $(0, 1)$ is a **point of order 3**.
>
> The torsion subgroup: $E(\mathbb{Q})_{\text{tors}} = \langle P \rangle = \{P, 2P, 3P, 4P, 5P, \mathcal{O}\}$
> $= \{(2, 3), (0, 1), (-1, 0), (0, -1), (2, -3), \mathcal{O}\} \cong \mathbb{Z}/6\mathbb{Z}$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
