---
title: "Exercise AG20: Compactness of a Complete Discrete Valuation Ring"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - discrete-valuations
  - compactness
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 8, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise AG20: Compactness of a Complete Discrete Valuation Ring

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 8
> If $K$ is a field complete with respect to a discrete valuation, with finite residue class field, and if $\mathfrak o$ is the ring of elements of $K$ whose orders are $\geq 0$, show that $\mathfrak o$ is compact. Show that the group of units of $\mathfrak o$ is closed in $\mathfrak o$ and is compact.

## Hints

> [!hint]- Hint 1: Finite residue approximations
> If $\pi$ is a uniformizer and the residue field has $q$ elements, count the cosets of $\pi^r\mathfrak o$ in $\mathfrak o$ for each $r\geq1$.

> [!hint]- Hint 2: Extract a convergent subsequence
> From a sequence in $\mathfrak o$, successively choose infinite subsequences constant modulo $\pi,\pi^2,\ldots$. Use completeness on a diagonal subsequence.

> [!hint]- Hint 3: Locate the units
> An element of $\mathfrak o$ is a unit exactly when its order is $0$. Express the complement of the unit group as $\pi\mathfrak o$.

## Solution

> [!success]- Solution
> Let $\pi$ be a uniformizer, write $\operatorname{ord}(\pi)=1$, and let $k=\mathfrak o/\pi\mathfrak o$ have $q<\infty$ elements. For every $r\geq1$, the successive quotients
>
> $$
> \pi^j\mathfrak o/\pi^{j+1}\mathfrak o\cong k
> \qquad(0\leq j<r)
> $$
>
> show that $\mathfrak o/\pi^r\mathfrak o$ has $q^r$ elements. Each coset $a+\pi^r\mathfrak o$ is a ball of valuation radius $|\pi|^r$, so these finitely many cosets cover $\mathfrak o$ by arbitrarily small balls.
>
> Here is a direct compactness argument. Given any sequence $(x_i)$ in $\mathfrak o$, one residue class modulo $\pi$ contains infinitely many terms. Within those terms, one residue class modulo $\pi^2$ contains infinitely many; continue recursively. Choose the diagonal subsequence $(x_{i_r})$ with its terms from stage $r$ onward lying in one class modulo $\pi^r$. For $s,t\geq r$, we then have $x_{i_s}-x_{i_t}\in\pi^r\mathfrak o$, so the diagonal subsequence is Cauchy. The field $K$ is complete, and $\mathfrak o=\{x\in K:|x|\leq1\}$ is closed, so the subsequence converges in $\mathfrak o$. Thus $\mathfrak o$ is sequentially compact, hence compact because it is a metric space.
>
> The nonunits of the discrete valuation ring are precisely its maximal ideal $\pi\mathfrak o$. This ideal is open in $\mathfrak o$: around any $x\in\pi\mathfrak o$, the ball $x+\pi\mathfrak o$ lies in it. Its complement $\mathfrak o^\times$ is also open, since $x+\pi\mathfrak o$ consists of units whenever $x$ is a unit. Therefore the unit group is closed in $\mathfrak o$, and a closed subset of the compact space $\mathfrak o$ is compact.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Routing:** Finite residue quotients, complete discrete valuations, and compact valuation rings form the main toolkit, so this is filed under Arithmetic Geometry.
- **Source and proof status:** The condition $\operatorname{ord}(x)\geq0$ is visually verified at [S2, Ch. XII, Ex. 8, printed p. 496, PDF p. 511]. Lang poses the compactness assertions as an exercise; the subsequence proof above is independent. The metric-space fact that sequential compactness implies compactness is the stated topological input.
- **Convention:** The additive order $\operatorname{ord}$ is related to Lang's multiplicative absolute value by $|x|=|\pi|^{\operatorname{ord}(x)}$.
