---
title: "Exercise R117: Relative Primality and Integer Combinations"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-gcd
  - bezout-identity
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 3, Gauss's Lemma, Ex. 3.2, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R117: Relative Primality and Integer Combinations

## Problem Statement

> [!question] Exercise 3.2
> Prove that two integer polynomials are relatively prime elements of $\mathbb Q[x]$ if and only if the ideal they generate in $\mathbb Z[x]$ contains an integer.

> [!warning] Source issue
> Read literally, every ideal contains the integer $0$. The mathematically meaningful—and evidently intended—condition is that the ideal contains a **nonzero** integer. The proof below preserves the printed wording above and proves this corrected interpretation.

## Hints

> [!hint]- Hint 1
> Use Bézout's identity in the PID $\mathbb Q[x]$ and clear all coefficient denominators.

> [!hint]- Hint 2
> Conversely, a nonconstant common divisor cannot divide a nonzero constant polynomial.

## Solution

> [!success]- Solution
> Let $f,g\in\mathbb Z[x]$.
>
> Suppose first that $f$ and $g$ are relatively prime in $\mathbb Q[x]$. Since $\mathbb Q[x]$ is a principal ideal domain, there are $A,B\in\mathbb Q[x]$ such that
>
> $$
> Af+Bg=1.
> $$
>
> Choose a positive integer $N$ divisible by every denominator occurring among the coefficients of $A$ and $B$. Then $A_0=NA$ and $B_0=NB$ lie in $\mathbb Z[x]$, and
>
> $$
> A_0f+B_0g=N.
> $$
>
> Thus the ideal $(f,g)\subseteq\mathbb Z[x]$ contains the nonzero integer $N$.
>
> Conversely, suppose that
>
> $$
> Af+Bg=N\neq0
> $$
>
> for some $A,B\in\mathbb Z[x]$ and $N\in\mathbb Z$. Any common divisor $d\in\mathbb Q[x]$ of $f$ and $g$ divides the left-hand side and hence divides the nonzero constant $N$. Therefore $d$ must itself be constant, hence a unit of $\mathbb Q[x]$. So $f$ and $g$ are relatively prime in $\mathbb Q[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the equivalence compares polynomial divisibility with ideal membership.
- **Source ambiguity:** The missing word “nonzero” is stated visibly rather than silently inserted into the transcription.
- **Source status:** The printed problem is from [S1, Ch. 12, §12.3, Ex. 3.2, printed p. 379, PDF p. 391]. The corrected interpretation and proof are independent.

