---
title: "Exercise R434: Rational Algebraic Integers Are Integers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.4, Exercise 6.4.3, printed p. 237, PDF p. 251"
source_refs:
  - "S7/ch-6/sec-4/ex-3"
created: 2026-10-28
---

# Exercise R434: Rational Algebraic Integers Are Integers

## Problem Statement

> [!question] Original Exercise 6.4.3
> Show that $\overline{\mathbb Z}\cap\mathbb Q=\mathbb Z$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Write a rational algebraic integer as $a/b$ in lowest terms with $b>0$.

> [!hint]- Hint 2
> Clear $b^n$ in a monic polynomial equation and reduce modulo $b$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Every integer $a$ is a root of the monic integer polynomial $x-a$, so $\mathbb Z\subseteq\overline{\mathbb Z}\cap\mathbb Q$.
>
> Conversely let $\alpha=a/b$ be rational with $a,b\in\mathbb Z$, $b>0$, and $\gcd(a,b)=1$, and suppose it satisfies
> $$
> \alpha^n+c_1\alpha^{n-1}+\cdots+c_n=0,\qquad c_i\in\mathbb Z.
> $$
> Multiplying by $b^n$ gives
> $$
> a^n+c_1a^{n-1}b+\cdots+c_nb^n=0.
> $$
> Thus $b\mid a^n$. Coprimality implies $\gcd(a^n,b)=1$, so $b=1$ and $\alpha\in\mathbb Z$. This proves both inclusions.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Notation:** The source writes $\overline{\mathbb Z}$ for all complex algebraic integers.
- **Routing:** The monic equation and integer divisibility provide the proof.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
