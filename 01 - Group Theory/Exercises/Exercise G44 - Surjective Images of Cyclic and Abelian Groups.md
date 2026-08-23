---
title: "Exercise G44: Surjective Images of Cyclic and Abelian Groups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - cyclic-groups
  - abelian-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.1, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G44: Surjective Images of Cyclic and Abelian Groups

## Problem Statement

> [!question] Exercise 5.1
> Let $\varphi:G\to G'$ be surjective. Prove that a cyclic $G$ gives cyclic $G'$, and an abelian $G$ gives abelian $G'$.

## Hints

> [!hint]- Hint 1
> Lift elements of $G'$ to $G$.

## Solution

> [!success]- Solution
> If $G=\langle g\rangle$, every $y\in G'$ is $\varphi(g^k)=\varphi(g)^k$, so $G'=\langle\varphi(g)\rangle$.
> 
> If $G$ is abelian and $x'=\varphi(x)$, $y'=\varphi(y)$, then
> 
> $$
> x'y'=\varphi(xy)=\varphi(yx)=y'x'.
> $$
> 
> Surjectivity ensures that this covers all pairs in $G'$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.1, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
