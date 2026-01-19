---
title: Ruler and Compass Constructions
topic: galois-theory
tags:
  - concept
  - application
  - galois-theory
created: 2026-01-19
---

# Ruler and Compass Constructions

Galois theory resolves the classical Greek problems about geometric constructions, showing which lengths can be constructed using only straightedge and compass.

## Constructible Numbers

> [!info] Definition (Constructible Number)
> A real number $\alpha$ is **constructible** if, starting from points $(0,0)$ and $(1,0)$, the point $(\alpha, 0)$ can be obtained by a finite sequence of:
> 1. Drawing a line through two known points
> 2. Drawing a circle with known center and radius
> 3. Taking intersection points

> [!abstract] Algebraic Characterization
> A real number $\alpha$ is constructible if and only if:
> $$[\mathbb{Q}(\alpha):\mathbb{Q}] = 2^n$$
> for some $n \geq 0$.
>
> Equivalently: $\alpha$ lies in a tower of quadratic extensions over $\mathbb{Q}$.

## Key Properties

1. Constructible numbers form a field
2. If $\alpha$ is constructible, so is $\sqrt{\alpha}$ (for $\alpha > 0$)
3. $[\mathbb{Q}(\alpha):\mathbb{Q}]$ must be a power of 2
4. In particular, if $[\mathbb{Q}(\alpha):\mathbb{Q}]$ is not a power of 2, then $\alpha$ is **not** constructible

## The Classical Problems

> [!warning] Three Impossible Constructions
> These ancient Greek problems are impossible with ruler and compass:
>
> **1. Doubling the Cube** (Delian Problem)
> - Task: Construct $\sqrt[3]{2}$ (side of cube with volume 2)
> - Why impossible: $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3 \neq 2^n$
>
> **2. Trisecting an Arbitrary Angle**
> - Task: Divide any angle into three equal parts
> - Why impossible: Trisecting $60°$ requires $\cos(20°)$, which has degree 3 over $\mathbb{Q}$
>
> **3. Squaring the Circle**
> - Task: Construct a square with area equal to a given circle
> - Why impossible: Requires $\sqrt{\pi}$, but $\pi$ is transcendental

## Constructible Regular Polygons

> [!abstract] Gauss-Wantzel Theorem
> A regular $n$-gon is constructible if and only if:
> $$n = 2^k p_1 p_2 \cdots p_m$$
> where each $p_i$ is a distinct **Fermat prime**: a prime of the form $2^{2^j} + 1$.
>
> Known Fermat primes: $3, 5, 17, 257, 65537$ (no others known!)

> [!example] Constructible and Non-Constructible Polygons
> | $n$ | Constructible? | Reason |
> |-----|----------------|--------|
> | 3 | Yes | Equilateral triangle |
> | 4 | Yes | Square |
> | 5 | Yes | Fermat prime |
> | 6 | Yes | $2 \times 3$ |
> | 7 | **No** | 7 is not Fermat |
> | 8 | Yes | $2^3$ |
> | 9 | **No** | $9 = 3^2$, repeated prime |
> | 10 | Yes | $2 \times 5$ |
> | 17 | Yes | Fermat prime (Gauss, age 19) |

## Why the Degree Must Be a Power of 2

> [!tip] The Geometry-Algebra Connection
> - Drawing lines/circles and finding intersections involves solving at most quadratic equations
> - Each construction step at most doubles the degree of the field extension
> - After $n$ steps: $[\text{field}:\mathbb{Q}] \leq 2^n$
> - So any constructible number has degree dividing some $2^n$

## Examples

> [!example] Example 1: $\sqrt{2}$ is Constructible
> - $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2 = 2^1$ ✓
> - Construction: Diagonal of unit square

> [!example] Example 2: $\sqrt{2 + \sqrt{3}}$ is Constructible
> - Tower: $\mathbb{Q} \subset \mathbb{Q}(\sqrt{3}) \subset \mathbb{Q}(\sqrt{3}, \sqrt{2+\sqrt{3}})$
> - Degree: $2 \times 2 = 4 = 2^2$ ✓

> [!example] Example 3: $\cos(20°)$ is Not Constructible
> - Minimal polynomial: $8x^3 - 6x - 1$
> - Degree: 3 ≠ power of 2 ✗
> - Therefore: cannot trisect $60°$

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
