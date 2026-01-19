---
title: Determinants
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Determinants

## Definition

> [!info] Definition (Determinant)
> The **determinant** is the unique function $\det: M_n(F) \to F$ satisfying:
> 1. **Multilinear**: Linear in each row (or column)
> 2. **Alternating**: Changes sign when two rows are swapped
> 3. **Normalized**: $\det(I) = 1$

> [!info] Explicit Formula
> $$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n a_{i,\sigma(i)}$$

## Key Properties

1. $\det(AB) = \det(A) \det(B)$
2. $\det(A^T) = \det(A)$
3. $\det(A^{-1}) = 1/\det(A)$
4. $\det(\alpha A) = \alpha^n \det(A)$ for $n \times n$ matrix
5. $A$ is invertible iff $\det(A) \neq 0$
6. $\det$ is unchanged by adding a multiple of one row to another

## Computation Methods

### Cofactor Expansion
$$\det(A) = \sum_{j=1}^n (-1)^{i+j} a_{ij} M_{ij}$$
where $M_{ij}$ is the $(i,j)$-minor.

### Row Reduction
Reduce to triangular form; determinant is product of diagonal entries (with sign adjustments for row swaps).

### Special Matrices
| Type | Determinant |
|------|-------------|
| Diagonal/Triangular | Product of diagonal |
| Block diagonal | Product of block determinants |
| $2 \times 2$ | $ad - bc$ |

## Geometric Interpretation

> [!tip] Volume
> $|\det(A)|$ = volume of parallelepiped spanned by column vectors of $A$.
>
> $\text{sgn}(\det(A))$ = orientation (positive = preserves, negative = reverses).

## Applications

> [!abstract] Cramer's Rule
> For $Ax = b$ with $\det(A) \neq 0$:
> $$x_i = \frac{\det(A_i)}{\det(A)}$$
> where $A_i$ has column $i$ replaced by $b$.

> [!abstract] Inverse Formula
> $$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$$
> where $\text{adj}(A)_{ij} = (-1)^{i+j} M_{ji}$.

## Examples

> [!example] Example 1: 2×2 matrix
> $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$

> [!example] Example 2: 3×3 matrix
> Using Sarrus' rule or cofactor expansion.

> [!example] Example 3: Vandermonde matrix
> $\det\begin{pmatrix} 1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2 \end{pmatrix} = (x_2-x_1)(x_3-x_1)(x_3-x_2)$

## Related to Eigenvalues

$$\det(A) = \prod_{i=1}^n \lambda_i$$
$$\text{tr}(A) = \sum_{i=1}^n \lambda_i$$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
