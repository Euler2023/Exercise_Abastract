---
title: "Exercise R365: An Integral Localization of a Domain Is Trivial"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 6, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise R365: An Integral Localization of a Domain Is Trivial

## Problem Statement

> [!question] Neukirch I.11.6
> Let $A$ be an integral domain. If the localization $A_S$ is integral over $A$, then $A_S=A$.

## Hints

> [!hint]- Hint 1: Test inverse denominators
> For every $s\in S$, the element $1/s\in A_S$ satisfies a monic equation over $A$ by hypothesis.

> [!hint]- Hint 2: Clear one fewer power of the denominator
> If $(1/s)^m+a_{m-1}(1/s)^{m-1}+\cdots+a_0=0$, multiply by $s^{m-1}$ to express $1/s$ as an element of $A$.

> [!hint]- Hint 3: Every fraction then lies in the original ring
> All $s\in S$ are units of $A$, so $a/s\in A$ for every $a\in A$. The reverse inclusion is canonical.

## Solution

> [!success]- Independent derivation
> Use the source convention $1\in S$, $0\notin S$. Since $A$ is a domain, the canonical map $A\to A_S$ is injective and identifies $A_S$ with the subring of $\operatorname{Frac}(A)$ consisting of the fractions $a/s$.
>
> Fix $s\in S$. By integrality, $x=1/s$ satisfies some monic equation
> $$
> x^m+a_{m-1}x^{m-1}+\cdots+a_1x+a_0=0,
> \qquad m\ge1,\quad a_i\in A.
> $$
> Substitute $x=1/s$ and multiply by $s^{m-1}$. This yields
> $$
> \frac1s=-a_{m-1}-a_{m-2}s-\cdots-a_0s^{m-1}\in A,
> $$
> where for $m=1$ the right side is simply $-a_0$. Thus every $s\in S$ is already a unit of $A$.
>
> Every element of $A_S$ has the form $a/s=a(1/s)$, which now belongs to $A$. Since $A$ is contained in $A_S$, equality follows. In particular, no integrally closed hypothesis on $A$ is required: the special form of the element $1/s$ makes the monic equation sufficient.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 6, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Proof scope:** This is a direct independent monic-equation calculation. The domain and $0\notin S$ hypotheses justify viewing localization as an actual intermediate ring in the fraction field. No normality or Noetherian theorem is used.
- **Boundary:** Allowing $0\in S$ would give the zero ring and destroy the asserted inclusion of a nonzero domain. The source localization context excludes that case for this exercise.
- **Routing:** Integrality and invertibility of denominators are primary, so Ring Theory is the destination.
