---
title: "Exercise R153: When a Half-Shifted Lattice Is an Ideal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 3, Ideals in Z[sqrt(-5)], Ex. 3.1, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise R153: When a Half-Shifted Lattice Is an Ideal

## Problem Statement

> [!question] Exercise 3.1
> Let $\alpha$ be an element of $R=\mathbb Z[\delta]$, $\delta=\sqrt{-5}$, and let $\gamma=\frac12(\alpha+\alpha\delta)$. Under what circumstances is the lattice with basis $(\alpha,\gamma)$ an ideal?

## Hints

> [!hint]- Hint 1
> First determine when $\gamma$ is actually an element of $R$.

> [!hint]- Hint 2
> Once $\gamma\in R$, express $\delta\alpha$ and $\delta\gamma$ as integer combinations of $\alpha$ and $\gamma$.

## Solution

> [!success]- Solution
> Write $\alpha=a+b\delta$ with $a,b\in\mathbb Z$. Then
>
> $$
> \gamma
> =\frac{\alpha(1+\delta)}2
> =\frac{a-5b}{2}+\frac{a+b}{2}\delta.
> $$
>
> Thus $\gamma\in R$ exactly when $a-5b$ and $a+b$ are both even. Modulo $2$ these conditions are equivalent, and they say
>
> $$
> a\equiv b\pmod2.
> $$
>
> Assume this parity condition and $\alpha\neq0$. Let $L=\mathbb Z\alpha+\mathbb Z\gamma$. Since $R=\mathbb Z[\delta]$, it is enough to check that $L$ is stable under multiplication by $\delta$. From $2\gamma=\alpha+\alpha\delta$ we get
>
> $$
> \delta\alpha=2\gamma-\alpha,
> $$
>
> and, using $\delta^2=-5$,
>
> $$
> \delta\gamma
> =\frac{\alpha\delta-5\alpha}{2}
> =\gamma-3\alpha.
> $$
>
> Both belong to $L$, so $L$ is an ideal. Conversely, an ideal of $R$ must be a subset of $R$, so the parity condition is necessary. Therefore
>
> $$
> \boxed{(\alpha,\gamma)\text{ is an ideal lattice}
> \iff \alpha=a+b\delta\neq0\text{ with }a\equiv b\pmod2.}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because closure under multiplication by $\delta$ is the decisive ideal test; the lattice basis supplies the additive structure.
- **Degenerate boundary:** The word “basis” requires $\alpha\neq0$; otherwise both proposed basis elements vanish.
- **Source status:** The problem is from [S1, Ch. 13, §13.3, Ex. 3.1, printed p. 408, PDF p. 420]. The parity criterion and closure computation are independent.
