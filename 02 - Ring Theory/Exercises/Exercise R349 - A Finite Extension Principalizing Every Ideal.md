---
title: "Exercise R349: A Finite Extension Principalizing Every Ideal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 7, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise R349: A Finite Extension Principalizing Every Ideal

## Problem Statement

> [!question] Neukirch I.6.7
> Show that, for every number field $K$, there exists a finite extension $L$ such that every ideal of $K$ becomes a principal ideal.

## Hints

> [!hint]- Hint 1: Use finitely many classes
> The finite class group has integral representatives $\mathfrak a_1,\ldots,\mathfrak a_h$. Each class has finite order $m_i$.

> [!hint]- Hint 2: Principalize every representative at once
> Write $\mathfrak a_i^{m_i}=(a_i)$ and adjoin one $m_i$th root $\alpha_i$ of each $a_i$. A finite compositum is enough.

> [!hint]- Hint 3: Return from classes to all ideals
> If $[\mathfrak b]=[\mathfrak a_i]$, then $\mathfrak b=(x)\mathfrak a_i$ for some $x\in K^\times$. Extend this equality to $\mathcal O_L$.

## Solution

> [!success]- Independent derivation
>
> **Source input.** The class group $\operatorname{Cl}(K)$ of nonzero fractional ideals modulo principal ideals is finite, by Theorem (6.3), printed p. 36 / PDF p. 55. Choose a nonzero integral representative $\mathfrak a_i$ of each of its $h$ classes. Such representatives exist by clearing denominators of fractional ideals.
>
> Let $m_i\ge1$ be the order of $[\mathfrak a_i]$. Then
> $$
> \mathfrak a_i^{m_i}=(a_i),\qquad 0\ne a_i\in\mathcal O_K.
> $$
> Choose $\alpha_i$ in an algebraic closure with $\alpha_i^{m_i}=a_i$, and form
> $$
> L=K(\alpha_1,\ldots,\alpha_h).
> $$
> This extension is finite: successive adjoining degrees are at most $m_i$, so $[L:K]\le\prod_i m_i$. All $\alpha_i$ are algebraic integers. Extending the displayed ideal equality to $\mathcal O_L$ gives
> $$
> (\mathfrak a_i\mathcal O_L)^{m_i}=(a_i)\mathcal O_L=(\alpha_i)^{m_i}.
> $$
> Unique prime-ideal factorization in the Dedekind domain $\mathcal O_L$ implies $\mathfrak a_i\mathcal O_L=(\alpha_i)$ by comparing and cancelling the positive integer $m_i$ in every prime exponent. This is the argument of I.6.6, with all relevant elements now in one common extension.
>
> For any nonzero integral ideal $\mathfrak b$ of $K$, choose $i$ with $[\mathfrak b]=[\mathfrak a_i]$. The definition of the class quotient gives $\mathfrak b=(x)\mathfrak a_i$ for some $x\in K^\times$. Therefore
> $$
> \mathfrak b\mathcal O_L=(x)(\alpha_i)=(x\alpha_i).
> $$
> This is an integral principal ideal: the left side is contained in $\mathcal O_L$, hence its generator $x\alpha_i$ belongs to $\mathcal O_L$ as well. The zero ideal is already principal. Thus every integral ideal of $K$ becomes principal in this single finite extension. The same calculation also principalizes all fractional ideals if that convention is intended.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|The Finite Ideal Class Group]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Invertible Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Extensions]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 7, printed p. 38, PDF p. 57]. No source figure is required.
- **Source inputs and proof status:** The finiteness theorem and its proof were visually checked in [S4, Ch. I, §6, Theorem (6.3), printed p. 36, PDF p. 55]. Principalization of a finite-order class is independently derived here by the method of Exercise I.6.6, printed p. 38 / PDF p. 57. The proof uses no Hilbert class field or class field theory.
- **Scope:** The constructed finite extension need not be unramified, minimal, abelian, or Galois. None of those extra properties is asserted by the exercise.
- **Routing:** The finite ideal-class quotient reduces all ideals to finitely many representatives, and ideal factorization principalizes those representatives.
