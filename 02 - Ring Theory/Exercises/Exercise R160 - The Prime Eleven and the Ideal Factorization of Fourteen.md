---
title: "Exercise R160: The Prime Eleven and the Ideal Factorization of Fourteen"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-ideals
  - quadratic-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 5, Factoring Ideals, Ex. 5.1, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R160: The Prime Eleven and the Ideal Factorization of Fourteen

## Problem Statement

> [!question] Exercise 5.1
> Let $R=\mathbb Z[\sqrt{-5}]$.
>
> **(a)** Decide whether or not $11$ is an irreducible element of $R$ and whether or not $(11)$ is a prime ideal of $R$.
>
> **(b)** Factor the principal ideal $(14)$ into prime ideals in $\mathbb Z[\delta]$.

## Hints

> [!hint]- Hint 1
> For irreducibility use $N(a+b\sqrt{-5})=a^2+5b^2$. For primality reduce $x^2+5$ modulo $11$.

> [!hint]- Hint 2
> The prime $2$ ramifies, while $7$ splits because $-5\equiv2$ is a square modulo $7$.

## Solution

> [!success]- Solution
> Put $\delta=\sqrt{-5}$.
>
> **(a)** Since $N(11)=121$, a proper factorization of $11$ would require a factor of norm $11$. But
>
> $$
> a^2+5b^2=11
> $$
>
> has no integer solution: $b=0$ would require $a^2=11$, and $|b|=1$ would require $a^2=6$. Thus $11$ is irreducible.
>
> Also,
>
> $$
> R/(11)\cong\mathbb F_{11}[x]/(x^2+5).
> $$
>
> The squares modulo $11$ are $0,1,3,4,5,9$, so $-5\equiv6$ is not a square. Hence $x^2+5$ is irreducible over $\mathbb F_{11}$, the quotient is a field, and $(11)$ is a prime ideal.
>
> **(b)** Define
>
> $$
> P_2=(2,1+\delta),
> \qquad
> P_7=(7,\delta-3),
> \qquad
> \overline P_7=(7,\delta+3).
> $$
>
> The quotients by these ideals are $\mathbb F_2$, $\mathbb F_7$, and $\mathbb F_7$, obtained by sending $\delta$ respectively to $1$, $3$, and $-3$. Thus all three ideals are maximal and hence prime. Direct ideal multiplication, or the factorizations
>
> $$
> x^2+5\equiv(x+1)^2\pmod2,
> \qquad
> x^2+5\equiv(x-3)(x+3)\pmod7,
> $$
>
> gives
>
> $$
> (2)=P_2^2,
> \qquad
> (7)=P_7\overline P_7.
> $$
>
> Therefore the prime-ideal factorization is
>
> $$
> \boxed{(14)=P_2^2P_7\overline P_7.}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because both element factorization and prime-ideal factorization are decided in $\mathbb Z[\sqrt{-5}]$.
- **Notation:** Part (b) follows the source's $\delta$ notation; here $\delta=\sqrt{-5}$ as fixed in part (a).
- **Source status:** The problem is from [S1, Ch. 13, §13.5, Ex. 5.1, printed p. 409, PDF p. 421]. The norm, residue-field, and ideal-factorization calculations are independent.
