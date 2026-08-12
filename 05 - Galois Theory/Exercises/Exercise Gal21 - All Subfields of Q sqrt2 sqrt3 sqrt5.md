---
title: "Exercise Gal21: All Subfields of Q(sqrt2,sqrt3,sqrt5)"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, galois-correspondence]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.4, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal21: All Subfields of $\mathbb Q(\sqrt2,\sqrt3,\sqrt5)$

## Problem Statement

> [!question] Exercise 7.4
> Determine all intermediate fields of $K=\mathbb Q(\sqrt2,\sqrt3,\sqrt5)$.

## Hints

> [!hint]- Hint 1
> Subspaces of $C_2^3$ correspond to subfields.

## Solution

> [!success]- Solution
> The Galois group is the vector space $\mathbb F_2^3$. Its seven planes give the seven quadratic fields
> $$
> \mathbb Q(\sqrt d),\qquad d\in\{2,3,5,6,10,15,30\}.
> $$
> Its seven lines give seven quartic fields. They are the fixed fields of the seven nontrivial sign changes:
> $$
> \begin{array}{c|c}
> \text{changed radicals}&\text{fixed quartic field}\\\hline
> \sqrt2&\mathbb Q(\sqrt3,\sqrt5)\\
> \sqrt3&\mathbb Q(\sqrt2,\sqrt5)\\
> \sqrt5&\mathbb Q(\sqrt2,\sqrt3)\\
> \sqrt2,\sqrt3&\mathbb Q(\sqrt6,\sqrt5)\\
> \sqrt2,\sqrt5&\mathbb Q(\sqrt{10},\sqrt3)\\
> \sqrt3,\sqrt5&\mathbb Q(\sqrt{15},\sqrt2)\\
> \sqrt2,\sqrt3,\sqrt5&\mathbb Q(\sqrt6,\sqrt{10}).
> \end{array}
> $$
> Together with $\mathbb Q$ and $K$, these are all $1+7+7+1=16$ intermediate fields.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

The list matches every subgroup of $\mathbb F_2^3$.
