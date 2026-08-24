---
title: "Exercise G141: Center of the Special Orthogonal Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - centers
  - special-orthogonal-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.8, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G141: Center of the Special Orthogonal Group

## Problem Statement

> [!question] Exercise 8.8
> (a) Let $P$ be a matrix in the center of $SO_n$, and let $A$ be a skew-symmetric matrix. Prove that $PA=AP$.
>
> (b) Prove that the center of $SO_n$ is trivial if $n$ is odd and is $\{\pm I\}$ if $n$ is even and $n\ge4$.

## Hints

> [!hint]- Hint 1
> Differentiate the identity $Pe^{tA}=e^{tA}P$ at $t=0$.

> [!hint]- Hint 2
> Commute $P$ with the elementary skew matrices $E_{ij}-E_{ji}$.

## Solution

> [!success]- Solution
> **(a)** Since $A^{\mathsf T}=-A$, the curve $e^{tA}$ lies in $SO_n$. Centrality gives $Pe^{tA}=e^{tA}P$ for all $t$. Differentiating at $t=0$ yields $PA=AP$.
>
> **(b)** If $n\ge3$, commuting with every $E_{ij}-E_{ji}$ forces a matrix to be scalar: the off-diagonal entries vanish and all diagonal entries are equal. Hence a central element of $SO_n$ is $P=\lambda I$. Orthogonality gives $\lambda=\pm1$, while the determinant condition gives $\lambda^n=1$.
>
> Thus for odd $n$, only $I$ occurs. For even $n\ge4$, both $I$ and $-I$ occur, so
>
> $$
> Z(SO_n)=
> \begin{cases}
> \{I\},&n\text{ odd},\\
> \{I,-I\},&n\text{ even and }n\ge4.
> \end{cases}
> $$
>
> The exclusion of $n=2$ is necessary because $SO_2$ is abelian.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- Part (a) is the infinitesimal form of centrality under the group exponential.
- **Source status:** Ex. 8.8 was visually checked at [S1, Ch. 9, §9.8, printed p. 287, PDF p. 299]. The differentiation and commutant arguments are independent.
