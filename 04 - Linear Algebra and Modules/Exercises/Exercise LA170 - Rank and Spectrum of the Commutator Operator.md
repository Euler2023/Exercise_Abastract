---
title: "Exercise LA170: Rank and Spectrum of the Commutator Operator"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - commutators
  - eigenvalues
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §2, Ex. 2.3, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA170: Rank and Spectrum of the Commutator Operator

## Problem Statement

> [!question] Exercise 2.3
> Let $A$ be an $n\times n$ complex matrix, and define $T$ on $\mathbb C^{n\times n}$ by $T(M)=AM-MA$.
>
> (a) Prove that the rank of $T$ is at most $n^2-n$.
>
> (b) Determine the eigenvalues of $T$ in terms of the eigenvalues $\lambda_1,\ldots,\lambda_n$ of $A$.

## Hints

> [!hint]- Hint 1
> Put $A$ in Jordan form. Each Jordan block of size $r$ supplies $r$ independent matrices commuting with $A$.

## Solution

> [!success]- Solution
> (a) Similarity of $A$ induces similarity of its commutator operator, so put $A$ in Jordan form. For every Jordan block $J_r(\lambda)=\lambda I+N$, place $I,N,\ldots,N^{r-1}$ in that block and zeros in all other blocks. These matrices commute with $A$ and are linearly independent. Summing over the blocks gives $n$ independent elements of $\ker T$. Hence
>
> $$
> \operatorname{rank}T=n^2-\dim\ker T\le n^2-n.
> $$
>
> (b) Triangularize $A$ with diagonal entries $\lambda_1,\ldots,\lambda_n$. In a suitable ordering of the matrix units, $T$ is triangular and its diagonal entries are
>
> $$
> \lambda_i-\lambda_j\qquad(1\le i,j\le n).
> $$
>
> Therefore these $n^2$ differences, counted with algebraic multiplicity, are the eigenvalues of $T$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA115 - Singularity of the Commutator Operator|Exercise LA115]]

## Notes

- **Deduplication:** LA115 only proves singularity from $T(I)=0$; this exercise strengthens it to an $n$-dimensional kernel bound and computes the full spectrum.
- **Source status:** [S1, Ch. 5, §2, Ex. 2.3, printed p. 151, PDF p. 163]; independent solution.
