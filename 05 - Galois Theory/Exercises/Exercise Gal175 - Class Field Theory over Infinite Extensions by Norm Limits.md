---
title: 'Exercise Gal175: Class Field Theory over Infinite Extensions by Norm Limits'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 4, printed p. 306, PDF p. 325
source_refs:
- S4/ch-IV/sec-6/ex-4
created: '2026-10-23'
---

# Exercise Gal175: Class Field Theory over Infinite Extensions by Norm Limits

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 4
> (Generalization to infinite extensions.) Let $(d:G\to\widehat{\mathbb Z},v:A_k\to\widehat{\mathbb Z})$ be a class field theory. We assume that the kernel $U_k$ of $v_k:A_k\to\widehat{\mathbb Z}$ is compact for every finite extension $K/k$. For an infinite extension $K/k$, put
> $$
> \widehat A_K=\varprojlim_\alpha A_{K_\alpha},
> $$
> where $K_\alpha/k$ varies over the finite subextensions of $K/k$ and the projective limit is taken with respect to the norm maps $N_{K_\beta/K_\alpha}:A_{K_\beta}\to A_{K_\alpha}$. Show:
> 1) For every (finite or infinite) extension $L/K$, one has a norm map
> $$
> N_{L/K}:\widehat A_L\longrightarrow\widehat A_K,
> $$
> and if $L/K$ is finite, there is an injection $i_{L/K}:\widehat A_K\hookrightarrow\widehat A_L$. If furthermore $L/K$ is Galois, then one has $\widehat A_K\cong\widehat A_L^{G(L/K)}$.
> 2) For every extension $K/k$ with finite inertia degree $f_K=[K\cap\widetilde k:k]$, $(d,v)$ induces a class field theory $(d_K:G_K\to\widehat{\mathbb Z},v_K:\widehat A_K\to\widehat{\mathbb Z})$.
> 3) If $K\subseteq K'$ are extensions of $k$ with $f_K,f_{K'}<\infty$, and $L/K$ and $L'/K'$ are (finite or infinite) Galois extensions with $L\subseteq L'$, then one has a commutative diagram
> $$
> \begin{array}{ccc}
> \widehat A_{K'}&\xrightarrow{(\ ,L'/K')}&G(L'/K')^{ab}\\
> {\scriptstyle N_{K'/K}}\downarrow&&\downarrow{\scriptstyle\mathrm{res}}\\
> \widehat A_K&\xrightarrow{(\ ,L/K)}&G(L/K)^{ab}.
> \end{array}
> $$

## Hints

> [!hint]- Hint 1 — first step
> Start with a fixed finite subextension of $K$ and use norm transitivity to define one coordinate of the proposed map.

> [!hint]- Hint 2 — proof route
> Define maps at finite levels and use norm transitivity. Compact valuation fibers supply compatible solutions when taking inverse limits of the finite reciprocity and cyclic exact sequences.

## Solution

> [!success]- Independent derivation
> Write $K_\alpha$ for the finite levels. All limits below use norm transition maps; choose the finite levels of $L,K$ in a compatible common directed system. For fixed finite $K_\alpha$, the norm from a sufficiently large finite $L_\beta$ to $K_\alpha$ is unchanged by further enlarging $\beta$, by transitivity of norms. These maps give each coordinate of the norm and define $N_{L/K}$.
> If $[L:K]<\infty$, descend it to some finite level $L_0/K_0$. Enlarge $K_0$ so that $L_\alpha=L_0K_\alpha$ and $[L_\alpha:K_\alpha]=[L:K]$. The inclusions at finite levels commute with norms under base change and therefore give $i_{L/K}$. At a finite Galois level, the invariants are exactly $A_{K_\alpha}$. Invariants under a finite group commute with inverse limits, giving the stated invariant-group equality and injectivity.
> The exactness principle for limits used here requires justification. Within each fiber of a fixed valuation, the solution set is a closed coset of the compact group $U_{K_\alpha}$. Any finite set of compatibility conditions can be moved to a higher common finite level and solved there using finite class field theory already proved. These closed solution sets thus have the finite intersection property, and compactness produces a simultaneous solution. One cannot assert in general that arbitrary inverse limits preserve surjectivity.
> If $f_K<\infty$, the unramified degrees of the finite levels eventually stabilize. The normalized finite-level valuations are compatible and define $v_K$. The compact-fiber argument above gives a compatible lift of each required value, so the value group retains the henselian conditions. For a finite cyclic $L/K$, descend to the equal-degree finite levels just described, whose two-periodic complexes are
> $$
> A_{L_\alpha}\xrightarrow{\sigma-1}A_{L_\alpha}\xrightarrow{N}A_{K_\alpha}.
> $$
> Fix the valuation and lift solutions by the compact-fiber argument to obtain $\ker N=(\sigma-1)\widehat A_L$ in the limit. The same argument lifts the finite-level norm quotients $A_{K_\alpha}/N A_{L_\alpha}$, all of order $[L:K]$ and with norm transition maps identified with isomorphisms by reciprocity, to
> $$
> \widehat A_K/N\widehat A_L\cong G(L/K).
> $$
> Thus the Tate group $H^{-1}$ is trivial and $H^0$ has order $[L:K]$, giving the class field axiom on the limit.
> Here are the details of finite compatibility. Choose a cofinal system such that all $L_\alpha/K_\alpha$ descend from the same finite Galois extension $L/K$ and have the fixed degree $n$. If $f_K<\infty$, the absolute inertia degrees of the finite levels eventually equal $f_K$; $f_L$ is also finite. After discarding initial levels, the relative inertia degrees of $K_\beta/K_\alpha$ and $L_\beta/L_\alpha$ are both $1$, while the inertia degree $f$ and ramification index $e$ of $L_\alpha/K_\alpha$ are fixed. The transition norms therefore preserve normalized valuations, and $v_{L_\alpha}(A_{K_\alpha})=eZ$ and $v_{K_\alpha}(N A_{L_\alpha})=fZ$. Here $Z$ is the common value subgroup in the hypotheses. This paragraph first uses integer-valued representatives; dividing by integers in the uniquely divisible part does not change finite quotients.
>
> For a specified integer value $c$, every set $v^{-1}(c)$ is nonempty and is a coset of a compact unit group. Any finite collection of coordinate and norm constraints can be moved to a common higher level $\gamma$. Choose an element there of value $c$ and take norms downwards; it satisfies all those constraints simultaneously. Thus the limit contains an element of value $c$, proving containment of the standard integers. Elements of the more general common value group $Z$ lift by exactly the same fiber argument. The resulting value group remains $Z$, so $Z/mZ=\mathbb Z/m\mathbb Z$ is preserved.
>
> For $b=(b_\alpha)\in\widehat A_L$ satisfying $Nb=1$, finite Hilbert 90 gives $b_\alpha=c_\alpha^{\sigma-1}$. Multiplication by an element of $A_{K_\alpha}$ adjusts $v(c_\alpha)$ into a fixed finite set of integer representatives modulo $eZ$, since $Z/eZ=\mathbb Z/e\mathbb Z$. These $c_\alpha$ lie in a finite union of compact fibers. For finitely many constraints, choose a common upper level $\gamma$, solve $b_\gamma=c_\gamma^{\sigma-1}$ there, make this valuation adjustment, and then take norms downwards. Commutativity and preservation of the transition valuations ensure all lower-level constraints. The finite intersection property for closed sets then gives $c\in\widehat A_L$, and hence $b=c^{\sigma-1}$.
>
> Next take $a=(a_\alpha)\in\widehat A_K$. Finite-level reciprocity identifies all its residue classes with the same $\tau\in G(L/K)$, by norm–restriction compatibility and the restriction isomorphisms between the descended groups. If $\tau=1$, each level has $b_\alpha$ satisfying $Nb_\alpha=a_\alpha$, with fixed valuation $v(a_\alpha)/f$. For finitely many constraints, solve this norm equation at a common upper level and take norms downwards. The compact-fiber argument yields $N b=a$. Conversely, a norm necessarily gives $\tau=1$.
>
> Finally, every $\tau$ occurs in the limit. The valuation modulo $fZ$ of its finite-level reciprocity preimages is determined by the unramified component of $\tau$. Choose a fixed integer representative $c$. Multiplying any preimage by a norm adjusts its valuation to $c$, and these preimages form a nonempty compact closed set. Finitely many compatibility conditions are again satisfied by taking a preimage at a common upper level and taking norms downwards, producing a preimage in the limit. Finite-level surjectivity, a fixed valuation, and the common-upper-level construction supply nonemptiness, compactness, and finite compatibility, respectively. Preservation of surjectivity by inverse limits is not assumed as a general principle.
> The norm–restriction diagram for finite-level reciprocity commutes at each level. Taking compatible coordinates gives (3). For infinite $L,L'$, take a further inverse limit over its finite Galois sublevels. Norms and restriction are defined coordinatewise, so commutativity is independent of the chosen descent levels.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

The statement was checked against the original 200 dpi page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 4, printed p.306, PDF p.325]. The solution is independently derived, using this chapter's conventions for abstract fields, continuous discrete $G$-modules, restrictions, and norms. Compactness is used only for valuation fibers; the whole group $A_K$, whose value group may be noncompact, is not treated as compact. The finite-inertia-degree hypothesis ensures stabilization of valuation normalizations and cannot be omitted.
