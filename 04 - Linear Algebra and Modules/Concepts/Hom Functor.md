---
title: Hom Functor
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Hom Functor

## Definition

> [!info] Definition (Hom Set)
> For $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|modules]] $M$ and $N$:
> $$\text{Hom}_R(M, N) = \{f: M \to N \mid f \text{ is an } R\text{-module homomorphism}\}$$

> [!info] Definition (Module Structure)
> $\text{Hom}_R(M, N)$ is an abelian group under:
> - $(f + g)(m) = f(m) + g(m)$
>
> If $R$ is commutative, $\text{Hom}_R(M, N)$ is an $R$-module via $(rf)(m) = r \cdot f(m)$.

## Functorial Properties

> [!info] Covariant Functor
> For fixed $M$, $\text{Hom}_R(M, -)$ is a **covariant functor**:
> - If $f: N \to N'$, then $f_* : \text{Hom}(M, N) \to \text{Hom}(M, N')$
> - $f_*(\phi) = f \circ \phi$

> [!info] Contravariant Functor
> For fixed $N$, $\text{Hom}_R(-, N)$ is a **contravariant functor**:
> - If $g: M \to M'$, then $g^* : \text{Hom}(M', N) \to \text{Hom}(M, N)$
> - $g^*(\phi) = \phi \circ g$

## Exactness Properties

> [!abstract] Left Exactness
> $\text{Hom}_R(M, -)$ is **left exact**: if $0 \to A \to B \to C \to 0$ is exact, then
> $$0 \to \text{Hom}(M, A) \to \text{Hom}(M, B) \to \text{Hom}(M, C)$$
> is exact (but not necessarily on the right).

> [!abstract] Left Exactness (Contravariant)
> $\text{Hom}_R(-, N)$ is **left exact**: if $0 \to A \to B \to C \to 0$ is exact, then
> $$0 \to \text{Hom}(C, N) \to \text{Hom}(B, N) \to \text{Hom}(A, N)$$
> is exact.

## Projective and Injective Modules

> [!info] Definition (Projective)
> $P$ is **projective** if $\text{Hom}(P, -)$ is exact, i.e., preserves surjections.

> [!info] Definition (Injective)
> $I$ is **injective** if $\text{Hom}(-, I)$ is exact, i.e., preserves injections.

## Key Properties

1. $\text{Hom}_R(R, M) \cong M$ (via $f \mapsto f(1)$)
2. $\text{Hom}_R(M \oplus N, P) \cong \text{Hom}(M, P) \times \text{Hom}(N, P)$
3. $\text{Hom}_R(M, N \times P) \cong \text{Hom}(M, N) \times \text{Hom}(M, P)$

## Adjunction with Tensor

> [!abstract] Tensor-Hom Adjunction
> For modules $L$, $M$, $N$:
> $$\text{Hom}_R(L \otimes_R M, N) \cong \text{Hom}_R(L, \text{Hom}_R(M, N))$$
> This is a natural isomorphism.

## Examples

> [!example] Example 1: Dual space
> For [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] $V$: $V^* = \text{Hom}_F(V, F)$ is the **dual space**.

> [!example] Example 2: Endomorphisms
> $\text{End}_R(M) = \text{Hom}_R(M, M)$ is a ring under composition.

> [!example] Example 3: $\mathbb{Z}$-modules
> $\text{Hom}_\mathbb{Z}(\mathbb{Z}/m\mathbb{Z}, \mathbb{Z}/n\mathbb{Z}) \cong \mathbb{Z}/\gcd(m,n)\mathbb{Z}$

> [!example] Example 4: Zero Hom
> $\text{Hom}_\mathbb{Z}(\mathbb{Q}, \mathbb{Z}) = 0$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]] (projective)
