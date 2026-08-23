---
title: "Exercise LA42: Multiplicity and Reality of Linear-System Solutions"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-systems
  - real-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 2, Ex. 2.9, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA42: Multiplicity and Reality of Linear-System Solutions

## Problem Statement

> [!question] Exercise 2.9
> For a real system $AX=B$:
> 
> **(a)** Prove that more than one solution implies infinitely many solutions.
> 
> **(b)** Prove that a complex solution implies a real solution.

## Hints

> [!hint]- Hint 1
> Join two solutions by an affine line.

> [!hint]- Hint 2
> Separate a complex vector into real and imaginary parts.

## Solution

> [!success]- Solution
> **(a)** If $X_0\ne X_1$ both solve the system, then for every real $t$,
> 
> $$
> A\bigl(X_0+t(X_1-X_0)\bigr)=B+t(B-B)=B.
> $$
> 
> Distinct values of $t$ give infinitely many solutions.
> 
> **(b)** Write a complex solution as $Z=X+iY$ with $X,Y$ real. Since $A,B$ are real,
> 
> $$
> AX+iAY=AZ=B.
> $$
> 
> Equating real and imaginary parts gives $AX=B$ and $AY=0$. Thus $X$ is a real solution.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §2, Ex. 2.9, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
