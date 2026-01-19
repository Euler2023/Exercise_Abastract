---
title: Simple Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - classification
created: 2026-01-19
---

# Simple Groups

## Definition

> [!info] Definition
> A group $G$ is **simple** if:
> 1. $G \neq \{e\}$ (non-trivial)
> 2. The only normal subgroups of $G$ are $\{e\}$ and $G$ itself

Simple groups are the "atoms" of group theory—they cannot be broken down into smaller pieces via quotients.

## Key Properties

> [!abstract] Theorem (Characterization)
> A group $G$ is simple if and only if every non-trivial homomorphism $\phi: G \to H$ is injective.

**Proof**: If $G$ is simple and $\phi$ is non-trivial, then $\ker(\phi) \trianglelefteq G$ and $\ker(\phi) \neq G$, so $\ker(\phi) = \{e\}$.

### Basic Properties

- Every simple abelian group is cyclic of prime order
- Simple groups have no proper quotient groups
- A group is simple iff it has exactly two normal subgroups

## Classification of Finite Simple Groups

> [!success] Classification Theorem (CFSG)
> Every finite simple group is isomorphic to one of the following:
> 1. **Cyclic**: $\mathbb{Z}/p\mathbb{Z}$ for prime $p$
> 2. **Alternating**: $A_n$ for $n \geq 5$
> 3. **Groups of Lie type**: 16 infinite families
> 4. **Sporadic groups**: 26 exceptional groups

This theorem, completed around 2004, is one of the greatest achievements in mathematics. The proof spans thousands of pages across hundreds of papers.

### The Four Types

| Type | Examples | Count |
|------|----------|-------|
| Cyclic | $\mathbb{Z}_2, \mathbb{Z}_3, \mathbb{Z}_5, \ldots$ | Infinitely many |
| Alternating | $A_5, A_6, A_7, \ldots$ | Infinitely many |
| Lie type | $\text{PSL}_n(q)$, $\text{PSU}_n(q)$, $E_8(q)$, ... | 16 families |
| Sporadic | $M_{11}$, $M_{24}$, $\mathbb{M}$, ... | Exactly 26 |

## Examples

### Abelian Simple Groups

> [!example] Cyclic Groups of Prime Order
> $\mathbb{Z}/p\mathbb{Z}$ is simple for every prime $p$.
>
> **Proof**: By Lagrange's theorem, subgroups have order dividing $p$, so only $\{0\}$ and the whole group exist.

These are the **only** abelian simple groups.

### Alternating Groups

> [!example] $A_5$ - The Smallest Non-Abelian Simple Group
> The alternating group $A_5$ has order $60 = 2^2 \cdot 3 \cdot 5$.
>
> **Simplicity proof**: Conjugacy classes have sizes $1, 12, 12, 15, 20$.
> No union including $1$ divides $60$ except $\{1\}$ and all of $A_5$.

> [!abstract] Theorem
> $A_n$ is simple for all $n \geq 5$.
>
> **Key fact**: The 3-cycles generate $A_n$ and are all conjugate when $n \geq 5$.

**Note**: $A_4$ is NOT simple ($V_4 \trianglelefteq A_4$).

### Groups of Lie Type

> [!example] Projective Special Linear Groups
> $$\text{PSL}_n(q) = \text{SL}_n(\mathbb{F}_q) / Z(\text{SL}_n(\mathbb{F}_q))$$
>
> Simple for $n \geq 2$, except:
> - $\text{PSL}_2(\mathbb{F}_2) \cong S_3$ (not simple)
> - $\text{PSL}_2(\mathbb{F}_3) \cong A_4$ (not simple)

Important isomorphisms:
- $\text{PSL}_2(\mathbb{F}_4) \cong \text{PSL}_2(\mathbb{F}_5) \cong A_5$
- $\text{PSL}_2(\mathbb{F}_7) \cong \text{PSL}_3(\mathbb{F}_2)$ (order 168)

### Sporadic Groups

> [!example] The 26 Sporadic Groups
> | Group | Order | Discoverer |
> |-------|-------|------------|
> | $M_{11}$ | $7920$ | Mathieu (1861) |
> | $M_{12}$ | $95040$ | Mathieu (1861) |
> | $M_{22}$ | $443520$ | Mathieu (1873) |
> | $M_{23}$ | $10200960$ | Mathieu (1873) |
> | $M_{24}$ | $244823040$ | Mathieu (1873) |
> | $J_1$ | $175560$ | Janko (1965) |
> | $\vdots$ | $\vdots$ | $\vdots$ |
> | $\mathbb{M}$ | $\approx 8 \times 10^{53}$ | Fischer, Griess |

The **Monster group** $\mathbb{M}$ is the largest sporadic group, with order:
$$|\mathbb{M}| = 2^{46} \cdot 3^{20} \cdot 5^9 \cdot 7^6 \cdot 11^2 \cdot 13^3 \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41 \cdot 47 \cdot 59 \cdot 71$$

## Composition Series

> [!info] Definition (Composition Series)
> A **composition series** for a group $G$ is a chain:
> $$\{e\} = G_0 \triangleleft G_1 \triangleleft \cdots \triangleleft G_n = G$$
> where each quotient $G_{i+1}/G_i$ is simple.

> [!abstract] Jordan-Hölder Theorem
> Any two composition series of a finite group have the same length, and the same composition factors (up to permutation and isomorphism).

This justifies viewing simple groups as the building blocks of all finite groups.

### Example

> [!example] Composition Series of $S_4$
> $$\{e\} \triangleleft V_4 \triangleleft A_4 \triangleleft S_4$$
>
> Composition factors:
> - $V_4/\{e\} \cong V_4 \cong \mathbb{Z}_2 \times \mathbb{Z}_2$ (not simple, need refinement)
> - Refined: $\{e\} \triangleleft \mathbb{Z}_2 \triangleleft V_4 \triangleleft A_4 \triangleleft S_4$
> - Factors: $\mathbb{Z}_2, \mathbb{Z}_2, \mathbb{Z}_3, \mathbb{Z}_2$

## Non-Simple Groups

> [!warning] Common Non-Simple Groups
> - $\mathbb{Z}_4$: has normal subgroup $\{0, 2\}$
> - $S_n$ for $n \geq 3$: has $A_n \trianglelefteq S_n$
> - $A_4$: has $V_4 \trianglelefteq A_4$ (Klein four-group)
> - Any group with non-trivial center: $Z(G) \trianglelefteq G$

## Importance in Mathematics

### Galois Theory
- Simplicity of $A_n$ for $n \geq 5$ implies the general quintic is unsolvable by radicals
- Connection to the [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]

### Representation Theory
- Simple groups have rich representation theory
- The [[06 - Representation Theory/Concepts/Monster Group|Monster Group]] connects to modular forms via Monstrous Moonshine

### Group Actions
- Simple groups have highly transitive actions
- $A_n$ acts $(n-2)$-transitively on $n$ points

## Proving Simplicity

### General Strategies

1. **Counting argument**: Show no union of conjugacy classes (including $\{e\}$) has cardinality dividing $|G|$

2. **Iwasawa's Lemma**: For a primitive permutation group $G$ with point stabilizer $H$:
   - If $G = G'$ (perfect) and $H$ has a solvable normal subgroup $N$ with $G = \langle N^G \rangle$
   - Then $G$ is simple

3. **Order considerations**: Use Sylow theorems to constrain possible normal subgroups

### Example: $A_5$ is Simple

> [!example] Proof that $A_5$ is Simple
> Conjugacy classes in $A_5$ have sizes: $1, 12, 12, 15, 20$.
>
> A normal subgroup must be a union of conjugacy classes including $\{e\}$.
> Possible sizes: $1, 13, 13, 16, 21, 25, 25, 27, 28, 32, 33, 40, 45, 52, 60$.
>
> Only $1$ and $60$ divide $|A_5| = 60$. Thus $A_5$ is simple.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
- [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]
