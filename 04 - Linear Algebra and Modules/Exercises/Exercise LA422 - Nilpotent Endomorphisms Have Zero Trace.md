---
title: "Exercise LA422: Nilpotent Endomorphisms Have Zero Trace"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - nilpotent-matrices
  - trace
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 6, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA422: Nilpotent Endomorphisms Have Zero Trace

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 6
> Let $A$ be a nilpotent endomorphism of a finite dimensional vector space $E$ over the field $k$. Show that $\operatorname{tr}(A)=0$.

## Hints

> [!hint]- Hint 1: Use the kernels of successive powers
> If $A^m=0$, consider $0=\ker A^0\subseteq\ker A\subseteq\cdots\subseteq\ker A^m=E$.

> [!hint]- Hint 2: Adapt a basis to the filtration
> Extend a basis at each step. A vector added at step $j$ is mapped by $A$ into the span of vectors chosen at earlier steps.

## Solution

> [!success]- Solution
> Choose $m\geq1$ with $A^m=0$ and put $K_j=\ker A^j$, including $K_0=0$. Choose a basis of $K_1$, extend it to a basis of $K_2$, and continue until obtaining a basis of $K_m=E$.
>
> If a basis vector $v$ is added at step $j$, then $A^jv=0$, so $Av\in K_{j-1}$. All basis vectors spanning $K_{j-1}$ precede $v$. Thus the matrix of $A$ in this ordered basis has nonzero entries only strictly above the diagonal. Its diagonal entries are all zero, and its trace is zero.
>
> For completeness, trace is unchanged under a change of basis: for square matrices $X,Y$ over $k$,
>
> $$
> \operatorname{tr}(XY)=\sum_{i,j}x_{ij}y_{ji}
> =\sum_{j,i}y_{ji}x_{ij}=\operatorname{tr}(YX).
> $$
>
> Consequently $\operatorname{tr}(P^{-1}AP)=\operatorname{tr}(APP^{-1})=\operatorname{tr}(A)$. The zero trace computed in the adapted basis is therefore the trace of the endomorphism itself.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 6, printed p. 568, PDF p. 583]. The statement was checked on the original page image. The adapted-basis construction and trace calculation are independent derivations; no algebraic closure or Jordan normal form is assumed.
- **Boundary:** The proof works in every characteristic. Zero trace alone does not imply nilpotence; the characteristic-zero criterion using several traces is treated in [[04 - Linear Algebra and Modules/Exercises/Exercise LA425 - Nilpotence Detected by Traces of Powers|Exercise LA425]].
