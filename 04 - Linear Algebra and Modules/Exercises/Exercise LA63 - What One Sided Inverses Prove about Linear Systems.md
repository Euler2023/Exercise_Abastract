---
title: "Exercise LA63: What One-Sided Inverses Prove about Linear Systems"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - one-sided-inverses
  - linear-systems
  - logic
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.8, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA63: What One-Sided Inverses Prove about Linear Systems

## Problem Statement

> [!question] Exercise M.8
> For a general system $AX=B$, suppose $A$ has a left inverse $L$, so $LA=I_n$.
> 
> **(a)** Give examples showing the difficulty with claiming $X=LB$ solves the system.
> 
> **(b)** State exactly what the deduction from $AX=B$ to $X=LB$ proves. What would a right inverse prove?

## Hints

> [!hint]- Hint 1
> Use $A=\begin{bmatrix}1\0\end{bmatrix}$ and $L=[1\ 0]$.

> [!hint]- Hint 2
> Distinguish a necessary condition from a sufficient condition.

## Solution

> [!success]- Solution
> Take
> 
> $$
> A=\begin{bmatrix}1\\0\end{bmatrix},\qquad L=\begin{bmatrix}1&0\end{bmatrix}.
> $$
> 
> Then $LA=[1]$, but
> 
> $$
> AL=\begin{bmatrix}1&0\\0&0\end{bmatrix}\ne I_2.
> $$
> 
> For $B=(0,1)^{\mathsf T}$ the formula gives $X=LB=0$, yet $AX=0\ne B$.
> 
> In general, the steps
> 
> $$
> AX=B\Longrightarrow LAX=LB\Longrightarrow X=LB
> $$
> 
> prove only that **if** a solution exists, it must equal $LB$. Thus a left inverse proves uniqueness, not existence.
> 
> If $R$ is a right inverse, $AR=I_m$, then for every $B$ the vector $X=RB$ satisfies
> 
> $$
> AX=ARB=B.
> $$
> 
> Thus a right inverse proves existence for every right-hand side, not uniqueness.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.8, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
