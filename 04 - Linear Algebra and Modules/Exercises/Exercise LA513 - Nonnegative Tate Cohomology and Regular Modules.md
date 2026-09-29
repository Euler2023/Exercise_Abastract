---
title: "Exercise LA513: Nonnegative Tate Cohomology and Regular Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 17, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA513: Nonnegative Tate Cohomology and Regular Modules

## Problem Statement

> [!question] Lang XX.17
> Let $G$ be a finite group. Show that there exists a $\delta$-functor $\mathbf H$ from $\operatorname{Mod}(G)$ to $\operatorname{Mod}(\mathbb Z)$ such that:
>
> (1) $\mathbf H^0$ is (isomorphic to) the functor $A\mapsto A^G/T_GA$.
>
> (2) $\mathbf H^q(A)=0$ if $A$ is injective and $q>0$, and $\mathbf H^q(A)=0$ if $A$ is projective and $q$ is arbitrary.
>
> (3) $\mathbf H$ is erased by $G$-regular modules. In particular, $\mathbf H$ is erased by $M_G$.
>
> The $\delta$-functor of Exercise 17 is called the special cohomology functor. It differs from the other one only in dimension $0$.

> [!warning] Source issue: the degree-zero functor is not left exact
> Lang's definition DEL 1 requires a long exact sequence beginning $0\to F^0(A')$ [Ch. XX, §7, printed p. 799, PDF p. 814]. For nontrivial finite $G$, the proposed functor $A^G/T_GA$ cannot satisfy this requirement.
>
> The consistent interpretation is the **nonnegative part of Tate cohomology**:
> $$
> \widehat H^0(G,A)=A^G/T_GA,\qquad
> \widehat H^q(G,A)=H^q(G,A)\quad(q>0).
> $$
> Its natural long exact sequence starts with $\widehat H^0(G,A')\to\widehat H^0(G,A)\to\cdots$, without an initial zero. A full Tate theory extends to negative degrees, but that extension is not needed here. We prove this corrected assertion and give an explicit counterexample to the printed delta-functor requirement.

## Hints

> [!hint]- Hint 1: Factor the ordinary connecting map through the norm quotient
> Given an invariant element of $A''$, its ordinary connecting class vanishes if it is the norm of any element of $A''$: lift that element to $A$ and take its norm.

> [!hint]- Hint 2: A trace witness makes a regular module a coinduced summand
> If $\sum_g gug^{-1}=\mathrm{id}_A$, try
> $$
> r:M_G(A)\to A,\qquad r(f)=\sum_g g\,u(f(g^{-1})).
> $$
> Show that it is an equivariant retraction of $a\mapsto(x\mapsto xa)$.

## Solution

> [!success]- Independent construction of the corrected special cohomology
> Let $N=T_G$ denote the norm and define $\widehat H^q$ as in the warning, for $q\ge0$.
>
> **1. The printed definition is impossible in general.** Put $n=|G|>1$. The map $\mathbb Z\hookrightarrow\mathbb Z[G]$, $1\mapsto N_G=\sum_g g$, is an equivariant injection, with $\mathbb Z$ trivial. But
> $$
> \widehat H^0(G,\mathbb Z)=\mathbb Z/n\mathbb Z,\qquad
> \widehat H^0(G,\mathbb Z[G])=0.
> $$
> For the second equality, the invariants are $\mathbb ZN_G$ and every such element is a norm. Thus the induced degree-zero map is not injective. This contradicts the initial zero required by DEL 1.
>
> **2. The corrected long exact sequence.** Consider $0\to A'\xrightarrow{i}A\xrightarrow{p}A''\to0$. The usual connecting map $(A'')^G\to H^1(G,A')$ annihilates $NA''$. Indeed, for $a''\in A''$ choose a lift $a\in A$; the invariant element $Na$ lifts $Na''$, so its connecting class is zero. Therefore this map factors through $\widehat H^0(G,A'')$, and the ordinary higher-degree connecting maps give
> $$
> \widehat H^0(G,A')\longrightarrow\widehat H^0(G,A)
> \longrightarrow\widehat H^0(G,A'')
> \longrightarrow H^1(G,A')\longrightarrow H^1(G,A)\longrightarrow\cdots.
> $$
> We verify the changed positions. If $a\in A^G$ has $p(a)=Nb''$, lift $b''$ to $b\in A$. Then $a-Nb$ belongs to $i(A')$ and is invariant. Its class maps to the class of $a$, giving exactness at $\widehat H^0(G,A)$. If an invariant $a''$ has zero connecting class, ordinary exactness says it has an invariant lift to $A$, giving exactness at $\widehat H^0(G,A'')$. Conversely, such a lift makes its connecting class zero. The image of the connecting map into $H^1(G,A')$ is unchanged on passing to the norm quotient, so exactness there and in higher degrees follows from ordinary cohomology. Naturality follows from the ordinary connecting maps and naturality of the norm. No injectivity of the first displayed arrow is claimed.
>
> **3. Vanishing for regular modules.** Suppose $A$ is $G$-regular, with an additive $u:A\to A$ such that $\sum_g gug^{-1}=\mathrm{id}_A$. If $a\in A^G$, then
> $$
> a=\sum_g g\,u(g^{-1}a)=\sum_g g\,u(a)=N(u(a)).
> $$
> Hence $\widehat H^0(G,A)=0$.
>
> For positive degrees, use the coinduced embedding $\varepsilon_A(a)(x)=xa$ and define the map $r$ in Hint 2. It is additive, and changing variable $g=ht$ shows
> $$
> r([h]f)=\sum_g g\,u(f(g^{-1}h))
> =h\sum_t t\,u(f(t^{-1}))=h\,r(f).
> $$
> Furthermore,
> $$
> r(\varepsilon_A(a))=\sum_g g\,u(g^{-1}a)=a.
> $$
> Thus $A$ is an equivariant direct summand of $M_G(A)$. The explicit cochain contraction
> $$
> (sf)(g_1,\ldots,g_{q-1})(x)=f(x,g_1,\ldots,g_{q-1})(1),
> \qquad s\delta+\delta s=\mathrm{id}\quad(q>0),
> $$
> proves that this coinduced module has zero positive cohomology. Functoriality and $r\varepsilon_A=\mathrm{id}$ then force $H^q(G,A)=0$ for $q>0$ as well.
>
> The coinduced module $M_G(B)$ is itself regular when $G$ is finite. Define $u_0(f)$ to be supported at $1$ with value $f(1)$. At $x\in G$, exactly the term $g=x^{-1}$ in $\sum_g[g]u_0[g^{-1}]f$ is nonzero, and its value is $f(x)$. This proves the trace identity. Every $A$ embeds in $M_G(A)$, so these modules erase all the corrected functors, including degree zero.
>
> **4. Projectives and injectives.** A projective $\mathbb Z[G]$-module is a summand of a free module. On a free module, projecting each group-ring coordinate onto its identity coefficient has trace equal to the identity; equivariant inclusion and retraction transfer this identity to any projective summand. Hence projectives are regular, and all their $\widehat H^q$ vanish for $q\ge0$.
>
> For injective modules, ordinary right derived functors vanish in positive degree, so $\widehat H^q=H^q=0$ for $q>0$. This verifies all three requested properties under the corrected long-exact-sequence convention.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext|Derived functors and delta-functors]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion|Injective modules]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 17, printed p. 830, PDF p. 845]. The incompatible initial-zero condition was checked directly at [Ch. XX, §7, DEL 1, printed p. 799, PDF p. 814].
- Proof status: independent counterexample and construction of the nonnegative Tate functors. No complete resolution or negative-degree Tate theorem is assumed.
- Here “$q$ arbitrary” for projectives is interpreted as every degree $q\ge0$ in the source's nonnegative family. A construction in all integer degrees would require additional definitions.
- Ordinary $H^0(G,A)=A^G$ is retained separately; it is never silently replaced by the norm quotient.

