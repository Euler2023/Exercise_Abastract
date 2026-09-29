---
title: "Exercise R321: The Augmentation Ideal and Group Abelianization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 12, printed p. 829, PDF p. 844"
created: 2026-09-29
---

# Exercise R321: The Augmentation Ideal and Group Abelianization

## Problem Statement

> [!question] Lang XX.12
> Let $G$ be a group, and $\varepsilon:\mathbb Z[G]\to\mathbb Z$ the homomorphism $\varepsilon(\sum n(x)x)=\sum n(x)$. Let $I_G=\ker\varepsilon$. Prove that $I_G$ is an ideal of $\mathbb Z[G]$ and that there is an isomorphism of functors on groups
> $$
> G/G^c\cong I_G/I_G^2,\qquad xG^c\longmapsto(x-1)+I_G^2.
> $$

## Hints

> [!hint]- Hint 1
> Use $xy-1=(x-1)+(y-1)+(x-1)(y-1)$.

> [!hint]- Hint 2
> Construct an inverse by taking a group-ring sum to the corresponding sum in the additive abelianization.

## Solution

> [!success]- Independent derivation
> Here $G^c=[G,G]$ and the right side is an additive abelian group. The augmentation is additive and multiplicative, since multiplying two finite sums multiplies their coefficient sums. Thus its kernel is a two-sided ideal.
>
> The identity in the hint implies that $x\mapsto x-1\bmod I_G^2$ is a homomorphism from $G$ to the additive group $I_G/I_G^2$. It therefore factors through a homomorphism $\alpha:G_{\mathrm{ab}}\to I_G/I_G^2$. Every element $\sum n_xx$ of $I_G$ has $\sum n_x=0$ and equals $\sum n_x(x-1)$, so $\alpha$ is onto.
>
> Write the group law of $G_{\mathrm{ab}}$ additively, with image $\bar x$ for $x\in G$. Define
> $$
> \beta_0:I_G\to G_{\mathrm{ab}},\qquad\sum n_xx\longmapsto\sum n_x\bar x.
> $$
> Since the group elements form a basis of $\mathbb Z[G]$, this is well defined. For $x,y\in G$,
> $$
> \beta_0((x-1)(y-1))=\overline{xy}-\bar x-\bar y+\bar1=0.
> $$
> These products additively generate $I_G^2$, because the $x-1$ generate $I_G$ as an abelian group. Thus $\beta_0$ descends to $\beta:I_G/I_G^2\to G_{\mathrm{ab}}$. The identities $\beta\alpha(\bar x)=\bar x$ and $\alpha\beta((x-1)+I_G^2)=(x-1)+I_G^2$ show that they are inverse.
>
> For a homomorphism $h:G\to H$, the induced group-ring map sends $x-1$ to $h(x)-1$, and the abelianization map sends $\bar x$ to $\overline{h(x)}$. These identities prove naturality on generators, hence on the whole groups.

## Related Concepts

- [[06 - Representation Theory/Concepts/Group Algebra]]
- [[01 - Group Theory/Concepts/Solvable Groups]]
- [[02 - Ring Theory/Concepts/Ideals]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 12, printed p. 829, PDF p. 844]. The original page image was checked; the solution above is an independent derivation.
- **Routing:** The proof computes the kernel and square of a group-ring ideal. The quotient is taken as an additive group; no assertion identifies its multiplication with the group law.
