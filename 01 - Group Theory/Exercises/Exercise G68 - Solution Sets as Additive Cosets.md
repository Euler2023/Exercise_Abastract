---
title: "Exercise G68: Solution Sets as Additive Cosets"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - linear-systems
  - additive-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.2, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G68: Solution Sets as Additive Cosets

## Problem Statement

> [!question] Exercise 8.2
> Let $W=\{X:AX=0\}\le\mathbb R^m$. Show that the solution set of $AX=B$ is empty or an additive coset of $W$.

## Hints

> [!hint]- Hint 1
> If $X_0$ is one solution, compare any other solution with $X_0$.

## Solution

> [!success]- Solution
> If no solution exists, the set is empty. Otherwise fix one solution $X_0$. Then
> 
> $$
> A(X_0+W)=B+0=B,
> $$
> 
> so $X_0+W$ consists of solutions. Conversely, if $AX=B$, then
> 
> $$
> A(X-X_0)=0,
> $$
> 
> so $X-X_0\in W$ and $X\in X_0+W$. Hence the solution set is exactly the coset $X_0+W$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.2, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
