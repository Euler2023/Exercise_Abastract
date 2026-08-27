---
title: "Exercise G214: A_n Is the Unique Index-Two Subgroup of S_n"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.7, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G214: A_n Is the Unique Index-Two Subgroup of S_n

## Problem Statement

> [!question] Exercise 5.7
> Prove that $A_n$ is the only subgroup of $S_n$ of index $2$.

## Hints

> [!hint]- Hint 1
> An index-two subgroup is a kernel of a map to $C_2$.

## Solution

> [!success]- Solution
> Let $H\le S_n$ have index $2$ ($n\ge2$). The quotient map $\varphi:S_n\to C_2$ is surjective. All transpositions are conjugate and generate $S_n$, so every transposition has the same nontrivial image. Thus a product lies in $H$ exactly when it is a product of an even number of transpositions. Hence $H=\ker(\operatorname{sgn})=A_n$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.7, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.

