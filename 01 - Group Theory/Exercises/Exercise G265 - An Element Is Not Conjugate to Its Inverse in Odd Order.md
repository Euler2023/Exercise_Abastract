---
title: "Exercise G265: An Element Is Not Conjugate to Its Inverse in Odd Order"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.9, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G265: An Element Is Not Conjugate to Its Inverse in Odd Order

## Problem Statement

> [!question] Exercise M.9
> Let $x\ne1$ lie in a group of odd order. Prove $x$ and $x^{-1}$ are not conjugate.

## Hints

> [!hint]- Hint 1
> Iterate a hypothetical conjugation by an element of odd order.

## Solution

> [!success]- Solution
> Suppose $gxg^{-1}=x^{-1}$. Conjugation by $g$ restricts to inversion on $\langle x\rangle$. If $g$ has odd order $m$, applying this conjugation $m$ times gives
>
> $$
> x=g^m xg^{-m}=x^{(-1)^m}=x^{-1}.
> $$
>
> Thus $x^2=1$. An odd-order group has no nonidentity element of order $2$, contradicting $x\ne1$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.9, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
