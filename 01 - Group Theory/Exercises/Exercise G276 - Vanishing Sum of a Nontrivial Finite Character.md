---
title: "Exercise G276: Vanishing Sum of a Nontrivial Finite Character"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - characters
  - finite-abelian-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.3, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise G276: Vanishing Sum of a Nontrivial Finite Character

## Problem Statement

> [!question] Miscellaneous Problem M.3
> Let $A$ be a finite abelian group, and let $\varphi:A\to\mathbb C^\times$ be a homomorphism that is not the trivial homomorphism. Prove that
>
> $$
> \sum_{a\in A}\varphi(a)=0.
> $$

## Hints

> [!hint]- Hint 1
> Translate the sum by an element $b$ for which $\varphi(b)\ne1$.

## Solution

> [!success]- Solution
> Let
>
> $$
> S=\sum_{a\in A}\varphi(a).
> $$
>
> Choose $b\in A$ with $\varphi(b)\ne1$. Since $a\mapsto ba$ permutes the finite set $A$,
>
> $$
> S=\sum_{a\in A}\varphi(ba)
> =\varphi(b)\sum_{a\in A}\varphi(a)
> =\varphi(b)S.
> $$
>
> Therefore $(1-\varphi(b))S=0$. The complex number $1-\varphi(b)$ is nonzero, so
>
> $$
> \boxed{S=0.}
> $$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Routing:** Group Theory is primary because translation invariance of a finite group proves the character orthogonality relation.
- **Hypothesis boundary:** Commutativity of $A$ is not needed for a one-dimensional character, although it is part of the source statement.
- **Source status:** [S1, Ch. 14, Misc. M.3, printed p. 440, PDF p. 452]. The proof is independent.
