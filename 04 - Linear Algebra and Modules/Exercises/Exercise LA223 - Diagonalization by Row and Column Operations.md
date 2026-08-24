---
title: "Exercise LA223: Diagonalization by Row and Column Operations"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-congruence
  - symmetric-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.14, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA223: Diagonalization by Row and Column Operations

## Problem Statement

> [!question] Exercise 4.14
> The matrix form of Theorem 8.4.10 asserts that if $A$ is a real symmetric matrix, there exists an invertible matrix $P$ such that $P^{\mathsf T}AP$ is diagonal. Prove this by row and column operations.

## Hints

> [!hint]- Hint 1
> Perform every column operation together with the corresponding row operation so symmetry and congruence are preserved.

> [!hint]- Hint 2
> If every diagonal entry is zero but $A\ne0$, use an off-diagonal entry to create a nonzero diagonal entry.

## Solution

> [!success]- Solution
> We argue by induction on the size $n$. If $A=0$, there is nothing to prove. Suppose first that some diagonal entry is nonzero. A simultaneous permutation of rows and columns puts it in position $(1,1)$, so assume $a_{11}\ne0$.
>
> For each $j>1$, perform the column operation
>
> $$
> C_j\longleftarrow C_j-\frac{a_{1j}}{a_{11}}C_1
> $$
>
> together with the corresponding row operation
>
> $$
> R_j\longleftarrow R_j-\frac{a_{1j}}{a_{11}}R_1.
> $$
>
> Together these operations replace $A$ by $E^{\mathsf T}AE$ for an invertible elementary matrix $E$. They clear every entry in the first row and column except $a_{11}$, producing
>
> $$
> \begin{pmatrix}a_{11}&0\\0&A_1\end{pmatrix}
> $$
>
> with $A_1$ symmetric. The induction hypothesis diagonalizes $A_1$ by the same kind of paired operations.
>
> It remains to handle the case in which all diagonal entries vanish but $A\ne0$. Then some $a_{ij}\ne0$. Replacing the basis vector $e_i$ by $e_i+e_j$—equivalently, adding column $j$ to column $i$ and row $j$ to row $i$—changes the $(i,i)$ entry to
>
> $$
> a_{ii}+2a_{ij}+a_{jj}=2a_{ij}\ne0.
> $$
>
> We are now in the previous case. The product of all elementary change-of-basis matrices is an invertible $P$ with $P^{\mathsf T}AP$ diagonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Ordinary independent row reduction would not represent a change of basis for a form; rows and columns must be paired.
- The step creating $2a_{ij}$ uses that the ground field has characteristic different from $2$.
- **Source status:** Visually verified at [S1, Ch. 8, §4, Ex. 4.14, printed p. 255, PDF p. 267]. The proof is independent.

