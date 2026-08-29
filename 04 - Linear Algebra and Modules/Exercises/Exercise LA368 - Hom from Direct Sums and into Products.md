---
title: "Exercise LA368: Hom from Direct Sums and into Products"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - hom-functor
  - direct-sums
  - direct-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 22, printed p. 171, PDF p. 186"
created: 2026-08-29
---

# Exercise LA368: Hom from Direct Sums and into Products

## Problem Statement

> [!question] Exercise 22
> Let $\{M_i\}$ be a family of modules over a ring. For any module $N$, show that
>
> $$
> \operatorname{Hom}\left(\bigoplus_iM_i,N\right)
> =\prod_i\operatorname{Hom}(M_i,N).
> $$
>
> Also show that
>
> $$
> \operatorname{Hom}\left(N,\prod_iM_i\right)
> =\prod_i\operatorname{Hom}(N,M_i).
> $$

## Hints

> [!hint]- Hint 1
> Restrict a map out of $\bigoplus_iM_i$ to each summand, and compose a map into $\prod_iM_i$ with each coordinate projection.

> [!hint]- Hint 2
> To reconstruct a map out of the direct sum, add the component maps; the sum is finite for each input. To reconstruct a map into the product, assemble all component values into one tuple.

## Solution

> [!success]- Independently derived solution
> Let $\iota_i:M_i\to\bigoplus_iM_i$ be the canonical inclusions. Define
>
> $$
> \Phi:\operatorname{Hom}\left(\bigoplus_iM_i,N\right)
> \longrightarrow\prod_i\operatorname{Hom}(M_i,N),
> \qquad
> \Phi(f)=(f\circ\iota_i)_i.
> $$
>
> Conversely, given a family $(f_i)_i$ with $f_i:M_i\to N$, define
>
> $$
> \Psi((f_i)_i)((m_i)_i)=\sum_i f_i(m_i).
> $$
>
> An element of the direct sum has finite support, so the displayed sum is finite and therefore well defined over an arbitrary ring. It is immediately module-linear. For every family $(f_i)$, restriction of $\Psi((f_i))$ to the $i$-th summand is $f_i$, so $\Phi\Psi$ is the identity. Conversely, every $(m_i)\in\bigoplus_iM_i$ is the finite sum of its components, and linearity gives
>
> $$
> \Psi\Phi(f)((m_i))
> =\sum_i f(\iota_i(m_i))
> =f((m_i)).
> $$
>
> Thus
>
> $$
> \operatorname{Hom}\left(\bigoplus_iM_i,N\right)
> \cong\prod_i\operatorname{Hom}(M_i,N).
> $$
>
> For the second assertion, let $\pi_i:\prod_iM_i\to M_i$ be the coordinate projections and define
>
> $$
> \Theta:\operatorname{Hom}\left(N,\prod_iM_i\right)
> \longrightarrow\prod_i\operatorname{Hom}(N,M_i),
> \qquad
> \Theta(g)=(\pi_i\circ g)_i.
> $$
>
> Given $(g_i)_i$ on the right, set
>
> $$
> \Lambda((g_i)_i)(n)=(g_i(n))_i.
> $$
>
> This tuple belongs to the direct product with no finite-support restriction, and the map is module-linear coordinatewise. The identities
>
> $$
> \Theta\Lambda=\operatorname{id},
> \qquad
> \Lambda\Theta=\operatorname{id}
> $$
>
> follow from equality of all coordinate maps. Hence
>
> $$
> \operatorname{Hom}\left(N,\prod_iM_i\right)
> \cong\prod_i\operatorname{Hom}(N,M_i).
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]

## Notes

- **Product boundary:** The right-hand side is a direct product, not a direct sum. An infinite family of component maps is allowed; only an individual input to $\bigoplus_iM_i$ has finite support.
- **Equality notation:** Lang prints equality. The proof identifies the two sides by canonical natural isomorphisms.
- **Source status:** Both Hom identities and the arbitrary-family hypotheses were visually checked at [S2, Ch. III, Ex. 22, printed p. 171, PDF p. 186]. The proof is independent.

