---
title: "Exercise LA312: Endomorphisms of the Regular Module"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - module-homomorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 1, Modules, Ex. 1.1, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA312: Endomorphisms of the Regular Module

## Problem Statement

> [!question] Exercise 1.1
> Let $R$ be a ring, and let $V$ denote the $R$-module $R$. Determine all homomorphisms $\varphi:V\to V$.

## Hints

> [!hint]- Hint 1
> An $R$-linear map is determined by the image of $1$.

## Solution

> [!success]- Solution
> Put $a=\varphi(1)$. For every $r\in R$, left $R$-linearity gives
>
> $$
> \varphi(r)=\varphi(r\cdot1)=r\varphi(1)=ra.
> $$
>
> Conversely, for every fixed $a\in R$, the map $r\mapsto ra$ is a homomorphism of the left regular module. Hence
>
> $$
> \boxed{\operatorname{End}_R({}_RR)=\{\rho_a:r\mapsto ra\mid a\in R\}.}
> $$
>
> If $R$ is commutative, these are simply the multiplication maps. For a possibly noncommutative ring, composition reverses multiplication:
>
> $$
> \rho_a\circ\rho_b=\rho_{ba},
> $$
>
> so $\operatorname{End}_R({}_RR)\cong R^{\mathrm{op}}$ as rings.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Routing:** Module Theory is primary because this is the endomorphism ring of the regular module.
- **Convention:** Artin works with commutative rings in this chapter; the final sentence records the standard noncommutative extension.
- **Source status:** [S1, Ch. 14, §14.1, Ex. 1.1, printed p. 437, PDF p. 449]. The classification is independent.
