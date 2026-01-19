---
title: Algebraic and Transcendental Elements
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Algebraic and Transcendental Elements

## Definitions

> [!info] Definition (Algebraic Element)
> Let $F \subseteq E$ be a field extension. An element $\alpha \in E$ is **algebraic over $F$** if there exists a nonzero polynomial $f(x) \in F[x]$ such that $f(\alpha) = 0$.

> [!info] Definition (Transcendental Element)
> An element $\alpha \in E$ is **transcendental over $F$** if it is not algebraic over $F$, i.e., no nonzero polynomial in $F[x]$ has $\alpha$ as a root.

## Intuition

- Algebraic elements are "constructible" from $F$ using polynomial equations
- Transcendental elements are "wild" - they escape all polynomial constraints
- Most real numbers are transcendental, but proving transcendence is difficult

## Key Properties

1. Every element of $F$ is algebraic over $F$ (root of $x - a$)
2. $\alpha$ is algebraic over $F$ iff $[F(\alpha):F] < \infty$
3. $\alpha$ is transcendental over $F$ iff $F(\alpha) \cong F(x)$ (rational functions)
4. The set of algebraic elements forms a field (the algebraic closure)
5. Algebraic over algebraic is algebraic (tower property)

## Examples

> [!example] Example 1: $\sqrt{2}$ over $\mathbb{Q}$
> $\sqrt{2}$ is algebraic over $\mathbb{Q}$:
> - It's a root of $x^2 - 2 \in \mathbb{Q}[x]$

> [!example] Example 2: $i$ over $\mathbb{R}$
> $i$ is algebraic over $\mathbb{R}$:
> - It's a root of $x^2 + 1 \in \mathbb{R}[x]$

> [!example] Example 3: $\pi$ over $\mathbb{Q}$
> $\pi$ is transcendental over $\mathbb{Q}$:
> - Proven by Lindemann (1882)
> - No polynomial with rational coefficients has $\pi$ as root

> [!example] Example 4: $e$ over $\mathbb{Q}$
> $e$ is transcendental over $\mathbb{Q}$:
> - Proven by Hermite (1873)

> [!example] Example 5: $x$ in $F(x)$
> The indeterminate $x$ is transcendental over $F$:
> - If $f(x) = 0$ for $f \in F[t]$, then $f = 0$

## Theorems

> [!abstract] Lindemann-Weierstrass Theorem
> If $\alpha_1, \ldots, \alpha_n$ are distinct algebraic numbers, then $e^{\alpha_1}, \ldots, e^{\alpha_n}$ are linearly independent over the algebraic numbers.
>
> *Corollary*: $e$ and $\pi$ are transcendental.

> [!abstract] Algebraic Closure Property
> If $\alpha$ is algebraic over $F$ and $\beta$ is algebraic over $F(\alpha)$, then $\beta$ is algebraic over $F$.

## The Algebraic Numbers $\overline{\mathbb{Q}}$

> [!info] Properties
> - $\overline{\mathbb{Q}}$ = set of all complex numbers algebraic over $\mathbb{Q}$
> - $\overline{\mathbb{Q}}$ is countable (polynomials over $\mathbb{Q}$ are countable)
> - $\overline{\mathbb{Q}}$ is algebraically closed
> - Most complex numbers are transcendental (uncountably many)

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
