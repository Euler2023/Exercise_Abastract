---
title: "Exercise G75: When Squaring Is a Group Automorphism"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - abelian-groups
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 8, Ex. 8.9, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise G75: When Squaring Is a Group Automorphism

## Problem Statement

> [!question] Exercise 8.9
> For a finite group $G$, determine when $\varphi(x)=x^2$ is an automorphism.

## Hints

> [!hint]- Hint 1
> First determine when squaring is a homomorphism; then inspect its kernel.

## Solution

> [!success]- Solution
> The identity
> 
> $$
> (xy)^2=x^2y^2
> $$
> 
> for all $x,y$ is equivalent, after cancellation, to $xy=yx$. Thus squaring is a homomorphism exactly when $G$ is abelian.
> 
> For finite abelian $G$, this homomorphism is bijective exactly when its kernel is trivial, i.e. when $x^2=1$ implies $x=1$. By Cauchy's theorem this is equivalent to $|G|$ being odd. Therefore squaring is an automorphism exactly for finite abelian groups of odd order.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §8, Ex. 8.9, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
