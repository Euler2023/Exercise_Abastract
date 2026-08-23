---
title: "Exercise G45: Intersections and Inherited Normality"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - normal-subgroups
  - intersections
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.2, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G45: Intersections and Inherited Normality

## Problem Statement

> [!question] Exercise 5.2
> If $H,K\le G$, prove $K\cap H\le H$; if $K\triangleleft G$, prove $K\cap H\triangleleft H$.

## Hints

> [!hint]- Hint 1
> Use the subgroup test and conjugate only by elements of $H$.

## Solution

> [!success]- Solution
> The identity belongs to $K\cap H$, and if $x,y\in K\cap H$, then $xy^{-1}$ belongs to both $K$ and $H$. Hence $K\cap H\le H$.
> 
> If $K\triangleleft G$, then for $h\in H$ and $x\in K\cap H$, the conjugate $hxh^{-1}$ lies in $K$ by normality and in $H$ because $H$ is a subgroup. Thus it lies in $K\cap H$, proving normality in $H$.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.2, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
