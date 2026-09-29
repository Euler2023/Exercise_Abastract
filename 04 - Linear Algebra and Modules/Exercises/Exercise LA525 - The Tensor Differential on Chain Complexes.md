---
title: "Exercise LA525: The Tensor Differential on Chain Complexes"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 29, printed p. 832, PDF p. 847"
created: 2026-09-29
---

# Exercise LA525: The Tensor Differential on Chain Complexes

## Problem Statement

> [!question] Lang XX.29
> Let $K=\bigoplus K_p$ and $L=\bigoplus L_q$ be complexes indexed by the integers, whose boundary maps lower indices by one. Define
> $$
> (K\otimes L)_n=\bigoplus_{p+q=n}K_p\otimes L_q.
> $$
> Show that there are unique homomorphisms $d_n:(K\otimes L)_n\to(K\otimes L)_{n-1}$ with
> $$
> d(x\otimes y)=d(x)\otimes y+(-1)^px\otimes d(y)\qquad(x\in K_p,\ y\in L_q).
> $$
> Show that $K\otimes L$ with these maps is a complex: $d\circ d=0$.

## Hints

> [!hint]- Hint 1
> On each summand, the formula is induced by two tensor products of maps.

> [!hint]- Hint 2
> The mixed terms in the square have opposite signs.

## Solution

> [!success]- Independent derivation
> Take complexes of modules over a fixed commutative ring; more generally, take a right-module and a left-module complex with compatible scalar-linear differentials. For each $p,q$, the maps $d_K\otimes1$ and $1\otimes d_L$ are defined on the tensor product and land respectively in the $(p-1,q)$ and $(p,q-1)$ summands. Their signed sum defines the proposed homomorphism there. The direct-sum universal property assembles these maps into $d_n$. Pure tensors generate every summand, so the prescribed values give uniqueness. Finite support of each element ensures the construction also works for unbounded complexes.
>
> For a pure tensor of bidegree $(p,q)$, expansion gives
> $$
> d^2(x\otimes y)
> =d_K^2x\otimes y
> +\bigl((-1)^{p-1}+(-1)^p\bigr)d_Kx\otimes d_Ly
> +(-1)^{2p}x\otimes d_L^2y=0.
> $$
> The outer terms vanish because $K,L$ are complexes, and the mixed coefficient vanishes. Additivity proves $d^2=0$ everywhere.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 29, printed p. 832, PDF p. 847]. The original page image was checked; the solution above is an independent derivation.
- This exercise uses homological grading; the totalization in XX.30 uses cohomological grading. The direct sum along a diagonal is part of the definition.
