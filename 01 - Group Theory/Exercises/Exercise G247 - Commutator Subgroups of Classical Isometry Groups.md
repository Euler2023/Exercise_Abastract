---
title: "Exercise G247: Commutator Subgroups of Classical Isometry Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.8, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G247: Commutator Subgroups of Classical Isometry Groups

## Problem Statement

> [!question] Exercise 10.8
> Determine commutator subgroups of **(a)** $SO_2$, **(b)** $O_2$, **(c)** the plane isometry group $M$, **(d)** $S_n$, and **(d, as printed)** $SO_3$.

> [!warning] Source numbering
> The source labels both the $S_n$ part and the $SO_3$ part as “(d)”. The duplicated label is preserved above; the final item is logically part **(e)**.

## Hints

> [!hint]- Hint 1
> Use determinant for the upper bound and commutators with reflections for the reverse inclusion.

## Solution

> [!success]- Solution
> Since $SO_2$ is abelian, its commutator subgroup is $1$. In $O_2$, reflection conjugates a rotation to its inverse, so commutators yield all rotations (the squaring map on the circle is onto); thus $[O_2,O_2]=SO_2$. For $M=\mathbb R^2\rtimes O_2$, determinant gives an abelian quotient $C_2$, while reflection commutators generate every translation and every rotation, so $[M,M]=M^+=\mathbb R^2\rtimes SO_2$. Also $[S_n,S_n]=A_n$ ($n\ge2$), and $[SO_3,SO_3]=SO_3$ because the commutator subgroup is nontrivial normal and $SO_3$ has no nontrivial proper closed normal subgroup; equivalently rotations are explicit commutators. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.8, printed p. 226, PDF p. 238]; source PDF checked; solution independently derived.
- **External standard input:** the $SO_3$ conclusion uses the perfectness of $SO_3$ (equivalently, that rotations are commutators); the determinant and reflection calculations for the other four groups are carried out in the solution.
