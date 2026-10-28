---
title: "Exercise R435: Clearing Denominators of an Algebraic Number"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.4, Exercise 6.4.4, printed p. 237, PDF p. 251"
source_refs:
  - "S7/ch-6/sec-4/ex-4"
created: 2026-10-28
---

# Exercise R435: Clearing Denominators of an Algebraic Number

## Problem Statement

> [!question] Original Exercise 6.4.4
> Show that every algebraic number takes the form of an algebraic integer divided by a rational integer. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Choose a monic rational polynomial for $\alpha$ and a positive integer $D$ clearing all coefficient denominators.

> [!hint]- Hint 2
> Substitute $\beta=D\alpha$ and multiply the degree-$n$ equation by $D^n$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\alpha$ satisfy
> $$
> \alpha^n+c_1\alpha^{n-1}+\cdots+c_n=0,\qquad c_i\in\mathbb Q.
> $$
> Choose $D\in\mathbb Z_{>0}$ such that $Dc_i\in\mathbb Z$ for every $i$. Put $\beta=D\alpha$. Multiplying the equation by $D^n$ gives
> $$
> \beta^n+(Dc_1)\beta^{n-1}+(D^2c_2)\beta^{n-2}+\cdots+D^nc_n=0.
> $$
> For $i\ge1$ the coefficient $D^ic_i=D^{i-1}(Dc_i)$ is an integer. Thus $\beta$ is an algebraic integer, and $\alpha=\beta/D$ has the required form with nonzero rational integer denominator.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Boundary:** Clearing the denominators of the polynomial coefficients makes $D\alpha$ integral; it does not require $\alpha$ itself to be integral.
- **Routing:** Denominator clearing in a monic integrality equation is the main tool.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
