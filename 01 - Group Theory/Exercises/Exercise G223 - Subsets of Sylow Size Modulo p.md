---
title: "Exercise G223: Subsets of Sylow Size Modulo p"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.1, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G223: Subsets of Sylow Size Modulo p

## Problem Statement

> [!question] Exercise 7.1
> Let $n=p^e m$ with $p\nmid m$, and let $N$ be the number of subsets of order $p^e$ in a set of order $n$. Determine $N$ modulo $p$.

## Hints

> [!hint]- Hint 1
> Apply Lucas's congruence to $\binom{p^e m}{p^e}$.

## Solution

> [!success]- Solution
> Since $N=\binom{p^e m}{p^e}$, Lucas's theorem in base $p$ gives
>
> $$
> N\equiv\binom{m}{1}\equiv m\pmod p.
> $$
>
> Equivalently, the same congruence follows by comparing the coefficient of $X^{p^e}$ in $(1+X)^{p^e m}\equiv(1+X^{p^e})^m\pmod p$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.1, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
