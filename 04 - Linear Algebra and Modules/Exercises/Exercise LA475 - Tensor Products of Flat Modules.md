---
title: "Exercise LA475: Tensor Products of Flat Modules"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - flat-modules
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 6, printed p. 638, PDF p. 653"
created: 2026-09-29
---

# Exercise LA475: Tensor Products of Flat Modules

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 6
> Let $M,N$ be flat. Show that $M\otimes N$ is flat.

The modules and tensor products are over one commutative ring $R$, as in the chapter's flatness discussion.

## Hints

> [!hint]- Hint 1: Test preservation of an injection
> A module $F$ is flat if and only if $1_F\otimes u$ is injective for every injective homomorphism $u:U\to V$ of $R$-modules.

> [!hint]- Hint 2: Tensor twice and use associativity
> First apply $N\otimes_R-$ to $u$, and then apply $M\otimes_R-$. Compare the result with $(M\otimes_R N)\otimes_R u$ using the associativity isomorphism of tensor products.

## Solution

> [!success]- Independent proof by preservation of injections
> Let $u:U\to V$ be an injective homomorphism of $R$-modules. Since $N$ is flat,
>
> $$
> 1_N\otimes u:N\otimes_R U\longrightarrow N\otimes_R V
> $$
>
> is injective. Since $M$ is flat, tensoring this injection with $M$ gives another injection,
>
> $$
> 1_M\otimes(1_N\otimes u):
> M\otimes_R(N\otimes_R U)
> \longrightarrow M\otimes_R(N\otimes_R V).
> $$
>
> For any $R$-module $W$, the tensor universal property gives the mutually inverse associativity maps
>
> $$
> \begin{aligned}
> \alpha_W:(M\otimes_R N)\otimes_R W
> &\longrightarrow M\otimes_R(N\otimes_R W),\\
> (m\otimes n)\otimes w&\longmapsto m\otimes(n\otimes w),
> \end{aligned}
> $$
>
> and $m\otimes(n\otimes w)\mapsto(m\otimes n)\otimes w$. Both are well-defined because their formulas respect each additivity and $R$-balance relation. On pure tensors,
>
> $$
> \alpha_V\circ(1_{M\otimes_R N}\otimes u)
> =\bigl(1_M\otimes(1_N\otimes u)\bigr)\circ\alpha_U.
> $$
>
> The map on the right after $\alpha_U$ is injective, and the two $\alpha$ maps are isomorphisms. Hence $1_{M\otimes_R N}\otimes u$ is injective. As this holds for every injection $u$, the flatness criterion proves that $M\otimes_R N$ is flat.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [S2, Ch. XVI, Ex. 6, printed p. 638, PDF p. 653] was checked on the original page image. The proof is independent. The injection criterion is condition F3 in the source's definition of flatness [S2, Ch. XVI, §3, printed p. 613, PDF p. 628]; the associativity maps are verified above.
- **Scope:** Neither module needs to be finitely generated or free. The proof also yields flatness of any finite tensor product of flat $R$-modules by induction.
