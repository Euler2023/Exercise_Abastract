---
title: Characters
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - representation-theory
created: 2025-01-19
---

# Characters

Characters are a powerful tool in representation theory, reducing the study of representations to the study of complex-valued functions on groups.

## Definition

> [!info] Definition (Character)
> The **character** of a representation $(\rho, V)$ is the function $\chi_\rho: G \to F$ defined by:
> $$\chi_\rho(g) = \text{tr}(\rho(g))$$
> where $\text{tr}$ denotes the trace.

## Properties

> [!tip] Basic Properties
> 1. $\chi(e) = \dim V$ (degree of representation)
> 2. $\chi(g^{-1}) = \overline{\chi(g)}$ (over $\mathbb{C}$)
> 3. $\chi(hgh^{-1}) = \chi(g)$ (constant on conjugacy classes)
> 4. Isomorphic representations have the same character

## Character Arithmetic

> [!info] Operations on Characters
> For representations $(\rho_1, V_1)$ and $(\rho_2, V_2)$:
>
> **Direct Sum**: $\chi_{\rho_1 \oplus \rho_2} = \chi_{\rho_1} + \chi_{\rho_2}$
>
> **Tensor Product**: $\chi_{\rho_1 \otimes \rho_2} = \chi_{\rho_1} \cdot \chi_{\rho_2}$
>
> **Dual**: $\chi_{\rho^*}(g) = \overline{\chi_\rho(g)}$

## Orthogonality Relations

> [!abstract] First Orthogonality (Row)
> For irreducible characters $\chi_i, \chi_j$:
> $$\langle \chi_i, \chi_j \rangle = \frac{1}{|G|} \sum_{g \in G} \chi_i(g) \overline{\chi_j(g)} = \delta_{ij}$$

> [!abstract] Second Orthogonality (Column)
> For conjugacy classes $C_i, C_j$ with representatives $g_i, g_j$:
> $$\sum_{\chi \text{ irred.}} \chi(g_i) \overline{\chi(g_j)} = \begin{cases} |C_G(g_i)| & g_i \sim g_j \\ 0 & \text{otherwise} \end{cases}$$

## Character Table

> [!info] Structure
> A **character table** is a square matrix:
> - Rows: irreducible characters $\chi_1, \ldots, \chi_k$
> - Columns: conjugacy classes $C_1, \ldots, C_k$
> - Entry $(i,j)$: value $\chi_i(g_j)$ for any $g_j \in C_j$

> [!tip] Key Facts
> - Number of irreducible representations = number of conjugacy classes
> - $\sum_i (\dim \rho_i)^2 = |G|$
> - Character table determines the group up to isomorphism (almost)

## Example: Character Table of $S_3$

|  | $e$ | $(12)$ | $(123)$ |
|--|-----|--------|---------|
| $\chi_1$ (trivial) | $1$ | $1$ | $1$ |
| $\chi_2$ (sign) | $1$ | $-1$ | $1$ |
| $\chi_3$ (standard) | $2$ | $0$ | $-1$ |

Verify: $1^2 + 1^2 + 2^2 = 6 = |S_3|$ ✓

## Example: Character Table of $\mathbb{Z}/4\mathbb{Z}$

Let $\omega = e^{2\pi i/4} = i$.

|  | $0$ | $1$ | $2$ | $3$ |
|--|-----|-----|-----|-----|
| $\chi_0$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_1$ | $1$ | $i$ | $-1$ | $-i$ |
| $\chi_2$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_3$ | $1$ | $-i$ | $-1$ | $i$ |

## Applications

> [!abstract] Decomposition Multiplicity
> For any character $\chi$:
> $$\chi = \sum_i m_i \chi_i$$
> where $m_i = \langle \chi, \chi_i \rangle$ is the multiplicity of the $i$-th irreducible.

> [!abstract] Burnside's Lemma
> Number of orbits of $G$ acting on set $X$:
> $$|X/G| = \frac{1}{|G|} \sum_{g \in G} |X^g|$$
> where $X^g = \{x \in X : g \cdot x = x\}$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
