---
title: "Exercise LA155: Convergence of the Power Method"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - power-method
  - eigenvalues
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.2, printed p. 130, PDF p. 142"
created: 2026-08-23
---

# Exercise LA155: Convergence of the Power Method

## Problem Statement

> [!question] Exercise M.2
> Let $A$ be complex $n\times n$ with eigenvalues $\lambda_1,\ldots,\lambda_n$ and $|\lambda_1|>|\lambda_i|$ for $i>1$.
>
> (a) Assuming the eigenvalues are distinct, prove that for most $X$, $X_k=\lambda_1^{-k}A^kX$ converges to an eigenvector with eigenvalue $\lambda_1$, and state the exact condition on $X$.
>
> (b) Prove the same without assuming all eigenvalues are distinct.

## Hints

> [!hint]- Hint 1
> Expand $X$ in an eigenbasis in (a), and in generalized eigenspaces in (b).

## Solution

> [!success]- Solution
> (a) Write $X=\sum c_iv_i$. Then
>
> $$
> X_k=c_1v_1+\sum_{i>1}c_i(\lambda_i/\lambda_1)^kv_i\longrightarrow c_1v_1.
> $$
>
> The limit is a nonzero eigenvector exactly when $c_1\ne0$, equivalently when the projection of $X$ onto the $\lambda_1$-eigenline is nonzero.
>
> (b) The strict dominance condition makes $\lambda_1$ a simple root, while other eigenvalues may have Jordan blocks. On a block for $\mu\ne\lambda_1$, $A^k$ is a finite sum of terms $\binom{k}{j}\mu^{k-j}N^j$. After division by $\lambda_1^k$, every such term tends to zero because polynomial growth is dominated by $|\mu/\lambda_1|^k$. Thus the same projection condition is necessary and sufficient.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Hypothesis boundary:** “Largest” means strictly largest in modulus, as printed. Without strict dominance, normalized powers can oscillate or fail to converge.
- **Source status:** [S1, Ch. 4, Misc. Problems, Ex. M.2, printed p. 130, PDF p. 142]; independent proof.

