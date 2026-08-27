---
title: "Exercise G231: Simple Groups Below Order Sixty"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.10, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G231: Simple Groups Below Order Sixty

## Problem Statement

> [!question] Exercise 7.10
> Prove that the only simple groups of order less than $60$ are groups of prime order.

## Hints

> [!hint]- Hint 1
> Sylow counting reduces the composite candidates to $12,24,30,36,48,56$.

## Solution

> [!success]- Solution
> A $p$-group has nontrivial center, and Sylow III gives a normal Sylow subgroup for every composite order below $60$ except possibly $12,24,30,36,48,56$. For $12$, counting leaves a unique Sylow $2$-subgroup. For $24$ and $36$, the action on four Sylow $3$-subgroups would embed a simple group into $S_4$, impossible (for $24$ it would be $S_4$, not simple). For $30$, $n_5=6$ and $n_3=10$ would account for $24+20>29$ nonidentity elements. For $48$, either $n_3=4$ gives an impossible embedding in $S_4$, or $n_3=16$; then $n_2=3$ gives an impossible embedding in $S_3$. For $56$, $n_7=8$ uses $48$ nonidentity elements, leaving only seven; all seven Sylow $2$-subgroups would then coincide. Thus no composite order below $60$ is simple. Prime-order groups are cyclic and simple. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.10, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.

