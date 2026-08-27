---
title: "Exercise R53: The Frobenius Endomorphism"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - characteristic-p
  - frobenius
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.8, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R53: The Frobenius Endomorphism

## Problem Statement

> [!question] Exercise 3.8
> Let $R$ be a ring of prime characteristic $p$. Prove that the map $R\to R$ defined by $x\mapsto x^p$ is a ring homomorphism. It is called the Frobenius map.

## Hints

> [!hint]- Hint 1
> In the binomial expansion, $p$ divides every intermediate binomial coefficient.

## Solution

> [!success]- Solution
> For $0<k<p$, the prime $p$ divides $\binom pk$, so these coefficients vanish in $R$. Since Artin's rings here are commutative,
>
> $$
> (x+y)^p=x^p+y^p.
> $$
>
> Also $(xy)^p=x^py^p$, $1^p=1$, and $0^p=0$. Therefore $F(x)=x^p$ preserves addition, multiplication, and identity, and is a ring homomorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Hypothesis boundary:** The additivity proof uses commutativity; the naive $p$-power map need not be additive on a noncommutative ring.
- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.8, printed p. 355, PDF p. 367]. The proof is independent.

