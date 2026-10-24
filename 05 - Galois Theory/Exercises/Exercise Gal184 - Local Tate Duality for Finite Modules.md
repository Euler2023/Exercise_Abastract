---
title: 'Exercise Gal184: Local Tate Duality for Finite Modules'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 4, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-4
created: '2026-10-23'
---

# Exercise Gal184: Local Tate Duality for Finite Modules

## Problem Statement

> [!question] Neukirch V.1.4
> Show that the statements of exercises 2 and 3 generalize to an arbitrary finite $G_K$-module $A$ instead of $\mathbb Z/n\mathbb Z$, and $A'=\operatorname{Hom}(A,\overline K^*)$ instead of $\mu_n$.
>
> Hint: Use exercises 4–8 of chap. IV, §3.

## Hints

> [!hint]- Hint 1
> The evaluation $A\otimes A'\to\overline K^*$ and cup product give a pairing into $\operatorname{Br}(K)\cong\mathbb Q/\mathbb Z$.

> [!hint]- Hint 2
> For perfection, use degree-$0/2$ local duality and a finite module $B\supseteq A$ which kills $H^1(K,A)$, then compare the two long exact sequences.

> [!hint]- Hint 3
> For the unramified orthogonal complement, combine vanishing of cup products inflated from the procyclic quotient with the prime-to-$p$ Euler characteristic.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> All cohomology is continuous and $K/\mathbb Q_p$ is finite. The pairing takes values in $\mathbb Q/\mathbb Z$ (or its subgroup killed by the exponent of $A$):
> $$
> \langle x,y\rangle_K=\operatorname{inv}_K(x\smile y),\qquad H^1(K,A)\times H^1(K,A')\longrightarrow\mathbb Q/\mathbb Z.
> $$
> The action on $A'$ is $(g f)(a)=g(f(g^{-1}a))$. Finite Cartier duality gives $A''=A$.
>
> **Exact external input and scope.** We use the local dualizing-module theorem, namely that the dualizing module of $G_K$ is the group $\mu_\infty$ of all roots of unity, and the finiteness of cohomology of finite modules. It implies perfect degree-$0/2$ cup-product pairings $H^0(K,B)\times H^2(K,B')\to\mathbb Q/\mathbb Z$ for every finite $B$. This is the deeper input established independently in [S6, Serre, Galois Cohomology, Ch. II, §5.2, Proposition 14 and Theorem 1, printed p. 91, PDF p. 99]. We derive the required degree-$1$ result below, rather than assume that same result.
>
> Because $H^1(K,A)$ is finite, there is an open subgroup $H\subseteq G_K$ on which every one of its classes restricts to zero: each continuous cocycle becomes zero on a sufficiently small subgroup, and intersect finitely many such subgroups. Embed $A$ into the finite coinduced module $B=\operatorname{Coind}_H^{G_K}(A|_H)$ by the usual adjunction map. Shapiro's lemma identifies the induced map on $H^1$ with restriction, so it is zero. Put $C=B/A$. The connecting map $\delta:C^{G_K}\to H^1(K,A)$ is therefore surjective. The dual exact sequence is $0\to C'\to B'\to A'\to0$.
>
> Cup products, evaluation and connecting maps give, with a harmless common sign fixed in the connecting-map convention, the commutative diagram
> $$
> \begin{array}{ccccc}
> B^{G_K}&\longrightarrow&C^{G_K}&\xrightarrow{\delta}&H^1(K,A)\longrightarrow0\\
> \downarrow\wr&&\downarrow\wr&&\downarrow\gamma\\
> H^2(K,B')^\vee&\longrightarrow&H^2(K,C')^\vee&\longrightarrow&H^1(K,A')^\vee.
> \end{array}
> $$
> Here $\vee=\operatorname{Hom}(-,\mathbb Q/\mathbb Z)$. The bottom row is exact by dualizing the corresponding finite cohomology sequence. The first two vertical arrows are the imported degree-$0/2$ duality isomorphisms. Thus the quotient of the first top arrow embeds into the last bottom group; equivalently $\gamma$ is injective. Repeating with $A'$ proves the injection in the other direction. The groups are finite and $A''=A$, so both injections have equal-size source and target and are isomorphisms. This proves perfection.
>
> For a finite extension $L/K$, cup-product projection and the invariant identity $\operatorname{inv}_K\operatorname{Cor}_{L/K}=\operatorname{inv}_L$ give
> $$
> \langle\operatorname{Res}_{L/K}x,y\rangle_L=\langle x,\operatorname{Cor}_{L/K}y\rangle_K.
> $$
> For $A=\mathbb Z/n\mathbb Z$, $A'=\mu_n$, Kummer corestriction is the norm, and the invariant of the cyclic cup product is $\chi(\operatorname{rec}_K(a))/n$. Thus this recovers Exercises 2 and 3 after identifying $(1/n)\mathbb Z/\mathbb Z$ with $\mathbb Z/n\mathbb Z$.
>
> Finally suppose $p\nmid\#A$. Define $H^1_{\rm nr}(K,A)$ as $\ker(H^1(K,A)\to H^1(I_K,A))$, equivalently $H^1(\Gamma,A^{I_K})$ with $\Gamma=G_K/I_K$. This definition works even when $A$ itself is ramified. Products of two unramified classes inflate from $H^2(\Gamma,\mu_\infty^{I_K})=0$ on their finite prime-to-$p$ coefficient subgroup, since $\Gamma\cong\widehat{\mathbb Z}$ has cohomological dimension one. Hence the two unramified subgroups annihilate each other.
>
> For a finite $\Gamma$-module $M$, $H^1(\Gamma,M)=M/(\varphi-1)M$ and $H^0(\Gamma,M)=\ker(\varphi-1)$ have equal orders. Consequently $\#H^1_{\rm nr}(K,A)=\#H^0(K,A)$, and likewise for $A'$. The prime-to-$p$ local Euler characteristic gives
> $$
> \#H^1(K,A')=\#H^0(K,A')\,\#H^2(K,A')=\#H^0(K,A')\,\#H^0(K,A),
> $$
> where the last equality uses degree-$0/2$ duality. This Euler characteristic is an independent input [S6, Ch. II, §5.4, Proposition 17, printed p. 94, PDF p. 102]. Perfection now makes the annihilator of $H^1_{\rm nr}(K,A)$ have order $\#H^0(K,A')$, exactly that of $H^1_{\rm nr}(K,A')$. The inclusion already proved is equality, giving the claimed orthogonal complement.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Galois and étale cohomology]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer theory]]

## Notes

Original statement and printed hint: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 4, printed p. 326, PDF p. 345]. Independent degree-$1$ derivation with explicitly imported degree-$0/2$ local duality and the prime-to-$p$ Euler characteristic. Source S6 pages 91–94/PDF 99–102 were rendered at 200 dpi and inspected. The argument is the expanded dimension-shifting method displayed in S6 Theorem 2, printed pp. 91–92, PDF pp. 99–100; it does not claim that IV §3 first-cohomology exercises by themselves prove the deep local dualizing-module theorem. Restriction/corestriction projection and local Brauer invariant functoriality are named standard cohomological inputs.
