---
title: "Exercise LA184: Integer Orthogonal Matrices Are Signed Permutations"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-groups
  - integer-matrices
  - signed-permutations
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.1, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA184: Integer Orthogonal Matrices Are Signed Permutations

## Problem Statement

> [!question] Miscellaneous Problem M.1
> Determine the group $O_n(\mathbb Z)$ of orthogonal matrices with integer entries.

## Hints

> [!hint]- Hint 1
> An integral column of Euclidean length $1$ has only one nonzero entry.

## Solution

> [!success]- Solution
> Let $A\in O_n(\mathbb Z)$. Each column is an integral vector of squared length $1$, so it has exactly one nonzero entry, equal to $1$ or $-1$. Orthogonality of distinct columns forces those entries to occur in different rows. Thus $A$ is a signed permutation matrix.
>
> Conversely, every signed permutation matrix has orthonormal columns and is integral. Hence
>
> $$
> O_n(\mathbb Z)=\{DP:D=\operatorname{diag}(\varepsilon_1,\ldots,\varepsilon_n),
> \ \varepsilon_i\in\{\pm1\},\ P\text{ a permutation matrix}\}.
> $$
>
> Abstractly,
>
> $$
> O_n(\mathbb Z)\cong (C_2)^n\rtimes S_n,
> $$
>
> the signed permutation or hyperoctahedral group, of order $2^n n!$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.1, printed p. 152, PDF p. 164]; independent classification.

