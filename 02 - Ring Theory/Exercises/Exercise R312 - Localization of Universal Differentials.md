---
title: "Exercise R312: Localization of Universal Differentials"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 10, printed p. 755, PDF p. 770"
created: 2026-09-29
---

# Exercise R312: Localization of Universal Differentials

## Problem Statement

> [!question] Lang XIX.10
> Let $R\to A$ be a commutative $R$-algebra. Let $S_0$ be a multiplicative subset of $R$, and $S$ a multiplicative subset of $A$ containing the image of $S_0$. Show that the universal derivation of $S^{-1}A$ over $S_0^{-1}R$ is $(d,S^{-1}\Omega^1_{A/R})$, where
> $$
> d(a/s)=\frac{s\,da-a\,ds}{s^2}.
> $$

## Hints

> [!hint]- Hint 1
> Differentiate $ss^{-1}=1$.

> [!hint]- Hint 2
> Derivations to an $S^{-1}A$-module extend uniquely by the quotient rule.

## Solution

> [!success]- Independent derivation
> For any derivation $D:A\to M$, where $M$ is an $S^{-1}A$-module, define
> $$
> \widetilde D(a/s)=s^{-1}D(a)-as^{-2}D(s).
> $$
> If $a/s=b/t$, some $u\in S$ kills $at-bs$. Apply $D$ to $u(at-bs)=0$ and localize: since $u$ is a unit and $at-bs$ acts as zero on $M$, one gets $D(at-bs)=0$ in $M$. Together with $at=bs$, this gives equality of the two proposed quotient-rule values. Direct expansion verifies additivity and the Leibniz rule. If $D$ vanishes on $R$, $\widetilde D$ vanishes on $S_0^{-1}R$. Conversely every derivation of the localization restricts to such a $D$, and differentiating $ss^{-1}=1$ forces the formula, hence uniqueness.
>
> Apply this to the universal derivation followed by $\Omega^1_{A/R}\to S^{-1}\Omega^1_{A/R}$. For every $S^{-1}A$-module $M$ the preceding bijection and localization adjunction yield
> $$
> \operatorname{Der}_{S_0^{-1}R}(S^{-1}A,M)
> \cong\operatorname{Der}_R(A,M)
> \cong\operatorname{Hom}_{S^{-1}A}(S^{-1}\Omega^1_{A/R},M).
> $$
> The bijections are induced by the displayed $d$ and are natural. This is exactly its universal property.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 10, printed p. 755, PDF p. 770]. The original page image was checked; the solution above is an independent derivation.
- The proof works with zero divisors: equality of fractions is checked after multiplying by an element of the multiplicative set.
