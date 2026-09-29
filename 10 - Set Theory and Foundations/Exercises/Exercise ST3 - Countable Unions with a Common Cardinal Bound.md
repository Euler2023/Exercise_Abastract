---
title: "Exercise ST3: Countable Unions with a Common Cardinal Bound"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 3, printed p. 892, PDF p. 907"
created: 2026-09-29
---

# Exercise ST3: Countable Unions with a Common Cardinal Bound

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 3
> Let $A_i$ be infinite sets for $i=1,2,\ldots$ and assume that
>
> $$
> \operatorname{card}(A_i)\le\operatorname{card}(A)
> $$
>
> for some set $A$, and all $i$. Show that
>
> $$
> \operatorname{card}\left(\bigcup_{i=1}^{\infty}A_i\right)\le\operatorname{card}(A).
> $$

## Hints

> [!hint]- Hint 1: Resolve overlapping sets
> For each element of the union, use the least index of a set containing it.

> [!hint]- Hint 2: Tag an injection
> Choose injections $f_i:A_i\to A$ and map each element to its least index together with its $f_i$-value.

## Solution

> [!success]- Complete independent derivation
> Because $A_1$ is infinite and injects into $A$, the set $A$ is infinite. Choose injections $f_i:A_i\to A$. For $x\in U=\bigcup_{i\ge1}A_i$, let $i(x)$ be the least positive index with $x\in A_{i(x)}$. Then
>
> $$
> F:U\to\mathbb Z^+\times A,\qquad F(x)=(i(x),f_{i(x)}(x))
> $$
>
> is injective: equal first coordinates give the same index $i$, and equality of the second coordinates gives $x=y$ by injectivity of $f_i$. The countable-product identity for infinite $A$ gives $|U|\le|\mathbb Z^+\times A|=|A|$. Overlaps among the $A_i$ cause no ambiguity because the index was chosen canonically.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

Statement checked at printed p. 892 / PDF p. 907. The independent proof uses choice and Theorem 3.3's cardinal identity, printed p. 887 / PDF p. 902, proved in the linked concept. The product here is $\mathbb Z^+\times A$, not the countable Cartesian power of $A$.
