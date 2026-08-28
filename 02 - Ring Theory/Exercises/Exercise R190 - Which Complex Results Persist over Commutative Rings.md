---
title: "Exercise R190: Which Complex Results Persist over Commutative Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-identities
  - source-boundaries
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 3, Identities, Ex. 3.4, printed pp. 437–438, PDF pp. 449–450"
created: 2026-08-28
---

# Exercise R190: Which Complex Results Persist over Commutative Rings

## Problem Statement

> [!question] Exercise 3.4
> In each case, decide whether or not permanence of identities allows the result to be carried over from the complex numbers to an arbitrary commutative ring.
>
> **(a)** the associative law for matrix multiplication;
>
> **(b)** the Cayley–Hamilton Theorem;
>
> **(c)** Cramer's Rule;
>
> **(d)** the product rule, quotient rule, and chain rule for differentiation of polynomials;
>
> **(e)** the fact that a polynomial of degree $n$ has at most $n$ roots;
>
> **(f)** Taylor expansion of a polynomial.

## Hints

> [!hint]- Hint 1
> Ask in each case whether the assertion is an equality between polynomials with integer coefficients in formal inputs.

## Solution

> [!success]- Solution
> **(a) Yes.** Every entry of $(AB)C=A(BC)$ is the same integer polynomial in the formal matrix entries.
>
> **(b) Yes.** For a formal matrix $X$, every entry of $\chi_X(X)$ is an integer polynomial in the entries of $X$. Its vanishing over $\mathbb C$ is therefore permanent.
>
> **(c) Partly.** The adjugate identity
>
> $$
> A\operatorname{adj}(A)=\operatorname{adj}(A)A=(\det A)I
> $$
>
> is permanent. The usual division formula is valid only when $\det A$ is a unit; permanence cannot make a nonunit invertible.
>
> **(d) Product and chain rules: yes. Quotient rule: not unconditionally.** Formal differentiation gives integer-polynomial identities
>
> $$
> (fg)'=f'g+fg'
> $$
>
> and the polynomial chain rule. The quotient rule requires division by $g^2$ and applies only where the required inverse exists.
>
> **(e) No.** This is not an identity and is false over rings with zero divisors. In $\mathbb Z/6\mathbb Z$, the degree-two polynomial $x^2-x$ has the four roots $0,1,3,4$.
>
> **(f) Not in its usual form over an arbitrary ring.** The classical coefficients $f^{(k)}(a)/k!$ require the factorials to be invertible. The formula works over a $\mathbb Q$-algebra, or over rings of suitable characteristic up to the relevant degree. Over arbitrary rings it must be replaced by the integral Hasse-derivative expansion.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Exercises/Exercise R189 - Testing Polynomial Identities over the Reals|Testing Polynomial Identities over the Reals]]

## Notes

- **Routing:** Ring Theory is primary because universal substitution and the availability of units distinguish the valid transfers.
- **Source status:** [S1, Ch. 14, §14.3, Ex. 3.4, printed pp. 437–438, PDF pp. 449–450]. Each qualification and counterexample is independently supplied.
