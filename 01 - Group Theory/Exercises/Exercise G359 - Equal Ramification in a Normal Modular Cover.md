---
title: "Exercise G359: Equal Ramification in a Normal Modular Cover"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.2, printed p. 69, PDF p. 83"
source_refs:
  - "S7/ch-3/sec-1/ex-2"
created: 2026-10-28
---

# Exercise G359: Equal Ramification in a Normal Modular Cover

## Problem Statement

> [!question] Original Exercise 3.1.2
> Show that if $\Gamma_1$ is normal in $\Gamma_2$ then all points of $X(\Gamma_1)$ lying over a given point of $X(\Gamma_2)$ have the same ramification degree. (A hint for this exercise is at the end of the book.)
>
> Here $\Gamma_1\subseteq\Gamma_2$ are congruence subgroups and the map is natural projection.

## Hints

> [!hint]- Hint 1
> All representatives of a fiber have the form $g\tau$ with $g\in\Gamma_2$.

> [!hint]- Hint 2
> Compare stabilizer indices after conjugating by $g$, treating cusps with the same formula.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $H_j=\{\pm I\}\Gamma_j$. Normality of $\Gamma_1$ in $\Gamma_2$, and centrality of $\pm I$, imply $H_1\triangleleft H_2$.
>
> The local charts give, for every $\tau\in\mathcal H^*$,
> $$
> e_{H_1\tau}=[(H_2)_\tau:(H_1)_\tau].
> $$
> For an interior point this is the ratio of its target and source periods: the local map is $q\mapsto q^{h_2/h_1}$. At a cusp this is the ratio of the source and target widths: the local map is $q\mapsto q^{w_1/w_2}$. Both ratios equal the displayed stabilizer index. These formulas are on printed p. 67 / PDF p. 81.
>
> Let $x=H_1\tau$ and $x'=H_1g\tau$ lie over the same target point, with $g\in H_2$. Conjugation by $g$ gives
> $$
> g(H_2)_\tau g^{-1}=(H_2)_{g\tau},\qquad
> g(H_1)_\tau g^{-1}=(H_1)_{g\tau}.
> $$
> The second equality uses $gH_1g^{-1}=H_1$; this is precisely where normality enters. Conjugation bijects the corresponding coset sets, so their indices are equal. Hence $e_x=e_{x'}$, for interior points and cusps alike.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 69 / PDF 83. The solution above is independently derived.
- **Imported input:** The stabilizer-index formulas are consequences of the explicit Chapter 2 coordinates, restated in the solution; normality is not assumed for a general modular-curve projection.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
