---
title: "Exercise LA90: Orders of $GL_2(\\mathbb F_p)$ and $SL_2(\\mathbb F_p)$"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - general-linear-group
  - special-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 4, Ex. 4.4, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA90: Orders of $GL_2(\mathbb F_p)$ and $SL_2(\mathbb F_p)$

## Problem Statement

> [!question] Exercise 4.4
> Let $V=\mathbb F_p^2$.
> 
> **(a)** Prove that the number of bases of $V$ equals $|GL_2(\mathbb F_p)|$.
> 
> **(b)** Prove
> 
> $$
> |GL_2(\mathbb F_p)|=p(p+1)(p-1)^2,
> \qquad |SL_2(\mathbb F_p)|=p(p+1)(p-1).
> $$

## Hints

> [!hint]- Hint 1
> Choose the first basis vector, then the second outside its span.

> [!hint]- Hint 2
> Use the surjective determinant map onto $\mathbb F_p^\times$.

## Solution

> [!success]- Solution
> An ordered basis is exactly the ordered pair of columns of an invertible $2\times2$ matrix, proving (a). There are $p^2-1$ choices for the first nonzero column and $p^2-p$ choices for the second column outside its $p$-element span. Hence
> 
> $$
> |GL_2(\mathbb F_p)|=(p^2-1)(p^2-p)=p(p+1)(p-1)^2.
> $$
> 
> The determinant homomorphism $GL_2(\mathbb F_p)\to\mathbb F_p^\times$ is surjective, since $\operatorname{diag}(a,1)$ has determinant $a$. Its kernel is $SL_2(\mathbb F_p)$ and its image has $p-1$ elements, so
> 
> $$
> |SL_2(\mathbb F_p)|=\frac{|GL_2(\mathbb F_p)|}{p-1}=p(p+1)(p-1).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §4, Ex. 4.4, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
