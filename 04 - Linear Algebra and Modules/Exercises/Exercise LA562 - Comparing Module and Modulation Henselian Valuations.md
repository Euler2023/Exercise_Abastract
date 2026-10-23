---
title: 'Exercise LA562: Comparing Module and Modulation Henselian Valuations'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 17, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-17
created: '2026-10-23'
---

# Exercise LA562: Comparing Module and Modulation Henselian Valuations

## Problem Statement

> [!question] Neukirch IV.6.17
> Let $A$ be a $G$-modulation. We define a henselian valuation of $A$ to be a homomorphism $v:A\to\boldsymbol{\mathbb Z}$ such that the submodulation $v(A)$ of $\boldsymbol{\mathbb Z}$ comes from a subgroup $Z\subset\widehat{\mathbb Z}$ which contains $\mathbb Z$ and satisfies $Z/nZ=\mathbb Z/n\mathbb Z$ for all $n\in\mathbb N$. Let $U$ denote the kernel of $v$.
>
> Compare this definition with the definition (4.6) of a henselian valuation of a $G$-module $A$.

## Hints

> [!hint]- Hint 1
> For the modulation arising from a discrete $G$-module, $A(G/G_K)=A^{G_K}$, restriction is inclusion, and the norm is the group norm. The old definition uses $v_k$ to obtain $v_K=\frac1{f_K}v_kN_{K/k}$.

> [!hint]- Hint 2
> Naturality in the new definition is exactly $v_L(a)=e_{L/K}v_K(a)$ and $v_KN_{L/K}=f_{L/K}v_L$. Then compare the norm-image conditions using the common image $Z$.

## Solution

> [!success]- Independent derivation
> First restrict to the modulations of Exercise 10 arising from a discrete $G$-module $M$: $A(K)=M^{G_K}$, with norm maps covariantly and inclusions contravariantly. Write $f_K=[\widehat{\mathbb Z}:d(G_K)]$. The old definition (4.6) is $v_k:A(k)\to\widehat{\mathbb Z}$. Its image $Z$ contains $\mathbb Z$ and agrees with $\mathbb Z$ modulo every $n$; it also requires
> $$
> v_k(N_{K/k}A(K))=f_KZ.
> $$
> It defines
> $$
> v_K(a)=\frac1{f_K}v_k(N_{K/k}a),
> $$
> Its image is exactly $Z$.
>
> For $L/K$, transitivity of the norm immediately gives
> $$
> v_K(N_{L/K}a)=f_{L/K}v_L(a),
> $$
> because $f_L=f_Kf_{L/K}$. For $a\in A(K)$, the group norm is $N_{L/K}a=[L:K]a=e_{L/K}f_{L/K}a$ in additive notation. Thus
> $$
> v_L(a)=\frac1{f_L}v_kN_{L/k}a=e_{L/K}v_K(a).
> $$
> Naturality under conjugation follows from compatibility of the norm with conjugation and $G$-invariance on the base field. These are exactly all the naturality conditions for $v:A\to\boldsymbol{\mathbb Z}$, where $\boldsymbol{\mathbb Z}$ has the corrected direction from Exercise 15: $f^*=e$ and $f_*=f$. Thus the old definition gives the new one.
>
> Conversely, suppose a modulation valuation has the same image $Z$ at every connected point. Take its base-point component $v_k$. Naturality for the covariant map associated with $K/k$ gives
> $$
> v_kN_{K/k}=f_Kv_K,
> $$
> Hence $v_kN_{K/k}A(K)=f_KZ$, which is the norm-image condition of the old definition. The formula above also recovers $v_K$ uniquely. Thus the definitions are equivalent on the subclass arising from modules.
>
> **The new definition is broader.** The descent equivalence in Exercise 10 shows that only modulations satisfying Galois descent arise from discrete $G$-modules. The new definition does not impose descent. Thus an arbitrary new henselian valuation cannot automatically be rewritten as an old module valuation. The old definition and normalization are in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, (4.6)–(4.7), printed pp. 288–289, PDF pp. 307–308].

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Modulations]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Ramification and Residue Degree]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 17 and the preceding valuation definition, printed p. 309, PDF p. 328]. Independent comparison, with equivalence explicitly restricted to the subclass satisfying Galois descent.
- **Inherited source issue:** The valuation modulation uses the corrected direction of $e/f$ proved in Exercise 15. Reading the printed diagram in the reversed direction would make naturality contradict (4.7).
