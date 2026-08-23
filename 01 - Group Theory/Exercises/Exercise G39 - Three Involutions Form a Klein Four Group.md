---
title: "Exercise G39: Three Involutions Form a Klein Four Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - involutions
  - abelian-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 4, Ex. 4.7, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise G39: Three Involutions Form a Klein Four Group

## Problem Statement

> [!question] Exercise 4.7
> Let $x,y,xy$ each have order $2$. Prove $H=\{1,x,y,xy\}$ is a subgroup of order $4$.

## Hints

> [!hint]- Hint 1
> Expand $(xy)^2=1$ to show $x$ and $y$ commute.

## Solution

> [!success]- Solution
> From $xyxy=1$, multiply on the left by $x$ and on the right by $y$ to obtain $yx=xy$. Hence products of elements in $H$ reduce using
> 
> $$
> x^2=y^2=1,\qquad xy=yx,
> $$
> 
> and remain in $H$; inverses also remain in $H$. The elements are distinct: $x,y\ne1$, and $xy=1$ would imply $x=y$, contradicting that $xy$ has order $2$. Thus $H$ is a subgroup with four elements, isomorphic to $C_2\times C_2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §4, Ex. 4.7, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
