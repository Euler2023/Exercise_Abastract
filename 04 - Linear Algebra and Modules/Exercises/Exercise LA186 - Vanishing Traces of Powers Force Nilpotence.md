---
title: "Exercise LA186: Vanishing Traces of Powers Force Nilpotence"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - nilpotent-matrices
  - newton-identities
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.3, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA186: Vanishing Traces of Powers Force Nilpotence

## Problem Statement

> [!question] Miscellaneous Problem M.3
> Let $A$ be a complex $n\times n$ matrix. Prove that if $\operatorname{tr}(A^k)=0$ for all $k>0$, then $A$ is nilpotent.

## Hints

> [!hint]- Hint 1
> Express $\operatorname{tr}(A^k)$ as the $k$-th power sum of the eigenvalues and use Newton's identities.

## Solution

> [!success]- Solution
> Let $\lambda_1,\ldots,\lambda_n$ be the eigenvalues counted with algebraic multiplicity. Triangularizing $A$ shows that
>
> $$
> s_k:=\lambda_1^k+\cdots+\lambda_n^k=\operatorname{tr}(A^k)=0
> $$
>
> for every $k\ge1$. Let $e_k$ be the $k$-th elementary symmetric function of the eigenvalues, with $e_0=1$. Newton's identities state
>
> $$
> ke_k=\sum_{j=1}^k(-1)^{j-1}e_{k-j}s_j.
> $$
>
> Since every $s_j=0$, induction gives $e_1=\cdots=e_n=0$. Consequently
>
> $$
> p_A(t)=\prod_{j=1}^n(t-\lambda_j)=t^n.
> $$
>
> Cayley-Hamilton now gives $A^n=0$, so $A$ is nilpotent.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[02 - Ring Theory/Exercises/Exercise R9 - Newton Identities and Power Sums|Exercise R9]]

## Notes

- **External standard input:** Newton's identities are the named bridge from power sums to characteristic-polynomial coefficients; Exercise R9 contains their derivation in this vault.
- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.3, printed p. 152, PDF p. 164]; independent proof.

