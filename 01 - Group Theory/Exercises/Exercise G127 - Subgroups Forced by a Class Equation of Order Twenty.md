---
title: "Exercise G127: Subgroups Forced by a Class Equation of Order Twenty"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - class-equation
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.14, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G127: Subgroups Forced by a Class Equation of Order Twenty

## Problem Statement

> [!question] Exercise 2.14
> The class equation of a group $G$ is $1+4+5+5+5$.
>
> **(a)** Does $G$ have a subgroup of order $5$? If so, is it a normal subgroup?
>
> **(b)** Does $G$ have a subgroup of order $4$? If so, is it a normal subgroup?

## Hints

> [!hint]- Hint 1
> The centralizer of an element in a class of size $4$ has order $5$; the centralizer of an element in a class of size $5$ has order $4$.

> [!hint]- Hint 2
> A normal subgroup must be a union of conjugacy classes containing the identity.

## Solution

> [!success]- Solution
> The group has order $20$ and trivial center.
>
> ### (a) Order $5$
> If $x$ belongs to the class of size $4$, then $|Z_G(x)|=20/4=5$, so $H=Z_G(x)$ is a subgroup of order $5$. Every nonidentity element of $H$ has a centralizer containing $H$, hence its class has size at most $4$. The only noncentral class size at most $4$ in the displayed equation is $4$, so the four nonidentity elements of $H$ are exactly that class. Thus $H=\{1\}\cup C(x)$ is conjugation-stable and therefore normal.
>
> ### (b) Order $4$
> If $y$ belongs to any class of size $5$, then $|Z_G(y)|=20/5=4$, so $K=Z_G(y)$ is a subgroup of order $4$. It cannot be normal: a normal subgroup is a union of conjugacy classes containing the identity, but no selection from class sizes $4,5,5,5$ together with the initial $1$ has total $4$. Hence subgroups of order $4$ exist but these centralizers are not normal. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]

## Notes

- This solution uses only the class equation and centralizers; it does not import the Sylow theorems from later in the chapter.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.14, printed p. 221, PDF p. 233]; independent proof.

