---
title: "Exercise LA300: Congruence as a GLn Action"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-congruence
  - group-actions
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 8, Ex. 8.1, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise LA300: Congruence as a GLn Action

## Problem Statement

> [!question] Exercise 8.1
> Does the rule $P*A=PAP^{\mathsf T}$ define an operation of $GL_n$ on the set of $n\times n$ matrices?

## Hints

> [!hint]- Hint 1
> Check the identity and product axioms directly.

> [!hint]- Hint 2
> Use $(PQ)^{\mathsf T}=Q^{\mathsf T}P^{\mathsf T}$.

## Solution

> [!success]- Solution
> Yes. The identity matrix acts trivially:
>
> $$
> I*A=IAI^{\mathsf T}=A.
> $$
>
> For $P,Q\in GL_n$,
>
> $$
> P*(Q*A)
> =P(QAQ^{\mathsf T})P^{\mathsf T}
> =(PQ)A(PQ)^{\mathsf T}
> =(PQ)*A.
> $$
>
> Thus the two action axioms hold. This is the congruence action of $GL_n$ on matrices. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The transpose reverses the order of the product, exactly as required for the action law.
- **Source status:** The superscript in the source is transpose, not inverse; this was visually checked at [S1, Ch. 6, §8, Ex. 8.1, printed p. 191, PDF p. 203]. The verification is independent.
