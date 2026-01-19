---
title: Reduction mod p
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Reduction mod p

## Basic Idea

For a variety $X$ defined over $\mathbb{Q}$ (or a number field), we can "reduce" its defining equations modulo a prime $p$ to get a variety over $\mathbb{F}_p$.

## For Elliptic Curves

> [!info] Definition
> For $E: y^2 = x^3 + ax + b$ with $a, b \in \mathbb{Z}$, the **reduction mod $p$** is:
> $$\tilde{E}_p: y^2 = x^3 + \bar{a}x + \bar{b}$$
> over $\mathbb{F}_p$, where $\bar{a}, \bar{b}$ are $a, b$ mod $p$.

## Types of Reduction

| Type | Condition | $\tilde{E}_p$ | Terminology |
|------|-----------|---------------|-------------|
| Good | $p \nmid \Delta$ | Smooth elliptic curve | Good reduction |
| Multiplicative | $p \| \Delta$, $p \nmid c_4$ | Nodal cubic | Semistable |
| Additive | $p | \gcd(\Delta, c_4)$ | Cuspidal cubic | Unstable |

Here $\Delta$ is the discriminant and $c_4 = -48a$.

## Arithmetic Significance

### Good Reduction
- $\#\tilde{E}_p(\mathbb{F}_p) = p + 1 - a_p$ where $|a_p| \leq 2\sqrt{p}$
- The $a_p$ are Frobenius traces, appear in L-functions
- Galois representation is unramified at $p$

### Bad Reduction
- Multiplicative: $a_p = \pm 1$
- Additive: $a_p = 0$
- Bad primes divide the conductor $N$

## Models

> [!info] Definition (Minimal Model)
> A **minimal Weierstrass model** at $p$ minimizes the $p$-adic valuation of $\Delta$.

> [!info] Definition (Néron Model)
> The **Néron model** $\mathcal{E}/\mathbb{Z}_p$ is the "best" integral model:
> - Smooth group scheme
> - Universal property (extends morphisms)

## Reduction Map

> [!info] Definition
> For good reduction at $p$, there is a reduction map:
> $$\text{red}_p: E(\mathbb{Q}) \to \tilde{E}_p(\mathbb{F}_p)$$
> which is a group homomorphism.

The kernel $E_1(\mathbb{Q}_p) = \ker(\text{red}_p)$ consists of points with "good $p$-adic properties."

## For General Schemes

> [!info] Definition (Special Fiber)
> For a scheme $\mathcal{X}$ over $\mathbb{Z}$, the **special fiber** at $p$ is:
> $$\mathcal{X}_p = \mathcal{X} \times_{\mathbb{Z}} \mathbb{F}_p$$

For [[08 - Arithmetic Geometry/Concepts/Schemes|Spec($\mathbb{Z}$)]], each prime $p$ gives a point, and the fiber is the reduction mod $p$.

## Examples

> [!example] Example 1: $E: y^2 = x^3 - x$
> $\Delta = 64 = 2^6$
> - Good reduction for $p \neq 2$
> - Additive reduction at $p = 2$

> [!example] Example 2: $E: y^2 + y = x^3 - x^2$
> Conductor $N = 11$ (minimal)
> - Good reduction for $p \neq 11$
> - Multiplicative reduction at $p = 11$

> [!example] Example 3: Counting points
> $E: y^2 = x^3 + 1$ over $\mathbb{F}_7$:
> Points: $(0, \pm 1), (2, \pm 3), (6, 0), \mathcal{O}$
> $\#\tilde{E}_7(\mathbb{F}_7) = 7$, so $a_7 = 7 + 1 - 7 = 1$

## Serre-Tate Theory

> [!abstract] Theorem (Serre-Tate)
> Deformations of an elliptic curve over $\mathbb{F}_p$ are controlled by the deformation of its $p$-divisible group.

This connects reduction theory to $p$-adic geometry.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
