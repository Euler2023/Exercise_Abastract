---
title: "Exercise G197: Nonabelian Groups of Order p Cubed"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 3, Ex. 3.3, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G197: Nonabelian Groups of Order p Cubed

## Problem Statement

> [!question] Exercise 3.3
> A nonabelian group $G$ has order $p^3$, where $p$ is prime.
>
> **(a)** What are the possible orders of the center $Z$?
>
> **(b)** Let $x$ be an element of $G$ that is not in $Z$. What is the order of its centralizer $Z(x)$?
>
> **(c)** What are the possible class equations for $G$?

## Hints

> [!hint]- Hint 1
> Apply the fixed-point theorem to conjugation, then use Exercise 3.2 to exclude $|Z|=p^2$.

## Solution

> [!success]- Solution
> Conjugation of $G$ on itself has fixed-point set $Z$, so the fixed-point theorem gives $|Z|\equiv |G|\equiv0\pmod p$. Since $G$ is nonabelian, $|Z|\ne p^3$. If $|Z|=p^2$, then $G/Z$ has order $p$ and is cyclic, contradicting Exercise 3.2. Hence **(a)** $|Z|=p$.
>
> For $x\notin Z$, the centralizer $Z(x)$ contains both $Z$ and $x$. It cannot have order $p$ and cannot be all of $G$, so **(b)** $|Z(x)|=p^2$.
>
> Each noncentral conjugacy class therefore has size $[G:Z(x)]=p$. There are $p^3-p$ noncentral elements, hence $p^2-1$ such classes. Thus **(c)** the class equation is necessarily
>
> $$
> p^3=p+(p^2-1)p.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §3, Ex. 3.3, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
