---
title: "Exercise LA519: Baer Criterion for Injective Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 23, printed pp. 830-831, PDF pp. 845-846"
created: 2026-09-29
---

# Exercise LA519: Baer Criterion for Injective Modules

## Problem Statement

> [!question] Lang XX.23
> Let $Q$ be a module over a commutative ring $A$. Assume that for every left ideal $J$ of $A$, every homomorphism $\varphi:J\to Q$ extends to a homomorphism $A\to Q$. Show that $Q$ is injective.
>
> **Source hint:** Given $M'\subset M$ and $f:M'\to Q$, choose $x_0\in M\setminus M'$. Let $J$ be the left ideal of $a\in A$ with $ax_0\in M'$, put $\varphi(a)=f(ax_0)$, and extend $\varphi$ to $A$. Then show that one can extend $f$ to $M$ by
> $$
> f(x'+bx_0)=f(x')+\varphi(b),
> $$
> for $x'\in M$ and $b\in A$. Then use Zorn's lemma. This is the same proof pattern as Lemma 4.2.

> [!warning] Source issue
> The hint's one-step extension is to $M'+Ax_0$, not yet to all of $M$, and the displayed $x'$ must belong to $M'$, not arbitrary $M$. The extended map on $A$ is denoted $\widetilde\varphi$ in the proof to avoid ambiguity.

## Hints

> [!hint]- Hint 1
> Order all extensions of $f$ by inclusion of their domains.

> [!hint]- Hint 2
> A maximal proper domain can be enlarged by one cyclic submodule.

## Solution

> [!success]- Independent derivation
> Consider pairs $(N,g)$ with $M'\subseteq N\subseteq M$ and $g:N\to Q$ extending $f$, ordered by extension. This is a set, is nonempty, and every chain has an upper bound: union its domains and use the compatible maps there. Zorn's lemma gives a maximal pair $(N,g)$.
>
> If $N\ne M$, choose $x_0\in M\setminus N$. Set $J=\{a:ax_0\in N\}$ and $\varphi(a)=g(ax_0)$. This is an ideal and an $A$-linear map. By hypothesis extend it to $\widetilde\varphi:A\to Q$. Define
> $$
> g'(n+bx_0)=g(n)+\widetilde\varphi(b)\qquad(n\in N,\ b\in A).
> $$
> If $n+bx_0=n'+b'x_0$, then $b-b'\in J$ and $n'-n=(b-b')x_0$. Consequently
> $$
> g(n')-g(n)=\varphi(b-b')=\widetilde\varphi(b)-\widetilde\varphi(b'),
> $$
> so $g'$ is well defined. Additivity and $A$-linearity follow from the displayed formula. It extends $g$ to the strictly larger domain $N+Ax_0$, contradicting maximality. Thus $N=M$, proving injectivity. Necessity of the ideal-extension condition follows immediately from the definition of an injective module.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 23, printed pp. 830-831, PDF pp. 845-846]. The original page image was checked; the solution above is an independent derivation.
- The proof also works over a noncommutative ring for left modules when $J$ is a left ideal.
