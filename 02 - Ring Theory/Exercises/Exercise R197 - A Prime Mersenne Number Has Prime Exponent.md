---
title: "Exercise R197: A Prime Mersenne Number Has Prime Exponent"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - divisibility
  - mersenne-numbers
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.5, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R197: A Prime Mersenne Number Has Prime Exponent

## Problem Statement

> [!question] Exercise A.5
> Let $n$ be a positive integer. Show that if $2^n-1$ is a prime number, then $n$ is prime.

## Hints

> [!hint]- Hint 1
> Prove the contrapositive and use the factorization of $X^b-1$.

## Solution

> [!success]- Solution
> Suppose $n$ is composite, say $n=ab$ with $a,b>1$. Then
>
> $$
> 2^n-1=(2^a)^b-1
> =(2^a-1)\left(1+2^a+2^{2a}+\cdots+2^{a(b-1)}\right).
> $$
>
> Both factors are integers greater than $1$, so $2^n-1$ is composite. The contrapositive says that if $2^n-1$ is prime, then $n$ must be prime.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because the proof is the difference-of-powers factorization and integer divisibility.
- **Source status:** [S1, Appendix, §A.1, Ex. A.5, printed p. 521, PDF p. 533]. The proof is independent.
