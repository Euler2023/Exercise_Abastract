---
title: "Exercise LA135: Recovering a Simple-Spectrum Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - simple-spectrum
  - diagonalization
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §6, Ex. 6.2, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA135: Recovering a Simple-Spectrum Matrix

## Problem Statement

> [!question] Exercise 6.2
> A complex $n\times n$ matrix $A$ has distinct eigenvalues $\lambda_1,\ldots,\lambda_n$ with eigenvectors $v_1,\ldots,v_n$. (a) Show that every eigenvector is a multiple of one of the $v_i$. (b) Show how to recover $A$ from the eigenvalues and eigenvectors.

## Hints

> [!hint]- Hint 1
> Eigenvectors for distinct eigenvalues are independent.

## Solution

> [!success]- Solution
> The $n$ vectors $v_i$ are independent and hence form a basis. If $Aw=\lambda w$ and $w=\sum c_iv_i$, then $0=(A-\lambda I)w=\sum c_i(\lambda_i-\lambda)v_i$. Thus nonzero coefficients can occur only where $\lambda_i=\lambda$, proving (a).
>
> For (b), let $P=(v_1\ \cdots\ v_n)$ and $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Then
>
> $$
> A=PDP^{-1}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source status:** [S1, Ch. 4, §6, Ex. 6.2, printed p. 128, PDF p. 140]; independent solution.

