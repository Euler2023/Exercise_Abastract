---
title: "Exercise R168: Norm Representations and Principal Prime Factors"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-norms
  - prime-splitting
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.6, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R168: Norm Representations and Principal Prime Factors

## Problem Statement

> [!question] Exercise 6.6
> Let $d$ be congruent to $2$ or $3$ modulo $4$. An integer prime $p$ might be of the form $a^2-b^2d$, with $a$ and $b$ in $\mathbb Z$. How is this related to the prime ideal factorization of $(p)$ in the ring of integers $R$?

## Hints

> [!hint]- Hint 1
> Recognize $a^2-b^2d$ as the norm of $\alpha=a+b\sqrt d$.

## Solution

> [!success]- Solution
> Put $\delta=\sqrt d$ and $\alpha=a+b\delta$. Then
>
> $$
> N(\alpha)=\alpha\overline\alpha=a^2-b^2d.
> $$
>
> If $p=N(\alpha)$, principal ideals satisfy
>
> $$
> (p)=(\alpha\overline\alpha)
> =(\alpha)(\overline\alpha).
> $$
>
> The ideal $(\alpha)$ has index $|N(\alpha)|=p$, so its quotient has $p$ elements and is a field. Thus $(\alpha)$ is a prime ideal. Consequently, $p$ does not remain prime: it splits or ramifies, and one of its prime ideal factors is principal.
>
> Conversely, suppose
>
> $$
> (p)=P\overline P
> $$
>
> and that one prime factor is principal, say $P=(\alpha)$. Conjugating gives $\overline P=(\overline\alpha)$, so
>
> $$
> (p)=(N(\alpha)).
> $$
>
> Both generators are positive ordinary integers up to a unit, and therefore $N(\alpha)=p$. Writing $\alpha=a+b\delta$ yields the required representation.
>
> Hence
>
> $$
> \boxed{p=a^2-b^2d
> \iff\text{ a prime ideal factor of }(p)\text{ is principal}.}
> $$
>
> Splitting alone is not sufficient: the associated prime ideal class must be trivial.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because a norm representation is translated into principality of a prime ideal factor.
- **Ramified case:** The statement includes ramification, where $P=\overline P$ and $(p)=P^2$.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.6, printed p. 410, PDF p. 422]. The two-way ideal argument is independent.
