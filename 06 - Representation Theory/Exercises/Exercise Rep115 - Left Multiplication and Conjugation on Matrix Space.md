---
title: "Exercise Rep115: Left Multiplication and Conjugation on Matrix Space"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.15, printed p. 322, PDF p. 334"
created: 2026-08-27
---

# Exercise Rep115: Left Multiplication and Conjugation on Matrix Space

## Problem Statement

> [!question] Miscellaneous Exercise M.15
> Let $\rho:G\to GL_n(\mathbb C)$ be an irreducible representation. Given a representation $\sigma:GL_n\to GL(V)$, consider $\sigma\circ\rho$. **(a)** Determine its character and decompose it when $\sigma$ is left multiplication of $GL_n$ on the space of $n\times n$ matrices. **(b)** Determine its character when $\sigma$ is conjugation on $\mathbb C^{n\times n}$.

## Hints

> [!hint]- Hint 1
> Under left multiplication, each column is a copy of the original module; under conjugation use $V\otimes V^*$.

## Solution

> [!success]- Solution
> **(a)** Left multiplication applies $\rho(g)$ independently to each of the $n$ columns. Hence the matrix space is $n$ copies of the original module:
>
> $$
> \sigma\circ\rho\cong n\rho,\qquad \chi_{\sigma\circ\rho}(g)=n\chi_\rho(g).
> $$
>
> Since $\rho$ is irreducible, this is already its irreducible decomposition.
>
> **(b)** Conjugation on $\operatorname{End}(V)$ is $\rho\otimes\rho^*$, so
>
> $$
> \chi_{\mathrm{conj}}(g)=\chi_\rho(g)\chi_\rho(g^{-1})=|\chi_\rho(g)|^2.
> $$
>
> Schur's lemma also shows that the trivial representation occurs exactly once, represented by the scalar matrices. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Exercises/Exercise Rep1 - Schurs Lemma|Exercise Rep1: Schur's Lemma]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.15, printed p. 322, PDF p. 334]; both character calculations are independent.

