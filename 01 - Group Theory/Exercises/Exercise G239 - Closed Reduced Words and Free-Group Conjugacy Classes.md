---
title: "Exercise G239: Closed Reduced Words and Free-Group Conjugacy Classes"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 9, Ex. 9.2, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G239: Closed Reduced Words and Free-Group Conjugacy Classes

## Problem Statement

> [!question] Exercise 9.2
> Establish a bijection between reduced closed words and conjugacy classes in a free group.

## Hints

> [!hint]- Hint 1
> Cyclically reduce a word; conjugation changes only the chosen starting point.

## Solution

> [!success]- Solution
> Every word is conjugate to a cyclically reduced word: if its first letter is inverse to its last, remove that pair by conjugation and repeat. A cyclically reduced word placed on an oriented circle has no preferred starting point. Changing the starting point cyclically permutes the word and corresponds to conjugation by the removed initial segment. Conversely, if two cyclically reduced words are conjugate, the cancellation lemma for free groups shows that one is a cyclic permutation of the other. Thus reduced oriented closed words, read up to choice of starting point, correspond bijectively to conjugacy classes. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §9, Ex. 9.2, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

