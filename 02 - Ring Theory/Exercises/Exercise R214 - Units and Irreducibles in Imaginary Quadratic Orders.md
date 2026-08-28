---
title: "Exercise R214: Units and Irreducibles in Imaginary Quadratic Orders"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - units
  - irreducible-elements
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 10, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R214: Units and Irreducibles in Imaginary Quadratic Orders

## Problem Statement

> [!question] Exercise 10
> Let $D$ be an integer with $D\ge1$, and let $R$ be the set of all elements
>
> $$
> a+b\sqrt{-D},
> \qquad a,b\in\mathbb Z.
> $$
>
> **(a)** Show that $R$ is a ring.
>
> **(b)** Using the fact that complex conjugation is an automorphism of $\mathbb C$, show that complex conjugation induces an automorphism of $R$.
>
> **(c)** Show that if $D\ge2$, then the only units in $R$ are $\pm1$.
>
> **(d)** Show that $3$, $2+\sqrt{-5}$, and $2-\sqrt{-5}$ are irreducible elements in $\mathbb Z[\sqrt{-5}]$.

## Hints

> [!hint]- Hint 1
> Use the multiplicative norm $N(a+b\sqrt{-D})=a^2+Db^2$.

> [!hint]- Hint 2
> A nontrivial factorization of an element of norm $9$ would require an element of norm $3$.

## Solution

> [!success]- Solution
> **(a)** The set $R$ contains $0$ and $1$ and is closed under additive inverses. Moreover,
>
> $$
> (a+b\sqrt{-D})+(c+d\sqrt{-D})
> =(a+c)+(b+d)\sqrt{-D},
> $$
>
> and
>
> $$
> (a+b\sqrt{-D})(c+d\sqrt{-D})
> =(ac-Dbd)+(ad+bc)\sqrt{-D}.
> $$
>
> All new coefficients are integers, so $R$ is a subring of $\mathbb C$.
>
> **(b)** Complex conjugation sends
>
> $$
> a+b\sqrt{-D}\longmapsto a-b\sqrt{-D},
> $$
>
> which again lies in $R$. Its restriction preserves addition, multiplication, $0$, and $1$, and applying it twice is the identity. Hence it is an automorphism of $R$.
>
> **(c)** Define
>
> $$
> N(\alpha)=\alpha\overline\alpha=a^2+Db^2.
> $$
>
> This is a nonnegative integer and is multiplicative. If $\alpha$ is a unit, then
>
> $$
> 1=N(1)=N(\alpha)N(\alpha^{-1}),
> $$
>
> so $N(\alpha)=1$. Conversely, norm $1$ makes $\overline\alpha$ an inverse. For $D\ge2$, the equation $a^2+Db^2=1$ forces $b=0$ and $a=\pm1$. Thus $R^\times=\{\pm1\}$.
>
> **(d)** In $\mathbb Z[\sqrt{-5}]$,
>
> $$
> N(3)=N(2+\sqrt{-5})=N(2-\sqrt{-5})=9.
> $$
>
> If one of these elements had a factorization into two nonunits, the positive integer norms of the factors would both have to be $3$. But
>
> $$
> a^2+5b^2=3
> $$
>
> has no integer solution: $b=0$ would require $a^2=3$, while $|b|\ge1$ makes the left side at least $5$. Therefore no such factorization exists, and all three displayed elements are irreducible.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Exercises/Exercise R151 - Irreducibles and Units in Z Square Root Minus Five|Exercise R151]]

## Notes

- **Routing:** Norm calculations decide ring closure, units, and irreducibility, so Ring Theory is primary.
- **Cross-source boundary:** R151 studies different irreducible elements in the same ring. The overlap is partial rather than a duplicate numbered task.
- **Source status:** All four parts were visually checked at [S2, Ch. II, Ex. 10, printed p. 115, PDF p. 130]. The proofs are independent.

