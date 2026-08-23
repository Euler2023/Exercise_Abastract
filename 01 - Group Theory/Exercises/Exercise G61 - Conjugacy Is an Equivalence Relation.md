---
title: "Exercise G61: Conjugacy Is an Equivalence Relation"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - conjugation
  - equivalence-relations
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 7, Ex. 7.1, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G61: Conjugacy Is an Equivalence Relation

## Problem Statement

> [!question] Exercise 7.1
> Define $a\sim b$ when $b=gag^{-1}$ for some $g\in G$. Prove this is an equivalence relation.

## Hints

> [!hint]- Hint 1
> Use $1$, $g^{-1}$, and a product of conjugating elements.

## Solution

> [!success]- Solution
> Reflexivity follows from $a=1a1^{-1}$. If $b=gag^{-1}$, then $a=g^{-1}bg$, proving symmetry. If also $c=hbh^{-1}$, then
> 
> $$
> c=h(gag^{-1})h^{-1}=(hg)a(hg)^{-1},
> $$
> 
> proving transitivity. Thus conjugacy is an equivalence relation.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §7, Ex. 7.1, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
