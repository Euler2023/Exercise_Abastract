---
title: "Exercise G215: Surjections from S_n to S_n Minus One"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 5, Ex. 5.8, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G215: Surjections from S_n to S_n Minus One

## Problem Statement

> [!question] Exercise 5.8
> Determine the integers $n$ such that there is a surjective homomorphism $S_n\to S_{n-1}$.

## Hints

> [!hint]- Hint 1
> The kernel must have order $n$.

## Solution

> [!success]- Solution
> For $n=2$, $S_2\to S_1$ is onto; for $n=3$, use the sign map $S_3\to S_2$; for $n=4$, use $S_4/V_4\cong S_3$. Conversely, a surjection has kernel of order $n!/(n-1)!=n$. For $n\ge5$, the only normal subgroups of $S_n$ are $1,A_n,S_n$, and none has order $n$. Thus, with $S_1=1$, precisely $n=2,3,4$ work. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §5, Ex. 5.8, printed p. 223, PDF p. 235]; source PDF checked; solution independently derived.

