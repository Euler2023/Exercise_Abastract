---
title: "Exercise LA337: Presentation Matrix tI - B for a Linear Operator"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - presentation-matrices
  - linear-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 8, Application to Linear Operators, Ex. 8.4, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA337: Presentation Matrix tI - B for a Linear Operator

## Problem Statement

> [!question] Exercise 8.4 — printed notation
> Let $V$ be an $F[t]$-module, and let $B=(v_1,\ldots,v_n)$ be a basis for $V$ as an $F$-vector space. Let $B$ be the matrix of $T$ with respect to this basis. Prove that $A=tI-B$ is a presentation matrix for the module.

> [!warning] Source notation issue
> The printed statement uses $B$ both for the ordered basis and for the operator matrix. Below, the basis is denoted $\mathcal B$ and the matrix is denoted $C$.

## Hints

> [!hint]- Hint 1
> The $j$th column of $tI-C$ records the relation $tv_j-T(v_j)=0$.

## Solution

> [!success]- Solution
> Let $\mathcal B=(v_1,\ldots,v_n)$ and let $C=(c_{ij})$ be the matrix of multiplication by $t$, so
>
> $$
> tv_j=T(v_j)=\sum_i c_{ij}v_i.
> $$
>
> Thus the columns of
>
> $$
> A=tI-C
> $$
>
> give valid relations among the $F[t]$-generators $v_1,\ldots,v_n$.
>
> Let $W$ be the module presented by these relations. Repeatedly use $tv_j=\sum_i c_{ij}v_i$ to reduce every polynomial coefficient, showing that every element of $W$ is an $F$-linear combination of the $v_i$. If a constant combination $\sum_i a_iv_i$ maps to zero in $V$, all $a_i$ vanish because $\mathcal B$ is an $F$-basis. Hence no additional constant relation exists, and the natural surjection $W\to V$ is injective. Therefore
>
> $$
> \boxed{V\cong\operatorname{coker}_{F[t]}(tI-C).}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]

## Notes

- **Routing:** Linear Algebra is primary because the operator matrix translates directly into module relations.
- **Source issue status:** The duplicated symbol $B$ is preserved in the problem statement and disambiguated in the proof.
- **Source status:** [S1, Ch. 14, §14.8, Ex. 8.4, printed p. 440, PDF p. 452].
