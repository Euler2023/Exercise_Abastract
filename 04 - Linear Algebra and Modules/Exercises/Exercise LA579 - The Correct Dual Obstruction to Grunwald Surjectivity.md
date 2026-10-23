---
title: 'Exercise LA579: The Correct Dual Obstruction to Grunwald Surjectivity'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 6, printed pp. 404–405, PDF pp. 423–424
source_refs:
- S4/ch-VI/sec-6/ex-6
created: '2026-10-23'
---

# Exercise LA579: The Correct Dual Obstruction to Grunwald Surjectivity

## Problem Statement

> [!question] Neukirch VI.6.6
> If $S$ is a finite set of places of $K$, then the map
> $$
> H^1(K,\mathbb Z/n\mathbb Z)\longrightarrow\prod_{\mathfrak p\in S}H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)
> $$
> is surjective if and only if the map
> $$
> H^1(K,\mu_n)\longrightarrow\prod_{\mathfrak p\notin S}H^1(K_{\mathfrak p},\mu_n)
> $$
> is injective. This is the case in particular if either the extension $K(\mu_{2^\nu})|K$ is cyclic, $n=2^\nu m$, $(m,2)=1$, or if $S$ does not contain all places $\mathfrak p\mid2$ which are nonsplit in $K(\mu_{2^\nu})$ (see §1, exercise 2).

> [!warning] Source issue / proof scope
> The printed injectivity criterion omits the everywhere locally trivial Kummer kernel. The correct obstruction is the quotient B_S/B_empty; the solution gives an explicit counterexample.

## Hints

> [!hint]- Hint
> Use Exercise4(iii) on a vector supported inside $S$. Distinguish a class locally trivial outside $S$ from one locally trivial at every place; the latter cannot obstruct a local prescription.

> [!hint]- Stronger hint
> The annihilator of the local restriction image is loc_S(B_S), whose kernel is the everywhere locally trivial subgroup B_empty; test S empty.

## Solution

> [!success]- Independent derivation
> **Source issue.** The printed condition of injectivity is too strong in general. Set
> $$
> B_S=\ker\left(H^1(K,\mu_n)\to\prod_{v\notin S}H^1(K_v,\mu_n)\right),\quad
> B_\varnothing=\ker\left(H^1(K,\mu_n)\to\prod_vH^1(K_v,\mu_n)\right).
> $$
> The correct necessary and sufficient condition is $B_S=B_\varnothing$, rather than $B_S=0$.
> To prove this, the perfect local pairings identify the dual of $F_S=\prod_{v\in S}H^1(K_v,\mathbb Z/n)$ with $\prod_{v\in S}H^1(K_v,\mu_n)$. Extend a vector on the right by zero outside $S$. By Exercise 4(iii), it annihilates every global character if and only if it is the localization of a global Kummer class. These vectors are exactly $\operatorname{loc}_S(B_S)$, whose kernel is $B_\varnothing$. Thus the annihilator of the image of global restriction is $B_S/B_\varnothing$. Since $F_S$ is finite, restriction is surjective if and only if this quotient is zero.
> **Explicit counterexample to the printed equivalence.** Take $K=\mathbb Q(\sqrt7)$, $n=8$, and $S=\varnothing$. The map on the left to the empty product is necessarily surjective. But $a=16$ is not a global eighth power: $K$ is real, so its only possible real eighth roots are $\pm\sqrt2$, whereas $\sqrt2\notin\mathbb Q(\sqrt7)$. Nevertheless, it is an eighth power in every completion:
> - For an odd prime $p$, set $d=p-1$. If $v_2(d)\le2$, then $\gcd(8,d)\mid4$, so $16=2^4$ is an eighth power in $\mathbb F_p^\times$. If $v_2(d)\ge3$, then $p\equiv1\bmod8$, and the supplementary law of quadratic reciprocity gives $2=u^2$, hence $16=u^8$. In both cases, Hensel's lemma lifts the root to $\mathbb Q_p$, which embeds into each $K_v$.
> - Since $-7\equiv1\bmod8$ is the square of $\mathbb Q_2$, we have $K_v=\mathbb Q_2(\sqrt7)\cong\mathbb Q_2(i)$ and $(1+i)^8=16$.
> - At real places, a positive real eighth root exists.
> Thus $B_\varnothing\ne0$, disproving the printed injectivity assertion.
> **Valid interpretation of the original sufficient conditions.** The first condition gives $B_S=0$ directly by VI.§1 Exercise 2(i). In the second condition, nonsplit must be interpreted in the book's sense of having only one prime above it: its decomposition group in $E_2=K(\mu_{2^\nu})$ is all of $G(E_2/K)$. Suppose such a $v\mid2$ exists and $v\notin S$. The affine-cocycle proof of VI.§1 Exercise 2 already eliminates all odd-prime parts, and the remaining $2$-primary cocycle factors through $G(E_2/K)$. Being a local $n$-th power gives a root of $X^n-a$ fixed by this local decomposition group. Thus the affine cocycle is a coboundary on that decomposition group. Since this is the whole group, it is a coboundary globally, so $B_S=0$. This proves surjectivity under either condition.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original printed pp.404–405 / PDF pp.423–424. The solution is an independent derivation. Nonsplit is not interpreted as merely not completely split: that would weaken the necessary use of the full decomposition group to mere nontriviality. The kernel of the everywhere-local power map can be nonzero, as the example above directly verifies.
