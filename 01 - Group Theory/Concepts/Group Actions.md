---
title: Group Actions
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Group Actions

## Definition

> [!info] Definition (Group Action)
> A **group action** of $G$ on a set $X$ is a function $G \times X \to X$, written $(g, x) \mapsto g \cdot x$, satisfying:
> 1. $e \cdot x = x$ for all $x \in X$
> 2. $(gh) \cdot x = g \cdot (h \cdot x)$ for all $g, h \in G$, $x \in X$

Equivalently: a [[01 - Group Theory/Concepts/Group Homomorphisms|homomorphism]] $\phi: G \to \text{Sym}(X)$.

## Key Concepts

### Orbits

> [!info] Definition (Orbit)
> The **orbit** of $x \in X$ is:
> $$G \cdot x = \text{Orb}(x) = \{g \cdot x : g \in G\}$$

### Stabilizers

> [!info] Definition (Stabilizer)
> The **stabilizer** of $x \in X$ is:
> $$G_x = \text{Stab}(x) = \{g \in G : g \cdot x = x\}$$

> [!tip] $G_x \leq G$ is always a [[01 - Group Theory/Concepts/Subgroups|subgroup]].

## Fundamental Theorem

> [!abstract] Orbit-Stabilizer Theorem
> For any $x \in X$:
> $$|G| = |G \cdot x| \cdot |G_x|$$
> Equivalently: $|G \cdot x| = [G : G_x]$

## Types of Actions

| Type | Condition |
|------|-----------|
| **Transitive** | Only one orbit ($G \cdot x = X$) |
| **Faithful** | Trivial kernel ($g \cdot x = x$ for all $x \Rightarrow g = e$) |
| **Free** | All stabilizers trivial ($G_x = \{e\}$ for all $x$) |

## Important Actions

> [!example] Left Multiplication
> $G$ acts on itself by $g \cdot h = gh$.
> - Transitive and free
> - Faithful (Cayley's theorem: $G \hookrightarrow S_{|G|}$)

> [!example] Conjugation
> $G$ acts on itself by $g \cdot h = ghg^{-1}$.
> - Orbits = conjugacy classes
> - Stabilizer of $h$ = centralizer $C_G(h)$

> [!example] Action on Cosets
> $G$ acts on $G/H$ by $g \cdot (aH) = (ga)H$.
> - Always transitive
> - Stabilizer of $H$ is $H$

## Counting Results

> [!abstract] Burnside's Lemma
> Number of orbits:
> $$|X/G| = \frac{1}{|G|} \sum_{g \in G} |X^g|$$
> where $X^g = \{x \in X : g \cdot x = x\}$.

> [!abstract] Class Equation
> $$|G| = |Z(G)| + \sum_{[g]} [G : C_G(g)]$$
> summing over non-central conjugacy classes.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
