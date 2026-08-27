---
title: "Exercise Rep107: The Commutator Subgroup from the Character Table"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.7, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep107: The Commutator Subgroup from the Character Table

## Problem Statement

> [!question] Miscellaneous Exercise M.7
> Describe the commutator subgroup of a group $G$ in terms of the character table.

## Hints

> [!hint]- Hint 1
> Linear characters are exactly the characters of the abelianization.

## Solution

> [!success]- Solution
> Every one-dimensional character kills $[G,G]$, and the characters of $G/[G,G]$ separate points of that finite abelian group. Therefore
>
> $$
> [G,G]=\bigcap_{\chi(1)=1}\ker\chi.
> $$
>
> In the character table, $[G,G]$ is consequently the union of precisely those conjugacy-class columns on which every one-dimensional row has value $1$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.7, printed p. 321, PDF p. 333].

