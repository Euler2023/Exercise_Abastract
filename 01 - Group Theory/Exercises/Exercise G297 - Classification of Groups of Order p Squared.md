---
title: "Exercise G297: Classification of Groups of Order p Squared"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - abelian-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 24, printed p. 77, PDF p. 92"
created: 2026-08-28
---

# Exercise G297: Classification of Groups of Order p Squared

## Problem Statement

> [!question] Exercise 24
> Let $p$ be prime. Show that every group of order $p^2$ is abelian and that, up to isomorphism, there are only two such groups.

## Hints

> [!hint]- Hint 1
> A finite $p$-group has nontrivial center, and a cyclic quotient by the center forces the group to be abelian.

## Solution

> [!success]- Solution
> Let $|G|=p^2$. The center of a nontrivial finite $p$-group is nontrivial, so $|Z(G)|$ is $p$ or $p^2$. In the first case $G/Z(G)$ is cyclic of order $p$, which implies that $G$ is abelian; in the second case this is immediate. Thus every such $G$ is abelian.
>
> If $G$ contains an element of order $p^2$, then $G\cong C_{p^2}$. Otherwise every nonidentity element has order $p$; choosing $x\ne1$ and $y\notin\langle x\rangle$ gives $G=\langle x\rangle\times\langle y\rangle\cong C_p\times C_p$. The two groups are not isomorphic because only the first has an element of order $p^2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Class Equation]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 24, printed p. 77, PDF p. 92]. The classification proof is independent.

