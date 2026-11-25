---
title: "Exercise LA239: Symmetric Orthogonal Matrices in Dimension Three"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - symmetric-matrices
  - orthogonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.3, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA239: Symmetric Orthogonal Matrices in Dimension Three

## Problem Statement

> [!question] Exercise 6.3
> What does the Spectral Theorem tell us about a real $3\times3$ matrix that is both symmetric and orthogonal?

## Hints

> [!hint]- Hint 1
> Symmetry gives an orthogonal eigenbasis; orthogonality constrains each eigenvalue.

## Solution

> [!success]- Solution
> **Proof scope:** Independent application of Artin's **Theorem 8.6.10(b)**, the real symmetric spectral theorem: a real symmetric matrix has a real orthonormal eigenbasis and real eigenvalues. [S1, printed p. 245, PDF p. 257]
>
> Since $A$ is real symmetric, this theorem gives a real orthogonal matrix $P$ such that
>
> $$
> P^{\mathsf T}AP=\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3).
> $$
>
> Orthogonality preserves the Euclidean norm. For any nonzero real eigenvector $v_i$,
>
> $$
> \|v_i\|=\|Av_i\|=\|\lambda_i v_i\|=|\lambda_i|\|v_i\|,
> $$
>
> so $|\lambda_i|=1$. The eigenvalues supplied by the real symmetric theorem are real, hence each $\lambda_i\in\{1,-1\}$. Therefore
>
> $$
> \boxed{A=P\operatorname{diag}(\varepsilon_1,\varepsilon_2,\varepsilon_3)P^{\mathsf T},
> \quad \varepsilon_i=\pm1}.
> $$
>
> In particular $A^2=I$. Geometrically, $A$ is an orthogonal involution: it fixes one orthogonal eigenspace and negates its orthogonal complement.
>
> Conversely, every displayed matrix $A=PDP^{\mathsf T}$ with $P\in O(3)$ and $D=\operatorname{diag}(\varepsilon_1,\varepsilon_2,\varepsilon_3)$, $\varepsilon_j=\pm1$, is symmetric and orthogonal:
>
> $$
> A^{\mathsf T}=PD^{\mathsf T}P^{\mathsf T}=A,\qquad
> A^{\mathsf T}A=PD^2P^{\mathsf T}=I.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- The determinant is $(-1)^m$, where $m$ is the dimension of the $-1$ eigenspace.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.3, printed p. 256, PDF p. 268]. The classification is independent.
- **Theory connection:** The precise real theorem and its real-eigenvector induction are supplied in [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem#Real symmetric operators|the real symmetric proof]]. A complex unitary eigenbasis alone would not justify the real orthogonal matrix $P$ required here.

