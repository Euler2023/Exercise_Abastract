---
title: "Exercise Rep148: Character Determinants and Artin Formalism"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - character-determinants
  - artin-formalism
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 26, printed pp. 727–728, PDF pp. 742–743"
created: 2026-09-29
---

# Exercise Rep148: Character Determinants and Artin Formalism

## Problem Statement

> [!question] Lang XVIII.26 — Printed formulation
> The following formalism is the analogue of Artin's formalism of $L$-series in number theory. Cf. Artin's “Zur Theorie der L-Reihen mit allgemeinen Gruppencharakteren”, *Collected papers*, and also S. Lang, “L-series of a covering”, *Proc. Nat. Acad. Sci. USA* (1956). For the Artin formalism in a context of analysis, see J. Jorgenson and S. Lang, “Artin formalism and heat kernels”, *J. reine angew. Math.* **447** (1994), pp. 165–200.
>
> We consider a category with objects $\{U\}$. As usual, we say that a finite group $G$ operates on $U$ if we are given a homomorphism $\rho:G\to\operatorname{Aut}(U)$. We then say that $U$ is a $G$-object, and also that $\rho$ is a representation of $G$ in $U$. We say that $G$ operates trivially if $\rho(G)=\mathrm{id}$. For simplicity, we omit the $\rho$ from the notation. By a $G$-morphism $f:U\to V$ between $G$-objects, one means a morphism such that $f\circ\sigma=\sigma\circ f$ for all $\sigma\in G$.
>
> We shall assume that for each $G$-object $U$ there exists an object $U/G$ on which $G$ operates trivially, and a $G$-morphism $\pi_{U,G}:U\to U/G$ having the following universal property: If $f:U\to U'$ is a $G$-morphism, then there exists a unique morphism
> $$
> f/G:U/G\longrightarrow U'/G
> $$
> making the following diagram commutative:
> $$
> \begin{array}{ccc}
> U&\xrightarrow{\ f\ }&U'\\
> {\scriptstyle\pi_{U,G}}\downarrow&&\downarrow{\scriptstyle\pi_{U',G}}\\
> U/G&\xrightarrow{\ f/G\ }&U'/G.
> \end{array}
> $$
> In particular, if $H$ is a normal subgroup of $G$, show that $G/H$ operates in a natural way on $U/H$.
>
> Let $k$ be an algebraically closed field of characteristic $0$. We assume given a functor $E$ from our category to the category of finite dimensional $k$-spaces. If $U$ is an object in our category, and $f:U\to U'$ is a morphism, then we get a homomorphism
> $$
> E(f)=f_*:E(U)\longrightarrow E(U').
> $$
> (The reader may keep in mind the special case when we deal with the category of reasonable topological spaces, and $E$ is the homology functor in a given dimension.)
>
> If $G$ operates on $U$, then we get an operation of $G$ on $E(U)$ by functoriality. Let $U$ be a $G$-object, and $F:U\to U$ a $G$-morphism. If $P_F(t)=\prod(t-\alpha_i)$ is the characteristic polynomial of the linear map $F_*:E(U)\to E(U)$, we define
> $$
> Z_F(t)=\prod(1-\alpha_i t),
> $$
> and call this the zeta function of $F$. If $F$ is the identity, then $Z_F(t)=(1-t)^{B(U)}$ where we define $B(U)$ to be $\dim_kE(U)$.
>
> Let $\chi$ be a simple character of $G$. Let $d_\chi$ be the dimension of the simple representation of $G$ belonging to $\chi$, and $n=\operatorname{ord}(G)$. We define a linear map on $E(U)$ by letting
> $$
> e_\chi=\frac{d_\chi}{n}\sum_{\sigma\in G}\chi(\sigma^{-1})\sigma_*.
> $$
> Show that $e_\chi^2=e_\chi$, and that for any positive integer $\mu$ we have $(e_\chi\circ F_*)^\mu=e_\chi\circ F_*^\mu$.
>
> If $P_\chi(t)=\prod(t-\beta_j(\chi))$ is the characteristic polynomial of $e_\chi\circ F_*$, define
> $$
> L_F(t,\chi,U/G)=\prod(1-\beta_j(\chi)t).
> $$
> Show that the logarithmic derivative of this function is equal to
> $$
> -\frac1N\sum_{\mu=1}^{\infty}\operatorname{tr}(e_\chi\circ F_*^\mu)t^{\mu-1}.
> $$
> Define $L_F(t,\chi,U/G)$ for any character $\chi$ by linearity. If we write $V=U/G$ by abuse of notation, then we also write $L_F(t,\chi,U/V)$. Then for any $\chi,\chi'$ we have by definition,
> $$
> L_F(t,\chi+\chi',U/V)=L_F(t,\chi,U/V)L_F(t,\chi',U/V).
> $$
> We make one additional assumption on the situation: Assume that the characteristic polynomial of
> $$
> \frac1n\sum_{\sigma\in G}\sigma_*\circ F_*
> $$
> is equal to the characteristic polynomial of $F/G$ on $E(U/G)$. Prove the following statement:
>
> **(a)** If $G=\{1\}$ then
> $$
> L_F(t,1,U/U)=Z_F(t).
> $$
> **(b)** Let $V=U/G$. Then
> $$
> L_F(t,1,U/V)=Z_F(t).
> $$
> **(c)** Let $H$ be a subgroup of $G$ and let $\psi$ be a character of $H$. Let $W=U/H$, and let $\psi^G$ be the induced character from $H$ to $G$. Then
> $$
> L_F(t,\psi,U/W)=L_F(t,\psi^G,U/V).
> $$
> **(d)** Let $H$ be normal in $G$. Then $G/H$ operates on $U/H=W$. Let $\psi$ be a character of $G/H$, and let $\chi$ be the character of $G$ obtained by composing $\psi$ with the canonical map $G\to G/H$. Let $\varphi=F/H$ be the morphism induced on $U/H=W$. Then
> $$
> L_\varphi(t,\psi,W/V)=L_F(t,\chi,U/V).
> $$
> **(e)** If $V=U/G$ and $B(V)=\dim_kE(V)$, show that $(1-t)^{B(V)}$ divides $(1-t)^{B(U)}$. Use the regular character to determine a factorization of $(1-t)^{B(U)}$.

> [!warning] Source issues and the scope of the repair
> The capital $N$ in the printed logarithmic derivative is undefined. For the printed determinant, the correct coefficient in front of the trace series is $-1$. More substantially, that determinant is taken on the entire $\chi$-isotypic component, so it contains an extra power $d_\chi$ and generally does not satisfy the induction formula **(c)**.
>
> In the intended quotient formalism, **(b)** must have $Z_{F/G}(t)$ on its right. The additional assumption also compares ordinary characteristic polynomials on spaces of different natural dimensions. It should concern the restriction to invariants, or reversed determinants, rather than the operator on all of $E(U)$.
>
> The commutative-square condition only states functoriality for equivariant maps; the proof below explicitly assumes the usual categorical quotient factorization property, including compatibility with normal subgroups. It also assumes compatible identifications $E(U/H)\cong E(U)^H$ for every subgroup $H$. These are transparent sufficient hypotheses for the corrected formalism, not claims that the printed hypotheses imply them or that arbitrary homology functors satisfy them.
>
> We preserve the printed assertions above, prove the valid determinant identities, and give a complete consistent replacement below. The replacement uses determinants on multiplicity spaces.

## Hints

> [!hint]- Hint 1: Separate a simple module from its multiplicity
> Write $E(U)\cong\bigoplus_\chi V_\chi\otimes M_\chi$, where $M_\chi=\operatorname{Hom}_G(V_\chi,E(U))$. A $G$-equivariant $F_*$ acts as $1\otimes T_\chi$ on each summand. Compare the determinants on $V_\chi\otimes M_\chi$ and on $M_\chi$.

> [!hint]- Hint 2: Make reciprocity compatible with the endomorphism
> Frobenius reciprocity identifies $\operatorname{Hom}_H(V_\psi,E(U))$ with $\operatorname{Hom}_G(\operatorname{Ind}_H^G V_\psi,E(U))$. It intertwines postcomposition by $F_*$. For inflation, replace $E(U)$ by its $H$-fixed subspace.

## Solution

> [!success]- Independent derivation, with the printed and corrected functions distinguished
> **1. Quotients under the stated sufficient hypotheses.** Use the categorical quotient property: any $H$-invariant map from $U$ to an object with trivial $H$-action factors uniquely through $\pi_H:U\to U/H$. If $H\triangleleft G$, the map $\pi_H\circ g$ is $H$-invariant, since
> $$
> \pi_Hgh=\pi_H(ghg^{-1})g=\pi_Hg.
> $$
> It therefore induces a unique $\bar g$ on $U/H$. Uniqueness gives $\overline{gg'}=\bar g\bar g'$ and $\bar h=1$ for $h\in H$, and $\overline{g^{-1}}$ is the inverse of $\bar g$. This defines the $G/H$-action. The same factorization property identifies $(U/H)/(G/H)$ with $U/G$: maps out of either object correspond to $G$-invariant maps out of $U$.
>
> From now on assume, for every $H\le G$, natural isomorphisms
> $$
> E(U/H)\cong E(U)^H
> $$
> compatible with $F$, and with $G/H$ when $H$ is normal. Put $A=E(U)$ and $T=F_*$. All the remaining assertions are finite-dimensional algebra about $A,T$ and these isomorphisms.
>
> **2. The central projector and the printed determinant.** Maschke's theorem applies because $k$ has characteristic zero. As $k$ is algebraically closed, Schur's lemma and complete reducibility give the evaluation decomposition
> $$
> A\cong\bigoplus_{\chi\in\operatorname{Irr}(G)}
> V_\chi\otimes_k M_\chi,\qquad
> M_\chi=\operatorname{Hom}_{k[G]}(V_\chi,A).
> $$
> The coefficients of $e_\chi$ are constant on conjugacy classes, so $e_\chi$ is central. On a simple $V_\eta$ it is scalar, and the trace of that scalar operator is
> $$
> \frac{d_\chi}{|G|}\sum_{g\in G}\chi(g^{-1})\eta(g)
> =d_\chi\delta_{\chi,\eta}.
> $$
> Character orthogonality therefore makes its scalar $1$ when $\eta=\chi$ and $0$ otherwise. Thus $e_\chi$ is the projector onto $V_\chi\otimes M_\chi$, in particular $e_\chi^2=e_\chi$. Since $T$ commutes with $G$, it commutes with $e_\chi$, proving $(e_\chi T)^\mu=e_\chi T^\mu$ for $\mu\ge1$.
>
> Postcomposition by $T$ defines $T_\chi$ on $M_\chi$, and the evaluation decomposition intertwines $T$ with $\bigoplus_\chi(1\otimes T_\chi)$. Consequently the printed function is
> $$
> L_F^{\mathrm{print}}(t,\chi,U/G)
> =\det(1-te_\chi T\mid A)
> =\det(1-tT_\chi\mid M_\chi)^{d_\chi}.
> $$
> The zero eigenvalues on the other isotypic components contribute factors $1$ to this reversed determinant.
>
> For any endomorphism $S$ over $k$, triangularize it and expand each geometric series in $k[[t]]$ to obtain
> $$
> \frac{d}{dt}\log\det(1-tS)
> =-\sum_{\mu\ge1}\operatorname{tr}(S^\mu)t^{\mu-1}.
> $$
> Here the notation denotes the formal logarithmic derivative $D'(t)/D(t)$, so no analytic convergence is needed. Taking $S=e_\chi T$ proves
> $$
> \frac{d}{dt}\log L_F^{\mathrm{print}}
> =-\sum_{\mu\ge1}\operatorname{tr}(e_\chi T^\mu)t^{\mu-1},
> $$
> with no factor $1/N$.
>
> **3. Why a normalization change is necessary.** Let $G=S_3$, let $A$ be its two-dimensional standard simple module, and let $T=1$. For $H=\{1\}$ the determinant attached to the trivial $H$-character is $(1-t)^2$. But $\operatorname{Ind}_1^{S_3}1=1+\operatorname{sgn}+2\chi_{\mathrm{std}}$, so the printed multiplicative extension gives $(1-t)^4$ on the $G$ side of **(c)**. This tests the printed normalization in the usual representation-theoretic setting; it is not a claim that this example satisfies the source's separate, problematic ordinary-characteristic-polynomial assumption.
>
> That latter problem can be seen directly. Let $P_H=|H|^{-1}\sum_{h\in H}h$. Since $T$ preserves $A^H$ and $\ker P_H$,
> $$
> \det(x-P_HT\mid A)
> =x^{\dim A-\dim A^H}\det(x-T\mid A^H).
> $$
> Thus the ordinary characteristic polynomials on $A$ and $A^H$ have different degrees unless $A=A^H$. The correct invariant-space comparison is instead
> $$
> \det(1-tP_HT\mid A)
> =\det(1-tT\mid A^H)
> =Z_{F/H}(t).
> $$
>
> **4. Definition of the repaired function.** For a simple character define
> $$
> \mathcal L_F(t,\chi,U/G)=\det(1-tT_\chi\mid M_\chi).
> $$
> Extend multiplicatively to a virtual character $\theta=\sum_\chi a_\chi\chi$:
> $$
> \mathcal L_F(t,\theta,U/G)
> =\prod_\chi\mathcal L_F(t,\chi,U/G)^{a_\chi}.
> $$
> This is a polynomial for an effective character and a rational function, regular and equal to $1$ at $t=0$, for an arbitrary virtual character. “Linearity” of the character argument means this multiplicative rule. For a simple $\chi$,
> $$
> \frac{d}{dt}\log\mathcal L_F(t,\chi,U/G)
> =-\frac1{d_\chi}\sum_{\mu\ge1}
> \operatorname{tr}(e_\chi T^\mu)t^{\mu-1}
> =-\frac1{|G|}\sum_{g\in G}\chi(g^{-1})
> \sum_{\mu\ge1}\operatorname{tr}(gT^\mu)t^{\mu-1}.
> $$
> This supplies both the multiplicity-space normalization and its trace interpretation without choosing a root of a polynomial.
>
> **5. Parts (a) and (b), with the corrected right side.** If $G=\{1\}$, its only multiplicity space is $A$ itself, so $\mathcal L_F(t,1,U/U)=Z_F(t)$. For general $G$ the trivial multiplicity space is
> $$
> M_1=\operatorname{Hom}_G(k,A)\cong A^G\cong E(V).
> $$
> The induced operator is $(F/G)_*$. Hence
> $$
> \mathcal L_F(t,1,U/V)=Z_{F/G}(t).
> $$
> This is not in general $Z_F(t)$, which also includes the nontrivial isotypic components.
>
> **6. Part (c): induction.** Start with an actual $H$-module $B$ of character $\psi$. There is a natural isomorphism
> $$
> \operatorname{Hom}_H(B,A)
> \cong\operatorname{Hom}_G(k[G]\otimes_{k[H]}B,A).
> $$
> Explicitly, $f$ maps to $g\otimes b\mapsto g f(b)$; the inverse evaluates at $1\otimes b$. The tensor relation holds because $f(hb)=hf(b)$, and these maps are inverse and commute with postcomposition by $T$.
>
> If $\operatorname{Ind}_H^G B\cong\bigoplus_\chi V_\chi^{\oplus m_\chi}$, the right hand side is $\bigoplus_\chi M_\chi^{\oplus m_\chi}$ with its corresponding endomorphism. Determinants therefore give
> $$
> \mathcal L_F(t,\psi,U/W)
> =\prod_\chi\mathcal L_F(t,\chi,U/V)^{m_\chi}
> =\mathcal L_F(t,\psi^G,U/V).
> $$
> Additivity of modules and the multiplicative definition extend the identity to all virtual $\psi$.
>
> **7. Part (d): inflation.** Suppose $H\triangleleft G$ and $B$ is a $G/H$-module. Every $G$-linear map from its inflation to $A$ lands in $A^H$, and conversely every $G/H$-linear map to $A^H$ is $G$-linear. Thus
> $$
> \operatorname{Hom}_G(\operatorname{Inf}_{G/H}^G B,A)
> =\operatorname{Hom}_{G/H}(B,A^H)
> \cong\operatorname{Hom}_{G/H}(B,E(W)).
> $$
> The assumed quotient comparison intertwines $T$ with $\varphi_*$. Taking determinants proves
> $$
> \mathcal L_\varphi(t,\psi,W/V)
> =\mathcal L_F(t,\operatorname{Inf}_{G/H}^G\psi,U/V).
> $$
>
> **8. Part (e) and the regular character.** Let $m_\chi=\dim M_\chi$. For general $T$ the decomposition in Step 2 gives
> $$
> Z_F(t)=\prod_{\chi\in\operatorname{Irr}(G)}
> \mathcal L_F(t,\chi,U/V)^{d_\chi}.
> $$
> This is equivalently the induction formula for $H=\{1\}$, because the regular character is $\sum_\chi d_\chi\chi$.
>
> In particular, when $F=1$, $\mathcal L_F(t,\chi,U/V)=(1-t)^{m_\chi}$ and
> $$
> B(U)=\sum_\chi d_\chi m_\chi,\qquad
> B(V)=\dim A^G=m_1\le B(U).
> $$
> It follows that $(1-t)^{B(V)}$ divides $(1-t)^{B(U)}$, with the requested regular-character factorization
> $$
> (1-t)^{B(U)}
> =\prod_{\chi\in\operatorname{Irr}(G)}
> \bigl((1-t)^{m_\chi}\bigr)^{d_\chi}.
> $$
> With the printed determinant one could multiply once over simple $\chi$ to obtain $Z_F$; using regular-character multiplicities with that determinant would count $d_\chi$ twice. This is exactly why the repaired formalism uses multiplicity spaces.

## Related Concepts

- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic components and multiplicity spaces]]
- [[06 - Representation Theory/Concepts/Characters|Characters and orthogonality]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induction and Frobenius reciprocity]]
- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Virtual characters]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source verification:** the complete two-page statement, including the quotient square, the capital $N$, both printed zeta identities, and all five parts, was checked against the original PDF images: [S2, Ch. XVIII, Exercise 26, printed pp. 727–728, PDF pp. 742–743]. The square is transcribed in searchable mathematics; it needs no retained screenshot.
- **Proof status:** independent derivation of the valid projector/determinant assertions and of the explicitly repaired formalism. The incompatible printed assertions are not marked proved.
- **Source inputs:** Maschke's theorem [S2, Ch. XVIII, Theorem 1.2, printed pp. 666–667, PDF pp. 681–682] and the central-character projector/orthogonality results [S2, Ch. XVIII, Proposition 5.14 and Theorems 5.15, 5.17, printed pp. 684–685, PDF pp. 699–700]. Frobenius reciprocity is constructed directly in Step 6. The representation decomposition is also explained in the linked isotypic concept.
- **Reference boundary:** the three historical articles are retained as references printed in the exercise. They were not consulted and are not inputs to this proof. No analytic statement about actual $L$-series or heat kernels is asserted here.
- **Terminology:** the exercise's “zeta function” is $\det(1-tF_*)$, not its reciprocal. The corrected $\mathcal L$ preserves that convention. The symbol $W=U/H$ denotes a quotient object; the underlying vector space in the proof is called $A$ to avoid a collision.
- **Learning status:** remains `not-started`; a complete solution is supplied for later study.
