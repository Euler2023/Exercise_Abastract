---
title: "Exercise Rep118: Inner Derivations and the Adjoint Lie Map"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 29, printed p. 548, PDF p. 563"
created: 2026-09-26
---

# Exercise Rep118: Inner Derivations and the Adjoint Lie Map

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 29
> Let $\mathfrak g$ be a module over the commutative ring $R$. A bilinear map $\mathfrak g\times\mathfrak g\to\mathfrak g$, written $(x,y)\mapsto[x,y]$, makes $\mathfrak g$ a Lie algebra if $[x,x]=0$ and $[[x,y],z]+[[y,z],x]+[[z,x],y]=0$ for all $x,y,z\in\mathfrak g$.
>
> **(a)** Let $M_n(R)$ be the ring of matrices over $R$. Show that $[x,y]=xy-yx$ makes $M_n(R)$ a Lie algebra.
>
> **(b)** Let $\mathfrak g$ be a Lie algebra and $x\in\mathfrak g$. Define $L_x(y)=[x,y]$. Show that $L_x$ is a derivation of $\mathfrak g$: $D([y,z])=[Dy,z]+[y,Dz]$.
>
> **(c)** Show that $x\mapsto L_x$ is a Lie homomorphism from $\mathfrak g$ into the module of derivations of $\mathfrak g$.

## Hints

> [!hint]- Hint 1: Expand the matrix Jacobi expression
> Every word of length three occurs twice with opposite signs.

> [!hint]- Hint 2: Reorder Jacobi
> Alternation implies $[x,y]=-[y,x]$, even when $2$ is not invertible in $R$.

> [!hint]- Hint 3: Use the commutator bracket on derivations
> Compute $[L_x,L_y](z)$ and compare it with $L_{[x,y]}(z)$.

## Solution

> [!success]- Solution
> **(a)** Bilinearity follows from distributivity of matrix multiplication, and $[x,x]=xx-xx=0$. Associativity gives
>
> $$
> \begin{aligned}
> [[x,y],z]+[[y,z],x]+[[z,x],y]
> &=(xyz-yxz-zxy+zyx)\\
> &\quad +(yzx-zyx-xyz+xzy)\\
> &\quad +(zxy-xzy-yzx+yxz)=0.
> \end{aligned}
> $$
>
> **(b)** In any Lie algebra, $0=[x+y,x+y]=[x,y]+[y,x]$. Rewriting Jacobi using this antisymmetry gives
>
> $$
> [x,[y,z]]=[[x,y],z]+[y,[x,z]].
> $$
>
> Therefore $L_x([y,z])=[L_xy,z]+[y,L_xz]$, so $L_x$ is a derivation.
>
> **(c)** The derivations form an $R$-module and a Lie algebra under the operator commutator $[D_1,D_2]=D_1D_2-D_2D_1$: applying two Leibniz rules shows the cross terms cancel and the commutator is again a derivation. The map $x\mapsto L_x$ is $R$-linear by bilinearity of the bracket. For every $z\in\mathfrak g$, the identity in (b) yields
>
> $$
> [L_x,L_y](z)
> =[x,[y,z]]-[y,[x,z]]
> =[[x,y],z]
> =L_{[x,y]}(z).
> $$
>
> Thus $[L_x,L_y]=L_{[x,y]}$, proving that the adjoint map is a Lie homomorphism.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Exercises/Exercise Rep25 - Jacobi Identity for Matrix Commutators|Exercise Rep25]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 29(a)–(c), printed p. 548, PDF p. 563]. All three subparts were checked on the page image and derived here. The argument works over any commutative base ring, including characteristic $2$.

