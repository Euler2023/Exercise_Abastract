---
title: Faltings' Theorem
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - theorem
created: 2026-01-19
---

# Faltings' Theorem

## Statement

> [!abstract] Theorem (Faltings, 1983)
> Let $C$ be a smooth projective curve of genus $g \geq 2$ over a number field $K$. Then $C(K)$ is **finite**.

This was formerly known as the **Mordell Conjecture** (1922).

## Significance

This is one of the most important finiteness results in Diophantine geometry:
- Genus 0 curves: infinitely many points (if any)
- Genus 1 curves: finitely generated group (Mordell-Weil)
- Genus $\geq 2$ curves: **finitely many points** (Faltings)

## Applications

> [!example] Fermat Curves
> The curve $x^n + y^n = z^n$ (projective) has genus $g = \frac{(n-1)(n-2)}{2}$.
>
> For $n \geq 4$: $g \geq 3$, so finitely many rational points by Faltings.
>
> (FLT says there are NO non-trivial solutions, which is stronger.)

> [!example] Hyperelliptic Curves
> $y^2 = f(x)$ with $\deg f \geq 5$ has genus $\geq 2$, so finitely many rational points.

## Proof Ideas

Faltings' proof uses sophisticated techniques:

1. **Arakelov theory**: Heights on abelian varieties with integral structure
2. **Moduli of abelian varieties**: The variety parametrizing abelian varieties
3. **Isogeny estimates**: Bounds on isogenies between abelian varieties
4. **Shafarevich conjecture**: Finiteness of abelian varieties with good reduction outside $S$

## Related Results

> [!abstract] Shafarevich Conjecture (Faltings)
> There are only finitely many abelian varieties of given dimension over $K$ with good reduction outside a finite set $S$.

> [!abstract] Mordell-Lang Conjecture (Faltings)
> For abelian variety $A$ and subvariety $X \subsetneq A$, the set $X \cap \Gamma$ is a finite union of cosets of subgroups, for any finitely generated subgroup $\Gamma \subseteq A(\bar{K})$.

## Effective Bounds?

> [!warning] Non-effective
> Faltings' proof gives no explicit bound on $\#C(K)$!

**Effective results** (with bounds) are known in special cases:
- Coleman's method for curves with good reduction
- Chabauty's method when $\text{rank } J(K) < g$
- Kim's non-abelian Chabauty

## Example Computations

> [!example] $y^2 = x^5 - x$
> Genus 2 curve. By explicit computation:
> $$C(\mathbb{Q}) = \{\infty_+, \infty_-, (0,0), (1,0), (-1,0)\}$$
> Exactly 5 rational points.

> [!example] $x^4 + y^4 = 1$
> Genus 3 curve. The only rational points are:
> $$(\pm 1, 0), (0, \pm 1)$$
> (4 points, by explicit computation)

## Higher Dimensional Analogue

> [!abstract] Lang's Conjecture
> For a variety $X$ of general type over a number field $K$:
> $$X(K) \text{ is not Zariski dense}$$

This is wide open in general!

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]
- [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]
