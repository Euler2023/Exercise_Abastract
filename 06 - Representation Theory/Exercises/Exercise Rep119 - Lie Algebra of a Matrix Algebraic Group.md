---
title: "Exercise Rep119: Lie Algebra of a Matrix Algebraic Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - algebraic-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 30, printed pp. 548-549, PDF pp. 563-564"
created: 2026-09-26
---

# Exercise Rep119: Lie Algebra of a Matrix Algebraic Group

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 30
> Let $\{P_\nu(X_{ij})\}$ be polynomials over a commutative ring $R$ in the entries of an $n\times n$ matrix. For every commutative $R$-algebra $R'$, let $G(R')$ be their common zero set in $M_n(R')$. Assume $G(R')$ is a subgroup of $GL_n(R')$ for every $R'$; in Lang's terminology the equations define an algebraic group over $R$. For example, $X^{\mathsf T}X=I_n$ defines such a group. Let $R[t]$ be the free $R$-algebra with basis $\{1,t\}$ and $t^2=0$, and set
>
> $$
> \mathfrak g=\{x\in M_n(R):I_n+tx\in G(R[t])\}.
> $$
>
> Show that $\mathfrak g$ is a Lie algebra. *Hint (source):* $P_\nu(I_n+tX)=P_\nu(I_n)+t\,\operatorname{grad}P_\nu(I_n)\cdot X$. Use $R[t,u]$ with $t^2=u^2=0$ to prove closure under $[x,y]$.

## Hints

> [!hint]- Hint 1: Identify the dual-number algebra
> Lang's $R[t]$ here means $R[t]/(t^2)$. The condition on $x$ is a system of homogeneous $R$-linear equations given by derivatives at the identity.

> [!hint]- Hint 2: Form a group commutator
> In $R[t,u]/(t^2,u^2)$, multiply $(I+tx)(I+uy)(I-tx)(I-uy)$ and read the $tu$ coefficient.

## Solution

> [!success]- Solution
> Write $D=R[t]/(t^2)$ for the dual-number algebra denoted $R[t]$ in the source. Because $G(R)$ is a group, $I_n\in G(R)$, so $P_\nu(I_n)=0$ for every $\nu$. Taylor expansion modulo $t^2$ gives
>
> $$
> P_\nu(I_n+tx)=t\,dP_\nu|_{I_n}(x).
> $$
>
> The $R$-module $D$ has free basis $\{1,t\}$, so $I_n+tx\in G(D)$ exactly when $dP_\nu|_{I_n}(x)=0$ for every $\nu$. Hence $\mathfrak g$ is the intersection of kernels of $R$-linear maps and is an $R$-submodule of $M_n(R)$.
>
> To check bracket closure, put $D_2=R[t,u]/(t^2,u^2)$. For $x,y\in\mathfrak g$, functoriality under $D\to D_2$ gives $I+tx,I+uy\in G(D_2)$. Their inverses are $I-tx,I-uy$ because $t^2=u^2=0$. Thus their group commutator belongs to $G(D_2)$, and direct multiplication gives
>
> $$
> (I+tx)(I+uy)(I-tx)(I-uy)=I+tu(xy-yx).
> $$
>
> For every defining polynomial $P_\nu$, evaluation at this element is $tu\,dP_\nu|_{I_n}([x,y])$. The elements $1,t,u,tu$ form an $R$-basis of $D_2$, so its vanishing forces $dP_\nu|_{I_n}([x,y])=0$. Hence $[x,y]\in\mathfrak g$. Finally, the matrix commutator is alternating and satisfies Jacobi by Exercise 29(a); its restriction makes $\mathfrak g$ a Lie algebra.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Exercises/Exercise Rep118 - Inner Derivations and the Adjoint Lie Map|Exercise Rep118]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 30, printed pp. 548–549, PDF pp. 563–564]. The opening on p. 548 and continuation on p. 549 were checked visually. The tangent calculation and group-commutator argument are independent.
- **Notation boundary:** The source writes $R[t]$ and $R[t,u]$ while imposing $t^2=0$ and $t^2=u^2=0$. These are quotient algebras, explicitly $R[t]/(t^2)$ and $R[t,u]/(t^2,u^2)$; ordinary polynomial rings would not give the stated Taylor truncation.

