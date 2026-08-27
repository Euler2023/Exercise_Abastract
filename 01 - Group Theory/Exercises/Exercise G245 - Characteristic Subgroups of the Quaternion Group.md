---
title: "Exercise G245: Characteristic Subgroups of the Quaternion Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.6, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G245: Characteristic Subgroups of the Quaternion Group

## Problem Statement

> [!question] Exercise 10.6
> **(a)** Prove characteristic subgroups are normal and the center is characteristic. **(b)** Determine the normal and characteristic subgroups of $Q_8$.

## Hints

> [!hint]- Hint 1
> Inner automorphisms are automorphisms; automorphisms permute $\langle i\rangle,\langle j\rangle,\langle k\rangle$.

## Solution

> [!success]- Solution
> A characteristic subgroup is fixed by every automorphism, hence by every inner automorphism, so it is normal. Automorphisms preserve commutation, so they preserve the center.
>
> The subgroups of $Q_8$ are $1$, $\{\pm1\}$, $\langle i\rangle$, $\langle j\rangle$, $\langle k\rangle$, and $Q_8$; all are normal. The three order-$4$ subgroups are permuted by automorphisms, so none is characteristic. Thus the characteristic subgroups are exactly $1$, $\{\pm1\}$, and $Q_8$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.6, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.
