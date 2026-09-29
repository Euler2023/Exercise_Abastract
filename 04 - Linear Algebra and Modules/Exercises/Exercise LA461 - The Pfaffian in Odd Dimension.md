---
title: "Exercise LA461: The Pfaffian in Odd Dimension"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - pfaffian
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 19, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA461: The Pfaffian in Odd Dimension

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 19
> Show that the pfaffian of an alternating $n\times n$ matrix is $0$ when $n$ is odd.

> [!info] Definition boundary
> Section 9 first constructs the generic Pfaffian for even sizes and refers odd sizes to the exercises. The statement means that its universal polynomial definition extends by the zero polynomial in odd size. An alternating matrix has zero diagonal as well as $G^{\mathsf T}=-G$; this distinction matters in characteristic $2$.

## Hints

> [!hint]- Hint 1: Work universally before specializing
> Form the generic alternating matrix $T$ over $\mathbb Z[t_{ij}:i<j]$. For odd $n$, compare $\det T$ with $\det T^{\mathsf T}=\det(-T)$.

> [!hint]- Hint 2: Use polynomial square roots or pairings
> The coefficient ring is a domain. Alternatively, a Pfaffian term pairs all indices into two-element sets, which cannot be done for an odd number of indices.

## Solution

> [!success]- Independent solution through the universal polynomial
> Let $R_0=\mathbb Z[t_{ij}:1\le i<j\le n]$, and define $T$ by $T_{ij}=t_{ij}$ for $i<j$, $T_{ji}=-t_{ij}$, and $T_{ii}=0$. If $n$ is odd, then
>
> $$
> \det T=\det(T^{\mathsf T})=\det(-T)=(-1)^n\det T=-\det T.
> $$
>
> Hence $2\det T=0$. The polynomial ring $R_0$ is torsion-free as an abelian group, so $\det T=0$. It is also a domain, so a polynomial $P\in R_0$ satisfying $P^2=\det T=0$ must be $P=0$. Thus the universal square-root-polynomial construction in Section 9 has the unique extension $\operatorname{Pf}_n(T)=0$ in odd size; no choice of sign remains.
>
> For an alternating matrix $G$ over any commutative ring $R$, substitute its entries for the variables. The universal zero polynomial specializes to zero, so $\operatorname{Pf}_n(G)=0$ and $\det G=0$, including in characteristic $2$.
>
> The matching formula gives the same conclusion. For even $n=2m$, the Pfaffian is, up to the chosen dimension-dependent sign convention, a signed sum indexed by partitions of $\{1,\ldots,n\}$ into pairs, with one matrix entry for each pair. For odd $n$ that index set is empty, so the sum is zero. The empty size-$0$ matching instead contributes the product $1$, giving $\operatorname{Pf}_0=1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 19, printed p. 599, PDF p. 614], and the even-size construction [S2, Ch. XV, §9, printed pp. 588–589, PDF pp. 603–604], were checked on original page images. The odd-size extension and specialization proof are independent.
- **Boundary:** Over a ring with nilpotents, an element whose square is zero need not itself be zero. The proof takes the square root in the universal integral polynomial ring first; it does not infer the conclusion from $\operatorname{Pf}(G)^2=0$ after specialization.
- **Sign conventions:** Lang's even-size normalization differs from Emil Artin's in some dimensions, as recorded in [[04 - Linear Algebra and Modules/Exercises/Exercise LA462 - Seven Pfaffian Identities from Geometric Algebra|Exercise LA462]]. Both conventions give zero in odd size.
