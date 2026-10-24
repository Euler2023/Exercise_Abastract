---
title: 'Exercise AG52: Mixed Real and Profinite Powers of a Positive Unit'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 5, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-5
created: '2026-10-23'
---

# Exercise AG52: Mixed Real and Profinite Powers of a Positive Unit

## Problem Statement

> [!question] Neukirch VI.1.5
> Let $\epsilon\in\mathcal O_K^*$ be totally positive, i.e., $\epsilon\in I_K^1$. Extend the exponentiation $\mathbb Z\to I_K^1$, $n\mapsto\epsilon^n$, by continuity to an exponentiation $\widehat{\mathbb Z}\times\mathbb R\to I_K^1=I_f^1\times I_\infty^1$, $\epsilon\mapsto\epsilon^\lambda$, in such a way that $\mathfrak N(\epsilon^\lambda)=1$.

## Hints

> [!hint]- Hint 1 — first step
> Choose the finite-component exponent and the real-parameter exponent on the infinite components separately.

> [!hint]- Hint 2 — proof route
> Use the profinite exponent on the finite components. On every infinite component choose a logarithm, using the real logarithm at real places.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Fix a complex logarithm $L_v$ of $\epsilon_v$ at each complex embedding; at real embeddings total positivity allows us to take $L_v=\log\epsilon_v\in\mathbb R$. For $\lambda=(x,t)$, define the finite components to be $\epsilon_v^x$ (the continuous extension from the preceding exercise) and the infinite components to be $\exp(tL_v)$.
> This is a continuous homomorphism from the additive group $\widehat{\mathbb Z}\times\mathbb R$ to $I_K^1$; the diagonal integer $(n,n)$ maps to the usual principal idèle $\epsilon^n$. All finite components are units, so their absolute values are $1$; the infinite components give
> $$
> \mathfrak N(\epsilon^{(x,t)})
>  =\prod_{v\mid\infty}|\epsilon_v|_v^t
>  =\left(\prod_v|\epsilon|_v\right)^t=1.
> $$
> The last step uses the product formula for number fields. Different choices of complex logarithms change the complex phases in the real-parameter direction; this does not affect existence or the norm conclusion.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

The statement was checked against the original book at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 5, printed p. 367, PDF p. 386]. The solution is an independent derivation in this vault; citing its inputs does not mean that the book solves this exercise. This constructs a continuous extension and establishes its existence. Density does not imply uniqueness, because the diagonal $\mathbb Z$ is not dense in $\widehat{\mathbb Z}\times\mathbb R$.
