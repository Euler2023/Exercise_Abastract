---
title: "Exercise G206: Center Constraints from Centralizers and Conjugacy Classes"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.8, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G206: Center Constraints from Centralizers and Conjugacy Classes

## Problem Statement

> [!question] Exercise 4.8
> **(a)** Suppose that the centralizer $Z(x)$ of a group element $x$ has order $4$. What can be said about the center of the group?
>
> **(b)** Suppose that the conjugacy class $C(y)$ of an element $y$ has order $4$. What can be said about the center of the group?

## Hints

> [!hint]- Hint 1
> Use $Z(G)\subseteq Z(x)$ and $|C(y)|=[G:Z(y)]$.

## Solution

> [!success]- Solution
> **(a)** Since $Z(G)\subseteq Z(x)$, Lagrange's theorem gives $|Z(G)|\mid4$ (when $G$ is finite), so $|Z(G)|\in\{1,2,4\}$. If $|Z(G)|=4$, then $Z(G)=Z(x)$; in particular $x$ is central only when $G=Z(x)$, in which case $G$ is abelian of order $4$.
>
> **(b)** The class-size formula gives $[G:Z(y)]=4$. Because $Z(G)\subseteq Z(y)$,
>
> $$
> [G:Z(G)]=[G:Z(y)]\,[Z(y):Z(G)]=4[Z(y):Z(G)].
> $$
>
> Hence the index of the center is divisible by $4$. These are the uniform conclusions available from the stated data. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]
- [[01 - Group Theory/Concepts/Abelian Groups|Center and Abelian Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.8, printed p. 223, PDF p. 235]; problem checked against the source PDF; solution independently derived for this vault.
