---
title: "Exercise LA489: Matrix Stable Lattices over a Principal Ideal Domain"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lattices
  - matrix-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 13, printed p. 662, PDF p. 677"
created: 2026-09-29
---

# Exercise LA489: Matrix Stable Lattices over a Principal Ideal Domain

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 13
> Let $A$ be a principal ring with quotient field $K$. Let $A^n$ be $n$-space over $A$, and let
>
> $$
> T=A^n\oplus A^n\oplus\cdots\oplus A^n
> $$
>
> be the direct sum of $A^n$ with itself $r$ times. Then $T$ is free of rank $nr$ over $A$. If we view elements of $A^n$ as column vectors, then $T$ is the space of $n\times r$ matrices over $A$. Let $M=\operatorname{Mat}_n(A)$ be the ring of $n\times n$ matrices over $A$, operating on the left of $T$. By a **lattice** $L$ in $T$ we mean an $A$-submodule of rank $nr$ over $A$. Prove that any such lattice which is $M$-stable is $M$-isomorphic to $T$ itself. Thus there is just one $M$-isomorphism class of lattices. [Hint: Let $g\in M$ be the matrix with $1$ in the upper left corner and $0$ everywhere else, so $g$ is a projection of $A^n$ on a $1$-dimensional subspace. Then multiplication on the left $g:T\to A_r$ maps $T$ on the space of $n\times r$ matrices with arbitrary first row and $0$ everywhere else. Furthermore, for any lattice $L$ in $T$ the image $gL$ is a lattice in $A_r$, that is a free $A$-submodule of rank $r$. By elementary divisors there exists an $r\times r$ matrix $Q$ such that
>
> $$
> gL=A_rQ\qquad\text{(multiplication on the right)}.
> $$
>
> Then show that $TQ=L$ and that multiplication by $Q$ on the right is an $M$-isomorphism of $T$ with $L$.]

The quotient-field hypothesis makes $A$ an integral domain, so here “principal ring” is a PID. The symbol $A_r$ in the hint denotes the row module, identified with the matrices supported in the first row. Its “$1$-dimensional subspace” is a rank-one direct summand over $A$.

## Hints

> [!hint]- Hint 1: Use matrix units to compare all rows
> Put $W=gL$, identified with a submodule of $A^r$. Left multiplication by $E_{1i}$ copies the $i$th row into the first row, and left multiplication by $E_{i1}$ copies the first row into the $i$th row. Use $M$-stability in both directions.

> [!hint]- Hint 2: Choose a basis of the row lattice
> Show that $L$ consists of exactly the matrices whose rows belong to $W$. The full-rank condition gives $\operatorname{rank}_A W=r$. Put an $A$-basis of $W$ into the rows of a matrix $Q$, so $W=A^rQ$ and $\det Q\ne0$. Then right multiplication by $Q$ has the desired image and commutes with the left $M$-action.

## Solution

> [!success]- Independent proof using matrix units and a row basis
> Assume $n,r\ge1$; if either is zero, $T=L=0$ and the assertion is immediate. All matrix units below have size $n\times n$. Write $g=E_{11}$, and identify the submodule $gT$ with $A^r$ by taking the first row. Let $W\subseteq A^r$ correspond to $gL$.
>
> Since $A$ is a PID and $L$ is a submodule of the finite free module $T$, it is finite free. The same is true for $W\subseteq A^r$. Its rank is $r$: the given rank of $L$ means its $K$-linear span inside $\operatorname{Mat}_{n\times r}(K)$ is the entire space. Applying the $K$-linear projection $g$ gives
>
> $$
> K W=g(KL)=g\operatorname{Mat}_{n\times r}(K)\cong K^r.
> $$
>
> Here $KW$ and $KL$ denote linear spans over the quotient field, equivalently the images after tensoring with $K$. Thus a basis of the free module $W$ has exactly $r$ elements.
>
> We next characterize $L$ row by row. For $X\in L$ and each $i$, the matrix $E_{1i}X$ belongs to $L$ by $M$-stability. It is supported in the first row and has there the $i$th row of $X$. Applying $g$ does not change it, so that row lies in $W$.
>
> Conversely, suppose a matrix $X$ has rows $w_1,\ldots,w_n\in W$. For each $i$, let $Y_i$ be the matrix supported in the first row with row $w_i$. By definition $Y_i\in gL$, and $gL\subseteq L$ because $g\in M$ and $L$ is stable. Hence $E_{i1}Y_i\in L$. Their sum is $X$, so $X\in L$. We have proved
>
> $$
> L=\{X\in\operatorname{Mat}_{n\times r}(A):
> \text{every row of }X\text{ belongs to }W\}.
> $$
>
> Choose an $A$-basis $w^{(1)},\ldots,w^{(r)}$ of $W$, and let $Q\in\operatorname{Mat}_r(A)$ have these vectors as its rows. For a row vector $c=(c_1,\ldots,c_r)$, the product $cQ$ is $\sum_j c_jw^{(j)}$. Therefore $W=A^rQ$. The rows of $Q$ span $K^r$, so $\det Q\ne0$ and $Q$ is invertible over $K$.
>
> The row characterization now gives $L=TQ$. Define
>
> $$
> \rho_Q:T\longrightarrow L,\qquad X\longmapsto XQ.
> $$
>
> It is surjective by $L=TQ$. If $XQ=0$, multiply over $K$ by $Q^{-1}$ to get $X=0$, so it is injective. For every $m\in M$, associativity gives $\rho_Q(mX)=mXQ=m\rho_Q(X)$. Thus $\rho_Q$ is an isomorphism of left $M$-modules from $T$ to $L$, proving uniqueness of the isomorphism class.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [S2, Ch. XVII, Ex. 13, printed p. 662, PDF p. 677], including the complete hint and the identity $gL=A_rQ$, was checked on the original page image. The row-by-row construction is an independent derivation. Its structural input is that submodules of finite free modules over a PID are finite free; a full Smith normal form is not required.
- **Invertibility boundary:** We need $Q\in\operatorname{GL}_r(K)$, not necessarily $Q\in\operatorname{GL}_r(A)$. For example, $A=\mathbb Z$ and $L=2T$ give $Q=2I_r$, which defines an isomorphism $T\to L$ although it is not an automorphism of $T$ onto itself.
- **Meaning of lattice:** This is a full-rank algebraic submodule of $A^{nr}$. No Euclidean inner product, discreteness topology, or real lattice geometry is assumed.
