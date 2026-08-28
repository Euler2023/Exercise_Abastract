---
title: "Exercise R162: The Coordinate Ring of a Cubic Curve Is a Domain"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - integral-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 5, Factoring Ideals, Ex. 5.3, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R162: The Coordinate Ring of a Cubic Curve Is a Domain

## Problem Statement

> [!question] Exercise 5.3
> Let $f=y^2-x^3-x$. Is the ring $\mathbb C[x,y]/(f)$ an integral domain?

## Hints

> [!hint]- Hint 1
> Regard $f$ as a quadratic polynomial in $y$ over the field $\mathbb C(x)$.

> [!hint]- Hint 2
> The rational function $x^3+x=x(x-i)(x+i)$ is not a square because its three zeros have odd multiplicity.

## Solution

> [!success]- Solution
> Yes. Regard
>
> $$
> f=y^2-(x^3+x)
> $$
>
> as a polynomial in $y$ over $\mathbb C(x)$. A quadratic $y^2-g$ over a field of characteristic different from $2$ is reducible exactly when $g$ is a square. But
>
> $$
> x^3+x=x(x-i)(x+i)
> $$
>
> is not a square in $\mathbb C(x)$: its valuations at $x=0,i,-i$ are all $1$, whereas every zero or pole of a rational square has even valuation. Hence $f$ is irreducible in $\mathbb C(x)[y]$.
>
> The polynomial is primitive as an element of the UFD $\mathbb C[x][y]$. Gauss's lemma therefore implies that it is irreducible in $\mathbb C[x,y]$. In a UFD every irreducible element is prime, so $(f)$ is a prime ideal. Consequently
>
> $$
> \boxed{\mathbb C[x,y]/(f)\text{ is an integral domain}.}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Routing:** Ring Theory is primary because irreducibility in a polynomial UFD is converted into primality of the defining ideal.
- **External input:** Gauss's lemma and the fact that irreducibles are prime in a UFD are the named standard inputs.
- **Source status:** The problem is from [S1, Ch. 13, §13.5, Ex. 5.3, printed p. 409, PDF p. 421]. The valuation and Gauss-lemma proof is independent.
