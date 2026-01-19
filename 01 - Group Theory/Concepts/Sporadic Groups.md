---
title: Sporadic Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - classification
  - simple-groups
created: 2026-01-19
---

# Sporadic Groups

## Introduction

> [!info] Definition
> The **sporadic groups** are the 26 finite simple groups that do not fit into any infinite family in the Classification of Finite Simple Groups.

They are the "exceptional" simple groups—isolated examples that arise for specific reasons rather than as part of a systematic pattern.

## The Classification Context

The Classification of Finite Simple Groups states every finite simple group is:

| Type | Description | Count |
|------|-------------|-------|
| Cyclic | $\mathbb{Z}/p\mathbb{Z}$ for prime $p$ | $\infty$ |
| Alternating | $A_n$ for $n \geq 5$ | $\infty$ |
| Lie type | Classical and exceptional groups over finite fields | 16 families |
| **Sporadic** | 26 exceptional groups | **26** |

## The 26 Sporadic Groups

### Complete List

| # | Name | Symbol | Order | Discovered |
|---|------|--------|-------|------------|
| 1 | Mathieu 11 | $M_{11}$ | $7920 = 2^4 \cdot 3^2 \cdot 5 \cdot 11$ | 1861 |
| 2 | Mathieu 12 | $M_{12}$ | $95040 = 2^6 \cdot 3^3 \cdot 5 \cdot 11$ | 1861 |
| 3 | Mathieu 22 | $M_{22}$ | $443520 = 2^7 \cdot 3^2 \cdot 5 \cdot 7 \cdot 11$ | 1873 |
| 4 | Mathieu 23 | $M_{23}$ | $10200960 = 2^7 \cdot 3^2 \cdot 5 \cdot 7 \cdot 11 \cdot 23$ | 1873 |
| 5 | Mathieu 24 | $M_{24}$ | $244823040 = 2^{10} \cdot 3^3 \cdot 5 \cdot 7 \cdot 11 \cdot 23$ | 1873 |
| 6 | Janko 1 | $J_1$ | $175560 = 2^3 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 19$ | 1965 |
| 7 | Janko 2 | $J_2$ (HJ) | $604800 = 2^7 \cdot 3^3 \cdot 5^2 \cdot 7$ | 1968 |
| 8 | Janko 3 | $J_3$ | $50232960 = 2^7 \cdot 3^5 \cdot 5 \cdot 17 \cdot 19$ | 1968 |
| 9 | Janko 4 | $J_4$ | $86775571046077562880$ | 1975 |
| 10 | Conway 1 | $\text{Co}_1$ | $4157776806543360000$ | 1968 |
| 11 | Conway 2 | $\text{Co}_2$ | $42305421312000$ | 1968 |
| 12 | Conway 3 | $\text{Co}_3$ | $495766656000$ | 1968 |
| 13 | Fischer 22 | $\text{Fi}_{22}$ | $64561751654400$ | 1971 |
| 14 | Fischer 23 | $\text{Fi}_{23}$ | $4089470473293004800$ | 1971 |
| 15 | Fischer 24' | $\text{Fi}_{24}'$ | $1255205709190661721292800$ | 1971 |
| 16 | Higman-Sims | $\text{HS}$ | $44352000 = 2^9 \cdot 3^2 \cdot 5^3 \cdot 7 \cdot 11$ | 1968 |
| 17 | McLaughlin | $\text{McL}$ | $898128000 = 2^7 \cdot 3^6 \cdot 5^3 \cdot 7 \cdot 11$ | 1969 |
| 18 | Held | $\text{He}$ | $4030387200 = 2^{10} \cdot 3^3 \cdot 5^2 \cdot 7^3 \cdot 17$ | 1969 |
| 19 | Rudvalis | $\text{Ru}$ | $145926144000 = 2^{14} \cdot 3^3 \cdot 5^3 \cdot 7 \cdot 13 \cdot 29$ | 1972 |
| 20 | Suzuki | $\text{Suz}$ | $448345497600 = 2^{13} \cdot 3^7 \cdot 5^2 \cdot 7 \cdot 11 \cdot 13$ | 1969 |
| 21 | O'Nan | $\text{O'N}$ | $460815505920 = 2^9 \cdot 3^4 \cdot 5 \cdot 7^3 \cdot 11 \cdot 19 \cdot 31$ | 1976 |
| 22 | Harada-Norton | $\text{HN}$ | $273030912000000 = 2^{14} \cdot 3^6 \cdot 5^6 \cdot 7 \cdot 11 \cdot 19$ | 1976 |
| 23 | Lyons | $\text{Ly}$ | $51765179004000000 = 2^8 \cdot 3^7 \cdot 5^6 \cdot 7 \cdot 11 \cdot 31 \cdot 37 \cdot 67$ | 1972 |
| 24 | Thompson | $\text{Th}$ | $90745943887872000 = 2^{15} \cdot 3^{10} \cdot 5^3 \cdot 7^2 \cdot 13 \cdot 19 \cdot 31$ | 1976 |
| 25 | Baby Monster | $\mathbb{B}$ | $4154781481226426191177580544000000$ | 1977 |
| 26 | **Monster** | $\mathbb{M}$ | $\approx 8.08 \times 10^{53}$ | 1973 |

## The Happy Family and Pariahs

> [!info] The Happy Family
> 20 of the 26 sporadic groups are subquotients of the **Monster** $\mathbb{M}$. These are called the **Happy Family**.

> [!warning] The Pariahs
> The 6 sporadic groups NOT involved in the Monster are called **Pariahs**:
> $$J_1, J_3, J_4, \text{Ly}, \text{O'N}, \text{Ru}$$

```
                    Monster (M)
                       │
        ┌──────────────┴──────────────┐
        │                             │
   Baby Monster (B)              Fi₂₄'
        │                             │
   ┌────┴────┐                   ┌────┴────┐
  Co₁      Th                  Fi₂₃      ...
   │                             │
  ...                          Fi₂₂
```

## The Mathieu Groups

> [!example] The Five Mathieu Groups (1861-1873)
> The first sporadic groups discovered, arising from multiply transitive permutation groups.
>
> | Group | Degree | Transitivity |
> |-------|--------|--------------|
> | $M_{11}$ | 11 | 4-transitive |
> | $M_{12}$ | 12 | 5-transitive |
> | $M_{22}$ | 22 | 3-transitive |
> | $M_{23}$ | 23 | 4-transitive |
> | $M_{24}$ | 24 | 5-transitive |

**Remarkable fact**: $M_{12}$ and $M_{24}$ are the only 5-transitive groups other than $S_n$ and $A_n$.

### Connection to Codes and Designs

- $M_{24}$ is the automorphism group of the **binary Golay code** $\mathcal{G}_{24}$
- $M_{12}$ is the automorphism group of the **ternary Golay code** $\mathcal{G}_{12}$
- $M_{24}$ acts on the **Steiner system** $S(5, 8, 24)$

## The Conway Groups

> [!example] The Three Conway Groups (1968)
> Discovered by John Conway as automorphisms of the **Leech lattice** $\Lambda_{24}$.
>
> $$\text{Co}_0 = \text{Aut}(\Lambda_{24})$$
>
> - $\text{Co}_1 = \text{Co}_0 / \{\pm 1\}$ (simple)
> - $\text{Co}_2$ = stabilizer of a type-2 vector
> - $\text{Co}_3$ = stabilizer of a type-3 vector

The Leech lattice is the unique 24-dimensional even unimodular lattice with no roots.

## The Fischer Groups

> [!example] The Three Fischer Groups (1971)
> Discovered by Bernd Fischer via **3-transposition groups**.
>
> A group generated by a conjugacy class of involutions where any two have product of order 1, 2, or 3.
>
> | Group | Description |
> |-------|-------------|
> | $\text{Fi}_{22}$ | 3-transposition group |
> | $\text{Fi}_{23}$ | 3-transposition group |
> | $\text{Fi}_{24}'$ | Derived subgroup of a 3-transposition group |

## The Monster Group

> [!success] The Monster $\mathbb{M}$
> The largest sporadic group, with order:
> $$|\mathbb{M}| = 2^{46} \cdot 3^{20} \cdot 5^9 \cdot 7^6 \cdot 11^2 \cdot 13^3 \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41 \cdot 47 \cdot 59 \cdot 71$$
>
> This is approximately $8.08 \times 10^{53}$.

**Key Properties**:
- Predicted by Fischer and Griess (1973)
- Constructed by Griess (1982) as automorphisms of a 196884-dimensional algebra
- Connected to modular forms via **Monstrous Moonshine**

See [[06 - Representation Theory/Concepts/Monster Group|Monster Group]] for representation-theoretic aspects.

## Discovery Methods

### How Were They Found?

| Method | Groups Found |
|--------|--------------|
| Permutation groups | $M_{11}, M_{12}, M_{22}, M_{23}, M_{24}$ |
| Centralizers of involutions | $J_1, J_2, J_3, J_4$, many others |
| Lattice automorphisms | $\text{Co}_1, \text{Co}_2, \text{Co}_3$ |
| 3-transposition groups | $\text{Fi}_{22}, \text{Fi}_{23}, \text{Fi}_{24}'$ |
| Subgroups of Monster | Much of the Happy Family |

### The "Sporadic" Era (1965-1981)

> [!info] Timeline
> - **1861-1873**: Mathieu discovers 5 groups
> - **1965**: Janko discovers $J_1$ (first new sporadic in 90 years!)
> - **1965-1975**: 21 more sporadic groups discovered
> - **1973**: Monster predicted
> - **1980**: Classification announced complete
> - **1982**: Monster constructed (Griess)
> - **2004**: Classification proof gaps filled

## Properties and Structure

### Outer Automorphisms

Most sporadic groups have small or trivial outer automorphism groups:

| Group | $|\text{Out}(G)|$ |
|-------|-------------------|
| $\mathbb{M}$ | 1 |
| $\mathbb{B}$ | 1 |
| $M_{12}$ | 2 |
| $M_{22}$ | 2 |
| $J_2$ | 2 |

### Schur Multipliers

The Schur multiplier $H_2(G, \mathbb{Z})$ measures central extensions:

| Group | Schur Multiplier |
|-------|------------------|
| $\mathbb{M}$ | 1 |
| $M_{24}$ | 1 |
| $M_{22}$ | $\mathbb{Z}_{12}$ |
| $\text{Suz}$ | $\mathbb{Z}_6$ |

## Connections to Other Mathematics

### Coding Theory
- $M_{24} = \text{Aut}(\mathcal{G}_{24})$ (Golay code)
- Connection to error-correcting codes

### Lattices
- $\text{Co}_0 = \text{Aut}(\Lambda_{24})$ (Leech lattice)
- Connection to sphere packing

### Modular Forms
- Monstrous Moonshine: $j(\tau) - 744 = \sum_{n \geq -1} c_n q^n$ where $c_n$ are dimensions of Monster representations
- See [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]

### Number Theory
- All 26 sporadic groups are Galois groups over $\mathbb{Q}$
- See [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]

### Vertex Operator Algebras
- Monster is the automorphism group of the Moonshine module $V^\natural$
- See [[06 - Representation Theory/Concepts/Vertex Operator Algebras|Vertex Operator Algebras]]

## Why Only 26?

> [!abstract] The Deep Question
> Why are there exactly 26 sporadic groups? Is this:
> - A fundamental constant of mathematics?
> - An accident of the classification?
> - Explained by some deeper theory?

No satisfying conceptual explanation exists. The number 26 emerges from the massive classification proof, not from any simple principle.

## Summary by Size

| Range | Groups |
|-------|--------|
| $< 10^5$ | $M_{11}$, $J_1$ |
| $10^5 - 10^7$ | $M_{12}$, $M_{22}$, $J_2$ |
| $10^7 - 10^{10}$ | $M_{23}$, $M_{24}$, $J_3$, $\text{HS}$, $\text{McL}$, $\text{He}$ |
| $10^{10} - 10^{20}$ | $\text{Co}_2$, $\text{Co}_3$, $\text{Suz}$, $\text{Fi}_{22}$, $\text{Ru}$, $\text{O'N}$, $\text{HN}$ |
| $> 10^{20}$ | $\text{Co}_1$, $\text{Fi}_{23}$, $\text{Fi}_{24}'$, $J_4$, $\text{Ly}$, $\text{Th}$, $\mathbb{B}$, $\mathbb{M}$ |

## Related Concepts

- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]
