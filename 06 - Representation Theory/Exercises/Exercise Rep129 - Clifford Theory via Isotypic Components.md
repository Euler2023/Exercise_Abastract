---
title: "Exercise Rep129: Clifford Theory via Isotypic Components"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - clifford-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 5, printed p. 723, PDF p. 738"
created: 2026-09-29
---

# Exercise Rep129: Clifford Theory via Isotypic Components

## Problem Statement

> [!question] Lang XVIII.5
> Let $G$ be a finite group and $S$ a normal subgroup. Let $\rho$ be an irreducible representation of $G$ over $\mathbb C$. Prove that either the restriction of $\rho$ to $S$ has all its irreducible components $S$-isomorphic to each other, or there exists a proper subgroup $H$ of $G$ containing $S$ and an irreducible representation $\theta$ of $H$ such that $\rho\simeq\operatorname{ind}_H^G(\theta)$.

## Hints

> [!hint]- Hint 1: Group equal irreducible constituents together
> Decompose the restricted representation into its canonical $S$-isotypic components. Normality makes $G$ permute these components.

> [!hint]- Hint 2: Stabilize one component
> The sum of an orbit of components is $G$-stable. For the stabilizer $H$ of one component $E_\psi$, study $\mathbb C[G]\otimes_{\mathbb C[H]}E_\psi\to E$, $g\otimes v\mapsto gv$.

## Solution

> [!success]- Independent derivation of the isotypic induction argument
> Let $E$ carry $\rho$. By Maschke's theorem, $\operatorname{Res}_S^G E$ is a direct sum of irreducible $S$-modules. For each irreducible character $\psi$ occurring in this restriction, let $E_\psi$ be the sum of all simple $S$-submodules with character $\psi$. Then
>
> $$
> E=\bigoplus_{\psi\in\Omega}E_\psi.
> $$
>
> This decomposition is canonical. Indeed, choose any decomposition into simple summands and project onto those summands. The projection of a simple submodule of character $\psi$ to a nonisomorphic simple summand is zero by Schur's lemma. Thus every such submodule lies in the sum of the chosen summands of type $\psi$, which proves the asserted intrinsic description and directness.
>
> For $g\in G$, $s\in S$, and $v\in E$, we have $s(gv)=g(g^{-1}sg)v$. Hence the translate of a simple $S$-module of character $\psi$ has character $[g]\psi$, and
>
> $$
> gE_\psi=E_{[g]\psi},\qquad [g]\psi(s)=\psi(g^{-1}sg).
> $$
>
> Every orbit of this permutation action contributes a $G$-stable direct sum of isotypic components. Irreducibility of $E$ implies that $\Omega$ is one orbit.
>
> If $\lvert\Omega\rvert=1$, all simple constituents of $\operatorname{Res}_S^G E$ are isomorphic, which is the first alternative. Suppose instead that $\lvert\Omega\rvert>1$, fix $\psi\in\Omega$, and put
>
> $$
> H=\{g\in G:gE_\psi=E_\psi\}.
> $$
>
> Then $S\subset H$ because $E_\psi$ is $S$-stable, and $H\ne G$ because its orbit has more than one element. Let $\theta$ be the $H$-representation on $E_\psi$.
>
> To prove $\theta$ irreducible, let $0\ne U\subset E_\psi$ be an $H$-stable subspace and choose left coset representatives $T$ of $G/H$. The spaces $tE_\psi$ for $t\in T$ are exactly the distinct isotypic components, so $\bigoplus_{t\in T}tU$ is a direct sum. It is $G$-stable: writing $gt=t'h$ with $h\in H$ gives $g(tU)=t'hU=t'U$. It is nonzero, hence equals $E$. Intersecting with $E_\psi$ gives $U=E_\psi$. This proves irreducibility.
>
> The map
>
> $$
> \mathbb C[G]\otimes_{\mathbb C[H]}E_\psi\longrightarrow E,\qquad
> g\otimes v\longmapsto gv
> $$
>
> is well-defined and $G$-linear. On the coset decomposition of its domain it maps $t\otimes E_\psi$ isomorphically onto $tE_\psi$. These latter spaces form the direct sum decomposition of $E$, so the map is an isomorphism. Thus $\rho\simeq\operatorname{Ind}_H^G\theta$, as required.

## Related Concepts

- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic components and Clifford theory]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced representations]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple modules]]

## Notes

- Source checked directly: [S2, Ch. XVIII, Exercise 5, printed p. 723, PDF p. 738]. No printed hint accompanies this exercise.
- Proof status: independent derivation. Maschke's theorem and Schur's lemma are named inputs; no form of Clifford's theorem is assumed.
- “Isotypic” means that all simple constituents have the same isomorphism type; it does not mean the restricted representation is itself irreducible.
- The inducing $H$-module is the whole isotypic component. A chosen simple $S$-constituent need not extend to $H$, and no such extension is used.
