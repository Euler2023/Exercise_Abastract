---
title: "Exercise LA65: Nonzero Eigenvalues and the Push-Through Inverse Identity"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - inverses
  - rectangular-matrices
  - eigenvalues
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.10, printed p. 36, PDF p. 48; Ch. 4, Miscellaneous Problems, Ex. M.10, printed p. 131, PDF p. 143"
created: 2026-08-23
---

# Exercise LA65: Nonzero Eigenvalues and the Push-Through Inverse Identity

## Problem Statement

> [!question] Exercise M.10 (Chapters 1 and 4)
> Let $A$ and $B$ be $m\times n$ and $n\times m$ real matrices.
>
> (a) Prove that if $\lambda$ is a nonzero eigenvalue of $AB$, then it is an eigenvalue of $BA$. Show by example that this may fail for $\lambda=0$.
>
> (b) Prove that $I_m-AB$ is invertible if and only if $I_n-BA$ is invertible.

## Hints

> [!hint]- Hint 1
> For (a), apply $B$ to $ABx=\lambda x$. For (b), if $U=(I_m-AB)^{-1}$, try $I_n+BUA$.

## Solution

> [!success]- Solution
> (a) If $ABx=\lambda x$ with $\lambda\ne0$, then $Bx\ne0$ and
>
> $$
> BA(Bx)=B(ABx)=\lambda Bx.
> $$
>
> For failure at zero, take $m=2,n=1$, $A=(1,0)^t$, and $B=(1,0)$. Then $AB=\operatorname{diag}(1,0)$ has eigenvalue $0$, whereas $BA=(1)$ does not.
>
> (b) Assume $U=(I_m-AB)^{-1}$ exists and set
>
> $$
> V=I_n+BUA.
> $$
>
> Since $(I_m-AB)U=U(I_m-AB)=I_m$, we have $U-I_m=ABU=UAB$. Then
>
> $$
> (I_n-BA)V
> =I_n+B(U-I_m-ABU)A=I_n,
> $$
>
> and similarly
>
> $$
> V(I_n-BA)=I_n+B(U-I_m-UAB)A=I_n.
> $$
>
> Thus
>
> $$
> (I_n-BA)^{-1}=I_n+B(I_m-AB)^{-1}A.
> $$
>
> The converse follows by interchanging $A$ and $B$ (and $m,n$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA140 - Similarity of AB and BA When A Is Invertible|Exercise LA140]]

## Notes

- **Deduplication:** Chapter 1 M.10 is exactly part (b) of Chapter 4 M.10. This existing note is expanded with Chapter 4 part (a) and reused instead of creating a second note for the repeated identity.
- **Source status:** The repeated identity was checked at [S1, Ch. 1, Misc. Ex. M.10, printed p. 36, PDF p. 48] and the expanded exercise at [S1, Ch. 4, Misc. Problems, Ex. M.10, printed p. 131, PDF p. 143]. The solution is independent.
