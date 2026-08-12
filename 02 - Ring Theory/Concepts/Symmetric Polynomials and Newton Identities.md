---
title: Symmetric Polynomials and Newton Identities
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - symmetric-polynomials
created: 2026-08-12
---

# Symmetric Polynomials and Newton Identities

## Definition

> [!info] Symmetric polynomial
> A polynomial $f(u_1,\ldots,u_n)$ is symmetric if
> $$
> f(u_{\sigma(1)},\ldots,u_{\sigma(n)})=f(u_1,\ldots,u_n)
> $$
> for every $\sigma\in S_n$. The elementary symmetric polynomials are
> $$
> s_k=\sum_{1\le i_1<\cdots<i_k\le n}u_{i_1}\cdots u_{i_k}.
> $$

## Intuition

Symmetric expressions depend on an unordered collection of roots rather than a chosen labeling. This is why coefficients of a monic polynomial, which are signed elementary symmetric functions of its roots, remain in the base field.

## Key Properties

- The fundamental theorem of symmetric polynomials states that every symmetric polynomial is uniquely a polynomial in $s_1,\ldots,s_n$.
- The power sums $w_k=\sum_i u_i^k$ satisfy Newton's identities
  $$
  w_k-s_1w_{k-1}+\cdots+(-1)^kks_k=0\qquad(k\le n).
  $$
- If $1,\ldots,n$ are invertible in the coefficient ring, $w_1,\ldots,w_n$ generate the symmetric-polynomial ring; this can fail in positive characteristic.
- Alternating polynomials are divisible by the Vandermonde product $\prod_{i<j}(u_i-u_j)$.

## Examples

> [!example] Three variables
> $$
> u_1^3+u_2^3+u_3^3=s_1^3-3s_1s_2+3s_3.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Exercises

- [[02 - Ring Theory/Exercises/Exercise R7 - Orbits and Symmetric Polynomials|Exercise R7]]
- [[02 - Ring Theory/Exercises/Exercise R8 - Bases for Symmetric Polynomials|Exercise R8]]
- [[02 - Ring Theory/Exercises/Exercise R9 - Newton Identities and Power Sums|Exercise R9]]
- [[02 - Ring Theory/Exercises/Exercise R14 - Four Variable Discriminant|Exercise R14]]
- [[02 - Ring Theory/Exercises/Exercise R16 - Alternating Orbit and Discriminant|Exercise R16]]
- [[02 - Ring Theory/Exercises/Exercise R17 - Half Symmetric Polynomials|Exercise R17]]
- [[05 - Galois Theory/Exercises/Exercise Gal60 - Generic Symmetric Functions and Inverse Galois|Exercise Gal60]]

## Source and Proof Status

Definitions and Newton identities follow [S1, Ch. 16, §1, printed p. 477ff.; exercises printed p. 505, PDF p. 517]. The generating statement includes the characteristic boundary made explicit in Exercise R9.
