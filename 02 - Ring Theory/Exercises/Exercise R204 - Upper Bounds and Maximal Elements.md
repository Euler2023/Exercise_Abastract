---
title: "Exercise R204: Upper Bounds and Maximal Elements"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - partially-ordered-sets
  - zorns-lemma
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.3, Zorn's Lemma, Ex. A.12, printed p. 522, PDF p. 534"
created: 2026-08-28
---

# Exercise R204: Upper Bounds and Maximal Elements

## Problem Statement

> [!question] Exercise A.12
> Let $S$ be a partially ordered set.
>
> **(a)** Prove that if $S$ contains an upper bound $b$, then $b$ is unique, and also $b$ is a maximal element.
>
> **(b)** Prove that if $S$ is totally ordered, then a maximal element $m$ is an upper bound for $S$.

## Hints

> [!hint]- Hint 1
> Apply antisymmetry to two upper bounds, and total comparability to an arbitrary $s\in S$.

## Solution

> [!success]- Solution
> **(a)** Here an upper bound for $S$ is an element $b\in S$ such that $s\le b$ for every $s\in S$. If $b$ and $c$ are both upper bounds, then $b\le c$ because $b\in S$, and $c\le b$ because $c\in S$. Antisymmetry gives $b=c$, so the upper bound is unique.
>
> If $b\le s$ for some $s\in S$, the upper-bound property also gives $s\le b$. Antisymmetry yields $s=b$. Thus no strictly larger element exists, and $b$ is maximal.
>
> **(b)** Let $m$ be maximal and take $s\in S$. Totality gives either $s\le m$ or $m\le s$. In the second case maximality forces $s=m$, so in either case $s\le m$. Therefore $m$ is an upper bound for $S$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorn's Lemma]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because these order-theoretic distinctions are the input to maximal-ideal arguments.
- **Terminology boundary:** A maximal element need not be a greatest element in a merely partially ordered set; part (b) explains why total order removes the distinction.
- **Source status:** [S1, Appendix, §A.3, Ex. A.12, printed p. 522, PDF p. 534]. The proof is independent.
