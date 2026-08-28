---
title: "Exercise R165: Residue Rings at Inert and Split Primes"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - residue-rings
  - prime-splitting
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.3, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R165: Residue Rings at Inert and Split Primes

## Problem Statement

> [!question] Exercise 6.3
> Let $R$ be the ring of integers in an imaginary quadratic field.
>
> **(a)** Suppose that an integer prime $p$ remains prime in $R$. Prove that $R/(p)$ is a field with $p^2$ elements.
>
> **(b)** Prove that if $p$ splits but does not ramify, then $R/(p)$ is isomorphic to the product ring $\mathbb F_p\times\mathbb F_p$.

## Hints

> [!hint]- Hint 1
> As an abelian group, $R$ is free of rank two, so $R/pR$ has $p^2$ elements.

> [!hint]- Hint 2
> In the split unramified case write $(p)=P\overline P$ and apply the Chinese remainder theorem to the two distinct maximal ideals.

## Solution

> [!success]- Solution
> **(a)** Since $R$ has an integral basis of two elements,
>
> $$
> R/(p)\cong(\mathbb Z/p\mathbb Z)^2
> $$
>
> as additive groups, so the quotient has $p^2$ elements. If $p$ remains prime, then $(p)$ is a prime ideal and $R/(p)$ is an integral domain. Every finite integral domain is a field. Hence $R/(p)$ is the field $\mathbb F_{p^2}$ up to isomorphism.
>
> **(b)** If $p$ splits without ramifying, then
>
> $$
> (p)=P\overline P
> $$
>
> with $P\neq\overline P$. Nonzero prime ideals in this ring are maximal, so the two distinct ideals are comaximal. Therefore
>
> $$
> P\cap\overline P=P\overline P=(p).
> $$
>
> The Chinese remainder theorem gives
>
> $$
> R/(p)
> \cong R/P\times R/\overline P.
> $$
>
> Each quotient is a field of characteristic $p$ and has $p$ elements—the corresponding factor of the quadratic residue polynomial is linear. Thus
>
> $$
> \boxed{R/(p)\cong\mathbb F_p\times\mathbb F_p.}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because prime-ideal behavior determines the residue-ring structure.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.3, printed p. 409, PDF p. 421]. The cardinality and Chinese-remainder proofs are independent.
