---
title: "Exercise R302: Descending Chains and Minimal Ideals in Artinian Rings"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - artinian-rings
  - minimal-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 2, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R302: Descending Chains and Minimal Ideals in Artinian Rings

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 2
> A ring is said to be **Artinian** if every descending sequence of left ideals $J_1\supset J_2\supset\cdots$ with $J_i\ne J_{i+1}$ is finite.
>
> (a) Show that a finite dimensional algebra over a field is Artinian.
>
> (b) If $R$ is Artinian, show that every non-zero left ideal contains a simple left ideal.
>
> (c) If $R$ is Artinian, show that every non-empty set of ideals contains a minimal ideal.

> [!info] Left Artinian and minimal in a family
> The displayed definition is the left Artinian condition. Part (c) holds for any nonempty set of left ideals and hence for a set of two-sided ideals as well. “Minimal” means minimal among the members of that chosen set, not necessarily a minimal nonzero left ideal of the entire ring.

## Hints

> [!hint]- Hint 1: Measure strict inclusions
> A left ideal in a finite dimensional algebra is a vector subspace. A proper inclusion of finite dimensional vector spaces strictly decreases dimension when followed downward.

> [!hint]- Hint 2: Negate minimality
> If a nonempty collection has no minimal member, choose a member and repeatedly choose a strictly smaller member. Apply this to the nonzero left ideals contained in a fixed left ideal.

## Solution

> [!success]- Independent derivation from the descending chain condition
> **(a).** Let $R$ be a finite dimensional algebra over $k$, of dimension $d$. A left ideal $L$ is stable under addition and under multiplication by each scalar element $c1_R$, so it is a $k$-vector subspace of $R$. In a strictly descending chain of left ideals, their dimensions are strictly decreasing nonnegative integers bounded above by $d$. There can be at most $d$ strict decreases. Thus $R$ is Artinian.
>
> **(b).** Let $J\ne0$ be a left ideal. Consider the nonempty collection of nonzero left ideals contained in $J$; it contains $J$ itself. If it had no minimal member, we could choose $L_1$ in it, then $L_2\subsetneq L_1$ in it, then $L_3\subsetneq L_2$, and continue. This would be an infinite strictly descending chain of left ideals, contradicting the Artinian condition. Hence it has a minimal member $L\ne0$.
>
> Every $R$-submodule of $L$ is itself a left ideal of $R$. If such a submodule is nonzero, it belongs to the same collection and is contained in $L$, so minimality forces it to equal $L$. Therefore $L$ is a simple left $R$-module, that is, a simple left ideal contained in $J$.
>
> **(c).** Let $\mathcal C$ be any nonempty set of left ideals. If it had no minimal member, choose $L_1\in\mathcal C$. Since $L_1$ is not minimal, choose $L_2\in\mathcal C$ with $L_2\subsetneq L_1$, and repeat. The resulting infinite strictly descending chain contradicts the Artinian hypothesis. Thus $\mathcal C$ has a minimal member. The argument applies in particular when all ideals in $\mathcal C$ are two-sided.

## Related Concepts

- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian and Artinian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]

## Notes

- **Source and proof status:** The definition and all three parts were checked at [S2, Ch. XVII, Ex. 2, printed p. 661, PDF p. 676]. The solution is an independent chain argument. As usual in this setting, the successive-choice argument is made in ordinary set theory with choice.
- **Boundary:** The Artinian hypothesis concerns descending chains of left ideals; no commutativity, Noetherian property, or finite generation of arbitrary left ideals is used in (b) or (c).
