---
title: Faltings' Theorem
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - theorem
created: 2026-01-19
source: "Jürgen Neukirch, Algebraic Number Theory, Ch. III, §2, printed p. 207, PDF p. 226"
source_status: partially-verified
status: not-started
---

# Faltings' Theorem

## Statement

> [!abstract] Theorem (Faltings, 1983)
> Let $C$ be a smooth projective geometrically integral curve of genus $g \geq 2$ over a number field $K$. Then $C(K)$ is **finite**.

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
> If $f$ is squarefree and $\deg f\geq 5$, the smooth projective model of $y^2=f(x)$ has genus at least $2$, so it has finitely many rational points.

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
> For an abelian variety $A$ in characteristic $0$, a closed subvariety $X\subseteq A$, and a finitely generated subgroup $\Gamma\subseteq A(\bar K)$, the intersection $X(\bar K)\cap\Gamma$ is a finite union of cosets of subgroups of $\Gamma$.

## Effective Bounds?

> [!warning] Non-effective
> Faltings' proof gives no explicit bound on $\#C(K)$!

**Effective results** (with bounds) are known in special cases:
- Coleman's method for curves with good reduction
- Chabauty's method when $\text{rank } J(K) < g$
- Kim's non-abelian Chabauty

## Higher Dimensional Analogue

> [!abstract] Lang's Conjecture
> For a variety $X$ of general type over a number field $K$:
> $$
> X(K) \text{ is not Zariski dense}
> $$

This is wide open in general!

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]
- [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Neukirch states the Mordell conjecture in the form that a genus-$g>1$ algebraic equation over a number field has only finitely many solutions in that field, and explains that Faltings' proof proceeds from the Shafarevich finiteness result for curves with prescribed bad reduction. This verifies the core finiteness statement, not a proof. The proof-idea list, the abelian-variety Shafarevich formulation, Mordell–Lang, effectivity claims, Chabauty variants, and Lang's conjecture remain external inputs. Lang's *Algebraic Number Theory*, Ch. VIII, §5, printed pp. 170–172, PDF pp. 179–181, uses the same heading “Faltings' finiteness theorem” for a different theorem about semisimple $\ell$-adic representations; it is not evidence for the curve theorem recorded here.
