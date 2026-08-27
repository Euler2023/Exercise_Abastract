---
title: "Exercise G228: A Nonabelian Subgroup of S7 of Order Twenty-One"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.6, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G228: A Nonabelian Subgroup of S7 of Order Twenty-One

## Problem Statement

> [!question] Exercise 7.6
> Exhibit a nonabelian subgroup of $S_7$ of order $21$.

## Hints

> [!hint]- Hint 1
> Use affine transformations of $\mathbb F_7$.

## Solution

> [!success]- Solution
> On $\mathbb F_7$, let $a:t\mapsto t+1$ and $b:t\mapsto2t$. Then $a$ has order $7$, $b$ has order $3$, and $bab^{-1}=a^2$. Thus $\langle a,b\rangle\cong C_7\rtimes C_3$ has order $21$ and is nonabelian. Relabeling the seven field elements gives the requested subgroup of $S_7$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.6, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.

