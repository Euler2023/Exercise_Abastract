---
title: "Exercise R171: A Common Principalizing Ideal Characterizes Similarity"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideal-classes
  - ideal-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 7, Ideal Classes, Ex. 7.2, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R171: A Common Principalizing Ideal Characterizes Similarity

## Problem Statement

> [!question] Exercise 7.2
> Prove that two nonzero ideals $A$ and $A'$ in the ring of integers in an imaginary quadratic field are similar if and only if there is a nonzero ideal $C$ such that both $AC$ and $A'C$ are principal ideals.

## Hints

> [!hint]- Hint 1
> If $A'=\lambda A$, take $C=\overline A$ and use the Main Lemma.

> [!hint]- Hint 2
> If $AC=(\alpha)$ and $A'C=(\beta)$, compare $\beta AC$ and $\alpha A'C$ and cancel $C$.

## Solution

> [!success]- Solution
> Suppose first that $A$ and $A'$ are similar, so $A'=\lambda A$ for some $0\neq\lambda$ in the quadratic field. By the Main Lemma,
>
> $$
> A\overline A=(n)
> $$
>
> for a positive integer $n$. Take $C=\overline A$. Then $AC=(n)$ is principal, and
>
> $$
> A'C=\lambda A\overline A=(\lambda n)
> $$
>
> is principal as well. The element $\lambda n$ lies in $R$ because this product is an integral ideal contained in $R$.
>
> Conversely, suppose
>
> $$
> AC=(\alpha),
> \qquad
> A'C=(\beta)
> $$
>
> with $0\neq\alpha,\beta\in R$. Multiplying the first equality by $\beta$ and the second by $\alpha$ gives
>
> $$
> (\beta A)C=(\alpha\beta)=(\alpha A')C.
> $$
>
> Cancellation for nonzero ideals yields
>
> $$
> \beta A=\alpha A'.
> $$
>
> Therefore
>
> $$
> A'=\frac\beta\alpha A,
> $$
>
> so $A$ and $A'$ are similar. This proves both directions.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because the Main Lemma and cancellation of nonzero ideals characterize similarity.
- **Source status:** The problem is from [S1, Ch. 13, §13.7, Ex. 7.2, printed p. 410, PDF p. 422]. The common-principalizer proof is independent.
