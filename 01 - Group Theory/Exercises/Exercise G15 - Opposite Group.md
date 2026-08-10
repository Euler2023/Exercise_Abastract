---
title: "Exercise G15: Opposite Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - opposite-groups
  - proof
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.6"
created: 2026-08-10
---

# Exercise G15: Opposite Group

## Problem Statement

> [!question] Exercise
> Let $G$ be a group. Define an **opposite group** $G^{\mathrm{op}}$ on the same underlying set by the law
> $$a*b=ba,$$
> where the product on the right is taken in $G$. Prove that $G^{\mathrm{op}}$ is a group.

## Hints

> [!hint]- Hint 1
> Expand $(a*b)*c$ and $a*(b*c)$ using the definition of $*$ before using associativity in $G$.

> [!hint]- Hint 2
> Test the original identity $e$ and original inverse $a^{-1}$ under the reversed operation.

## Solution

> [!success]- Solution
> The operation $*$ is closed because $ba\in G$ whenever $a,b\in G$. We verify the remaining group axioms.
>
> ### Associativity
> For $a,b,c\in G$,
> $$(a*b)*c=c(ba).$$
> On the other hand,
> $$a*(b*c)=(cb)a.$$
> Associativity of the original operation in $G$ gives
> $$c(ba)=(cb)a,$$
> so
> $$(a*b)*c=a*(b*c).$$
>
> ### Identity
> Let $e$ be the identity of $G$. Then
> $$a*e=ea=a$$
> and
> $$e*a=ae=a.$$
> Thus the same element $e$ is the identity of $G^{\mathrm{op}}$.
>
> ### Inverses
> Let $a^{-1}$ be the inverse of $a$ in $G$. Under the opposite operation,
> $$a*a^{-1}=a^{-1}a=e$$
> and
> $$a^{-1}*a=aa^{-1}=e.$$
> Hence $a^{-1}$ is also the inverse of $a$ in $G^{\mathrm{op}}$.
>
> Therefore $G^{\mathrm{op}}$ is a group. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Opposite Groups|Opposite Groups]]
- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

Applying the construction twice restores the original multiplication:
$$\left(G^{\mathrm{op}}\right)^{\mathrm{op}}=G.$$
Moreover, $G^{\mathrm{op}}$ has the same multiplication as $G$ exactly when $G$ is abelian.

**Source status:** Exercise statement from [S1, Ch. 2, Section 2, Ex. 2.6]. The group axioms are verified completely in this note.
