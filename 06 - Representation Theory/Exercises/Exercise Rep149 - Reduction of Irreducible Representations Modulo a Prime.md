---
title: "Exercise Rep149: Reduction of Irreducible Representations Modulo a Prime"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - reduction-modulo-primes
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 27, printed p. 729, PDF p. 744"
created: 2026-09-29
---

# Exercise Rep149: Reduction of Irreducible Representations Modulo a Prime

## Problem Statement

> [!question] Lang XVIII.27
> Do this exercise after you have read some of Chapter VII. The point is that for fields of characteristic not dividing the order of the group, the representations can be obtained by “reducing modulo a prime.” Let $G$ be a finite group and let $p$ be a prime not dividing the order of $G$. Let $F$ be a finite extension of the rationals with ring of algebraic integers $\mathfrak o_F$. Suppose that $F$ is sufficiently large so that all $F$-irreducible representations of $G$ remain irreducible when tensored with $\mathbb Q^a=F^a$. Let $\mathfrak p$ be a prime of $\mathfrak o_F$ lying above $p$, and let $\mathfrak o_{\mathfrak p}$ be the corresponding local ring.
>
> (a) Show that an irreducible $(G,F)$-space $V$ can be obtained from a $(G,\mathfrak o_{\mathfrak p})$-module $E$ free over $\mathfrak o_{\mathfrak p}$, by extending the base from $\mathfrak o_{\mathfrak p}$ to $F$, i.e. by tensoring so that $V=E\otimes F$ (tensor product over $\mathfrak o_{\mathfrak p}$).
>
> (b) Show that the reduction mod $\mathfrak p$ of $E$ is an irreducible representation of $G$ in characteristic $p$. In other words, let $k=\mathfrak o/\mathfrak p=\mathfrak o_{\mathfrak p}/\mathfrak m_{\mathfrak p}$, where $\mathfrak m_{\mathfrak p}$ is the maximal ideal of $\mathfrak o_{\mathfrak p}$. Let $E(\mathfrak p)=E\otimes k$ (tensor product over $\mathfrak o_{\mathfrak p}$). Show that $G$ operates on $E(\mathfrak p)$ in a natural way, and that this representation is irreducible. In fact, if $\chi$ is the character of $G$ on $V$, show that $\chi$ is also the character on $E$, and that $\chi\bmod\mathfrak m_{\mathfrak p}$ is the character on $E(\mathfrak p)$.
>
> (c) Show that all irreducible characters of $G$ in characteristic $p$ are obtained as in (b).

> [!info] Notation and the meaning of coverage
> The shortened $\mathfrak o$ in (b) denotes $\mathfrak o_F$. Write $A=\mathfrak o_{\mathfrak p}$, $\mathfrak m=\mathfrak m_{\mathfrak p}$, and $k=A/\mathfrak m$. The proof shows more than (b): each reduction is **absolutely irreducible**, distinct characteristic-zero irreducibles have distinct reductions, and these reductions exhaust all irreducibles over $\overline k$. They are already defined over $k$, which is therefore a splitting field for $G$. This is the usual splitting-field interpretation of the irreducible characters in (c).

## Hints

> [!hint]- Hint 1: Average a lattice, then average linear maps
> Starting from any $A$-lattice $L\subset V$, use $E=\sum_{g\in G}gL$. For two such lattices, averaging on their $A$-linear Hom module is possible because $|G|$ is a unit in $A$.

> [!hint]- Hint 2: Control endomorphisms after reduction
> The averaging operator is an idempotent, so its image commutes with reduction and field extension. Absolute irreducibility in characteristic zero makes this image $A$ for an endomorphism module and $0$ between distinct irreducibles. Combine the resulting Hom dimensions with Maschke's theorem and the identity $\sum_i(\dim V_i)^2=|G|$.

## Solution

> [!success]- Independent derivation of lattices, absolute irreducibility, and exhaustion
> **Arithmetic and algebra inputs.** We use the standard arithmetic fact that the ring of integers of a number field is Dedekind and that its localization at a nonzero prime is a discrete valuation ring. Thus $A$ is a PID with fraction field $F$, and every finitely generated torsion-free $A$-module is free. We also use Maschke's theorem and the finite-dimensional Artin–Wedderburn theorem: a group algebra over a field whose characteristic does not divide $|G|$ is semisimple, and over a splitting field it is a product of full matrix algebras. These are named inputs, not assertions about the modular case $p\mid|G|$.
>
> **(a) Construct a stable free lattice.** Choose an $F$-basis $v_1,\ldots,v_d$ of $V$ and set $L=\bigoplus_jAv_j$. Put
> $$
> E=\sum_{g\in G}\rho(g)L\subset V.
> $$
> This is generated over $A$ by the finite set $\{\rho(g)v_j:g\in G,1\le j\le d\}$. It is torsion-free because it is a submodule of the $F$-space $V$, and hence is free. It contains $L$, so its $F$-span is $V$. Its rank is therefore $d$ and the natural map $E\otimes_AF\to V$ is an isomorphism. Multiplication by an element of $G$ permutes the summands in the definition of $E$, so $E$ is $G$-stable and is the required $(G,A)$-module.
>
> **An averaging lemma over $A$.** Since $p\nmid|G|$, the integer $|G|$ is not in $\mathfrak m$, and is a unit of $A$. For finite free $G$-stable lattices $E_i,E_j$, let $M=\operatorname{Hom}_A(E_i,E_j)$ and define
> $$
> P(T)=\frac1{|G|}\sum_{g\in G}\rho_j(g)T\rho_i(g^{-1}).
> $$
> Reindexing the sum shows that $P(T)$ is $G$-equivariant. If $T$ is equivariant, every summand is $T$, so $P(T)=T$. Thus $P$ is an idempotent with image $\operatorname{Hom}_{A[G]}(E_i,E_j)$ and
> $$
> M=\operatorname{im}P\oplus\ker P.
> $$
> For any $A$-algebra $B$ in which $|G|$ is invertible, finite freeness identifies $M\otimes_AB$ with $\operatorname{Hom}_B(E_i\otimes_AB,E_j\otimes_AB)$. Under this identification $P\otimes1$ is the same averaging operator. The direct-sum decomposition survives tensoring, without a flatness assumption, so
> $$
> \operatorname{Hom}_{A[G]}(E_i,E_j)\otimes_AB
> \cong\operatorname{Hom}_{B[G]}(E_i\otimes_AB,E_j\otimes_AB).
> \tag{*}
> $$
> We will use $B=F,k,\overline k$.
>
> **(b) Absolute irreducibility of the reduction.** The hypothesis on $F$ says that $V\otimes_F\overline F$ is irreducible. By Schur's lemma over $\overline F$, its commuting endomorphisms are scalar. Extending an $F$-endomorphism and reading one diagonal matrix entry then gives $\operatorname{End}_{F[G]}(V)=F\cdot I$.
>
> Consequently every $G$-equivariant $A$-endomorphism of $E$ is scalar after extension to $F$. A scalar $a\in F$ preserves the free lattice $E$ exactly when $a\in A$, as one sees in an $A$-basis. Therefore
> $$
> \operatorname{End}_{A[G]}(E)=A\cdot I.
> $$
> Applying (*) with $B=\overline k$ gives
> $$
> \operatorname{End}_{\overline k[G]}(E\otimes_A\overline k)=\overline k\cdot I.
> $$
> Maschke's theorem makes $E\otimes_A\overline k$ semisimple. A reducible nonzero semisimple module has a decomposition into two nonzero submodules and hence a nontrivial idempotent projection onto one summand. Such a projection is not scalar, contradicting the displayed endomorphism ring. Thus $E\otimes_A\overline k$ is irreducible. This proves absolute irreducibility of $E(\mathfrak p)=E\otimes_Ak$, and in particular its irreducibility over $k$.
>
> The action on $E(\mathfrak p)$ is obtained by reducing the matrices $\rho(g)\in\operatorname{GL}_d(A)$. These remain invertible because their inverse matrices $\rho(g^{-1})$ also have entries in $A$. Traces commute with scalar extension and reduction. Hence $\chi(g)=\operatorname{tr}(\rho(g))\in A$ is the character on the lattice, equals the original character over $F$, and reduces to the trace character of $E(\mathfrak p)$.
>
> **(c) Distinctness and complete coverage.** Choose all pairwise nonisomorphic irreducible $F[G]$-modules $V_1,\ldots,V_s$, with dimensions $d_i$, and choose stable lattices $E_i$ as in (a). For $i\ne j$, Schur's lemma gives $\operatorname{Hom}_{F[G]}(V_i,V_j)=0$. An $A[G]$-map $E_i\to E_j$ extends to such an $F[G]$-map, and therefore is zero. By (*) we obtain
> $$
> \operatorname{Hom}_{\overline k[G]}(E_i\otimes_A\overline k,E_j\otimes_A\overline k)=0.
> $$
> Thus the absolutely irreducible reductions in (b) are pairwise nonisomorphic.
>
> The splitting hypothesis on $F$ implies that $F[G]$ is a product of matrix algebras $\operatorname{Mat}_{d_i}(F)$. Indeed in its Artin–Wedderburn decomposition, the endomorphism division ring of each simple module is $F$, as proved above using absolute irreducibility. Taking dimensions gives
> $$
> \sum_{i=1}^s d_i^2=|G|.
> $$
> Over $\overline k$, the group algebra is also a product of full matrix algebras by Maschke and Artin–Wedderburn. Its dimension is again $|G|$. The pairwise distinct simple modules already found have the same dimensions $d_i$, and thus their matrix blocks already account for this entire dimension. There is no remaining positive-dimensional block. They exhaust the irreducibles over $\overline k$.
>
> One may also conclude directly over $k$. The action map
> $$
> k[G]\longrightarrow\prod_{i=1}^s\operatorname{End}_k(E_i\otimes_Ak)
> $$
> becomes the full Artin–Wedderburn isomorphism after extending scalars to $\overline k$, by the exhaustion just established. A linear map of finite-dimensional $k$-spaces that becomes an isomorphism after a field extension was already an isomorphism (its rank does not change). Thus $k[G]\cong\prod_i\operatorname{Mat}_{d_i}(k)$, proving that $k$ is itself a splitting field and that the reductions exhaust its irreducibles too. Their characters are exactly the reductions described in (b), as required.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source and proof status:** The entire preamble, splitting-field assumption, and parts (a)–(c) were visually checked at [S2, Ch. XVIII, Exercise 27, printed p. 729, PDF p. 744]. The proof is independently supplied, with the arithmetic, Maschke, Schur, and Artin–Wedderburn inputs identified explicitly.
- **No restriction on ramification:** The prime of $F$ above $p$ can be ramified. The proof only requires that $A$ is a DVR and that $|G|$ is a unit. The idempotent averaging argument is what makes reduction of equivariant Hom spaces valid even though $k$ is not flat over $A$.
- **What “character” means here:** In (b) the reduced character is the $k$-valued trace, obtained by reducing matrix traces. It is not the characteristic-zero-valued Brauer-character lift. Coverage was proved at the level of modules, so it does not rely on recovering arbitrary multiplicities from traces modulo $p$.
- **Other characteristic-$p$ fields:** Absolute irreducibles over an algebraic closure are covered, and all already descend to this $k$. Over a different nonsplitting field, an irreducible representation can combine several absolutely irreducible constituents after scalar extension; that separate descent question is not asserted in (c).
