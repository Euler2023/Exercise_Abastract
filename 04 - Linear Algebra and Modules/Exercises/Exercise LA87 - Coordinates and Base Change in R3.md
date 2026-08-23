---
title: "Exercise LA87: Coordinates and Base Change in $\\mathbb R^3$"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bases
  - coordinates
  - base-change
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 4, Ex. 4.1, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA87: Coordinates and Base Change in $\mathbb R^3$

## Problem Statement

> [!question] Exercise 4.1
> Let
> 
> $$
> \mathcal B=((1,2,0)^t,(2,1,2)^t,(3,1,1)^t).
> $$
> 
> **(a)** Prove that $\mathcal B$ is a basis of $\mathbb R^3$.
> 
> **(b)** Find the $\mathcal B$-coordinate vector of $v=(1,2,3)^t$.
> 
> **(c)** For $\mathcal B'=((0,1,0)^t,(1,0,1)^t,(2,1,0)^t)$, determine the base-change matrix from $\mathcal B$ to $\mathcal B'$.

## Hints

> [!hint]- Hint 1
> Assemble each basis into a column matrix.

> [!hint]- Hint 2
> Artin's second-edition convention is $M_{\mathcal B'}=M_{\mathcal B}P$.

## Solution

> [!success]- Solution
> The column matrix of $\mathcal B$ is
> 
> $$
> M_{\mathcal B}=\begin{pmatrix}1&2&3\\2&1&1\\0&2&1\end{pmatrix},
> \qquad \det M_{\mathcal B}=7\ne0,
> $$
> 
> so $\mathcal B$ is a basis. Solving $M_{\mathcal B}c=v$ gives
> 
> $$
> [v]_{\mathcal B}=\begin{pmatrix}4/7\\15/7\\-9/7\end{pmatrix}.
> $$
> 
> With Artin's second-edition convention $\mathcal B'=\mathcal BP$,
> 
> $$
> P=M_{\mathcal B}^{-1}M_{\mathcal B'}
> =\frac17\begin{pmatrix}4&-2&2\\1&3&-3\\-2&1&6\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §4, Ex. 4.1, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Convention:** Artin 2e defines the base-change matrix from the old basis $\mathcal B$ to the new basis $\mathcal B'$ by $\mathcal B'=\mathcal BP$; coordinate columns therefore satisfy $X=PX'$.
