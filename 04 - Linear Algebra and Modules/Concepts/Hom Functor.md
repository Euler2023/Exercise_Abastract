---
title: Hom Functor
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, §2, printed pp. 122–127, PDF pp. 137–142; Ch. III, Exercises 22–23 and 26, printed p. 171, PDF p. 186; Ch. XX, §§6–8, printed pp. 790–814, PDF pp. 805–829"
source_status: partially-verified
status: not-started
---

# Hom Functor

## Definition

> [!info] Definition (Hom Set)
> For $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|modules]] $M$ and $N$:
> $$
> \text{Hom}_R(M, N) = \{f: M \to N \mid f \text{ is an } R\text{-module homomorphism}\}
> $$

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
> $$
> 0 \to \text{Hom}(M, A) \to \text{Hom}(M, B) \to \text{Hom}(M, C)
> $$
> is exact (but not necessarily on the right).

> [!abstract] Left Exactness (Contravariant)
> $\text{Hom}_R(-, N)$ is **left exact**: if $0 \to A \to B \to C \to 0$ is exact, then
> $$
> 0 \to \text{Hom}(C, N) \to \text{Hom}(B, N) \to \text{Hom}(A, N)
> $$
> is exact.

## Projective and Injective Modules

> [!info] Definition (Projective)
> $P$ is **projective** if $\text{Hom}(P, -)$ is exact, i.e., preserves surjections.

> [!info] Definition (Injective)
> $I$ is **injective** if $\text{Hom}(-, I)$ is exact. Equivalently, every monomorphism $A\hookrightarrow B$ induces a surjection $\operatorname{Hom}_R(B,I)\twoheadrightarrow\operatorname{Hom}_R(A,I)$: every map $A\to I$ extends across $B$.

## Key Properties

1. $\text{Hom}_R(R, M) \cong M$ (via $f \mapsto f(1)$)
2. $\text{Hom}_R(M \oplus N, P) \cong \text{Hom}(M, P) \times \text{Hom}(N, P)$
3. $\text{Hom}_R(M, N \times P) \cong \text{Hom}(M, N) \times \text{Hom}(M, P)$

For an arbitrary family $(M_i)$, the corresponding formulas are

$$
\operatorname{Hom}_R\left(\bigoplus_iM_i,N\right)
\cong
\prod_i\operatorname{Hom}_R(M_i,N)
$$

and

$$
\operatorname{Hom}_R\left(N,\prod_iM_i\right)
\cong
\prod_i\operatorname{Hom}_R(N,M_i).
$$

The products on the right are essential when the index set is infinite.

## Hom and Limits

The functor $\operatorname{Hom}_R(N,-)$ preserves inverse limits:

$$
\operatorname{Hom}_R\left(N,\varprojlim_iM_i\right)
\cong
\varprojlim_i\operatorname{Hom}_R(N,M_i).
$$

For directed limits there is a natural comparison map

$$
\varinjlim_i\operatorname{Hom}_R(E,M_i)
\longrightarrow
\operatorname{Hom}_R\left(E,\varinjlim_iM_i\right).
$$

It is injective when $E$ is finitely generated and an isomorphism when $E$ is finitely presented. See [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]] and [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]].

## Adjunction with Tensor

> [!abstract] Tensor-Hom Adjunction
> For modules $L$, $M$, $N$:
> $$
> \text{Hom}_R(L \otimes_R M, N) \cong \text{Hom}_R(L, \text{Hom}_R(M, N))
> $$
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
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]


## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. The arbitrary sum/product, inverse-limit, and finite-presentation criteria were additionally checked against Lang, Chapter III, Exercises 22-23 and 26, printed p. 171 / PDF p. 186; complete proofs are supplied independently in the linked exercise notes. Because the note also contains independent exposition beyond those slices, its overall status remains partially verified.
