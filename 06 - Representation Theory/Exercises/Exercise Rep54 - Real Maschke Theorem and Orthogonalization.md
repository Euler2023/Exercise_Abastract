---
title: "Exercise Rep54: Real Maschke Theorem and Orthogonalization"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 3, Ex. 3.2, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep54: Real Maschke Theorem and Orthogonalization

## Problem Statement

> [!question] Exercise 3.2
> Let $\rho:G\to GL(V)$ be a representation of a finite group on a real vector space $V$. Prove the following:
>
> **(a)** There exists a $G$-invariant, positive definite symmetric form $(\ ,\ )$ on $V$.
>
> **(b)** $\rho$ is a direct sum of irreducible representations.
>
> **(c)** Every finite subgroup of $GL_n(\mathbb R)$ is conjugate to a subgroup of $O_n$.

## Hints

> [!hint]- Hint 1
> Average any Euclidean inner product over $G$.

> [!hint]- Hint 2
> Orthogonal complements of invariant subspaces are invariant.

## Solution

> [!success]- Solution
> **(a)** Starting from any positive definite symmetric form $B$, define
>
> $$
> B_G(v,w)=\frac1{|G|}\sum_{g\in G}B(\rho(g)v,\rho(g)w).
> $$
>
> It remains symmetric and positive definite, and replacing $g$ by $gh$ proves $G$-invariance.
>
> **(b)** If $W\subseteq V$ is invariant, then $W^{\perp}$ with respect to $B_G$ is invariant: for $w\in W$ and $u\in W^\perp$,
>
> $$
> B_G(\rho(g)u,w)=B_G(u,\rho(g^{-1})w)=0.
> $$
>
> Thus $V=W\oplus W^\perp$. Induction on $\dim V$ gives a direct sum of irreducibles.
>
> **(c)** Let $H\le GL_n(\mathbb R)$ be finite and apply (a) to its natural action. Choose a basis orthonormal for $B_H$. In that basis every element of $H$ preserves the standard dot product, so the change-of-basis matrix conjugates $H$ into $O_n$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]

## Notes

- This is the real averaging proof of Maschke's theorem in characteristic zero.
- **Source status:** [S1, Ch. 10, §3, Ex. 3.2, printed p. 315, PDF p. 327]; the proof is independent.

