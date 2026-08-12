---
title: Polynomial Discriminants
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - discriminant
created: 2026-08-12
---

# Polynomial Discriminants

## Definition

> [!info] Discriminant
> If a monic polynomial has roots $\alpha_1,\ldots,\alpha_n$, its discriminant is
> $$
> \operatorname{disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2.
> $$

## Intuition

The discriminant measures collisions among roots. It vanishes exactly when the polynomial has a repeated root. Its square root is alternating, so its behavior under Galois automorphisms detects whether the Galois group lies inside the alternating group.

## Key Properties

- It is symmetric in the roots and hence a polynomial in the coefficients.
- $\operatorname{disc}(f)=0$ iff $f$ and $f'$ have a common root.
- For monic degree $n$,
  $$
  \operatorname{disc}(f)=(-1)^{n(n-1)/2}\operatorname{Res}(f,f').
  $$
- For a real separable polynomial, the sign is $(-1)^r$, where $r$ is the number of nonreal conjugate pairs.
- For an irreducible polynomial over $F$, the discriminant is a square in $F$ iff its Galois group is contained in $A_n$.

## Examples

> [!example] Depressed cubic
> $$
> \operatorname{disc}(x^3+px+q)=-4p^3-27q^2.
> $$

> [!example] Quartic trinomial
> $$
> \operatorname{disc}(x^4+px+q)=256q^3-27p^4.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions and coefficient formulas are source material from [S1, Ch. 16, §2, printed pp. 479–482; exercises printed p. 506, PDF p. 518]. The exercise solutions linked above are independent derivations.
