---
title: "Exercise LA372: Finite Presentation and Hom across Direct Limits"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - direct-limits
  - hom-functor
  - finitely-presented-modules
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 26, printed p. 171, PDF p. 186"
figures:
  - "[[Attachments/lang-algebra-3e-ch03-ex26-hom-limit-diagram.png]]"
created: 2026-08-29
---

# Exercise LA372: Finite Presentation and Hom across Direct Limits

## Problem Statement

> [!question] Exercise 26
> Let $E$ be a module over a ring, and let $\{M_i\}$ be a directed family of modules. If $E$ is finitely generated, show that the natural homomorphism
>
> $$
> \varinjlim_i\operatorname{Hom}(E,M_i)
> \longrightarrow
> \operatorname{Hom}\left(E,\varinjlim_iM_i\right)
> $$
>
> is injective. If $E$ is finitely presented, show that this homomorphism is an isomorphism.
>
> **Printed hint.** First prove the statements when $E$ is free with finite basis. Then, say $E$ is finitely presented by an exact sequence $F_1\to F_0\to E\to0$. Consider the diagram reproduced below.

## Source Figures

![[Attachments/lang-algebra-3e-ch03-ex26-hom-limit-diagram.png]]

- **Identity:** The commutative Hom/direct-limit diagram in the printed hint.
- **Locator:** [S2, Ch. III, Ex. 26, printed p. 171, PDF p. 186].
- **Asset type:** Direct crop from the original PDF page; no arrows, symbols, or labels were altered.

## Hints

> [!hint]- Hint 1
> If $e_1,\ldots,e_r$ generate $E$ and a map $E\to M_i$ becomes zero in the direct limit, kill the finitely many images of the generators at one common later stage.

> [!hint]- Hint 2
> For a finite free module $F\cong R^r$, the comparison map is an isomorphism because a homomorphism $F\to M$ is determined by the images of its finite basis.

> [!hint]- Hint 3
> For finite presentation, apply $\operatorname{Hom}(-,M_i)$ to $F_1\to F_0\to E\to0$, take direct limits, and chase the source diagram using exactness of directed colimits.

## Solution

> [!success]- Independently derived solution
> Put $M=\varinjlim_iM_i$, with canonical maps $\iota_i:M_i\to M$. The natural comparison map is
>
> $$
> \Theta_E:\varinjlim_i\operatorname{Hom}(E,M_i)
> \longrightarrow\operatorname{Hom}(E,M),
> \qquad
> [\varphi_i]\longmapsto\iota_i\circ\varphi_i.
> $$
>
> Compatibility of the canonical maps makes $\Theta_E$ well defined.
>
> **Finite generation implies injectivity.** Let $e_1,\ldots,e_r$ generate $E$, and suppose $\Theta_E([\varphi_i])=0$. For every $s$,
>
> $$
> \iota_i(\varphi_i(e_s))=0.
> $$
>
> Exercise III.19 gives an index $j_s\ge i$ at which the image of $\varphi_i(e_s)$ vanishes. Directedness supplies one $j$ dominating all $j_s$. The transition of $\varphi_i$ to a map $\varphi_j:E\to M_j$ then kills every generator $e_s$, hence $\varphi_j=0$. Therefore $[\varphi_i]=0$ and $\Theta_E$ is injective.
>
> **The finite-free case.** If $F\cong R^r$ with $r<\infty$, then
>
> $$
> \operatorname{Hom}(F,N)\cong N^r
> $$
>
> naturally in $N$. A directed limit commutes with this finite product, so $\Theta_F$ is an isomorphism.
>
> **Finite presentation implies surjectivity.** Choose an exact sequence
>
> $$
> F_1\xrightarrow{d}F_0\xrightarrow{p}E\longrightarrow0
> $$
>
> with $F_0,F_1$ finite free. For each $i$, applying $\operatorname{Hom}(-,M_i)$ gives an exact sequence
>
> $$
> 0\longrightarrow\operatorname{Hom}(E,M_i)
> \xrightarrow{p^*}\operatorname{Hom}(F_0,M_i)
> \xrightarrow{d^*}\operatorname{Hom}(F_1,M_i).
> $$
>
> Exercise III.21 shows that taking directed limits preserves this exactness. Applying $\operatorname{Hom}(-,M)$ gives the exact bottom row of the source diagram. The comparison maps for $F_0$ and $F_1$ are isomorphisms by the finite-free case.
>
> Let $h:E\to M$. Its pullback $b=h\circ p$ lies in $\operatorname{Hom}(F_0,M)$. Lift $b$ through the middle vertical isomorphism to an element
>
> $$
> \overline b\in\varinjlim_i\operatorname{Hom}(F_0,M_i).
> $$
>
> Since $pd=0$, one has $bd=0$. By commutativity of the diagram and injectivity of the right vertical isomorphism, the image of $\overline b$ in $\varinjlim_i\operatorname{Hom}(F_1,M_i)$ is zero. Exactness of the top row therefore gives
>
> $$
> \overline h\in\varinjlim_i\operatorname{Hom}(E,M_i)
> $$
>
> mapping to $\overline b$. The two maps $\Theta_E(\overline h)$ and $h$ become equal after precomposition with the surjection $p:F_0\to E$, so they are equal. Hence $\Theta_E$ is surjective.
>
> A finitely presented module is finitely generated, so the first part also gives injectivity. Thus $\Theta_E$ is an isomorphism when $E$ is finitely presented.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA365 - Vanishing in a Direct Limit|Exercise LA365]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA367 - Exactness of Directed Colimits|Exercise LA367]]

## Notes

- **Sharp distinction:** Finite generation controls injectivity of the comparison map; finite presentation supplies the finite relation data needed for surjectivity.
- **Figure status:** The embedded diagram is a direct source crop, not a redraw. Its three vertical comparison maps and both exact rows were visually checked for legibility and identity.
- **Source status:** The statement, finite-free hint, finite-presentation sequence, and diagram were visually checked at [S2, Ch. III, Ex. 26, printed p. 171, PDF p. 186]. The proof and diagram chase are independent.

