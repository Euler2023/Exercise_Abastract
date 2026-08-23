---
title: Abelian Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, §2.2, printed pp. 40–43, PDF pp. 52–55"
source_status: partially-verified
status: not-started
---

# Abelian Groups

## Definition

> [!info] Definition (Abelian Group)
> A group $(G, \cdot)$ is **abelian** (or commutative) if:
> $$ab = ba \quad \text{for all } a, b \in G$$

## Notation

- Abelian groups often use additive notation: $(G, +)$
- Identity written as $0$ instead of $e$
- Inverse of $a$ written as $-a$ instead of $a^{-1}$
- $na = a + a + \cdots + a$ ($n$ times)

## Key Properties

1. Every [[01 - Group Theory/Concepts/Subgroups|subgroup]] of an abelian group is normal
2. Every quotient of an abelian group is abelian
3. Direct product of abelian groups is abelian
4. The center $Z(G) = G$ for abelian groups

## Classification Theorems

> [!abstract] Fundamental Theorem of Finitely Generated Abelian Groups
> Every finitely generated abelian group $G$ is isomorphic to:
> $$G \cong \mathbb{Z}^r \oplus \mathbb{Z}/n_1\mathbb{Z} \oplus \mathbb{Z}/n_2\mathbb{Z} \oplus \cdots \oplus \mathbb{Z}/n_k\mathbb{Z}$$
> where $r \geq 0$ and $n_1 | n_2 | \cdots | n_k$ (invariant factors).

> [!abstract] Primary Decomposition
> Alternatively:
> $$G \cong \mathbb{Z}^r \oplus \bigoplus_{p \text{ prime}} \bigoplus_i \mathbb{Z}/p^{e_{p,i}}\mathbb{Z}$$
> (elementary divisors form)

## Examples

> [!example] Example 1: $\mathbb{Z}$
> Infinite cyclic group, free abelian of rank 1.

> [!example] Example 2: $\mathbb{Z}/n\mathbb{Z}$
> Cyclic group of order $n$.

> [!example] Example 3: $\mathbb{Q}/\mathbb{Z}$
> Torsion abelian group (every element has finite order).

> [!example] Example 4: $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> Klein four-group $V_4$, not cyclic.

## Non-Abelian Examples

> [!warning] Non-Example
> $S_3$, $D_n$ ($n \geq 3$), $GL_n(F)$ ($n \geq 2$) are not abelian.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[Module Definition]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.
