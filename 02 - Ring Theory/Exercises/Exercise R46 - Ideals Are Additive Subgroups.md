---
title: "Exercise R46: Ideals Are Additive Subgroups"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.1, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R46: Ideals Are Additive Subgroups

## Problem Statement

> [!question] Exercise 3.1
> Prove that an ideal of a ring $R$ is a subgroup of the additive group $R^+$.

## Hints

> [!hint]- Hint 1
> Check the additive identity, closure under addition, and additive inverses.

## Solution

> [!success]- Solution
> Let $I$ be an ideal. By definition $0\in I$ and $x+y\in I$ whenever $x,y\in I$. Since $-1\in R$ and an ideal absorbs multiplication by ring elements, $-x=(-1)x\in I$ whenever $x\in I$. Thus $I$ contains the identity of $R^+$ and is closed under its operation and inverses, so $I\le R^+$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- **Source status:** The statement is from [S1, Ch. 11, §3, Ex. 3.1, printed p. 354, PDF p. 366]. The proof is independent.

