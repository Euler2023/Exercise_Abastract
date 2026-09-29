---
title: "Exercise LA526: Total Complex Comparison and Composite Euler Characteristics"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 30, printed p. 832, PDF p. 847"
created: 2026-09-29
---

# Exercise LA526: Total Complex Comparison and Composite Euler Characteristics

## Problem Statement

> [!question] Lang XX.30
> Let $K,L$ be double complexes, with ordinary column complexes $K_i,L_i$. Let $\varphi:K\to L$ be a homomorphism of double complexes, and suppose every column map $\varphi_i:K_i\to L_i$ is a homology isomorphism.
>
> **(a)** Prove that $\operatorname{Tot}(\varphi):\operatorname{Tot}(K)\to\operatorname{Tot}(L)$ is a homology isomorphism. For a worked-out proof, the source refers to [FuL 85], Chapter V, Lemma 5.4.
>
> **(b)** Prove Theorem 9.8 using (a) instead of spectral sequences.

## Hints

> [!hint]- Hint 1
> For (a), apply the column-exactness argument to the mapping cone. Eliminate a cocycle one column at a time.

> [!hint]- Hint 2
> For (b), take a fully injective resolution of $T(I^\bullet)$. Its good truncations in the complex direction have successive quotients equivalent to shifted resolutions of the cohomology objects.

## Solution

> [!success]- Independent derivation
> **Conventions and source inputs.** Double complexes here are first quadrant, with anticommuting differentials of degrees $(1,0),(0,1)$, as defined in §9, printed p. 819 / PDF p. 834. Their total differential is the sum. The same proof works if either lower bound is shifted by a fixed finite amount.
>
> **(a) Exact columns imply exact total complex.** Let $C^{p,q}$ have exact columns and fixed lower bounds $p\ge0$, $q\ge q_0$. A total cocycle $z$ in degree $n$ has only finitely many possible components. Its component in the least occupied column, say $p$, is vertically closed, because no horizontal differential arrives from a smaller occupied column. Exactness supplies a vertical primitive $y^{p,n-p-1}$. Subtracting $d_{\mathrm{Tot}}y$ removes that column and can introduce a component only in column $p+1$. Repeat. Once $n-p=q_0$, a vertically closed component is zero, since exactness at the bottom says its kernel is the image of the zero term below it. Hence the process stops after finitely many steps and writes $z$ as a total boundary.
>
> Now form the column mapping cone
> $$
> C^{p,q}=L^{p,q}\oplus K^{p,q+1},
> $$
> with
> $$
> d_v(\ell,k)=(d_v\ell+\varphi k,-d_vk),\qquad
> d_h(\ell,k)=(d_h\ell,-d_hk).
> $$
> The chain-map identities show that these differentials anticommute. Each column is the cone of a quasi-isomorphism, hence exact; this follows, for example, from the long exact cohomology sequence of a mapping cone. The lower vertical bound is now $-1$, which the preceding finite elimination permits. Moreover $\operatorname{Tot}C$ is exactly the cone of $\operatorname{Tot}\varphi$. Its exactness says that $\operatorname{Tot}\varphi$ induces an isomorphism on cohomology. This proves (a). Interchanging the two axes proves the row version as well.
>
> **(b) The theorem being proved.** Let $T:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ be additive covariant left-exact functors between abelian categories with enough injectives where needed. Suppose $T$ sends injectives to $G$-acyclic objects. Let $\mathcal F_{\mathcal A},\mathcal F_{\mathcal B},\mathcal F_{\mathcal C}$ be the families defining the source's Grothendieck groups. We use the §3 convention: they contain zero, are closed under isomorphism, and in a short exact sequence the middle object belongs to the family if and only if both end objects do. Thus they are closed under subobjects, quotients, and extensions.
>
> The conditions CHAR 1 and CHAR 2 say that $R^iT$, $R^iG$, and $R^i(GT)$ map the indicated families into the next appropriate family, and the relevant objects and their subobjects have finite derived dimension. For $A\in\mathcal F_{\mathcal A}$ the required conclusion is
> $$
> \chi_G(\chi_T([A]))=\chi_{GT}([A]),\qquad
> \chi_T([A])=\sum_q(-1)^q[R^qT(A)].
> $$
> All sums below are finite by these hypotheses.
>
> Take an injective resolution $A\to I_A^\bullet$, and put $C^\bullet=T(I_A^\bullet)$. Choose a **fully injective** resolution $J^{p,r}$ of $C$, with $p$ its original complex degree and $r$ its resolution degree. This is Lang's Lemma 9.5, built from the injective horseshoe lemma (Lemma 9.4). Thus each column resolves $C^p$, while the horizontal cycles, boundaries, and cohomology in each resolution degree form injective resolutions
> $$
> Z^pJ,\quad B^pJ,\quad H^pJ
> $$
> of $Z^pC,B^pC,H^pC$, respectively. The short sequences between these objects split in each resolution degree because their left terms are injective. This construction is the named source input; no spectral sequence theorem is used.
>
> Write $D=G(J)$, inserting the usual sign on one differential to make the square anticommute. Since $C^p=T(I_A^p)$ is $G$-acyclic, the map from $G(C^p)$ concentrated in vertical degree zero to the column $G(J^{p,\bullet})$ is a quasi-isomorphism. Part (a) therefore gives
> $$
> H^n(\operatorname{Tot}D)
> \cong H^n(G(C^\bullet))
> =R^n(GT)(A). \tag{1}
> $$
>
> It remains to calculate the same Euler characteristic from $H^qC=R^qT(A)$. Choose $N$ so that $H^qC=0$ for $q>N$. In constructing the fully injective resolution, choose the zero resolution for these zero cohomology objects; then $H^qJ=0$ identically for $q>N$.
>
> For $q\ge0$, let $J_{\le q}$ be the good truncation in the horizontal direction: keep the columns $J^p$ for $p<q$, use $Z^qJ$ at $p=q$, and put zero beyond it. Let $J_{\le-1}=0$ and set $D_q=G(J_{\le q})$. For $q\ge1$, the quotient of successive truncations is the two-column complex
> $$
> Q_q:\quad B^qJ\longrightarrow Z^qJ
> $$
> in horizontal degrees $q-1,q$; its cohomology is $H^qJ$ in degree $q$. The sequence $0\to J_{\le q-1}\to J_{\le q}\to Q_q\to0$ splits in each bidegree. Therefore applying $G$ and taking totals gives a short exact sequence of ordinary complexes.
>
> The projection $G(Q_q)\to G(H^qJ)$, placing the latter in horizontal degree $q$, is a quasi-isomorphism in every horizontal row: $0\to B^qJ\to Z^qJ\to H^qJ\to0$ is split in each resolution degree and an additive functor preserves split sequences. The row version of (a) gives
> $$
> H^n(\operatorname{Tot}G(Q_q))\cong R^{n-q}G(H^qC).
> $$
> For $q=0$, $B^0J=0$, so $D_0$ itself has cohomology $R^nG(H^0C)$.
>
> The long exact sequence of the successive totals now implies, inductively,
> $$
> \chi(\operatorname{Tot}D_q)
> =\sum_{j=0}^q(-1)^j\chi_G([H^jC]). \tag{2}
> $$
> Here all intermediate cohomology lies in $\mathcal F_{\mathcal C}$: each new term is an extension of a subquotient of previously obtained cohomology by a subquotient of $R^*G(H^qC)$, and this family is closed under subobjects, quotients, and extensions. Each stage has only finitely many nonzero cohomology objects. In a finite long exact sequence, alternating Grothendieck classes sum to zero by splitting it into short exact sequences of kernels and images. This justifies (2), including both finiteness and membership in the specified Grothendieck group.
>
> Finally $J/J_{\le N}$ is exact in every horizontal row, and these rows are split: in the fully injective resolution their boundaries and cycles are injective, and $H^pJ=0$ above $N$. Its first remaining term is $J^N/Z^NJ=B^{N+1}J$, followed by the tail. Thus its image under $G$ is still row-exact. The row version of (a) makes its total complex exact. The degreewise split sequence with this quotient proves
> $$
> H^*(\operatorname{Tot}D_N)\cong H^*(\operatorname{Tot}D).
> $$
> Combining this with (1) and (2) yields
> $$
> \chi_{GT}([A])
> =\sum_q(-1)^q\chi_G([R^qT(A)])
> =\chi_G\chi_T([A]).
> $$
> The Euler maps are homomorphisms by the same long-exact-sequence argument, so equality on object classes proves the theorem on the entire Grothendieck group.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 30, printed p. 832, PDF p. 847]. The original page image was checked; the solution above is an independent derivation.
- **Source anchors:** The double-complex convention is [S2, Ch. XX, §9, printed p. 819, PDF p. 834]. Fully injective resolutions and Lemmas 9.4–9.5 are on printed pp. 820–821 / PDF pp. 835–836. Theorem 9.8 and its hypotheses are on printed pp. 823–824 / PDF pp. 838–839.
- **Family boundary:** The Grothendieck-group family condition is taken from the formal definition in §3, printed p. 770 / PDF p. 785. The weaker “two of the objects imply the third” wording on p. 823 by itself would not justify arbitrary subquotients in the Euler calculation. The stronger source definition makes the proof above valid in the stated target group, not just in an ambient group.
- **Visible source typo in CHAR 2:** The final clause on printed p. 824 says that subobjects of an object of $\mathcal F_{\mathcal B}$ lie in $\mathcal F_{\mathcal A}$. The categories require $\mathcal F_{\mathcal B}$ there.
- **Proof status:** Part (a) and the truncation argument are independent derivations. Fully injective resolutions and the injective horseshoe lemma are explicitly imported source results. Fulton–Lang [FuL 85] is a reading reference in the original exercise and was not consulted.
- No claim is made for arbitrary unbounded double complexes; the original chapter's first-quadrant convention is essential.
