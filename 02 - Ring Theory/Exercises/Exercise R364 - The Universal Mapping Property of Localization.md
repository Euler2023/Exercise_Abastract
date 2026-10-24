---
title: "Exercise R364: The Universal Mapping Property of Localization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 5, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise R364: The Universal Mapping Property of Localization

## Problem Statement

> [!question] Neukirch I.11.5
> Let $f:A\to B$ be a homomorphism of rings and $S$ a multiplicatively closed subset such that $f(S)\subseteq B^\times$. Then $f$ induces a homomorphism $A_S\to B$.

## Hints

> [!hint]- Hint 1: The formula is forced
> Every fraction is $(a/1)(s/1)^{-1}$. Thus an induced homomorphism must send $a/s$ to $f(a)f(s)^{-1}$.

> [!hint]- Hint 2: Remove the annihilating witness in the target
> Equality of fractions supplies $t(s^{\prime}a-sa^{\prime})=0$ for some $t\in S$. After applying $f$, the factor $f(t)$ is a unit, so it can be cancelled even when $B$ has zero divisors.

> [!hint]- Hint 3: Check operations and uniqueness
> Use the fraction addition and multiplication formulas. Any induced map agrees on $a/1$ and on inverses of $s/1$, so no second map is possible.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> All ring homomorphisms here preserve identity, and all rings are commutative. We take $1\in S$. Define
> $$
> \widetilde f:A_S\longrightarrow B,\qquad
> \widetilde f(a/s)=f(a)f(s)^{-1}.
> $$
> The inverse exists by the hypothesis on $f(S)$.
>
> If $a/s=a'/s'$, choose $t\in S$ with $t(s'a-sa')=0$. Applying $f$ gives
> $$
> f(t)\bigl(f(s')f(a)-f(s)f(a')\bigr)=0.
> $$
> The element $f(t)$ is a unit; multiplying by its inverse gives equality of the expression in parentheses to zero. Multiplying further by $f(s)^{-1}f(s')^{-1}$ proves
> $$
> f(a)f(s)^{-1}=f(a')f(s')^{-1}.
> $$
> Thus the formula is independent of the representative. In particular, the additional witness handles zero divisors in $A$; no cancellation in $A$ was attempted.
>
> The fraction rules now give
> $$
> \begin{aligned}
> \widetilde f(a/s+b/t)
> &=f(at+bs)f(st)^{-1}\\
> &=f(a)f(s)^{-1}+f(b)f(t)^{-1},\\
> \widetilde f((a/s)(b/t))
> &=f(ab)f(st)^{-1}
> =\widetilde f(a/s)\widetilde f(b/t).
> \end{aligned}
> $$
> Also $\widetilde f(1/1)=1$ and $\widetilde f(a/1)=f(a)$. Hence $\widetilde f$ is the required unital ring homomorphism.
>
> It is unique among homomorphisms extending $f$: any such map must send $s/1$ to $f(s)$ and its inverse $1/s$ to $f(s)^{-1}$, forcing its value on $a/s$.
>
> The same proof permits $0\in S$. In that case the hypothesis requires $f(0)=0$ to be a unit in $B$, forcing $B$ to be the zero ring. The source and target localizations in that boundary have the stated unique map. With the source's usual $0\notin S$ convention no such boundary is needed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 5, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Proof inputs:** Only the fraction relation and the ring operations from Exercise I.11.1 are used. The existence, well-definedness, and uniqueness required by the universal property are proved explicitly.
- **Scope:** This proof applies to rings with zero divisors. It assumes neither injectivity nor surjectivity of $f$ and no finite generation. Units, rather than arbitrary nonzero images of denominators, are the essential condition.
- **Routing:** Factoring a ring homomorphism through a ring of fractions is primarily ring-theoretic.
