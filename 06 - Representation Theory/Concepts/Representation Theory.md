---
title: Representation Theory
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - representation-theory
  - group-theory
created: 2025-01-19
---

# Representation Theory

Representation theory studies abstract algebraic structures by representing their elements as linear transformations of vector spaces. It bridges [[01 - Group Theory/Group Theory Hub|Group Theory]] and [[04 - Linear Algebra and Modules/Linear Algebra and Modules Hub|Linear Algebra]].

## Definition

> [!info] Definition (Group Representation)
> A **representation** of a group $G$ on a vector space $V$ over field $F$ is a group homomorphism:
> $$\rho: G \to GL(V)$$
> where $GL(V)$ is the group of invertible linear transformations of $V$.

> [!info] Definition (Degree/Dimension)
> The **degree** (or dimension) of a representation is $\dim_F V$.

## Equivalent Formulations

A representation $\rho: G \to GL(V)$ makes $V$ into a **$G$-module** (or $FG$-module):
- Action: $g \cdot v = \rho(g)(v)$
- This is a module over the **group algebra** $FG$

## Key Concepts

### Subrepresentations

> [!info] Definition (Subrepresentation)
> A **subrepresentation** (or $G$-invariant subspace) is a subspace $W \subseteq V$ such that:
> $$\rho(g)(W) \subseteq W \quad \text{for all } g \in G$$

### Irreducibility

> [!info] Definition (Irreducible Representation)
> A representation is **irreducible** (or simple) if its only subrepresentations are $\{0\}$ and $V$.

### Morphisms

> [!info] Definition (Intertwining Operator)
> A **$G$-homomorphism** (or intertwining operator) between representations $(\rho_1, V_1)$ and $(\rho_2, V_2)$ is a linear map $\phi: V_1 \to V_2$ such that:
> $$\phi \circ \rho_1(g) = \rho_2(g) \circ \phi \quad \text{for all } g \in G$$

## Fundamental Theorems

> [!abstract] Maschke's Theorem
> Let $G$ be a finite group and $F$ a field with $\text{char}(F) \nmid |G|$.
> Then every representation of $G$ over $F$ is **completely reducible** (decomposes as a direct sum of irreducibles).

> [!abstract] Schur's Lemma
> Let $\rho_1, \rho_2$ be irreducible representations over an algebraically closed field.
> 1. Any $G$-homomorphism $\phi: V_1 \to V_2$ is either zero or an isomorphism
> 2. If $\rho_1 = \rho_2$, then $\phi = \lambda \cdot \text{id}$ for some scalar $\lambda$

> [!abstract] Character Theory
> The **character** of a representation is:
> $$\chi_\rho(g) = \text{tr}(\rho(g))$$
> Characters determine representations up to isomorphism (over $\mathbb{C}$).

## Examples

> [!example] Example 1: Trivial Representation
> $\rho: G \to GL_1(F)$ with $\rho(g) = 1$ for all $g$.
> - Degree 1, always irreducible

> [!example] Example 2: Regular Representation
> $V = FG$ (group algebra as vector space), $G$ acts by left multiplication.
> - Degree $|G|$
> - Contains every irreducible representation

> [!example] Example 3: Permutation Representation
> For $G = S_n$ acting on $\{1, \ldots, n\}$:
> $\rho: S_n \to GL_n(F)$ where $\rho(\sigma)e_i = e_{\sigma(i)}$
> - Decomposes into trivial + standard representation

> [!example] Example 4: $S_3$ over $\mathbb{C}$
> 
> Three irreducible representations:
> | Name | Degree | Character values on $(e), (12), (123)$ |
> |------|--------|----------------------------------------|
> | Trivial | 1 | $1, 1, 1$ |
> | Sign | 1 | $1, -1, 1$ |
> | Standard | 2 | $2, 0, -1$ |



## Character Table

For finite group $G$ over $\mathbb{C}$:
- Rows: irreducible representations
- Columns: conjugacy classes
- Entry: $\chi_i(g_j)$

> [!tip] Orthogonality Relations
> $$\frac{1}{|G|} \sum_{g \in G} \chi_i(g) \overline{\chi_j(g)} = \delta_{ij}$$
> $$\sum_i \chi_i(g) \overline{\chi_i(h)} = \begin{cases} |C_G(g)| & g \sim h \\ 0 & \text{otherwise} \end{cases}$$

## Applications

1. **Counting** - Burnside's lemma, Pólya enumeration
2. **Quantum mechanics** - Symmetry groups, selection rules
3. **Number theory** - Artin $L$-functions, modularity
4. **Chemistry** - Molecular symmetry, spectroscopy
5. **Coding theory** - Group codes

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
