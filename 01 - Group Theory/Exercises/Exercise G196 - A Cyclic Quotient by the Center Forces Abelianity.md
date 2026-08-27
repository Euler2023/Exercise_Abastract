---
title: "Exercise G196: A Cyclic Quotient by the Center Forces Abelianity"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 3, Ex. 3.2, printed p. 222, PDF p. 234"
created: 2026-08-27
---

# Exercise G196: A Cyclic Quotient by the Center Forces Abelianity

## Problem Statement

> [!question] Exercise 3.2
> Let $Z$ be the center of a group $G$. Prove that if $G/Z$ is cyclic, then $G$ is abelian, and therefore $G=Z$.

## Hints

> [!hint]- Hint 1
> Choose $aZ$ generating $G/Z$ and write arbitrary elements as $a^m z$.

## Solution

> [!success]- Solution
> Let $G/Z=\langle aZ\rangle$. For arbitrary $x,y\in G$, there are integers $m,n$ and $z,w\in Z$ such that $x=a^m z$ and $y=a^n w$. Since $z,w$ commute with every element,
>
> $$
> xy=a^{m+n}zw=a^{n+m}wz=yx.
> $$
>
> Thus $G$ is abelian. Its center is consequently all of $G$, so $G=Z$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §3, Ex. 3.2, printed p. 222, PDF p. 234]; problem checked against the source PDF; solution independently derived for this vault.
