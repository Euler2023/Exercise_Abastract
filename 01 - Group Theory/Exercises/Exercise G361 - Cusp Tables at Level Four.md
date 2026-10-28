---
title: "Exercise G361: Cusp Tables at Level Four"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.3, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-3"
created: 2026-10-28
---

# Exercise G361: Cusp Tables at Level Four

## Problem Statement

> [!question] Original Exercise 3.8.3
> Make a table counting the cusps of $\Gamma(4)$, of $\Gamma_1(4)$, and of $\Gamma_0(4)$.

## Hints

> [!hint]- Hint 1
> List primitive columns modulo four, then divide by simultaneous negation.

> [!hint]- Hint 2
> For $\Gamma_1(4)$ also allow $a\mapsto a+jc$; for $\Gamma_0(4)$ the only units are $\pm1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> A residue column $(a,c)^t$ modulo four represents a cusp exactly when $\gcd(a,c,4)=1$. For $\Gamma(4)$ identify $(a,c)$ with $(-a,-c)$; for $\Gamma_1(4)$ also identify $(a,c)$ with $(a+jc,c)$. The table is
>
> | Lower residues | Primitive upper residues | $\Gamma(4)$ representatives | $\Gamma_1(4)$ representatives |
> |---|---|---|---|
> | $c=0$ | $1,3$ | $\infty$ | $\infty$ |
> | $c=1,3$ | all four in each row | $0,1,2,3$ | $0$ |
> | $c=2$ | $1,3$ | $1/2$ | $1/2$ |
> | Total | $12$ columns | $6$ cusps | $3$ cusps |
>
> All displayed rational representatives are primitive integer lifts of the indicated columns. In the middle row, negation pairs the two lower rows, leaving four classes; translation then merges those four. In the last row the two upper residues already pair by negation. Finally every unit modulo four is $\pm1$, so $\Gamma_0(4)=\{\pm I\}\Gamma_1(4)$ and the two groups have the same cusp orbits. Thus $\Gamma_0(4)$ has exactly the same three representatives $\infty,0,1/2$. As a check, $\sum_{d\mid4}\varphi(\gcd(d,4/d))=1+1+1=3$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
