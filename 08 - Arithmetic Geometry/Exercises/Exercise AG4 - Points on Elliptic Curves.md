---
title: "Exercise AG4: Points on Elliptic Curves"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - elliptic-curves
source: "Classical elliptic curve theory"
created: 2026-01-19
---

# Exercise AG4: Points on Elliptic Curves

## Problem Statement

> [!question]
> Consider the elliptic curve $E: y^2 = x^3 - x$ over $\mathbb{Q}$.
>
> **(a)** Verify that $P = (0, 0)$ and $Q = (1, 0)$ are points on $E$.
>
> **(b)** Show that $P$ and $Q$ are **2-torsion points**, i.e., $2P = 2Q = \mathcal{O}$.
>
> **(c)** Find all points of order 2 on $E$.
>
> **(d)** The discriminant is $\Delta = 4$. What type of reduction does $E$ have at $p = 2$? At $p = 3$?
>
> **(e)** Compute $\#E(\mathbb{F}_5)$ by listing all points.

## Hints

> [!hint]- Hint 1
> A point $P = (x, y)$ has $2P = \mathcal{O}$ if and only if the tangent line at $P$ is vertical, which happens when $y = 0$.

> [!hint]- Hint 2
> 2-torsion points satisfy $y = 0$, so solve $x^3 - x = 0$.

> [!hint]- Hint 3
> For reduction mod $p$: good reduction if $p \nmid \Delta$.

> [!hint]- Hint 4
> For $E(\mathbb{F}_5)$: check each $x \in \{0, 1, 2, 3, 4\}$ to see if $x^3 - x$ is a square mod 5.

## Solution

> [!success]- Solution
>
> **(a)**
> - $P = (0, 0)$: $0^2 = 0^3 - 0 = 0$ ✓
> - $Q = (1, 0)$: $0^2 = 1^3 - 1 = 0$ ✓
>
> **(b)** For elliptic curves in Weierstrass form $y^2 = f(x)$:
> - The tangent at $(x_0, 0)$ has infinite slope (vertical line $x = x_0$)
> - A vertical line meets $E$ at $(x_0, y)$ and $(x_0, -y)$, plus the point at infinity
> - So if $y_0 = 0$, then $P + P = \mathcal{O}$
>
> Since $P$ and $Q$ have $y = 0$, we have $2P = 2Q = \mathcal{O}$.
>
> **(c)** 2-torsion points have $y = 0$, so we solve:
> $$x^3 - x = x(x-1)(x+1) = 0$$
> Solutions: $x = 0, 1, -1$.
>
> 2-torsion points: $\{(0, 0), (1, 0), (-1, 0)\}$
>
> Together with $\mathcal{O}$, these form $E[2] \cong (\mathbb{Z}/2\mathbb{Z})^2$.
>
> **(d)** Discriminant $\Delta = 4 = 2^2$.
> - At $p = 2$: $p | \Delta$, so **bad reduction** (actually additive since this is the CM curve with $j = 1728$)
> - At $p = 3$: $p \nmid \Delta$, so **good reduction**
>
> **(e)** Over $\mathbb{F}_5$: check each $x$ value.
>
> | $x$ | $x^3 - x$ | $\pmod{5}$ | Square? | Points |
> |-----|-----------|------------|---------|--------|
> | 0 | 0 | 0 | Yes ($0^2$) | $(0, 0)$ |
> | 1 | 0 | 0 | Yes | $(1, 0)$ |
> | 2 | 6 | 1 | Yes ($\pm 1$) | $(2, 1), (2, 4)$ |
> | 3 | 24 | 4 | Yes ($\pm 2$) | $(3, 2), (3, 3)$ |
> | 4 | 60 | 0 | Yes | $(4, 0)$ |
>
> Points: $(0,0), (1,0), (2,1), (2,4), (3,2), (3,3), (4,0), \mathcal{O}$
>
> $\#E(\mathbb{F}_5) = 8$
>
> Check: $a_5 = 5 + 1 - 8 = -2$, and $|{-2}| \leq 2\sqrt{5} \approx 4.47$ ✓ (Hasse bound)

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
