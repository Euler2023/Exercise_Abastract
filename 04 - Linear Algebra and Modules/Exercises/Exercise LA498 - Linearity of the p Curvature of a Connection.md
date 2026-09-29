---
title: "Exercise LA498: Linearity of the p Curvature of a Connection"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 15, printed p. 757, PDF p. 772"
created: 2026-09-29
---

# Exercise LA498: Linearity of the p Curvature of a Connection

## Problem Statement

> [!question] Lang XIX.15
> Let $A/R$ be a commutative algebra and $E$ an $A$-module with connection $\nabla$. Assume that $R$ has characteristic $p$. Define
> $$
> \psi:\operatorname{Der}(A/R)\longrightarrow\operatorname{End}_R(E),\qquad
> \psi(D)=(\nabla(D))^p-\nabla(D^p).
> $$
> Prove that $\psi(D)$ is $A$-linear. Thus the image of $\psi$ is actually in $\operatorname{End}_A(E)$.
>
> **Source hint:** Use Leibniz's formula and the definition of a connection.

## Hints

> [!hint]- Hint 1
> Prove a mixed Leibniz rule for $\nabla_D^n(ax)$.

> [!hint]- Hint 2
> The endpoint terms involving $D^p(a)x$ cancel in the difference.

## Solution

> [!success]- Independent derivation
> Let $L=\nabla_D$. Contraction of the connection gives $L(ax)=D(a)x+aL(x)$. Induction exactly as for the iterated Leibniz rule yields
> $$
> L^n(ax)=\sum_{i=0}^n\binom ni D^i(a)L^{n-i}(x).
> $$
> Indeed applying $L$ to each summand differentiates its scalar factor by $D$ and applies $L$ to its vector factor; Pascal's identity combines the resulting coefficients.
>
> In characteristic the prime $p$, all interior coefficients vanish. Consequently
> $$
> L^p(ax)=D^p(a)x+aL^p(x).
> $$
> Exercise XIX.14 proves that $D^p$ is an $R$-derivation. Applying the connection identity to this derivation gives
> $$
> \nabla_{D^p}(ax)=D^p(a)x+a\nabla_{D^p}(x).
> $$
> Subtracting proves $\psi(D)(ax)=a\psi(D)(x)$. Both operators are additive, hence $\psi(D)$ is $A$-linear, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Connections and Curvature]]
- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 15, printed p. 757, PDF p. 772]. The original page image was checked; the solution above is an independent derivation.
- The assertion is linearity in the argument $x\in E$ for a fixed $D$. It does not claim that $D\mapsto\psi(D)$ is an $A$-linear map.
