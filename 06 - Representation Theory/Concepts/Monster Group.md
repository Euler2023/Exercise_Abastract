---
title: Monster Group
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - sporadic-groups
  - group-theory
  - moonshine
created: 2026-01-19
---

# Monster Group

## Introduction

The **Monster group** $\mathbb{M}$ (also denoted $M$, $F_1$, or $M_1$) is the largest of the 26 sporadic simple groups. It was predicted by Bernd Fischer and Robert Griess in 1973 and constructed by Griess in 1982.

## Basic Properties

> [!info] Definition
> The **Monster group** $\mathbb{M}$ is the largest sporadic simple group, with order:
> $$|\mathbb{M}| = 2^{46} \cdot 3^{20} \cdot 5^9 \cdot 7^6 \cdot 11^2 \cdot 13^3 \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41 \cdot 47 \cdot 59 \cdot 71$$
> $$\approx 8.08 \times 10^{53}$$

### Key Facts

| Property | Value |
|----------|-------|
| Order | $\approx 8 \times 10^{53}$ |
| Number of conjugacy classes | 194 |
| Smallest faithful permutation degree | $\approx 10^{20}$ |
| Smallest faithful matrix representation | 196883 |
| Number of prime divisors of order | 15 |

## Representations

### Smallest Representations

> [!info] Irreducible Representations
> The smallest degrees of complex irreducible representations:
>
> | Degree | Multiplicity | Notes |
> |--------|--------------|-------|
> | 1 | 1 | Trivial |
> | 196883 | 1 | Smallest non-trivial |
> | 21296876 | 1 | Second smallest |
> | 842609326 | 1 | Third smallest |

The number $196883$ is crucial for monstrous moonshine.

### Griess Algebra

> [!info] Theorem (Griess, 1982)
> There exists a commutative non-associative algebra $B$ of dimension 196884 such that $\text{Aut}(B) = \mathbb{M}$.

The Griess algebra $B$ decomposes as $\mathbb{M}$-modules:
$$B = \mathbb{C} \oplus V_{196883}$$

The product structure satisfies certain axioms related to the Norton inequality.

## Construction Methods

### Griess Construction (1982)

Griess constructed $\mathbb{M}$ as the automorphism group of the Griess algebra, a 196884-dimensional algebra with a carefully designed multiplication.

### Tits Construction

Jacques Tits gave an alternative presentation in terms of the $Y$-group diagram:

```
        Y_{555}
       /   |   \
      /    |    \
   Co_1  2.B   3.Fi_24
```

### Conway's Construction

Using the Leech lattice:
1. Start with $\text{Co}_0 = \text{Aut}(\Lambda_{24})$
2. Extend via a certain 2-group
3. The Monster sits inside a larger group constructed this way

## Subgroup Structure

### Maximal Subgroups

The Monster has exactly 44 conjugacy classes of maximal subgroups:


> [!example] Notable Maximal Subgroups
| Subgroup | Description |
|----------|-------------|
| $2.\text{B}$ | Double cover of Baby Monster |
| $2^{1+24}.\text{Co}_1$ | 2-local subgroup (centralizer of 2A involution) |
| $3.\text{Fi}_{24}'$ | Triple cover of the derived Fischer group |
| $2^2.{}^2\text{E}_6(2):S_3$ | Involves the exceptional group of Lie type |
| $\text{M}_{24}$ | The largest Mathieu group |



### Involvement of Other Sporadic Groups

20 of the 26 sporadic groups are involved in $\mathbb{M}$ (as subquotients):

**Inside the Monster ("Happy Family"):**
- Baby Monster $\text{B}$
- Fischer groups $\text{Fi}_{24}'$, $\text{Fi}_{23}$, $\text{Fi}_{22}$
- Conway groups $\text{Co}_1$, $\text{Co}_2$, $\text{Co}_3$
- Mathieu groups $M_{24}$, $M_{23}$, $M_{22}$, $M_{12}$, $M_{11}$
- Janko groups $J_1$, $J_2$
- Held group $\text{He}$
- Harada-Norton group $\text{HN}$
- Thompson group $\text{Th}$
- And more...

**The "Pariahs" (not in Monster):**
$J_1$, $J_3$, $J_4$, $\text{O'N}$, $\text{Ru}$, $\text{Ly}$

## Conjugacy Classes

> [!info] Structure
> $\mathbb{M}$ has 194 conjugacy classes, named by their order:
> - Class 1A: identity
> - Class 2A, 2B: elements of order 2
> - ...up to class 119A, 119B

### Important Classes for Moonshine

| Class | Order | Centralizer | McKay-Thompson series |
|-------|-------|-------------|----------------------|
| 1A | 1 | $\mathbb{M}$ | $j(\tau) - 744$ |
| 2A | 2 | $2.\text{B}$ | Related to $j(\tau/2)$ |
| 2B | 2 | $2^{1+24}.\text{Co}_1$ | Different Hauptmodul |
| 3A | 3 | $3.\text{Fi}_{24}$ | Cube root of $j$ |

## Connection to Moonshine

### McKay's Numerology

The first few coefficients of $j(\tau) - 744$:
$$q^{-1} + 196884q + 21493760q^2 + 864299970q^3 + \cdots$$

Decompose into Monster irreducibles:
- $196884 = 1 + 196883$
- $21493760 = 1 + 196883 + 21296876$
- $864299970 = 2 \cdot 1 + 2 \cdot 196883 + 21296876 + 842609326$

### The Moonshine Module

> [!abstract] Theorem
> There exists a graded $\mathbb{M}$-module $V^\natural = \bigoplus_{n \geq -1} V_n$ such that:
> $$\sum_{n \geq -1} (\dim V_n) q^n = j(\tau) - 744$$
>
> and $\text{Aut}(V^\natural) = \mathbb{M}$.

## The Monster in Physics

### String Theory

The Monster may be relevant to:
- Conformal field theory with $c = 24$
- BPS states in certain string compactifications
- Quantum gravity in $\text{AdS}_3$

### Witten's Conjecture

> [!tip] Conjecture (Witten, 2007)
> There exists a 3D gravity theory whose partition function is related to the $j$-function, with the Monster as a symmetry group.

This is connected to the idea of "Monster CFT" = chiral half of a hypothetical extremal CFT.

## Character Table

The full character table of $\mathbb{M}$ is a $194 \times 194$ matrix. Some entries:

| Class | $\chi_1$ | $\chi_{196883}$ | $\chi_{21296876}$ |
|-------|----------|-----------------|-------------------|
| 1A | 1 | 196883 | 21296876 |
| 2A | 1 | 4371 | 91884 |
| 2B | 1 | 275 | -2324 |
| 3A | 1 | 782 | 2876 |

The full table was computed and is available in the ATLAS of Finite Groups.

## Computational Aspects

> [!warning] Computational Challenges
> - No "natural" permutation representation (smallest has degree $\approx 10^{20}$)
> - Matrix calculations in dimension 196883 are difficult
> - Most properties proved theoretically, not computationally verified

### Known Computations

- Character table: Complete
- Maximal subgroups: All 44 classes known
- Subgroup lattice: Partially known

## Historical Notes

- **1973**: Fischer and Griess predict existence
- **1980**: Griess announces construction
- **1982**: Griess publishes full construction ("The Friendly Giant")
- **1988**: Frenkel-Lepowsky-Meurman construct moonshine module
- **1992**: Borcherds proves moonshine conjecture

## Why "Monster"?

The name comes from:
1. Its enormous size ($\approx 10^{54}$)
2. The complexity of its structure
3. John Conway's flair for naming

Alternative names: "Friendly Giant" (Griess's name), "$F_1$" (Fischer's notation).

## Related Concepts

- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[06 - Representation Theory/Concepts/Vertex Operator Algebras|Vertex Operator Algebras]]
- [[01 - Group Theory/Concepts/Sporadic Groups|Sporadic Groups]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
