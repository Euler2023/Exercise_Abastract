---
title: "Exercise R313: Square Zero Extensions and Derivations"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 11, printed p. 755, PDF p. 770"
created: 2026-09-29
---

# Exercise R313: Square Zero Extensions and Derivations

## Problem Statement

> [!question] Lang XIX.11
> Let $B$ be a commutative $R$-algebra and $M$ a $B$-module. On $B\oplus M$ define
> $$
> (b,x)(b',y)=(bb',by+b'x).
> $$
> Show that $B\oplus M$ is a $B$-algebra, identifying $b$ with $(b,0)$. For any commutative $R$-algebra $A$, show that the algebra homomorphisms $\operatorname{Hom}_{\mathrm{Alg}/R}(A,B\oplus M)$ consist of pairs $(\varphi,D)$, where $\varphi:A\to B$ is an algebra homomorphism and $D:A\to M$ is a derivation for the $A$-module structure induced by $\varphi$.

## Hints

> [!hint]- Hint 1
> Compute the product of three pairs.

> [!hint]- Hint 2
> Compare the second component of a product with the derivation rule.

## Solution

> [!success]- Independent derivation
> The product is bilinear and commutative, has identity $(1,0)$, and is associative: either association of $(b,x),(c,y),(e,z)$ gives $(bce,bc\,z+be\,y+ce\,x)$. Thus the inclusion $B\to B\oplus M$ is a unital ring homomorphism and defines the required algebra. The ideal $0\oplus M$ has square zero.
>
> Write an additive map $F:A\to B\oplus M$ as $(\varphi,D)$ using the two projections. Multiplicativity says exactly
> $$
> \varphi(aa')=\varphi(a)\varphi(a'),\qquad
> D(aa')=\varphi(a)D(a')+\varphi(a')D(a).
> $$
> Being a unital $R$-algebra map further says that $\varphi$ is a unital $R$-algebra map and $D(r)=0$ for $r$ from $R$. Conversely these conditions make $F$ multiplicative and compatible with $R$; the derivation identity gives $D(1)=2D(1)$, hence $D(1)=0$, so $F(1)=(1,0)$. Additivity and $D(r)=0$ also imply $R$-linearity. This proves the claimed bijection, where the action on $M$ is $a m=\varphi(a)m$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 11, printed p. 755, PDF p. 770]. The original page image was checked; the solution above is an independent derivation.
