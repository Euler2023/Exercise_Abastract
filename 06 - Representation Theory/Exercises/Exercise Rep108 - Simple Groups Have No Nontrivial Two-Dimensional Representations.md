---
title: "Exercise Rep108: Simple Groups Have No Nontrivial Two-Dimensional Representations"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.8, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep108: Simple Groups Have No Nontrivial Two-Dimensional Representations

## Problem Statement

> [!question] Miscellaneous Exercise M.8
> Prove that a finite simple group that is not of prime order has no nontrivial representation of dimension $2$.

## Hints

> [!hint]- Hint 1
> A nontrivial representation of a simple group is faithful; compare with finite subgroups of $GL_2(\mathbb C)$.

## Solution

> [!success]- Solution
> Let $G$ be finite simple and noncyclic. A nontrivial $\rho:G\to GL_2(\mathbb C)$ has normal kernel, hence is faithful. Its determinant is a one-dimensional character; simplicity and nonabelianness force it to be trivial, so $\rho(G)\le SL_2(\mathbb C)$.
>
> The classification of finite subgroups of $SL_2(\mathbb C)$ gives cyclic groups and the binary dihedral, tetrahedral, octahedral, and icosahedral groups. Every noncyclic group in this list has the nontrivial central element $-I$. A faithful image of the centerless nonabelian simple group $G$ cannot be one of them. This contradiction proves that no such two-dimensional representation exists. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **External standard input:** the classification of finite subgroups of $SL_2(\mathbb C)$ is used explicitly and is not proved in this note.
- **Source status:** [S1, Ch. 10, Misc. Ex. M.8, printed p. 321, PDF p. 333].

