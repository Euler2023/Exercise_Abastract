---
title: "Exercise R5: Squares in a Rational Function Field"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - unique-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 9, Ex. 9.1, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise R5: Squares in a Rational Function Field

## Problem Statement

> [!question] Exercise
> Let $f(x)$ be a polynomial with coefficients in a field $F$. Prove that if there is a rational function $r(x)$ such that $r^2=f$, then $r$ is a polynomial.

## Hints

> [!hint]- Hint 1
> Write $r=a/b$ with $a,b\in F[x]$ relatively prime.

> [!hint]- Hint 2
> From $a^2=fb^2$, consider an irreducible divisor of $b$.

## Solution

> [!success]- Solution
> Write
> $$
> r=\frac ab,
> \qquad a,b\in F[x],\quad \gcd(a,b)=1.
> $$
> The equation $r^2=f$ gives
> $$
> a^2=fb^2.
> $$
> If $b$ were nonconstant, an irreducible polynomial $\pi$ would divide $b$. Then $\pi\mid a^2$, so primality of irreducibles in the UFD $F[x]$ would give $\pi\mid a$. This contradicts $\gcd(a,b)=1$. Thus $b$ is a unit of $F[x]$, and consequently $r=a/b\in F[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

This is an independently derived UFD proof of the statement printed in S1. No algebraic-closure assumption on $F$ is used.
