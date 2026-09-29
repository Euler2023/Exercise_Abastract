---
title: "Exercise R308: Universal Differentials of a Polynomial Algebra"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 6, printed p. 754, PDF p. 769"
created: 2026-09-29
---

# Exercise R308: Universal Differentials of a Polynomial Algebra

## Problem Statement

> [!question] Lang XIX.6
> In these derivation exercises all rings are commutative. Universal derivations are denoted by $(d_{A/R},\Omega^1_{A/R})$; their existence is not assumed until proved.
>
> Let $A=R[X_\alpha]$ be a polynomial ring with a possibly infinite indexing set. Let $\Omega$ be the free $A$-module on symbols $dX_\alpha$, and define
> $$
> d:A\longrightarrow\Omega,\qquad df(X)=\sum_\alpha\frac{\partial f}{\partial X_\alpha}dX_\alpha.
> $$
> Show that $(d,\Omega)$ is a universal derivation $(d_{A/R},\Omega^1_{A/R})$.

## Hints

> [!hint]- Hint 1
> Each polynomial uses only finitely many variables.

> [!hint]- Hint 2
> Use the Leibniz rule on monomials to determine every derivation by its values on the variables.

## Solution

> [!success]- Independent derivation
> All sums are finite for each polynomial, so $d$ is well defined. Formal differentiation is additive, vanishes on $R$, and satisfies the product rule; checking a product of two monomials proves these identities over any commutative coefficient ring.
>
> Let $M$ be an $A$-module and $D:A\to M$ an $R$-derivation. Induction gives $D(X_\alpha^n)=nX_\alpha^{n-1}D(X_\alpha)$ for $n\ge1$. Repeated multiplication and additivity therefore give
> $$
> D(f)=\sum_\alpha\frac{\partial f}{\partial X_\alpha}D(X_\alpha).
> $$
> There is a unique $A$-linear $u:\Omega\to M$ with $u(dX_\alpha)=D(X_\alpha)$, since the displayed symbols form a basis. The identity gives $D=u\circ d$. Conversely every such $u$ makes $u\circ d$ an $R$-derivation. Thus $\operatorname{Hom}_A(\Omega,M)\cong\operatorname{Der}_R(A,M)$ naturally in $M$, proving the universal property.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 6, printed p. 754, PDF p. 769]. The original page image was checked; the solution above is an independent derivation.
- Infinite sets of variables require a direct sum of basis copies, not a product.
