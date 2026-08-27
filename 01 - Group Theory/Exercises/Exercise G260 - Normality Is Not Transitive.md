---
title: "Exercise G260: Normality Is Not Transitive"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.4, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G260: Normality Is Not Transitive

## Problem Statement

> [!question] Exercise M.4
> If $H\trianglelefteq K\trianglelefteq G$, must $H\trianglelefteq G$?

## Hints

> [!hint]- Hint 1
> Use the normal Klein four group in $A_4$.

## Solution

> [!success]- Solution
> No. Let $G=A_4$, let $K=V_4=\{1,(12)(34),(13)(24),(14)(23)\}$, and let $H=\langle(12)(34)\rangle$. Since $K$ is abelian, $H\trianglelefteq K$; and $K\trianglelefteq A_4$. But conjugation by a $3$-cycle sends $(12)(34)$ to a different double transposition, so $H$ is not normal in $A_4$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.4, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.

