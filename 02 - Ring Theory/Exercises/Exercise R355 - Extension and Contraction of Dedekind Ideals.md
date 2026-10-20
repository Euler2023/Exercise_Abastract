---
title: "Exercise R355: Extension and Contraction of Dedekind Ideals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 1, printed p. 52, PDF p. 71"
created: 2026-10-20
---

# Exercise R355: Extension and Contraction of Dedekind Ideals

## Problem Statement

> [!question] Neukirch I.8.1
> If $\mathfrak a$ and $\mathfrak b$ are ideals of $\mathfrak o$, then one has $\mathfrak a=\mathfrak a\mathcal O\cap\mathfrak o$ and $\mathfrak a\mid\mathfrak b\Longleftrightarrow\mathfrak a\mathcal O\mid\mathfrak b\mathcal O$.

In the section's setting, $\mathfrak o$ is an arbitrary Dedekind domain with fraction field $K$, $L/K$ is finite, and $\mathcal O$ is the integral closure of $\mathfrak o$ in $L$. In the source, ideal divisibility means reverse inclusion.

## Hints

> [!hint]- Hint 1
> First note that $\mathcal O\cap K=\mathfrak o$, since $\mathfrak o$ is integrally closed in $K$.

> [!hint]- Hint 2
> For $\mathfrak a\ne0$, use its fractional-ideal inverse. If $x\in\mathfrak a\mathcal O\cap\mathfrak o$, where does $x\mathfrak a^{-1}$ lie?

> [!hint]- Hint 3
> Multiply the inclusion $x\mathfrak a^{-1}\subseteq\mathfrak o$ by $\mathfrak a$. Recover inclusions of ideals by contraction.

## Solution

> [!success]- Independent derivation
> Since every element of $\mathcal O\cap K$ is integral over $\mathfrak o$ and $\mathfrak o$ is integrally closed, $\mathcal O\cap K=\mathfrak o$.
>
> The inclusion $\mathfrak a\subseteq\mathfrak a\mathcal O\cap\mathfrak o$ follows from $1\in\mathcal O$. If $\mathfrak a=0$, the reverse inclusion holds because all rings embed in the field $L$. Otherwise $\mathfrak a$ is invertible. For $x\in\mathfrak a\mathcal O\cap\mathfrak o$,
> $$
> x\mathfrak a^{-1}
> \subseteq\mathfrak a\mathcal O\mathfrak a^{-1}
> =\mathcal O.
> $$
> But $x\mathfrak a^{-1}\subseteq K$, so it is contained in $\mathcal O\cap K=\mathfrak o$. Multiplication by $\mathfrak a$ gives $x\mathfrak o\subseteq\mathfrak a$, and hence $x\in\mathfrak a$. This proves contraction.
>
> If $\mathfrak b\subseteq\mathfrak a$, extension gives $\mathfrak b\mathcal O\subseteq\mathfrak a\mathcal O$. Conversely that inclusion contracts to $\mathfrak b\subseteq\mathfrak a$ by the equality just proved. Under the source's reverse-inclusion definition, these two implications are exactly the asserted equivalence of divisibility. They also cover zero and unit ideals.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Ideals]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 1, printed p. 52, PDF p. 71]. No source figure is required.
- **Inputs and proof status:** This is an independent derivation using integral closedness and inversion of nonzero Dedekind ideals [S4, Ch. I, §3, Definition (3.2), printed p. 18, PDF p. 37; Proposition (3.8), printed pp. 21–22, PDF pp. 40–41]. The general extension setting is on printed pp. 44–45 / PDF pp. 63–64.
- **Boundary and routing:** No separability, number-field, or finite-residue-field hypothesis is added. The argument does not assume that an arbitrary integral extension preserves all contracted ideals: invertibility of the base ideal supplies the required step. Ring Theory is primary.

