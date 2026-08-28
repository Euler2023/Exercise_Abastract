---
title: "Exercise G281: Groups of Order at Most Five Are Abelian"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 1, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G281: Groups of Order at Most Five Are Abelian

## Problem Statement

> [!question] Exercise 1
> Show that every group of order at most $5$ is abelian.

## Hints

> [!hint]- Hint 1
> Groups of prime order are cyclic. Only order $4$ needs a separate argument.

> [!hint]- Hint 2
> In a group of order $4$, either some element has order $4$, or every nonidentity element has order $2$.

## Solution

> [!success]- Solution
> The trivial group is abelian. A group of order $2$, $3$, or $5$ is cyclic because any nonidentity element has order dividing the group order and greater than $1$; hence it has the full prime order.
>
> Let $|G|=4$. If some $a\in G$ has order $4$, then $G=\langle a\rangle$ is cyclic. Otherwise every nonidentity element has order $2$. For any $a,b\in G$, the claim is immediate if either is the identity or $a=b$. If $a,b$ are distinct nonidentity elements, then $ab\ne e$ and therefore $(ab)^2=e$. Thus
>
> $$
> ab=(ab)^{-1}=b^{-1}a^{-1}=ba,
> $$
>
> because $a^{-1}=a$ and $b^{-1}=b$. Hence $G$ is abelian in every case.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Routing:** The proof is a finite-group order argument, so Group Theory is primary.
- **Source status:** The statement was visually checked at [S2, Ch. I, Ex. 1, printed p. 75, PDF p. 90]. The proof is an independent derivation.
