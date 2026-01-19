---
title: "Exercise Rep2: Character Table of S3"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - representation-theory
  - characters
source: "Fulton & Harris, Representation Theory"
created: 2025-01-19
---

# Exercise Rep2: Character Table of S3

## Problem Statement

> [!question] Exercise
> Compute the complete character table of $S_3$ over $\mathbb{C}$.
>
> 1. Identify all conjugacy classes of $S_3$
> 2. Find all irreducible representations
> 3. Compute the character table
> 4. Verify the orthogonality relations

## Hints

> [!hint]- Hint 1
> $S_3$ has 3 conjugacy classes. What are they?

> [!hint]- Hint 2
> For a group of order 6, we need $\sum_i d_i^2 = 6$ where $d_i$ are dimensions of irreducibles.

> [!hint]- Hint 3
> The 1-dimensional representations come from $S_3 / [S_3, S_3] \cong S_3 / A_3 \cong \mathbb{Z}/2\mathbb{Z}$.

## Solution

> [!success]- Solution
> ### Step 1: Conjugacy Classes
> $S_3 = \{e, (12), (13), (23), (123), (132)\}$
>
> Conjugacy classes (by cycle type):
> - $C_1 = \{e\}$ (identity, size 1)
> - $C_2 = \{(12), (13), (23)\}$ (transpositions, size 3)
> - $C_3 = \{(123), (132)\}$ (3-cycles, size 2)
>
> Number of conjugacy classes = 3 = number of irreducibles.
>
> ### Step 2: Dimensions
> Need $d_1^2 + d_2^2 + d_3^2 = 6$.
>
> Only solution with positive integers: $1^2 + 1^2 + 2^2 = 6$.
>
> So we have two 1-dimensional and one 2-dimensional irreducibles.
>
> ### Step 3: Finding Representations
> **Trivial representation $\chi_1$:** $\rho_1(g) = 1$ for all $g$.
>
> **Sign representation $\chi_2$:** $\rho_2(\sigma) = \text{sgn}(\sigma)$.
> - $\chi_2(e) = 1$, $\chi_2((12)) = -1$, $\chi_2((123)) = 1$
>
> **Standard representation $\chi_3$:**
> The permutation representation on $\mathbb{C}^3$ has character:
> - $\chi_{\text{perm}}(g) = $ number of fixed points
> - $\chi_{\text{perm}}(e) = 3$, $\chi_{\text{perm}}((12)) = 1$, $\chi_{\text{perm}}((123)) = 0$
>
> Decompose: $\chi_{\text{perm}} = \chi_1 + \chi_3$, so $\chi_3 = \chi_{\text{perm}} - \chi_1$.
> - $\chi_3(e) = 3 - 1 = 2$
> - $\chi_3((12)) = 1 - 1 = 0$
> - $\chi_3((123)) = 0 - 1 = -1$
>
> ### Step 4: Character Table
>
> |  | $e$ | $(12)$ | $(123)$ |
> |--|:---:|:------:|:-------:|
> | $\chi_1$ | $1$ | $1$ | $1$ |
> | $\chi_2$ | $1$ | $-1$ | $1$ |
> | $\chi_3$ | $2$ | $0$ | $-1$ |
>
> ### Step 5: Verify Orthogonality
> $\langle \chi_1, \chi_2 \rangle = \frac{1}{6}(1 \cdot 1 + 3 \cdot 1 \cdot (-1) + 2 \cdot 1 \cdot 1) = \frac{1}{6}(1 - 3 + 2) = 0$ ✓
>
> $\langle \chi_1, \chi_3 \rangle = \frac{1}{6}(1 \cdot 2 + 3 \cdot 1 \cdot 0 + 2 \cdot 1 \cdot (-1)) = \frac{1}{6}(2 + 0 - 2) = 0$ ✓
>
> $\langle \chi_2, \chi_3 \rangle = \frac{1}{6}(1 \cdot 2 + 3 \cdot (-1) \cdot 0 + 2 \cdot 1 \cdot (-1)) = \frac{1}{6}(2 + 0 - 2) = 0$ ✓
>
> $\langle \chi_1, \chi_1 \rangle = \frac{1}{6}(1 + 3 + 2) = 1$ ✓
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
