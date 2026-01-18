---
title: Group Definition
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Group Definition

## Definition

> [!info] Definition (Group)
> A **group** is a pair $(G, \cdot)$ where $G$ is a non-empty set and $\cdot: G \times G \to G$ is a binary operation satisfying:
>
> 1. **Closure**: $\forall a, b \in G$, $a \cdot b \in G$
> 2. **Associativity**: $\forall a, b, c \in G$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
> 3. **Identity**: $\exists e \in G$ such that $\forall a \in G$, $e \cdot a = a \cdot e = a$
> 4. **Inverse**: $\forall a \in G$, $\exists a^{-1} \in G$ such that $a \cdot a^{-1} = a^{-1} \cdot a = e$

## Abelian Groups

> [!info] Definition (Abelian Group)
> A group $(G, \cdot)$ is **abelian** (or commutative) if additionally:
> 5. **Commutativity**: $\forall a, b \in G$, $a \cdot b = b \cdot a$

## Intuition

A group captures the essential algebraic structure of symmetries. Think of:
- Rotations of a geometric object
- Permutations of a set
- Addition of integers

The group axioms ensure we can:
- Combine operations (closure)
- Group operations freely (associativity)
- Do nothing (identity)
- Undo any operation (inverse)

## Key Properties

1. **Uniqueness of Identity**: The identity element $e$ is unique
2. **Uniqueness of Inverses**: Each element has exactly one inverse
3. **Cancellation Laws**: $ab = ac \Rightarrow b = c$ and $ba = ca \Rightarrow b = c$
4. **$(a^{-1})^{-1} = a$** for all $a \in G$
5. **$(ab)^{-1} = b^{-1}a^{-1}$** for all $a, b \in G$

## Examples

> [!example] Example 1: $(\mathbb{Z}, +)$
> The integers under addition form an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]]:
> - Identity: $0$
> - Inverse of $n$: $-n$

> [!example] Example 2: $(\mathbb{Q}^*, \cdot)$
> Non-zero rationals under multiplication form an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]]:
> - Identity: $1$
> - Inverse of $q$: $1/q$

> [!example] Example 3: $S_3$
> The symmetric group on 3 elements (6 permutations) is non-abelian:
> - Identity: $e = (1)(2)(3)$
> - $(12)(23) \neq (23)(12)$

## Non-Examples

> [!warning] Non-Example: $(\mathbb{Z}, \cdot)$
> Integers under multiplication is **not** a group:
> - No inverse for $2$ (since $1/2 \notin \mathbb{Z}$)

> [!warning] Non-Example: $(\mathbb{N}, +)$
> Natural numbers under addition is **not** a group:
> - No inverse for $1$ (since $-1 \notin \mathbb{N}$)

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
