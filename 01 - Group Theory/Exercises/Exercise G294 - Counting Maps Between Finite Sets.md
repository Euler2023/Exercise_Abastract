---
title: "Exercise G294: Counting Maps Between Finite Sets"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - counting
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 18, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G294: Counting Maps Between Finite Sets

## Problem Statement

> [!question] Exercise 18
> Let $S,T$ be finite sets. Show that
>
> $$
> |\operatorname{Map}(S,T)|=|T|^{|S|}.
> $$

## Hints

> [!hint]- Hint 1
> Choose the image of each element of $S$ independently.

## Solution

> [!success]- Solution
> Write $S=\{s_1,\ldots,s_m\}$ and $|T|=n$. A map $f:S\to T$ is determined uniquely by the ordered $m$-tuple $(f(s_1),\ldots,f(s_m))\in T^m$. Conversely every such tuple defines a map. Thus $\operatorname{Map}(S,T)\cong T^m$ and has $n^m=|T|^{|S|}$ elements. This also covers $S=\varnothing$, using $n^0=1$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 18, printed p. 77, PDF p. 92]. The counting argument is independent.

