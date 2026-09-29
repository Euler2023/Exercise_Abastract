---
title: "Exercise R314: Augmentations and the Cotangent Module"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 12, printed p. 755, PDF p. 770"
created: 2026-09-29
---

# Exercise R314: Augmentations and the Cotangent Module

## Problem Statement

> [!question] Lang XIX.12
> Let $A$ be a commutative $R$-algebra with an $R$-algebra homomorphism $\varepsilon:A\to R$, called an augmentation. For an $R$-module $M$, give it the $A$-action $a x=\varepsilon(a)x$, and write $M_\varepsilon$ for this module. Put
> $$
> \operatorname{Der}_\varepsilon(A,M)=\{\text{derivations for this }\varepsilon\text{-module structure}\},
> \qquad I=\ker\varepsilon.
> $$
> Then $\operatorname{Der}_\varepsilon(A,M)$ is an $A/I$-module and $A=R\oplus I$ as $R$-modules. Show that there is a natural $A$-module isomorphism
> $$
> \Omega^1_{A/R}/I\Omega^1_{A/R}\cong I/I^2
> $$
> and an $R$-module isomorphism
> $$
> \operatorname{Der}_\varepsilon(A,M)\cong\operatorname{Hom}_R(I/I^2,M).
> $$
> In particular, let $\eta:A\to I/I^2$ be the projection associated with $A=R\oplus I$. Then $\eta$ is the universal $\varepsilon$-derivation.

## Hints

> [!hint]- Hint 1
> An $\varepsilon$-derivation kills $R$ and $I^2$.

> [!hint]- Hint 2
> Use $a=\varepsilon(a)+(a-\varepsilon(a))$ to write down both inverse maps.

## Solution

> [!success]- Independent derivation
> The structure map $R\to A$ is split by $\varepsilon$, so it is injective and $A=R\oplus I$. An $R$-derivation $D:A\to M_\varepsilon$ vanishes on $R$ and satisfies $D(ij)=0$ for $i,j\in I$. Hence restriction gives an $R$-linear map $\bar D:I/I^2\to M$.
>
> Conversely, given $u:I/I^2\to M$, define $D(a)=u(a-\varepsilon(a)\bmod I^2)$. Writing $a=r+i$, $b=s+j$ gives $ab=rs+rj+si+ij$, and therefore
> $$
> D(ab)=r\,u(\bar j)+s\,u(\bar i)=\varepsilon(a)D(b)+\varepsilon(b)D(a).
> $$
> This gives inverse natural maps. Both sides have $A$-action through $\varepsilon$, so the correspondence is $A$-linear. In particular $\eta(a)=a-\varepsilon(a)\bmod I^2$ is the universal such derivation.
>
> For the differential-module assertion, define $v:I/I^2\to\Omega^1_{A/R}/I\Omega^1_{A/R}$ by $\bar i\mapsto di$. The product rule makes it well defined and $R$-linear. Universality of $\Omega^1_{A/R}$ applied to $\eta$ gives the reverse map $w$ sending $da$ to $\eta(a)$; it kills $I\Omega$ because the target is an $A/I$-module. Then $wv(\bar i)=\bar i$ and $vw(da)=d(a-\varepsilon(a))=da$. The elements $da$ generate, so $v,w$ are inverse. Both modules have $A$-action through $A/I\cong R$, so these $R$-linear inverse maps are also $A$-linear.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[02 - Ring Theory/Concepts/Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 12, printed p. 755, PDF p. 770]. The original page image was checked; the solution above is an independent derivation.
- Derivations here are over $R$. The quotient $A/I$ is canonically $R$; the derivation isomorphism is also $A$-linear when the action on $I/I^2$ is through this quotient.
