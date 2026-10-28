---
title: "Exercise G364: The Three Cusp Sets at Level Ten"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.6, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-6"
created: 2026-10-28
---

# Exercise G364: The Three Cusp Sets at Level Ten

## Problem Statement

> [!question] Original Exercise 3.8.6
> Find the cusps of $\Gamma(10)$, of $\Gamma_1(10)$, and of $\Gamma_0(10)$.

## Hints

> [!hint]- Hint 1
> First list primitive columns modulo ten up to sign. Then quotient by translations in the top entry.

> [!hint]- Hint 2
> For $\Gamma_0(10)$ all four divisor classes contribute one cusp.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\Gamma(10)$, the following is a complete list of primitive columns modulo ten up to simultaneous sign:
>
> | $c$ | Upper residues $a$ | Number |
> |---|---|---|
> | $0$ | $1,3$ | $2$ |
> | $1$ | $0,1,\ldots,9$ | $10$ |
> | $2$ | $1,3,5,7,9$ | $5$ |
> | $3$ | $0,1,\ldots,9$ | $10$ |
> | $4$ | $1,3,5,7,9$ | $5$ |
> | $5$ | $1,2,3,4$ | $4$ |
>
> Rows with $6\le c\le9$ are paired with $4\ge c\ge1$ by sign. In the self-paired rows $c=0,5$, the listed upper residues choose one from each sign pair. To turn the table into rational cusp representatives, use $\infty,3/10$ for $c=0$; use $a/c$ for all other entries except $c=3$, $a=0,3,6,9$, where use $(a+10)/3$. These fractions are primitive and lift exactly the indicated residues. Thus there are $36$ distinct cusps, agreeing with $\tfrac12\cdot10^2(1-2^{-2})(1-5^{-2})=36$.
>
> For $\Gamma_1(10)$, numerator residues are further identified modulo $\gcd(c,10)$ and signs identify the lower rows. A complete rational list is
> $$
> \infty,\quad 3/10,\quad 0,\quad1/2,\quad10/3,\quad1/4,\quad1/5,\quad2/5.
> $$
> They arise respectively from the rows $c=0$ (two), $1,2,3,4$ (one each), and $5$ (two). At $c=5$, the unit numerator classes modulo five pair under sign as $\{1,4\}$ and $\{2,3\}$. The formula $\tfrac12\sum_{d\mid10}\varphi(d)\varphi(10/d)=8$ checks the count.
>
> For $\Gamma_0(10)$, each divisor $d=1,2,5,10$ has $\gcd(d,10/d)=1$, so there is one cusp for each denominator gcd. Representatives are
> $$
> 0,\qquad1/2,\qquad1/5,\qquad\infty.
> $$
> Their widths are $10,5,2,1$, summing to the index $18$. Every list is a list of group orbits; fractions within a list are pairwise inequivalent under its specified group.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
