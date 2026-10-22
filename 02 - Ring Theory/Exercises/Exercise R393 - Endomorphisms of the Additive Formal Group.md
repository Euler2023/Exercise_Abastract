---
title: 'Exercise R393: Endomorphisms of the Additive Formal Group'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 1, printed p. 345, PDF p. 364
source_refs:
- S4/ch-V/sec-4/ex-1
created: '2026-10-23'
---

# Exercise R393: Endomorphisms of the Additive Formal Group

## Problem Statement

> [!question] Neukirch V.4.1
> $\operatorname{End}_{\mathfrak o}(\mathbb G_a)$ consists of all $aX$ such that $a\in\mathfrak o$.

> [!warning] Source issue or convention
> As a statement about all formal-group endomorphisms over an arbitrary ring, this needs a torsion-free characteristic-zero hypothesis: $X^p$ is a counterexample over $\mathbb F_p[[t]]$. If “endomorphism” instead means a scalar-linear formal $\mathfrak o$-module map, the statement is valid over any local valuation ring; both interpretations are treated below.

## Hints

> [!hint]- Hint 1
> Write $h(X+Y)=h(X)+h(Y)$ and compare mixed coefficients.

> [!hint]- Hint 2
> If $\mathfrak o$ is torsion-free over $\mathbb Z$, the coefficient of $X^{n-1}Y$ is $na_n$, forcing $a_n=0$ for $n\ge2$. Check what changes in characteristic $p$.

## Solution

> [!success]- Independent derivation
> Under the interpretation of source Proposition (4.3), an endomorphism is a power series $h(X)=\sum_{n\ge1}a_nX^n$ with
> $$
> h(X+Y)=h(X)+h(Y).
> $$
> Suppose first that the additive group of $\mathfrak o$ is torsion-free over $\mathbb Z$, as for a valuation ring of a $p$-adic number field. For each $n\ge2$, the coefficient of $X^{n-1}Y$ is $na_n$ on the left and zero on the right. Torsion-freeness gives $a_n=0$. Thus $h(X)=a_1X$. Conversely every such linear series is additive. The ring operations are $aX+bX=(a+b)X$ and $(aX)\circ(bX)=abX$, proving the claimed ring identification in this setting.
>
> Without a characteristic or linearity qualification, the assertion is false: over $\mathfrak o=\mathbb F_p[[t]]$, the non-linear series $h(X)=X^p$ satisfies $(X+Y)^p=X^p+Y^p$. Thus it is an endomorphism of the formal additive group over this local valuation ring. This provides a concrete counterexample to the unrestricted group interpretation.
>
> There is a second precise reading under which the conclusion holds in every local characteristic. If $\mathbb G_a$ is regarded as the formal $\mathfrak o$-module with $[a](X)=aX$, and endomorphisms are required to commute with every scalar, then in particular $h(\pi X)=\pi h(X)$ for a uniformizer $\pi$. Coefficient comparison gives
> $$
> (\pi^n-\pi)a_n=0\qquad(n\ge2).
> $$
> A local valuation ring is an integral domain and $\pi^{n-1}\ne1$, so again $a_n=0$. Conversely $aX$ commutes with all scalars. The source's over-$\mathfrak o$ formal-group notation and the formal-$\mathfrak o$-module notation must therefore be distinguished.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]

## Notes

- **Source status:** The exact one-line exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 1, printed p. 345, PDF p. 364]. Definitions (4.1)–(4.4), including the endomorphism-ring notation and the extra scalar-linearity condition, were checked at [printed pp. 342–343, PDF pp. 361–362].
- **Source issue:** The printed statement has no characteristic-zero qualifier. The body preserves it, gives the positive-characteristic counterexample under the formal-group reading, proves the torsion-free version, and proves the scalar-linear alternative. These are distinct statements.
- **Proof scope:** Independent coefficient arguments; no imported classification of additive polynomials is needed.
