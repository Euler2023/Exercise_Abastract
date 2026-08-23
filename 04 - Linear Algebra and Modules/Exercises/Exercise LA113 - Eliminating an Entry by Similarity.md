---
title: "Exercise LA113: Eliminating an Entry by Similarity"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - similarity
  - elementary-matrices
  - companion-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §3, Ex. 3.2, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA113: Eliminating an Entry by Similarity

## Problem Statement

> [!question] Exercise 3.2
> (a) Let $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ be real, with $c\ne0$. Show that conjugation by elementary matrices can eliminate the $a$ entry.
>
> (b) Which matrices with $c=0$ are similar to a matrix whose $a$ entry is zero?

## Hints

> [!hint]- Hint 1
> In (a), try $P=\begin{pmatrix}1&x\\0&1\end{pmatrix}$.
>
> [!hint]- Hint 2
> Every nonscalar operator on a two-dimensional space has a cyclic basis $(v,Av)$.

## Solution

> [!success]- Solution
> (a) For $P=\begin{pmatrix}1&x\\0&1\end{pmatrix}$, the upper-left entry of $P^{-1}AP$ is $a-xc$. Taking $x=a/c$ makes it zero; $P$ is elementary.
>
> (b) Every nonscalar $2\times2$ matrix has a vector $v$ for which $(v,Av)$ is a basis. In that basis its first column is $(0,1)^t$, so its upper-left entry is zero. A scalar matrix $\alpha I$ is similar only to itself, and therefore has such a representative exactly when $\alpha=0$. Thus every matrix with $c=0$ except a nonzero scalar matrix has the required property.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA114 - A Cyclic Basis in Dimension Two|Exercise LA114]]

## Notes

- **Source status:** The displayed matrix was visually checked at [S1, Ch. 4, §3, Ex. 3.2, printed p. 126, PDF p. 138]. The solution is independent.

