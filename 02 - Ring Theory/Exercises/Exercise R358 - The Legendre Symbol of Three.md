---
title: "Exercise R358: The Legendre Symbol of Three"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 9, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise R358: The Legendre Symbol of Three

## Problem Statement

> [!question] Neukirch I.8.9
> Study the Legendre symbol $\left(\frac3p\right)$ as a function of $p>3$. Show that the property of $3$ being a quadratic residue or nonresidue mod $p$ depends only on the class of $p$ mod $12$.

As in the surrounding source discussion, $p$ is an odd prime.

## Hints

> [!hint]- Hint 1
> Apply quadratic reciprocity to the distinct odd primes $3$ and $p$.

> [!hint]- Hint 2
> The factor $\left(\frac p3\right)$ depends on $p\bmod3$, and the reciprocity sign depends on $p\bmod4$.

> [!hint]- Hint 3
> A prime $p>3$ lies in one of the classes $1,5,7,11\bmod12$. Evaluate both factors in each class.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Quadratic reciprocity gives
> $$
> \left(\frac3p\right)\left(\frac p3\right)
> =(-1)^{(p-1)/2}.
> $$
> Since $\left(\frac p3\right)\in\{1,-1\}$ is its own inverse,
> $$
> \left(\frac3p\right)=(-1)^{(p-1)/2}\left(\frac p3\right).
> $$
> The only nonzero square modulo $3$ is $1$, so $\left(\frac p3\right)$ is $1$ for $p\equiv1\bmod3$ and $-1$ for $p\equiv2\bmod3$. The other factor is $1$ for $p\equiv1\bmod4$ and $-1$ for $p\equiv3\bmod4$.
>
> Combining these evaluations in the four possible classes gives
> $$
> \left(\frac3p\right)=
> \begin{cases}
> 1,&p\equiv1,11\pmod{12},\\
> -1,&p\equiv5,7\pmod{12}.
> \end{cases}
> $$
> Indeed the respective pairs of factors are $(1,1)$, $(1,-1)$, $(-1,1)$, and $(-1,-1)$ for classes $1,5,7,11$. Thus $3$ is a residue exactly for $p\equiv\pm1\bmod12$, and a nonresidue exactly for $p\equiv\pm5\bmod12$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields]]
- [[03 - Field Theory/Concepts/Finite Fields]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 9, printed p. 53, PDF p. 72]. No source figure is required.
- **Source input and proof status:** The calculation is independent, using Gauss's reciprocity law [S4, Ch. I, §8, Theorem (8.6), printed p. 51, PDF p. 70]. The Legendre-symbol definition is on printed p. 50 / PDF p. 69. The four-class evaluation is expanded above.
- **Boundary and routing:** The hypothesis $p>3$ excludes the prime divisors of $12$ and ensures the symbol is nonzero. Ring Theory is primary because the proof computes a residue character through integer congruence classes.

