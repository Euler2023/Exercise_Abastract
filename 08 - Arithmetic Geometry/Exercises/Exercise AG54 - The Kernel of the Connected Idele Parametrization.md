---
title: 'Exercise AG54: The Kernel of the Connected Idele Parametrization'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 7, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-7
created: '2026-10-23'
---

# Exercise AG54: The Kernel of the Connected Idele Parametrization

## Problem Statement

> [!question] Neukirch VI.1.7
> Sending
> $$
> (\lambda_1,\ldots,\lambda_t,y_1,\ldots,y_s)\longmapsto\epsilon_1^{\lambda_1}\cdots\epsilon_t^{\lambda_t}\phi_1(y_1)\cdots\phi_s(y_s)
> $$
> defines a continuous homomorphism
> $$
> f:(\widehat{\mathbb Z}\times\mathbb R)^t\times\mathbb R^s\longrightarrow C_K^0
> $$
> into the group $C_K^0=\{[\alpha]\in C_K\mid\mathfrak N([\alpha])=1\}$, with kernel $\mathbb Z^t\times\mathbb Z^s$.

> [!note] Root-of-unity convention from the preceding exercise
> If $K$ is totally imaginary, retain the visible correction from Exercise 6: the $\epsilon_i$ are lifts of a free basis of the totally positive units modulo roots of unity. Finite roots of unity are handled by complex phases, without additional profinite parameters.

## Hints

> [!hint]- Hint 1 — first step
> A parameter lies in the kernel of the class-group map exactly when its idèle is principal.

> [!hint]- Hint 2 — proof route
> The map to the quotient vanishes precisely for principal idèles; invoke the preceding parametrization result.

## Solution

> [!success]- Independent derivation
> Each power map and each $\phi_j$ is continuous and multiplicative. Taking their finite product and then projecting $I_K\to C_K$ gives the required continuous homomorphism. Part (i) of the preceding exercise proves that its image always has norm $1$, so it lies in the norm-one subgroup denoted here by $C_K^0$.
> A parameter lies in the kernel if and only if the resulting idèle is principal. Part (ii) of the preceding exercise characterizes this precisely: each $\lambda_i=(x_i,t_i)$ is of the form $(n_i,n_i)$, and every $y_j$ is an integer. Therefore
> $$
> \ker f=\operatorname{diag}(\mathbb Z)^t\times\mathbb Z^s.
> $$
> Here $C_K^0$ denotes only the norm-one subgroup. In general it is not the identity component, which is denoted by $D_K^0$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

The statement was checked against the original book at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 7, printed p. 367, PDF p. 386]. The solution is an independent derivation in this vault; citing its inputs does not mean that the book solves this exercise.
