---
title: "Exercise AG93: Surjectivity from the Abel-Jacobi Image"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.1, Exercise 6.1.4, printed p. 221, PDF p. 235"
source_refs:
  - "S7/ch-6/sec-1/ex-4"
created: 2026-10-28
---

# Exercise AG93: Surjectivity from the Abel-Jacobi Image

## Problem Statement

> [!question] Original Exercise 6.1.4
> In general, if a map $\varphi$ is surjective this need not imply that a composition $\varphi\circ f$ is surjective as well. Yet the argument at the end of the section asserts that if a holomorphic homomorphism $\varphi:J_0(N)\longrightarrow E$ surjects then so does $\varphi\circ f$ where $f:X_0(N)\longrightarrow J_0(N)$ is an embedding $x\mapsto\int_{x_0}^x$. Explain. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Describe the Jacobian as $H^0(X,\Omega^1)^\vee/H_1(X,\mathbb Z)$. The derivative of a torus homomorphism to an elliptic curve is a linear functional.

> [!hint]- Hint 2
> Pulling this functional back by the Abel–Jacobi map gives a holomorphic differential on $X$. A nonzero functional gives a nonzero differential, hence a nonconstant composite.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $X=X_0(N)$ and $W=H^0(X,\Omega^1)$. In the analytic construction $J_0(N)=W^\vee/\Lambda$, where $\Lambda$ is the period lattice. A holomorphic homomorphism to $E=\mathbb C/\Lambda_E$ is induced by a complex-linear map $L:W^\vee\to\mathbb C$ with $L\Lambda\subseteq\Lambda_E$; this is Proposition 6.1.4 on printed p. 220 / PDF p. 234. Surjectivity implies $L\ne0$.
>
> Finite-dimensional double duality identifies $L$ with a nonzero differential $\eta\in W$: it is characterized by $L(\ell)=\ell(\eta)$ for $\ell\in W^\vee$. On a small coordinate disk in $X$, lift the Abel–Jacobi map by integrating from a fixed local starting point. Applying $L$ to that lift gives
> $$
> L\left(\omega\mapsto\int_{x_0}^x\omega\right)=\int_{x_0}^x\eta
> $$
> up to a local additive constant. Consequently the local derivative of $\varphi\circ f$ is $\eta$. Since $\eta\ne0$, this composite is not constant.
>
> A nonconstant holomorphic map of connected Riemann surfaces is open by the local mapping theorem. Its image here is also compact, hence closed in the Hausdorff curve $E$. It is a nonempty open-and-closed subset of connected $E$, so it equals $E$. This special nonvanishing property of the Abel–Jacobi map proves the required surjectivity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Inputs:** The analytic Jacobian construction, the source-proved linear description of torus homomorphisms, and the local mapping theorem are used.
- **Boundary:** Surjectivity of the composite follows from its nonzero differential; surjectivity of an arbitrary first map would not suffice.
- **Routing:** The central fact is how Abel–Jacobi integration identifies holomorphic differentials.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
