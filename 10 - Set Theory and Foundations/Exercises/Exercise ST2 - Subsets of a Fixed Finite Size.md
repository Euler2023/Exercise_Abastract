---
title: "Exercise ST2: Subsets of a Fixed Finite Size"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 2, printed p. 892, PDF p. 907"
created: 2026-09-29
---

# Exercise ST2: Subsets of a Fixed Finite Size

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 2
> If $A$ is an infinite set, and $\Phi_n$ is the set of subsets of $A$ having exactly $n$ elements, show that
>
> $$
> \operatorname{card}(A)\le\operatorname{card}(\Phi_n)
> $$
>
> for $n\ge1$.

## Hints

> [!hint]- Hint 1: Reserve some points
> Fix $n-1$ distinct elements and adjoin one variable element from the complement.

> [!hint]- Hint 2: Restore the cardinality
> Removing finitely many points from an infinite set does not change its cardinality: shift a denumerable list containing those points.

## Solution

> [!success]- Complete independent derivation
> For $n=1$, the singleton map is a bijection $A\to\Phi_1$. For $n>1$, fix an $(n-1)$-element set $F\subseteq A$. The map $a\mapsto F\cup\{a\}$ injects $A\setminus F$ into $\Phi_n$, since $a$ is the unique element outside $F$ in its image.
>
> Choose a denumerable subset $D\subseteq A$ containing $F$, by adjoining $F$ to a denumerable subset of its infinite complement. Enumerate $D=\{d_1,d_2,\ldots\}$ with its first $n-1$ elements equal to $F$. Send $d_j$ to $d_{j+n-1}$ and fix all points outside $D$. This is a bijection $A\to A\setminus F$. Compose it with the preceding injection to obtain $|A|\le|\Phi_n|$.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

The inequality and endpoint $n\ge1$ were checked at printed p. 892 / PDF p. 907. This independent construction uses choice to select a denumerable subset, as in the source. Together with Corollary 3.9's upper bound it gives equality.
