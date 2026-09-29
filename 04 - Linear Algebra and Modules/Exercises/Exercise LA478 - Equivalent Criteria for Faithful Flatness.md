---
title: "Exercise LA478: Equivalent Criteria for Faithful Flatness"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - flatness
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 9, printed p. 638, PDF p. 653"
created: 2026-09-29
---

# Exercise LA478: Equivalent Criteria for Faithful Flatness

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 9
> We continue to assume that rings are commutative. Let $M$ be an $A$-module. We say that $M$ is **faithfully flat** if $M$ is flat, and if the functor
>
> $$
> T_M:E\longmapsto M\otimes_A E
> $$
>
> is faithful, that is $E\ne0$ implies $M\otimes_A E\ne0$. Prove that the following conditions are equivalent.
>
> (i) $M$ is faithfully flat.
>
> (ii) $M$ is flat, and if $u:F\to E$ is a homomorphism of $A$-modules, $u\ne0$, then $T_M(u):M\otimes_A F\to M\otimes_A E$ is also $\ne0$.
>
> (iii) $M$ is flat, and for all maximal ideals $\mathfrak m$ of $A$, we have $\mathfrak mM\ne M$.
>
> (iv) A sequence of $A$-modules $N'\to N\to N''$ is exact if and only if the sequence tensored with $M$ is exact.

> [!info] Meaning of faithful and of condition (iv)
> Condition (iv) is quantified over all such sequences. The usual categorical meaning of faithful is injectivity on each set of morphisms. Since tensoring is additive, this is equivalent to detecting nonzero morphisms as in (ii). The equivalence with detecting nonzero objects in (i) uses flatness; the proof establishes it explicitly.

## Hints

> [!hint]- Hint 1: Test cyclic modules
> Use $M\otimes_A A/I\simeq M/IM$. Every nonzero module contains a nonzero cyclic submodule $A/I$, and every proper ideal $I$ is contained in a maximal ideal.

> [!hint]- Hint 2: Separate images from homology
> Factor a nonzero map through its image to prove (i)$\Rightarrow$(ii). To reflect exactness, first show that the composite of the original arrows is zero, and then apply detection of zero modules to $\ker g/\operatorname{im}f$.

## Solution

> [!success]- Independent derivation of all four equivalences
> Write $T=M\otimes_A-$, and suppress the subscript $A$ on tensors. We use right exactness of tensor product and its elementary quotient identification
>
> $$
> M\otimes A/I\simeq M/IM,
> \qquad m\otimes(a+I)\longmapsto am+IM.
> $$
>
> The inverse sends $m+IM$ to $m\otimes(1+I)$; the tensor relations show that it is well-defined. If $A$ is the zero ring, all unital $A$-modules are zero and all four conditions hold. Otherwise the maximal-ideal argument below applies.
>
> **(i)$\Rightarrow$(ii).** Let $u:F\to E$ be nonzero and put $J=\operatorname{im}u\ne0$. Factor $u$ as the surjection $F\twoheadrightarrow J$ followed by the inclusion $J\hookrightarrow E$. Right exactness and flatness respectively give a surjection and an injection
>
> $$
> M\otimes F\twoheadrightarrow M\otimes J
> \hookrightarrow M\otimes E.
> $$
>
> By (i), $M\otimes J\ne0$, so their composite $T(u)$ cannot be zero.
>
> **(ii)$\Rightarrow$(i).** If $E\ne0$, its identity map is nonzero. Condition (ii) says that $T(\operatorname{id}_E)=\operatorname{id}_{M\otimes E}$ is nonzero, hence $M\otimes E\ne0$. Flatness is already assumed.
>
> **(i)$\Rightarrow$(iii).** For a maximal ideal $\mathfrak m$, the module $A/\mathfrak m$ is nonzero. Thus $M/\mathfrak mM\simeq M\otimes A/\mathfrak m\ne0$.
>
> **(iii)$\Rightarrow$(i).** Take a nonzero module $E$ and $0\ne x\in E$. Its annihilator $I=\{a\in A:ax=0\}$ is a proper ideal, and $A/I\to E$, $a+I\mapsto ax$, is injective. Choose a maximal ideal $\mathfrak m\supseteq I$, using the maximal-ideal theorem. The quotient map
>
> $$
> M/IM\twoheadrightarrow M/\mathfrak mM
> $$
>
> has nonzero target by (iii), so its source is nonzero. Flatness now gives an injection $M/IM\simeq M\otimes A/I\hookrightarrow M\otimes E$. Consequently $M\otimes E\ne0$.
>
> **(i)$\Rightarrow$(iv), preservation.** Consider an exact sequence $N'\xrightarrow{f}N\xrightarrow{g}N''$. Put $K=\ker g=\operatorname{im}f$ and $J=\operatorname{im}g$. Applying the exact functor $T$ to $0\to K\to N\to J\to0$ gives $\ker T(N\to J)=\operatorname{im}T(K\to N)$. The map $T(J)\to T(N'')$ is injective by flatness, while $T(N')\to T(K)$ is surjective by right exactness. Hence $\ker T(g)=\operatorname{im}T(f)$.
>
> **(i)$\Rightarrow$(iv), reflection.** Suppose instead that $T(N')\xrightarrow{T(f)}T(N)\xrightarrow{T(g)}T(N'')$ is exact. Its composite is zero, so $T(gf)=0$. By the already proved implication (i)$\Rightarrow$(ii), $gf=0$. Thus $K=\ker g$ contains $I=\operatorname{im}f$, and $H=K/I$ is defined.
>
> Flatness identifies $T(K)$ with $\ker T(g)$ inside $T(N)$: factor $g$ through $J=\operatorname{im}g$ and tensor $0\to K\to N\to J\to0$ and $J\hookrightarrow N''$. Likewise, factoring $f$ through $I$ identifies $T(I)$ with $\operatorname{im}T(f)$ inside $T(N)$. Exactness of the tensored sequence therefore gives $T(I)=T(K)$. Tensoring $0\to I\to K\to H\to0$ gives $T(H)=0$. By (i), $H=0$, so $\operatorname{im}f=\ker g$.
>
> **(iv)$\Rightarrow$(i).** For every injection $j:F\hookrightarrow E$, the sequence $0\to F\xrightarrow{j}E$ is exact, so (iv) makes $T(j)$ injective. Together with right exactness of tensor product, this is flatness. Finally, if $T(E)=0$, the tensored sequence of $0\to E\to0$ is exact. Reflection in (iv) makes the original sequence exact, forcing $E=0$. Thus $T$ detects nonzero modules, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Source and proof status:** The complete definition and four conditions were checked against [S2, Ch. XVI, Ex. 9, printed p. 638, PDF p. 653]. The proof is an independent derivation, using tensor right exactness and the maximal-ideal theorem for proper ideals in a nonzero commutative unital ring.
- **Terminology boundary:** Detection of nonzero objects alone need not make an arbitrary additive functor faithful. Here flatness is essential in the image-factorization argument. In (iv), exactness is at the middle term; no injectivity or surjectivity of the two displayed arrows is implicit.
