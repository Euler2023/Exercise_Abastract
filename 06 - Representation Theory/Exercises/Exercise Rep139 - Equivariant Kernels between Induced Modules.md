---
title: "Exercise Rep139: Equivariant Kernels between Induced Modules"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - induced-representations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 15, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep139: Equivariant Kernels between Induced Modules

## Problem Statement

> [!question] Lang XVIII.15 — Printed statement
> Let $G$ be a group and let $H_1,H_2$ be subgroups of finite index. Let $\rho_1,\rho_2$ be representations of $H_1,H_2$ on $R$-modules $F_1,F_2$ respectively. Let $M_G(F_1,F_2)$ be the $R$-module of functions $f:G\to\operatorname{Hom}_R(F_1,F_2)$ such that
> $$
> f(h_1\sigma h_2)=\rho_2(h_2)f(\sigma)\rho_1(h_1)
> $$
> for all $\sigma\in G$, $h_i\in H_i$ $(i=1,2)$. Establish an $R$-module isomorphism
> $$
> \operatorname{Hom}_R(F_1^G,F_2^G)\longrightarrow M_G(F_1,F_2).
> $$
> By $F_i^G$ we have abbreviated $\operatorname{ind}_{H_i}^G(F_i)$.

> [!warning] Source issues: the Hom space and the order of the kernel actions
> The Hom space must consist of **$G$-equivariant** $R$-linear maps, namely $\operatorname{Hom}_{R[G]}$. In addition, the printed kernel rule reverses noncommuting products. With the left-action and function conventions of Lang §7, a consistent corrected kernel module is
> $$
> \mathcal K=\{K:G\to\operatorname{Hom}_R(F_1,F_2):
> K(h_2gh_1)=\rho_2(h_2)K(g)\rho_1(h_1)\}.
> $$
> The corrected conclusion is $\operatorname{Hom}_{R[G]}(F_1^G,F_2^G)\cong\mathcal K$. If one keeps the original order $h_1gh_2$, the equivalent corrected rule for $L(g)=K(g^{-1})$ is
> $$
> L(h_1gh_2)=\rho_2(h_2^{-1})L(g)\rho_1(h_1^{-1}).
> $$
> We work over a commutative ring $R$ with identity, as in Lang's $R$-module formulation of induction.

## Hints

> [!hint]- Hint 1: Use the function realization
> Realize $F_i^G$ as the functions $u:G\to F_i$ with $u(hg)=\rho_i(h)u(g)$, and let $x\in G$ act by $(xu)(g)=u(gx)$. Embed $F_i$ by functions supported on $H_i$.

> [!hint]- Hint 2: Recover the operator from one embedded copy
> If $j_1:F_1\to F_1^G$ is this embedding and $T$ is equivariant, define $K_T(g)v=(Tj_1(v))(g)$. Conversely, for right-coset representatives $c$ of $H_1\backslash G$, try
> $$
> (T_Ku)(g)=\sum_c K(gc^{-1})u(c).
> $$

## Solution

> [!success]- Independent counterexamples and explicit corrected isomorphism
> **1. Both printed defects matter.** Take a nontrivial finite group $G$, $R=\mathbb C$, $H_1=H_2=1$, and $F_1=F_2=\mathbb C$. The induced spaces are regular representations of dimension $|G|$. The printed left side has dimension $|G|^2$, whereas the printed kernel module is the space of all functions $G\to\mathbb C$, of dimension $|G|$. They cannot be isomorphic.
>
> Correcting only Hom does not fix the other problem. Take $H_1=H_2=G=S_3$ and let both representations be the standard irreducible complex representation $\rho$ of dimension $2$. If $f$ satisfies the printed rule and $A=f(1)$, using $(h_1,h_2)=(g,1)$ and $(1,g)$ gives
> $$
> f(g)=A\rho(g)=\rho(g)A.
> $$
> Schur's lemma forces $A=aI$. Applying the rule at $\sigma=1$ then gives $a\rho(h_1h_2)=a\rho(h_2h_1)$. The standard representation is faithful and has noncommuting image, so $a=0$ and $f=0$. The printed kernel module is zero, whereas $\operatorname{End}_G(F_1)=\mathbb C$.
>
> **2. Fix the function conventions.** Write
> $$
> I_i=\{u:G\to F_i:u(hg)=\rho_i(h)u(g)\text{ for }h\in H_i\},
> \qquad (xu)(g)=u(gx).
> $$
> The latter is a left action because $x(yu)(g)=u(gxy)=((xy)u)(g)$. Define $j_i(v)(h)=\rho_i(h)v$ for $h\in H_i$, and $j_i(v)(g)=0$ off $H_i$. Then $j_i$ is injective and $H_i$-equivariant.
>
> Choose a finite set $C_i$ of right-coset representatives, so $G=\coprod_{c\in C_i}H_ic$. Every $u\in I_i$ has the unique decomposition
> $$
> u=\sum_{c\in C_i}c^{-1}j_i(u(c)).
> $$
> Indeed the term indexed by $c$ is supported on $H_ic$ and at $hc$ takes the value $\rho_i(h)u(c)=u(hc)$. Thus this is exactly the induced module: the map $R[G]\otimes_{R[H_i]}F_i\to I_i$, $x\otimes v\mapsto xj_i(v)$, is well-defined and bijective by this coset decomposition. No freeness hypothesis on $F_i$ is needed.
>
> **3. An equivariant map gives a kernel.** For $T:I_1\to I_2$ that is $R[G]$-linear, set
> $$
> K_T(g)v=(Tj_1(v))(g).
> $$
> The defining property of $I_2$ gives $K_T(h_2g)=\rho_2(h_2)K_T(g)$. Also
> $$
> K_T(gh_1)v=(h_1Tj_1(v))(g)
> =(Tj_1(\rho_1(h_1)v))(g),
> $$
> hence $K_T(gh_1)=K_T(g)\rho_1(h_1)$. Combining these proves $K_T\in\mathcal K$.
>
> **4. A kernel gives an equivariant map.** Given $K\in\mathcal K$, define
> $$
> (T_Ku)(g)=\sum_{c\in C_1}K(gc^{-1})u(c).
> $$
> This is a finite sum. Replacing a representative $c$ by $hc$, where $h\in H_1$, leaves its term unchanged, since
> $$
> K(gc^{-1}h^{-1})u(hc)
> =K(gc^{-1})\rho_1(h^{-1})\rho_1(h)u(c).
> $$
> Thus the formula is independent of representatives. Left $H_2$-equivariance of $K$ implies $(T_Ku)(h_2g)=\rho_2(h_2)(T_Ku)(g)$, so $T_Ku\in I_2$. It is plainly $R$-linear.
>
> To check $G$-equivariance, fix $x\in G$. The elements $d=cx$, for $c\in C_1$, are another set of right-coset representatives. Independence of representatives gives
> $$
> (T_K(xu))(g)
> =\sum_{c\in C_1}K(gc^{-1})u(cx)
> =\sum_dK(gxd^{-1})u(d)
> =(T_Ku)(gx)=(xT_Ku)(g).
> $$
>
> **5. The constructions are inverse.** Choose $1$ as the representative of the coset $H_1$. In the formula for $T_Kj_1(v)$, only this coset contributes, giving $(T_Kj_1(v))(g)=K(g)v$. Thus $K_{T_K}=K$. Conversely, the decomposition in step 2 and the equivariance of $T$ show
> $$
> (Tu)(g)=\sum_c(Tj_1(u(c)))(gc^{-1})
> =\sum_cK_T(gc^{-1})u(c)=(T_{K_T}u)(g).
> $$
> Both constructions are $R$-linear, so they give the asserted corrected $R$-module isomorphism. Substituting $g^{-1}$ yields the alternative two-inverse convention in the warning.

## Related Concepts

- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- **Source and proof status:** The printed Hom subscript, subgroup order, and absence of inverses were visually checked at [S2, Ch. XVIII, Exercise 15, printed p. 725, PDF p. 740]. Lang's function convention $u(hg)=hu(g)$ and $(xu)(g)=u(gx)$ was independently checked at Ch. XVIII, §7, printed p. 690, PDF p. 705. The two counterexamples and corrected isomorphism are independently derived here.
- **Finite-index boundary:** $G$ need not be finite and $|G|$ need not be invertible in $R$. Finite index makes the function realization a finite direct sum of copies of $F_i$, and the explicit operator uses a finite coset sum. No averaging argument occurs.
- **Composition notation:** Products such as $\rho_2(h_2)K(g)\rho_1(h_1)$ mean composition, with the rightmost map applied first. This order is essential for nonabelian subgroups.
