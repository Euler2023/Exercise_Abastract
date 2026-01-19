---
title: Algebraic Varieties
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
---

# Algebraic Varieties

## Definition

> [!info] Definition (Affine Algebraic Set)
> An **affine algebraic set** over a field $K$ is the set of common zeros of polynomials:
> $$V(S) = \{(a_1, \ldots, a_n) \in K^n : f(a_1, \ldots, a_n) = 0 \text{ for all } f \in S\}$$
> for some $S \subseteq K[x_1, \ldots, x_n]$.

> [!info] Definition (Algebraic Variety)
> An **algebraic variety** is an irreducible algebraic set, i.e., it cannot be written as a union of two proper closed subsets.

## Affine vs Projective

| Type | Ambient Space | Polynomials | Compactness |
|------|---------------|-------------|-------------|
| Affine | $\mathbb{A}^n = K^n$ | Any polynomials | Not compact |
| Projective | $\mathbb{P}^n$ | Homogeneous | Compact |

> [!info] Definition (Projective Variety)
> A **projective variety** is the zero set of homogeneous polynomials in projective space $\mathbb{P}^n$.

## The Coordinate Ring

> [!info] Definition (Coordinate Ring)
> For an affine variety $V \subseteq \mathbb{A}^n$:
> $$K[V] = K[x_1, \ldots, x_n]/I(V)$$
> where $I(V) = \{f \in K[x_1, \ldots, x_n] : f|_V = 0\}$.

## Dimension

> [!info] Definition
> The **dimension** of a variety $V$ is:
> - The transcendence degree of its function field over $K$
> - The length of the longest chain of irreducible closed subsets

| Dimension | Name | Example |
|-----------|------|---------|
| 0 | Points | $V(x^2 + 1) \subset \mathbb{A}^1_\mathbb{R}$ |
| 1 | Curves | Elliptic curves, $V(y^2 - x^3 - x)$ |
| 2 | Surfaces | $V(x^2 + y^2 + z^2 - 1)$ |
| $n$ | $n$-folds | ... |

## Smoothness

> [!info] Definition (Smooth/Nonsingular)
> A point $P$ on variety $V = V(f_1, \ldots, f_m) \subseteq \mathbb{A}^n$ is **smooth** if the Jacobian matrix:
> $$\left(\frac{\partial f_i}{\partial x_j}(P)\right)$$
> has rank $n - \dim V$.

A variety is **smooth** (or **nonsingular**) if all its points are smooth.

## Examples

> [!example] Example 1: Elliptic Curve
> $E: y^2 = x^3 + ax + b$ is a smooth curve (variety of dimension 1) when $4a^3 + 27b^2 \neq 0$.

> [!example] Example 2: Conic
> $C: x^2 + y^2 = 1$ is a smooth curve in $\mathbb{A}^2$.

> [!example] Example 3: Singular variety
> $V: y^2 = x^3$ (cuspidal cubic) is singular at $(0,0)$.

> [!example] Example 4: Projective line
> $\mathbb{P}^1 = \{[x:y] : (x,y) \neq (0,0)\}/\sim$ is the simplest projective variety.

## Varieties over Different Fields

In arithmetic geometry, the base field matters critically:
- $V(\mathbb{C})$: all geometric points
- $V(\mathbb{R})$: real points
- $V(\mathbb{Q})$: **rational points** (the central object of study!)
- $V(\mathbb{F}_p)$: points over finite fields

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
