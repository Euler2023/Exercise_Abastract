---
title: "Exercise Rep85: Simplicity from a Character Table"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.9, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep85: Simplicity from a Character Table

## Problem Statement

> [!question] Exercise 6.9
> **(a)** Explain how one can prove that a group is simple by looking at its character table. **(b)** Use the character table of the icosahedral group to prove that it is a simple group.

## Hints

> [!hint]- Hint 1
> A normal subgroup is a union of conjugacy classes containing the identity, and its order divides $|G|$.

## Solution

> [!success]- Solution
> **(a)** The column headers give conjugacy-class sizes. List all unions of classes containing $1$ whose cardinality divides $|G|$; if only $\{1\}$ and $G$ qualify, the group is simple. Equivalently, kernels of irreducible characters are read from columns where $\chi(g)=\chi(1)$, and every proper quotient would supply a nontrivial irreducible character with nontrivial kernel.
>
> **(b)** The $A_5$ class sizes are $1,15,20,12,12$. Checking the sums obtained by adjoining any proper selection of the four nonidentity classes shows that none except $1$ divides $60$. Therefore no nontrivial proper union can be a subgroup. Hence the icosahedral group $A_5$ is simple. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S1, Ch. 10, §6, Ex. 6.9, printed p. 319, PDF p. 331]; the criterion and application are independently explained.

