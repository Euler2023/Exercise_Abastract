---
title: "Exercise Rep35: Lie Algebra of an Orthogonal Group of a Bilinear Form"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.11, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep35: Lie Algebra of an Orthogonal Group of a Bilinear Form

## Problem Statement

> [!question] Exercise 6.11
> Let $B$ be a real $n\times n$ matrix, and let $(\ ,\ )$ be the bilinear form $X^{\mathsf T}BY$. The orthogonal group $G$ of this form is the group of matrices $P$ such that $P^{\mathsf T}BP=B$. Determine the one-parameter groups in $G$, and the Lie algebra of $G$.

## Hints

> [!hint]- Hint 1
> Differentiate $(e^{tA})^{\mathsf T}Be^{tA}=B$.

## Solution

> [!success]- Solution
> Necessity follows by differentiation at $t=0$:
>
> $$
> A^{\mathsf T}B+BA=0.
> $$
>
> Conversely, if this identity holds and $F(t)=(e^{tA})^{\mathsf T}Be^{tA}$, then
>
> $$
> F'(t)=(e^{tA})^{\mathsf T}(A^{\mathsf T}B+BA)e^{tA}=0.
> $$
>
> Since $F(0)=B$, one has $F(t)=B$ for all $t$. Therefore the one-parameter groups are exactly $e^{tA}$ with $A^{\mathsf T}B+BA=0$, and
>
> $$
> \operatorname{Lie}(G)=\{A\in M_n(\mathbb R):A^{\mathsf T}B+BA=0\}.
> $$
>
> This space is closed under commutators, as is also immediate from its construction as a Lie algebra. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- No symmetry or nondegeneracy of $B$ is needed for the displayed infinitesimal calculation; those hypotheses matter for the usual terminology and geometry of an orthogonal group.
- **Source status:** Ex. 6.11 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The necessary-and-sufficient condition is independently proved.
