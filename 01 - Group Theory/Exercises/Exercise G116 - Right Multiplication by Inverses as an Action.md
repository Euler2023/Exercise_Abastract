---
title: "Exercise G116: Right Multiplication by Inverses as an Action"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 1, Ex. 1.1, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G116: Right Multiplication by Inverses as an Action

## Problem Statement

> [!question] Exercise 1.1
> Does the rule $g*x=xg^{-1}$ define an operation of $G$ on $G$?

## Hints

> [!hint]- Hint 1
> Check the identity and associativity axioms in the order required for a left group action.

## Solution

> [!success]- Solution
> Yes. The identity acts trivially because $1*x=x1^{-1}=x$. For $g,h,x\in G$,
>
> $$
> (gh)*x=x(gh)^{-1}=xh^{-1}g^{-1}=g*(h*x).
> $$
>
> Thus the rule satisfies both action axioms. It is the usual right-multiplication action rewritten as a left action by inserting the inverse. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- Omitting the inverse would reverse the order and would define a left action only when $G$ is abelian.
- **Source status:** [S1, Ch. 7, §1, Ex. 1.1, printed p. 221, PDF p. 233]; independent verification.

