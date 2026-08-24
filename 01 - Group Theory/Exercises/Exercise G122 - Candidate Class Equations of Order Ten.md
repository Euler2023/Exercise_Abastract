---
title: "Exercise G122: Candidate Class Equations of Order Ten"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - class-equation
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.7, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G122: Candidate Class Equations of Order Ten

## Problem Statement

> [!question] Exercise 2.7
> Rule out as many as you can, as class equations for a group of order $10$:
>
> $$
> 1+1+1+2+5,\quad 1+2+2+5,\quad 1+2+3+4,\quad 1+1+2+2+2+2.
> $$

## Hints

> [!hint]- Hint 1
> Every class size divides $10$, and the number of singleton classes is $|Z(G)|$.

> [!hint]- Hint 2
> In the final candidate, a class of size $2$ would have a centralizer of order $5$ containing the center of order $2$.

## Solution

> [!success]- Solution
> The first equation has three singleton classes, so it would give $|Z(G)|=3$, impossible because the center's order must divide $10$.
>
> The third contains class sizes $3$ and $4$, neither of which divides $10$, so it is impossible.
>
> In the fourth, $|Z(G)|=2$. Every noncentral class has size $2$, so its centralizer would have order $10/2=5$. But every centralizer contains $Z(G)$, and a group of order $5$ cannot contain a subgroup of order $2$. Hence this equation is impossible.
>
> The only surviving candidate is
>
> $$
> 10=1+2+2+5.
> $$
>
> It is realized by the dihedral group $D_5$: the two pairs of inverse nonidentity rotations form the two classes of size $2$, and the five reflections form one class. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- Divisibility of class sizes is necessary but not sufficient; the fourth candidate needs the additional centralizer argument.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.7, printed p. 221, PDF p. 233]; independent elimination.

