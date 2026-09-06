---
title: "Exercise R232: The Integral Root Test over a UFD"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 6, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R232: The Integral Root Test over a UFD

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 6
> Prove the integral root test of §3.
>
> **Referenced statement (Proposition 3.3).** Let $A$ be a factorial ring and $K$ its quotient field. Let $f(X)=a_nX^n+\cdots+a_0\in A[X]$, with $a_n\ne0$. If $\alpha=b/d\in K$ is a root, where $d\ne0$ and $b,d$ are relatively prime, then $b\mid a_0$ and $d\mid a_n$. In particular, if $a_n=1$, then $\alpha\in A$ and $\alpha$ divides $a_0$.

## Hints

> [!hint]- Hint 1
> Multiply $f(b/d)=0$ by $d^n$.

> [!hint]- Hint 2
> Use unique factorization to cancel powers relatively prime to the proposed divisor.

## Solution

> [!success]- Solution
> ### Approach
> Multiply $f(b/d)=0$ by $d^n$.
>
> ### Proof
> The equality after clearing denominators is
> $$
> a_nb^n+a_{n-1}b^{n-1}d+\cdots+a_1bd^{n-1}+a_0d^n=0.
> $$
> Every term except the first is divisible by $d$, so $d\mid a_nb^n$. Since $\gcd(b,d)=1$, each prime-power factor of $d$ must divide $a_n$. Hence $d\mid a_n$.
>
> Every term except the last is divisible by $b$, so $b\mid a_0d^n$. If $b\ne0$, unique factorization and $\gcd(b,d)=1$ similarly give $b\mid a_0$. If $b=0$, the root equation gives $a_0=0$, so this divisibility still holds under $0\mid0$; relative primality also forces $d$ to be a unit.
>
> If $a_n=1$, the divisibility $d\mid1$ makes $d$ a unit. Thus $\alpha=bd^{-1}\in A$, and $\alpha$ is associated to $b$ when nonzero, proving the last assertion. A nonzero constant polynomial has no root, so that boundary is vacuous.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Referenced proposition:** [S2, Ch. IV, §3, Proposition 3.3, printed p. 185, PDF p. 200]. “Factorial ring” means unique factorization domain.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 6, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
