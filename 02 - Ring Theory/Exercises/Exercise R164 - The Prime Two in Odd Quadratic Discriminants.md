---
title: "Exercise R164: The Prime Two in Odd Quadratic Discriminants"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-splitting
  - congruences
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.2, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R164: The Prime Two in Odd Quadratic Discriminants

## Problem Statement

> [!question] Exercise 6.2
> Suppose that $d$ is a negative integer, and that $d\equiv1$ modulo $4$. Analyze whether or not $2$ remains prime in $R$ in terms of congruence modulo $8$.

## Hints

> [!hint]- Hint 1
> Write $R=\mathbb Z[\eta]$ with $\eta=(1+\sqrt d)/2$ and minimal polynomial $x^2-x+h$, where $h=(1-d)/4$.

## Solution

> [!success]- Solution
> Put
>
> $$
> \eta=\frac{1+\sqrt d}{2},
> \qquad
> h=\frac{1-d}{4}.
> $$
>
> Then
>
> $$
> R/(2)\cong\mathbb F_2[x]/(x^2-x+h).
> $$
>
> A square-free integer $d\equiv1\pmod4$ is congruent to $1$ or $5$ modulo $8$.
>
> - If $d\equiv1\pmod8$, then $h$ is even, and the polynomial reduces to
>
> $$
> x^2-x=x(x+1).
> $$
>
> It has two distinct roots in $\mathbb F_2$, so $2$ splits.
>
> - If $d\equiv5\pmod8$, then $h$ is odd, and the polynomial reduces to
>
> $$
> x^2+x+1,
> $$
>
> which is irreducible over $\mathbb F_2$. Hence $(2)$ is prime and $2$ remains prime.
>
> Thus
>
> $$
> \boxed{2\text{ remains prime iff }d\equiv5\pmod8;
> \quad 2\text{ splits iff }d\equiv1\pmod8.}
> $$
>
> In this odd-discriminant case, $2$ does not ramify.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because factorization of $(2)$ is read from the residue ring of the quadratic integer ring.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.2, printed p. 409, PDF p. 421]. The modulo-$8$ analysis is independent.
