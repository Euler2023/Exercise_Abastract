---
title: "Exercise LA369: Hom Commutes with Inverse Limits"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - hom-functor
  - inverse-limits
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 23, printed p. 171, PDF p. 186"
created: 2026-08-29
---

# Exercise LA369: Hom Commutes with Inverse Limits

## Problem Statement

> [!question] Exercise 23
> Let $\{M_i\}$ be a directed family of modules over a ring. For any module $N$, show that
>
> $$
> \varprojlim_i\operatorname{Hom}(N,M_i)
> =
> \operatorname{Hom}\left(N,\varprojlim_iM_i\right).
> $$

## Hints

> [!hint]- Hint 1
> Realize $\varprojlim_iM_i$ as the submodule of $\prod_iM_i$ consisting of compatible tuples.

> [!hint]- Hint 2
> A compatible family of maps $h_i:N\to M_i$ defines one map $n\mapsto(h_i(n))_i$ into that compatible-tuple submodule.

## Solution

> [!success]- Independently derived solution
> Write the transition maps of the inverse system as
>
> $$
> p_i^j:M_j\longrightarrow M_i
> \qquad(i\le j).
> $$
>
> They induce transition maps
>
> $$
> \operatorname{Hom}(N,M_j)\longrightarrow
> \operatorname{Hom}(N,M_i),
> \qquad
> h_j\longmapsto p_i^j\circ h_j.
> $$
>
> Let $M=\varprojlim_iM_i$ and let $\pi_i:M\to M_i$ be its projections. Composition with the projections defines
>
> $$
> \Phi:\operatorname{Hom}(N,M)
> \longrightarrow
> \varprojlim_i\operatorname{Hom}(N,M_i),
> \qquad
> \Phi(h)=(\pi_i\circ h)_i.
> $$
>
> This family is compatible because $p_i^j\pi_j=\pi_i$.
>
> Conversely, let $(h_i)_i$ be a compatible element of the inverse limit on the right. Define
>
> $$
> \Psi((h_i)_i):N\longrightarrow\prod_iM_i,
> \qquad
> n\longmapsto(h_i(n))_i.
> $$
>
> For $i\le j$, compatibility gives
>
> $$
> p_i^j(h_j(n))=h_i(n),
> $$
>
> so $(h_i(n))_i$ lies in $M=\varprojlim_iM_i$. Hence $\Psi$ is a well-defined module homomorphism $N\to M$.
>
> The $i$-th component of $\Phi\Psi((h_i))$ is $h_i$, so $\Phi\Psi$ is the identity. A map into an inverse limit is determined by all its projections, so $\Psi\Phi$ is also the identity. Thus the displayed equality is the canonical natural isomorphism
>
> $$
> \varprojlim_i\operatorname{Hom}(N,M_i)
> \cong
> \operatorname{Hom}\left(N,\varprojlim_iM_i\right).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Printed limit symbols:** Both limits in the printed formula carry left-pointing arrows and are inverse limits. This is deliberate, even though the exercise appears under the heading “Direct limits”; it is not a source issue.
- **Categorical boundary:** No finiteness assumption on $N$ is needed because $\operatorname{Hom}(N,-)$ preserves inverse limits. Its behavior on direct limits is the separate subject of Exercise III.26.
- **Source status:** The two left-arrow limit symbols were checked directly on the rendered page at [S2, Ch. III, Ex. 23, printed p. 171, PDF p. 186]. The proof is independent.
