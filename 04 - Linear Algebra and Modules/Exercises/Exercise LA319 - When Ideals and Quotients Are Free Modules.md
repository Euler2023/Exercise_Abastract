---
title: "Exercise LA319: When Ideals and Quotients Are Free Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - free-modules
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 2, Free Modules, Ex. 2.4, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA319: When Ideals and Quotients Are Free Modules

## Problem Statement

> [!question] Exercise 2.4
> Let $I$ be an ideal of a ring $R$.
>
> **(a)** Under what circumstances is $I$ a free $R$-module?
>
> **(b)** Under what circumstances is the quotient ring $R/I$ a free $R$-module?

## Hints

> [!hint]- Hint 1
> In a commutative ring, two proposed basis elements $a,b$ of an ideal satisfy the relation $ba-ab=0$.

> [!hint]- Hint 2
> The annihilator of $R/I$ is $I$.

## Solution

> [!success]- Solution
> **(a)** The zero ideal is free of rank zero. A nonzero ideal cannot have two or more basis elements: for any $a,b\in I$, commutativity gives the relation
>
> $$
> b a-a b=0.
> $$
>
> Thus a nonzero free ideal must have rank one. A singleton $\{a\}$ is an $R$-basis of $I$ exactly when
>
> $$
> I=Ra
> $$
>
> and multiplication by $a$ has zero kernel, meaning that $a$ is not a zero divisor. Therefore $I$ is free exactly when
>
> $$
> \boxed{I=0\quad\text{or}\quad I=(a)\text{ for a non-zero-divisor }a.}
> $$
>
> **(b)** If $I=0$, then $R/I\cong R$ is free of rank one; if $I=R$, the zero quotient is free of rank zero. Conversely, suppose $R/I$ is nonzero and free. Since it is cyclic, its free rank is one. A nonzero free module is faithful, but
>
> $$
> \operatorname{Ann}_R(R/I)=I.
> $$
>
> Hence $I=0$. Thus
>
> $$
> \boxed{R/I\text{ is free exactly when }I=0\text{ or }I=R.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Routing:** Module Theory is primary because bases and annihilators give both classifications.
- **Hypothesis boundary:** The commutative-ring convention is essential to the two-generator dependence argument.
- **Source status:** [S1, Ch. 14, §14.2, Ex. 2.4, printed p. 437, PDF p. 449]. The classification is independent.
