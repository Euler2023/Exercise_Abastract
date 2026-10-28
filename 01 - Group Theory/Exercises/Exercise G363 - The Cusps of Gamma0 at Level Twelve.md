---
title: "Exercise G363: The Cusps of Gamma0 at Level Twelve"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.5, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-5"
created: 2026-10-28
---

# Exercise G363: The Cusps of Gamma0 at Level Twelve

## Problem Statement

> [!question] Original Exercise 3.8.5
> Find the cusps of $\Gamma_0(12)$.

## Hints

> [!hint]- Hint 1
> Use one denominator for each divisor of twelve.

> [!hint]- Hint 2
> All six values of $\varphi(\gcd(d,12/d))$ are one.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The divisor classification gives
>
> | $d$ | $\gcd(d,12/d)$ | Number | Representative | Width $12/\gcd(c^2,12)$ |
> |---|---|---|---|---|
> | $1$ | $1$ | $1$ | $0$ | $12$ |
> | $2$ | $2$ | $1$ | $1/2$ | $3$ |
> | $3$ | $1$ | $1$ | $1/3$ | $4$ |
> | $4$ | $1$ | $1$ | $1/4$ | $3$ |
> | $6$ | $2$ | $1$ | $1/6$ | $1$ |
> | $12$ | $1$ | $1$ | $\infty$ | $1$ |
>
> The representatives are in lowest terms and have exactly the specified gcd of their denominator with twelve (the denominator of infinity is zero). For each divisor there is just one allowable numerator class modulo $\gcd(d,12/d)$, since that modulus is one or two. Therefore the table is exhaustive and its six orbits are distinct. The widths sum to $24=[\operatorname{SL}_2(\mathbb Z):\Gamma_0(12)]$, independently checking the fiber-degree count. The widths follow by conjugating $T^n$ with a matrix having first column $(a,c)^t$: the lower-left entry is $-c^2n$, so the least positive admissible $n$ is $12/\gcd(c^2,12)$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
