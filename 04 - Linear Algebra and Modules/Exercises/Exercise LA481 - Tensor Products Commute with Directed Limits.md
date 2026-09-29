---
title: "Exercise LA481: Tensor Products Commute with Directed Limits"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - tensor-product
  - direct-limit
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 12, printed p. 639, PDF p. 654"
created: 2026-09-29
---

# Exercise LA481: Tensor Products Commute with Directed Limits

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 12
> Show that the tensor product commutes with direct limits. In other words, if $\{E_i\}$ is a directed family of modules, and $M$ is any module, then there is a natural isomorphism
>
> $$
> \varinjlim_i(E_i\otimes_A M)
> \simeq(\varinjlim_iE_i)\otimes_A M.
> $$

> [!info] Directed family
> The modules are over the commutative ring $A$. The family includes transition maps $f_{ij}:E_i\to E_j$ for $i\le j$ in a nonempty directed partially ordered set, with $f_{ii}=\operatorname{id}$ and $f_{jk}f_{ij}=f_{ik}$. The transition maps need not be injective.

## Hints

> [!hint]- Hint 1: Use the structure maps
> If $\iota_i:E_i\to L=\varinjlim E_i$ are the structure maps, then $\iota_i\otimes\operatorname{id}_M$ form a compatible family and induce a map from the left side to the right side.

> [!hint]- Hint 2: Construct its inverse on elementary tensors
> Send $\iota_i(x)\otimes m$ to the class of $x\otimes m$ at stage $i$. Equality of representatives can be checked at a common later stage; use that fact to prove that this formula is well-defined and balanced.

## Solution

> [!success]- Independent derivation from the universal properties
> Let $I$ be the indexing set, write $L=\varinjlim_iE_i$, and let $\iota_i:E_i\to L$ be the structure maps. Put
>
> $$
> D=\varinjlim_i(E_i\otimes_A M),
> $$
>
> with structure maps $\lambda_i:E_i\otimes_A M\to D$ and transition maps $f_{ij}\otimes\operatorname{id}_M$.
>
> Recall the element description of a directed limit: every element of $L$ is represented by one $x\in E_i$, and $\iota_i(x)=\iota_j(y)$ if and only if there is $k\ge i,j$ with $f_{ik}(x)=f_{jk}(y)$. To see this from the direct-sum quotient construction, any element involves finitely many summands, so they may all be moved to one common upper stage. Likewise, an equality in the quotient uses only finitely many generating transition relations; moving all their indices to a common upper stage makes those relations vanish there. The converse follows directly from the structure-map identities. In particular, an element represents zero exactly when it becomes zero at some later stage.
>
> The maps $\iota_i\otimes\operatorname{id}_M:E_i\otimes_A M\to L\otimes_A M$ are compatible, so the universal property of $D$ gives a unique map
>
> $$
> \alpha:D\longrightarrow L\otimes_A M,
> \qquad \alpha\lambda_i(x\otimes m)=\iota_i(x)\otimes m.
> $$
>
> For the reverse direction, define
>
> $$
> b:L\times M\longrightarrow D,
> \qquad b(\iota_i(x),m)=\lambda_i(x\otimes m).
> $$
>
> If $\iota_i(x)=\iota_j(y)$, choose $k\ge i,j$ with $f_{ik}(x)=f_{jk}(y)$. Compatibility then gives
>
> $$
> \lambda_i(x\otimes m)
> =\lambda_k(f_{ik}(x)\otimes m)
> =\lambda_k(f_{jk}(y)\otimes m)
> =\lambda_j(y\otimes m).
> $$
>
> Hence $b$ is well-defined. To prove additivity in its first variable, represent two elements at a common upper stage and use additivity in that module. Additivity in the second variable is immediate at a fixed stage. For $a\in A$,
>
> $$
> b(a\iota_i(x),m)=\lambda_i(ax\otimes m)
> =\lambda_i(x\otimes am)=b(\iota_i(x),am).
> $$
>
> Thus $b$ is balanced, and induces $\beta:L\otimes_A M\to D$ with $\beta(\iota_i(x)\otimes m)=\lambda_i(x\otimes m)$.
>
> The displayed formulas show $\alpha\beta(\iota_i(x)\otimes m)=\iota_i(x)\otimes m$ and $\beta\alpha\lambda_i(x\otimes m)=\lambda_i(x\otimes m)$. These elements generate the respective modules, so $\alpha$ and $\beta$ are inverse isomorphisms. The formulas also commute with homomorphisms $M\to M'$ and with compatible maps between directed systems, proving naturality.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]

## Notes

- **Source and proof status:** The full statement and tensor subscripts were checked at [S2, Ch. XVI, Ex. 12, printed p. 639, PDF p. 654]. The directed-family convention was checked at [S2, Ch. III, §10, printed p. 160, PDF p. 175]. The inverse maps and the element argument are independent derivations.
- **Boundary:** No flatness or finite-generation hypothesis is needed. A directed limit is not generally a union of embedded submodules; the eventual-equality criterion handles noninjective transition maps.
