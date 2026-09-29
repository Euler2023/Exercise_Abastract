---
title: "Exercise ST5: Cardinality of Function Sets under Bijections"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 7, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST5: Cardinality of Function Sets under Bijections

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 7
> If $A,B$ are sets, denote by $M(A,B)$ the set of all maps of $A$ into $B$. If $B,B'$ are sets with the same cardinality, show that $M(A,B)$ and $M(A,B')$ have the same cardinality. If $A,A'$ have the same cardinality, show that $M(A,B)$ and $M(A',B)$ have the same cardinality.

## Hints

> [!hint]- Hint 1: Change the target
> Postcompose with a bijection $B\to B^{\prime}$.

> [!hint]- Hint 2: Change the domain
> For a bijection $u:A\to A^{\prime}$, precompose a map on $A$ with $u^{-1}$.

## Solution

> [!success]- Complete independent derivation
> Choose a bijection $v:B\to B'$. The map
>
> $$
> M(A,B)\to M(A,B'),\qquad f\mapsto v\circ f
> $$
>
> has inverse $g\mapsto v^{-1}\circ g$, so it is a bijection. If $u:A\to A'$ is a bijection, then
>
> $$
> M(A,B)\to M(A',B),\qquad f\mapsto f\circ u^{-1}
> $$
>
> has inverse $h\mapsto h\circ u$. The inverse identities follow from associativity of composition. The same formulas hold when sets are empty: there is exactly one map from the empty set to any set and no map from a nonempty set to the empty set.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

Statement checked at printed p. 893 / PDF p. 908. This independent explicit-bijection proof needs no choice and proves that cardinal exponentiation does not depend on chosen set representatives.
