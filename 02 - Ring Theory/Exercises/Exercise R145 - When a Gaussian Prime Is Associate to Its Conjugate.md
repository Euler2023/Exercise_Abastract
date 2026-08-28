---
title: "Exercise R145: When a Gaussian Prime Is Associate to Its Conjugate"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - associates
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.5, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R145: When a Gaussian Prime Is Associate to Its Conjugate

## Problem Statement

> [!question] Exercise 5.5
> Let $\pi$ be a Gauss prime. Prove that $\pi$ and $\overline\pi$ are associates if and only if $\pi$ is an associate of an integer prime, or $\overline\pi\pi=2$.

## Hints

> [!hint]- Hint 1
> Write $\pi=a+bi$ and inspect the four possible equations $\overline\pi=u\pi$ for $u\in\{\pm1,\pm i\}$.

> [!hint]- Hint 2
> In the cases $a=b$ or $a=-b$, primality forces the common integer coefficient to be a unit.

## Solution

> [!success]- Solution
> If $\pi$ is associate to an integer prime $p$, then conjugation leaves $p$ fixed and sends units to units, so $\overline\pi$ is also associate to $p$ and hence to $\pi$. If $\overline\pi\pi=2$, then $\pi$ is associate to $1+i$, whose conjugate $1-i=-i(1+i)$ is associate to it.
>
> Conversely, suppose $\overline\pi=u\pi$ for a unit $u\in\{\pm1,\pm i\}$, and write $\pi=a+bi$.
>
> - If $u=1$, comparison of imaginary parts gives $b=0$. Thus $\pi$ is a real Gaussian prime and hence associate to an integer prime.
> - If $u=-1$, comparison of real parts gives $a=0$. Thus $\pi=bi$ is associate to the integer prime $b$.
> - If $u=i$, comparison gives $a=-b$, so $\pi=a(1-i)$. Since $\pi$ is prime, $a$ must be a unit of $\mathbb Z$, and $N(\pi)=2$.
> - If $u=-i$, comparison gives $a=b$, so $\pi=a(1+i)$. Again $a=\pm1$ and $N(\pi)=2$.
>
> These are exactly the two alternatives in the statement.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because units, associates, conjugation, and prime elements determine the cases.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.5, printed p. 381, PDF p. 393]. The case analysis is independent.

