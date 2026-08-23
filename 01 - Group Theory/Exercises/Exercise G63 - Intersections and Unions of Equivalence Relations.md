---
title: "Exercise G63: Intersections and Unions of Equivalence Relations"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - equivalence-relations
  - intersections
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 7, Ex. 7.3, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G63: Intersections and Unions of Equivalence Relations

## Problem Statement

> [!question] Exercise 7.3
> Is the intersection of two equivalence relations an equivalence relation? Is their union?

## Hints

> [!hint]- Hint 1
> All three axioms survive intersection. For the union, test transitivity on three points.

## Solution

> [!success]- Solution
> The intersection is an equivalence relation: reflexivity, symmetry, and transitivity hold in each relation and therefore in their intersection.
> 
> The union need not be transitive. On $\{1,2,3\}$, let $R$ have classes $\{1,2\},\{3\}$ and let $R'$ have classes $\{1\},\{2,3\}$. Then $1(R\cup R')2$ and $2(R\cup R')3$, but $1$ is not related to $3$ in the union.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §7, Ex. 7.3, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
