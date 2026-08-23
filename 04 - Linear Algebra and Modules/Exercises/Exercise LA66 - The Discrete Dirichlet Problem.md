---
title: "Exercise LA66: The Discrete Dirichlet Problem"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - discrete-laplacian
  - maximum-principle
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.11, printed p. 36, PDF p. 48"
created: 2026-08-23
---

# Exercise LA66: The Discrete Dirichlet Problem

## Problem Statement

> [!question] Exercise M.11
> A function on integer lattice points is discrete harmonic when
> 
> $$
> f(u+1,v)+f(u-1,v)+f(u,v+1)+f(u,v-1)-4f(u,v)=0.
> $$
> 
> For a finite discrete region $R$, boundary values $\beta$ are prescribed on $\partial R$.
> 
> **(a)** Take $R=\{(0,0),(0,\pm1),(\pm1,0)\}$. Write and solve the system when $\beta_{uv}=0$ for $v\le0$ and $\beta_{uv}=1$ for $v>0$.
> 
> **(b)** Prove the maximum principle.
> 
> **(c)** Prove existence and uniqueness for every finite region and boundary function.

## Hints

> [!hint]- Hint 1
> Name the five unknown values at the center, top, bottom, right, and left.

> [!hint]- Hint 2
> If an interior maximum exceeds the boundary maximum, all four neighbors must share it.

> [!hint]- Hint 3
> Use uniqueness of the homogeneous square system to obtain invertibility.

## Solution

> [!success]- Solution
> Let the five unknowns be $c,u,d,r,\ell$ at the center, top, bottom, right, and left. The equations are
> 
> $$
> 4c=u+d+r+\ell,
> $$
> 
> $$
> 4u=c+3,\qquad 4d=c,
> \qquad 4r=c+1,\qquad4\ell=c+1.
> $$
> 
> Substitution gives
> 
> $$
> c=\frac5{12},\quad u=\frac{41}{48},\quad d=\frac5{48},
> \quad r=\ell=\frac{17}{48}.
> $$
> 
> For the maximum principle, suppose a harmonic function has an interior value strictly larger than every boundary value. At an interior maximum, the value is the average of its four neighbors. Since no neighbor can be larger, all four must equal the same maximum. Repeating along adjacent interior points propagates the maximum until the boundary is reached, contradicting the strict inequality. Applying the result to $-f$ gives the corresponding minimum principle.
> 
> For uniqueness, the difference of two solutions is harmonic with zero boundary values. The maximum and minimum principles force that difference to be identically zero.
> 
> Finally, the interior equations form a square linear system $LX=B$. The uniqueness result says that the homogeneous system $LX=0$ has only the zero solution. Hence $L$ is invertible, so $LX=B$ has a solution for every boundary vector $B$. This proves existence and uniqueness.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.11, printed p. 36, PDF p. 48]. The solution is an independent derivation for this vault, not a solution printed in Artin.
