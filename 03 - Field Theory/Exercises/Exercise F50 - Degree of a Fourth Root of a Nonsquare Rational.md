---
title: "Exercise F50: Degree of a Fourth Root of a Nonsquare Rational"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - radical-extensions
  - extension-degree
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.6, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F50: Degree of a Fourth Root of a Nonsquare Rational

## Problem Statement

> [!question] Exercise 3.6
> Let $a$ be a positive rational number that is not a square in $\mathbb Q$. Prove that $\sqrt[4]{a}$ has degree $4$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Use the tower $\mathbb Q\subset\mathbb Q(\sqrt a)\subset\mathbb Q(\sqrt[4]a)$ and rule out $\sqrt[4]a\in\mathbb Q(\sqrt a)$.

## Solution

> [!success]- Solution
> Put $u=\sqrt[4]{a}$. Since $a$ is not a rational square,
>
> $$
> [\mathbb Q(\sqrt a):\mathbb Q]=2.
> $$
>
> If $u\in\mathbb Q(\sqrt a)$, write $u=r+s\sqrt a$ with $r,s\in\mathbb Q$. Squaring and using $u^2=\sqrt a$ gives
>
> $$
> r^2+as^2+2rs\sqrt a=\sqrt a.
> $$
>
> Linear independence of $1$ and $\sqrt a$ yields $r^2+as^2=0$ and $2rs=1$. But $a>0$, so the first equality forces $r=s=0$ in $\mathbb R$, contradicting the second. Thus $u\notin\mathbb Q(\sqrt a)$.
>
> Since $u$ satisfies $x^2-\sqrt a$ over $\mathbb Q(\sqrt a)$, its degree over that field is exactly $2$. The tower law now gives
>
> $$
> [\mathbb Q(u):\mathbb Q]=2\cdot2=4.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Field Theory is primary because the result follows from a two-step radical tower.
- **Hypothesis boundary:** Positivity is used in the elementary contradiction $r^2+as^2=0$ over the real numbers.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.6, printed p. 473, PDF p. 485]. The proof is independent.
