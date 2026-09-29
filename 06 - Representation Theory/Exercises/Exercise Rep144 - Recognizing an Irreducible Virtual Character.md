---
title: "Exercise Rep144: Recognizing an Irreducible Virtual Character"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 22, printed p. 726, PDF p. 741"
created: 2026-09-29
---

# Exercise Rep144: Recognizing an Irreducible Virtual Character

## Problem Statement

> [!question] Lang XVIII.22
> Let $X(G)$ be the character ring of a finite group $G$, generated over $\mathbb Z$ by the simple characters over $\mathbb C$. Show that an element $f\in X(G)$ is an effective irreducible character if and only if $\langle f,f\rangle_G=1$ and $f(1)\ge0$.

## Hints

> [!hint]- Hint 1: Use the integral character basis
> Write $f=\sum_i n_i\chi_i$, where $n_i\in\mathbb Z$ and the $\chi_i$ are irreducible characters. Orthogonality turns the squared norm into a sum of integer squares.

> [!hint]- Hint 2: Remove the sign ambiguity
> Norm one leaves only $f=\chi_i$ or $f=-\chi_i$. The value $\chi_i(1)$ is a positive dimension.

## Solution

> [!success]- Independent derivation
> Let $\chi_1,\ldots,\chi_s$ be the distinct irreducible complex characters of $G$. By definition of $X(G)$ and character orthogonality, every $f\in X(G)$ has a unique expansion
> $$
> f=\sum_{i=1}^s n_i\chi_i,\qquad n_i\in\mathbb Z,
> $$
> and
> $$
> \langle f,f\rangle_G
> =\sum_{i,j}n_in_j\langle\chi_i,\chi_j\rangle_G
> =\sum_{i=1}^s n_i^2.
> $$
> If this value is $1$, exactly one coefficient is $1$ or $-1$, and all the others vanish. Thus $f=\varepsilon\chi_j$ for some $\varepsilon\in\{1,-1\}$. Since $\chi_j(1)$ is the positive dimension of a nonzero irreducible representation, the inequality $f(1)\ge0$ forces $\varepsilon=1$. Consequently $f=\chi_j$ is effective and irreducible.
>
> Conversely, if $f$ is an effective irreducible character, then $f=\chi_j$ for some $j$. Orthogonality gives $\langle f,f\rangle_G=1$, and $f(1)=\dim E_j>0$, which in particular implies the printed weak inequality.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Character Rings and Adams Operations]]

## Notes

- **Source and proof status:** The statement, including $f(1)\ge0$ rather than a strict inequality, was visually checked at [S2, Ch. XVIII, Exercise 22, printed p. 726, PDF p. 741]. The argument is independent and uses irreducible-character orthogonality. Compare the effective-character criterion in Ch. XVIII, Theorem 5.17, printed p. 685, PDF p. 700.
- **Why virtual integrality matters:** The coefficients must be integers. Arbitrary complex class functions can have norm one without being a signed irreducible character.
- **Boundary:** Under the norm-one assumption $f(1)$ cannot be zero, so the weak inequality in the problem automatically becomes strict positivity.
