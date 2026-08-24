---
title: "Exercise G125: Finite Groups with at Most Three Conjugacy Classes"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - classification
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.12, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G125: Finite Groups with at Most Three Conjugacy Classes

## Problem Statement

> [!question] Exercise 2.12
> Determine all finite groups that contain at most three conjugacy classes.

## Hints

> [!hint]- Hint 1
> Abelian groups have one conjugacy class per element.

> [!hint]- Hint 2
> In the nonabelian three-class case, write $|G|=1+a+b$ with $1<a\le b$ and use $a,b\mid |G|$.

## Solution

> [!success]- Solution
> With one class, the group is trivial. With two classes, write $|G|=1+a$. Since $a$ divides $|G|$, it divides $1$, so $a=1$ and the group is $C_2$.
>
> Suppose there are three classes. If the group is abelian, all classes are singletons, so the group has order $3$ and is $C_3$. In the nonabelian case the center cannot have order $2$: otherwise the equation would be $|G|=1+1+a$, where $a=|G|-2$ divides $|G|$, so $a\mid2$ and $|G|\le4$, forcing $G$ to be abelian. Thus the center contributes only the identity class, and the equation has the form
>
> $$
> |G|=1+a+b,\qquad 1<a\le b.
> $$
>
> Since $b\mid |G|$, it divides $1+a$. The case $a=b$ is impossible because then $a\mid1$. Hence $b>a$, so $1+a\le b$ and divisibility forces $b=a+1$. Now
>
> $$
> |G|=2a+2,
> $$
>
> and $a\mid |G|$ gives $a\mid2$. Thus $a=2$, $b=3$, and $|G|=6$. The unique nonabelian group of order $6$ is $S_3$, whose class equation is $6=1+2+3$.
>
> Therefore the complete list is
>
> $$
> \{1\},\qquad C_2,\qquad C_3,\qquad S_3.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **External standard input:** uniqueness of the nonabelian group of order $6$; a proof is available in [[01 - Group Theory/Exercises/Exercise G100 - Classification of Groups of Order Six|Exercise G100]].
- **Source status:** [S1, Ch. 7, §2, Ex. 2.12, printed p. 221, PDF p. 233]; independent classification.
