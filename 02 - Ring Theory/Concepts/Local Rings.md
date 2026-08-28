---
title: Local Rings
aliases:
  - Local Ring
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - local-rings
created: 2026-08-28
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, §4, printed p. 110, PDF p. 125"
---

# Local Rings

## Definition

> [!info] Definition
> A commutative ring $A$ is **local** if it has a unique maximal ideal $\mathfrak m$. The residue field is $A/\mathfrak m$.

## Intuition

A local ring separates its elements into two classes: the units, which are visible everywhere near the chosen point or prime, and the nonunits, which form the single maximal ideal. Localization at a prime produces the basic example by turning every element outside that prime into a unit.

## Key Properties

- If $x\notin\mathfrak m$, then $(x)$ is not contained in the unique maximal ideal. It therefore cannot be proper, so $x$ is a unit.
- The set of nonunits is exactly $\mathfrak m$.
- Conversely, if the nonunits of a commutative ring form an ideal, that ideal is the unique maximal ideal.
- If $I\subsetneq A$ and $A$ is local, then $A/I$ is local with maximal ideal $\mathfrak m/I$.
- For a prime ideal $\mathfrak p\triangleleft A$, the localization $A_{\mathfrak p}$ is local with maximal ideal $\mathfrak pA_{\mathfrak p}$.

## Examples

> [!example] Fields
> A field is local: its unique maximal ideal is $(0)$.

> [!example] Localization of the integers
> The ring
>
> $$
> \mathbb Z_{(p)}=\left\{\frac ab:p\nmid b\right\}
> $$
>
> is local with maximal ideal $p\mathbb Z_{(p)}$.

> [!example] A nonexample
> If $F$ is a field, then $F\times F$ is not local because $F\times0$ and $0\times F$ are distinct maximal ideals.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang's definition, the unit test, and the prime-localization example were visually checked at [S2, Ch. II, §4, printed p. 110, PDF p. 125]. The quotient and localization proofs are independently supplied in Exercises R207 and R208.

