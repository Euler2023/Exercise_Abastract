---
title: "Exercise LA350: Bases, Duals, and Discriminants of Euclidean Lattices"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - dual-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.9, printed p. 441, PDF p. 453"
created: 2026-08-28
---

# Exercise LA350: Bases, Duals, and Discriminants of Euclidean Lattices

## Problem Statement

> [!question] Miscellaneous Problem M.9
> Consider the Euclidean space $\mathbb R^k$, with dot product $(v\cdot w)$. A lattice $L$ in $V$ is a discrete subgroup of $V^+$ that contains $k$ independent vectors. If $L$ is a lattice, define
>
> $$
> L^*=\{w\mid(v\cdot w)\in\mathbb Z\text{ for all }v\in L\}.
> $$
>
> **(a)** Show that $L$ has a lattice basis $B=(v_1,\ldots,v_k)$, a set of $k$ vectors that spans $L$ as a $\mathbb Z$-module.
>
> **(b)** Show that $L^*$ is a lattice, and describe how to determine a lattice basis for $L^*$ in terms of $B$.
>
> **(c)** Under what conditions is $L$ a sublattice of $L^*$?
>
> **(d)** Suppose $L\subset L^*$. Find a formula for $[L^*:L]$.

## Hints

> [!hint]- Hint 1
> For (a), choose a shortest nonzero lattice vector and project to its orthogonal complement.

> [!hint]- Hint 2
> If the basis vectors are the columns of a matrix $B$, the dual basis matrix is $B^{-\mathsf T}$.

## Solution

> [!success]- Solution
> **(a)** Choose a shortest nonzero $v_1\in L$. Then $L\cap\mathbb Rv_1=\mathbb Zv_1$; otherwise subtracting a nearest integer multiple would give a shorter nonzero vector. Orthogonally project $L$ to $v_1^\perp$. The image is discrete: any sequence of projected points tending to zero can be adjusted by multiples of $v_1$ into a bounded set, which contains only finitely many points of $L$. Induction on $k$ gives a basis of the projected lattice; lifting it and adjoining $v_1$ gives a $\mathbb Z$-basis of $L$.
>
> **(b)** Regard $B$ as the invertible matrix with columns $v_i$. The columns of
>
> $$
> B^*=B^{-\mathsf T}
> $$
>
> satisfy
>
> $$
> v_i\cdot v_j^*=\delta_{ij}.
> $$
>
> Therefore
>
> $$
> \boxed{L^*=B^{-\mathsf T}\mathbb Z^k,}
> $$
>
> which is a lattice with the displayed dual basis.
>
> **(c)** The inclusion $L\subseteq L^*$ holds exactly when every pair of lattice vectors has integral dot product. It is enough to test a basis:
>
> $$
> \boxed{L\subseteq L^*\iff G=B^{\mathsf T}B\text{ has integer entries}.}
> $$
>
> **(d)** The covolumes are
>
> $$
> \Delta(L)=|\det B|,
> \qquad
> \Delta(L^*)=|\det B|^{-1}.
> $$
>
> Hence, when $L\subset L^*$,
>
> $$
> \boxed{[L^*:L]=\frac{\Delta(L)}{\Delta(L^*)}=|\det B|^2=\det(B^{\mathsf T}B).}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Linear Algebra is primary because basis matrices, Gram matrices, and covolumes determine the dual and its index.
- **Source status:** [S1, Ch. 14, Misc. M.9, printed p. 441, PDF p. 453]. The induction and matrix formulas are independent.
