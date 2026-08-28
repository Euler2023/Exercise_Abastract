---
title: "Exercise R109: Infinitely Many Monic Irreducible Polynomials"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - euclid-argument
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.4, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R109: Infinitely Many Monic Irreducible Polynomials

## Problem Statement

> [!question] Exercise 2.4
> Euclid proved that there are infinitely many prime integers in the following way: if $p_1,\ldots,p_k$ are primes, then any prime factor $p$ of $(p_1\cdots p_k)+1$ must be different from all of the $p_i$. Adapt this argument to prove that for any field $F$ there are infinitely many monic irreducible polynomials in $F[x]$.

## Hints

> [!hint]- Hint 1
> Suppose all monic irreducibles have been listed and add $1$ to their product.

> [!hint]- Hint 2
> A nonconstant polynomial over a field has an irreducible factor; this follows by induction on degree.

## Solution

> [!success]- Solution
> Suppose, for contradiction, that the monic irreducible polynomials in $F[x]$ are exactly
>
> $$
> p_1(x),\ldots,p_k(x).
> $$
>
> Their product $P=p_1\cdots p_k$ is monic and nonconstant. Hence
>
> $$
> h(x)=P(x)+1
> $$
>
> is also monic and nonconstant. Every nonconstant polynomial over a field has an irreducible factor: if it is not already irreducible, factor it into two polynomials of smaller positive degree and continue by induction.
>
> Let $q$ be a monic irreducible factor of $h$. By the assumed completeness of the list, $q=p_i$ for some $i$. Then $q$ divides both $P$ and $P+1$, so it divides their difference $1$. This is impossible for a nonconstant polynomial.
>
> Thus no finite list can contain all monic irreducible polynomials in $F[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because the proof concerns irreducible elements and divisibility in $F[x]$.
- **Boundary:** The argument works for finite and infinite fields alike and does not depend on counting field elements.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.4, printed p. 379, PDF p. 391]. The solution is an independent adaptation of Euclid's argument.

