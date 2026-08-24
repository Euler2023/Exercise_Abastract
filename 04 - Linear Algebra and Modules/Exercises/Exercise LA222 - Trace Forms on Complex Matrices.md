---
title: "Exercise LA222: Trace Forms on Complex Matrices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-forms
  - trace
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.13, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA222: Trace Forms on Complex Matrices

## Problem Statement

> [!question] Exercise 4.13
> **(a)** Decide whether or not the rule $(A,B)=\operatorname{trace}(A^*B)$ defines a Hermitian form on the space $\mathbb C^{n\times n}$ of complex matrices, and if so, determine its signature.
>
> **(b)** Answer the same question for the form defined by $(A,B)=\operatorname{trace}(AB)$.

## Hints

> [!hint]- Hint 1
> Expand the first rule entry by entry.

> [!hint]- Hint 2
> For the second rule, test conjugate-linearity in the first variable by replacing $A$ with $iA$.

## Solution

> [!success]- Solution
> **(a)** We have
>
> $$
> \operatorname{trace}(A^*B)=\sum_{i,j}\overline{a_{ij}}b_{ij}.
> $$
>
> Hence the rule is conjugate-linear in $A$, linear in $B$, and satisfies
>
> $$
> (B,A)=\overline{(A,B)}.
> $$
>
> Moreover,
>
> $$
> (A,A)=\sum_{i,j}|a_{ij}|^2>0
> $$
>
> for $A\ne0$. It is therefore positive definite Hermitian. Since the complex dimension is $n^2$, its signature is
>
> $$
> \boxed{(n^2,0)}.
> $$
>
> **(b)** The form $\operatorname{trace}(AB)$ is complex bilinear, not conjugate-linear in the first variable. Indeed,
>
> $$
> \operatorname{trace}((iA)B)=i\operatorname{trace}(AB),
> $$
>
> whereas a Hermitian form would require the factor $\overline i=-i$. Thus it is not a Hermitian form and has no Hermitian signature.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Part (a) is the Frobenius Hermitian product on complex matrices.
- **Source status:** Both trace rules were visually verified at [S1, Ch. 8, §4, Ex. 4.13, printed p. 255, PDF p. 267]. The classification is independent.

