---
title: "Exercise G62: Equivalence Relations as Subsets of $S\\times S$"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - equivalence-relations
  - partitions
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 7, Ex. 7.2, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G62: Equivalence Relations as Subsets of $S\times S$

## Problem Statement

> [!question] Exercise 7.2
> If a relation is represented by $R=\{(a,b):a\sim b\}\subseteq S\times S$, express the equivalence-relation axioms in terms of $R$.

## Hints

> [!hint]- Hint 1
> Translate each quantified statement directly into membership in $R$.

## Solution

> [!success]- Solution
> The axioms become:
> 
> - **Reflexive:** the diagonal $\Delta_S=\{(a,a):a\in S\}$ is contained in $R$.
> - **Symmetric:** $(a,b)\in R$ implies $(b,a)\in R$; equivalently $R^{-1}=R$.
> - **Transitive:** if $(a,b),(b,c)\in R$, then $(a,c)\in R$; equivalently $R\circ R\subseteq R$.
> 
> These conditions are exactly the usual three axioms.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §7, Ex. 7.2, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
