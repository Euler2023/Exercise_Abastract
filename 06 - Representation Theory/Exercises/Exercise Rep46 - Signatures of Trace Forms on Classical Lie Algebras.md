---
title: "Exercise Rep46: Signatures of Trace Forms on Classical Lie Algebras"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - invariant-forms
  - signatures
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.12, printed p. 289, PDF p. 301"
created: 2026-08-24
---

# Exercise Rep46: Signatures of Trace Forms on Classical Lie Algebras

## Problem Statement

> [!question] Miscellaneous Exercise M.12
> Determine the signature of the Killing form (Exercise M.11) on the Lie algebra of (a) $SU_n$, (b) $SO_n$, and (c) $SL_n$.
>
> [!warning] Terminology
> This question uses Artin's name “Killing form” for the trace form $(A,A')=\operatorname{tr}(AA')$. The solution computes that printed form, not the standard adjoint Killing form.

## Hints

> [!hint]- Hint 1
> For $\mathfrak{sl}_n(\mathbb R)$, split a matrix into symmetric trace-zero and skew-symmetric parts.

## Solution

> [!success]- Solution
> **(a)** If $A\in\mathfrak{su}_n$ is nonzero, then $A^*=-A$ and
>
> $$
> \operatorname{tr}(A^2)=-\operatorname{tr}(A^*A)<0.
> $$
>
> Thus the form is negative definite on the real vector space $\mathfrak{su}_n$, of dimension $n^2-1$. Its signature is
>
> $$
> (0,n^2-1).
> $$
>
> **(b)** For a real skew-symmetric $A\ne0$, $\operatorname{tr}(A^2)=-\operatorname{tr}(A^{\mathsf T}A)<0$. Hence the signature on $\mathfrak{so}_n$ is
>
> $$
> \left(0,\frac{n(n-1)}2\right).
> $$
>
> **(c)** Every $A\in\mathfrak{sl}_n(\mathbb R)$ decomposes orthogonally for the trace form as
>
> $$
> A=S+K,
> \qquad S^{\mathsf T}=S,
> \qquad \operatorname{tr}S=0,
> \qquad K^{\mathsf T}=-K.
> $$
>
> The form is positive definite on symmetric trace-zero matrices and negative definite on skew-symmetric matrices. Their dimensions are $n(n+1)/2-1$ and $n(n-1)/2$, respectively. Therefore the signature is
>
> $$
> \left(\frac{n(n+1)}2-1,\frac{n(n-1)}2\right).
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- Signature is ordered as (number of positive squares, number of negative squares), consistently with the vault's convention.
- **Source status:** M.12 was visually checked at [S1, Ch. 9, Misc. Ex. M.12, printed p. 289, PDF p. 301]. The definiteness and dimension calculations are independent.
