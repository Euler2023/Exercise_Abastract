---
title: "Exercise LA508: Shapiro's Lemma for Group Cohomology"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 11, printed p. 829, PDF p. 844"
created: 2026-09-29
---

# Exercise LA508: Shapiro's Lemma for Group Cohomology

## Problem Statement

> [!question] Lang XX.11
> Let $G$ be a group and $S$ a subgroup. Show that the map
> $$
> H^q(G,M_G^S(B))\longrightarrow H^q(S,B)
> \quad\text{for }B\in\operatorname{Mod}(S),
> $$
> obtained by composing the restriction $\mathrm{res}_S^G$ with the $S$-homomorphism $f\mapsto f(1)$, is an isomorphism for $q>0$. [Hint: Use the uniqueness theorem for cohomology functors.]

## Hints

> [!hint]- Hint 1: Start in degree zero
> A $G$-invariant function in $M_G^S(B)$ is constant. Its value at $1$ lies in $B^S$.

> [!hint]- Hint 2: Show that coinduction preserves injectives
> Use the adjunction $\operatorname{Hom}_G(A,M_G^S(I))\simeq\operatorname{Hom}_S(A,I)$ and the exactness of restriction. Coinduction itself is exact because it is a product of copies of the coefficient group.

## Solution

> [!success]- Independent injective-resolution proof and identification of the prescribed map
> Use
> $$
> M_G^S(B)=\{f:G\to B:f(sg)=s f(g)\},
> \qquad (x\cdot f)(g)=f(gx).
> $$
> Evaluation at $1$ gives an isomorphism
> $$
> (M_G^S(B))^G\xrightarrow{\sim}B^S.
> $$
> Indeed, $G$-invariance under right translation forces a function to be constant; a constant function of value $b$ satisfies the defining rule precisely when $sb=b$ for all $s\in S$.
>
> Choose representatives for the right cosets $S\backslash G$. Their values identify the underlying abelian group of $M_G^S(B)$ with a product of copies of $B$. Hence coinduction is exact: kernels are coordinatewise, and surjections remain surjective by choosing coordinate lifts.
>
> If $I$ is an injective $S$-module, the explicit Hom adjunction gives
> $$
> \operatorname{Hom}_G(-,M_G^S(I))
> \simeq \operatorname{Hom}_S(\operatorname{Res}_S^G(-),I).
> $$
> Restriction is exact and the latter Hom is exact on short exact sequences. Consequently $M_G^S(I)$ is injective as a $G$-module.
>
> Let $0\to B\to I^\bullet$ be an injective resolution over $\mathbb Z[S]$. Exactness and preservation of injectives make $0\to M_G^S(B)\to M_G^S(I^\bullet)$ an injective resolution over $\mathbb Z[G]$. The degree-zero evaluation isomorphism above applies term by term, giving an isomorphism of complexes
> $$
> (M_G^S(I^\bullet))^G\xrightarrow{\sim}(I^\bullet)^S.
> $$
> Taking cohomology proves a natural isomorphism in every degree, including degree zero.
>
> It remains to identify it with the map requested in the problem. Restriction followed by evaluation on coefficients is a natural morphism of cohomology delta-functors in $B$. In degree zero it is exactly the isomorphism just displayed. Both $B\mapsto H^q(G,M_G^S(B))$ and $B\mapsto H^q(S,B)$ vanish in positive degree on injective $S$-modules, by the preceding injectivity argument. The uniqueness theorem for effaceable delta-functors therefore identifies their natural comparison with restriction followed by evaluation. This proves the precise assertion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion|Injective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext|Derived functors and their uniqueness]]

## Notes

- Source statement and printed hint checked at [S2, Ch. XX, Exercise 11, printed p. 829, PDF p. 844].
- Proof status: independent derivation using the explicit Hom adjunction, injective resolutions, and the named universality theorem [S2, Ch. XX, Theorem 7.1, printed p. 801, PDF p. 816].
- This is Shapiro's lemma for coinduction. The source imposes no finite-index hypothesis, and the proof does not add one.
- Evaluation at $1$ is $S$-linear: for $s\in S$, $(s\cdot f)(1)=f(s)=s f(1)$.

