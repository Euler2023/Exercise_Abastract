---
title: "Exercise G209: Centralizer of a Transposition in S5"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.2, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G209: Centralizer of a Transposition in S5

## Problem Statement

> [!question] Exercise 5.2
> What is the centralizer of $(12)$ in $S_5$?

## Hints

> [!hint]- Hint 1
> A commuting permutation must preserve $\{1,2\}$.

## Solution

> [!success]- Solution
> A permutation commuting with $(12)$ preserves its support, acts there as $1$ or $(12)$, and permutes $\{3,4,5\}$ arbitrarily. Conversely these all commute. Hence
>
> $$
> Z_{S_5}((12))=\langle(12)\rangle\times S_{\{3,4,5\}}\cong C_2\times S_3,
> \qquad |Z_{S_5}((12))|=12.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.2, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.
