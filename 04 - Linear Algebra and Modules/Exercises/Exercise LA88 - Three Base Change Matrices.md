---
title: "Exercise LA88: Three Base-Change Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - base-change
  - coordinates
  - bases
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 4, Ex. 4.2, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA88: Three Base-Change Matrices

## Problem Statement

> [!question] Exercise 4.2
> **(a)** In $\mathbb R^2$, find the base-change matrix from the standard basis $\mathcal E=(e_1,e_2)$ to $\mathcal B=(e_1+e_2,e_1-e_2)$.
> 
> **(b)** In $\mathbb R^n$, do the same for $\mathcal B=(e_n,e_{n-1},\ldots,e_1)$.
> 
> **(c)** In $\mathbb R^2$, let $v_1=e_1$ and let the unit vector $v_2$ make an angle $120^\circ$ with $v_1$. Find the base-change matrix relating $\mathcal E$ and $\mathcal B=(v_1,v_2)$.

## Hints

> [!hint]- Hint 1
> Artin's second-edition base-change matrix from $\mathcal E$ to $\mathcal B$ has the new basis vectors as its columns in standard coordinates.

## Solution

> [!success]- Solution
> Using Artin's second-edition convention $\mathcal B=\mathcal EP$:
> 
> **(a)** Since $M_{\mathcal B}=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$,
> 
> $$
> P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
> $$
> 
> **(b)** $P$ is the reversal permutation matrix, with ones on the anti-diagonal. It equals its own inverse.
> 
> **(c)** Taking $v_2=(-1/2,\sqrt3/2)^t$ gives
> 
> $$
> M_{\mathcal B}=\begin{pmatrix}1&-1/2\\0&\sqrt3/2\end{pmatrix},
> \qquad
> P=M_{\mathcal B}=\begin{pmatrix}1&-1/2\\0&\sqrt3/2\end{pmatrix}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §4, Ex. 4.2, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Convention:** Artin 2e uses $\mathcal B=\mathcal EP$ for the base-change matrix from the old standard basis to the new basis. Consequently coordinate columns obey $X=PX'$.
