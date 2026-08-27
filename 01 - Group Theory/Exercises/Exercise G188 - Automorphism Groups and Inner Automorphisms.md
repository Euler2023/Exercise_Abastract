---
title: "Exercise G188: Automorphism Groups and Inner Automorphisms"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.2, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G188: Automorphism Groups and Inner Automorphisms

## Problem Statement

> [!question] Miscellaneous Exercise M.2
> (a) Prove that the set $\operatorname{Aut}G$ of automorphisms of a group $G$ forms a group, the law of composition being composition of functions.
>
> (b) Prove that the map $\varphi:G\to\operatorname{Aut}G$ defined by $g\mapsto$ conjugation by $g$ is a homomorphism, and determine its kernel.
>
> (c) The automorphisms obtained as conjugation by a group element are called inner automorphisms. Prove that the set of inner automorphisms, the image of $\varphi$, is a normal subgroup of $\operatorname{Aut}G$.

## Hints

> [!hint]- Hint 1
> Composition and inverse of bijective homomorphisms are again bijective homomorphisms.

> [!hint]- Hint 2
> For $\alpha\in\operatorname{Aut}G$, compute $\alpha c_g\alpha^{-1}$.

## Solution

> [!success]- Solution
> **(a)** Composition of automorphisms is associative, the identity map is an automorphism, and the inverse of a bijective homomorphism is a homomorphism. Hence $\operatorname{Aut}G$ is a group.
>
> **(b)** Let $c_g(x)=gxg^{-1}$. Then
>
> $$
> c_g\circ c_h=c_{gh},
> $$
>
> so $\varphi(g)=c_g$ is a homomorphism. Its kernel consists of the elements commuting with every $x\in G$:
>
> $$
> \ker\varphi=Z(G).
> $$
>
> **(c)** For $\alpha\in\operatorname{Aut}G$,
>
> $$
> \alpha c_g\alpha^{-1}=c_{\alpha(g)}.
> $$
>
> Thus conjugation by any automorphism preserves $\operatorname{Inn}(G)=\operatorname{im}\varphi$, proving
>
> $$
> \operatorname{Inn}(G)\triangleleft\operatorname{Aut}(G).
> $$
>
> Also $\operatorname{Inn}(G)\cong G/Z(G)$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- Part (c) proves normality directly, not merely because the inner automorphisms are an image.
- **Source status:** [S1, Ch. 6, M.2, printed p. 193, PDF p. 205]; independent proof.

