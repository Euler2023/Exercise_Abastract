---
title: "Exercise Rep16: One-Parameter Groups in U2"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - unitary-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.2, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep16: One-Parameter Groups in U2

## Problem Statement

> [!question] Exercise 5.2
> Determine the one-parameter groups in $U_2$.

## Hints

> [!hint]- Hint 1
> Differentiate $(e^{tA})^*e^{tA}=I$ at $t=0$.

> [!hint]- Hint 2
> Apply the spectral theorem to the skew-Hermitian generator $A$.

## Solution

> [!success]- Solution
> A one-parameter group in $GL_2(\mathbb C)$ has the form $e^{tA}$. It lies in $U_2$ for every $t$ exactly when
>
> $$
> (e^{tA})^*e^{tA}=I.
> $$
>
> Differentiating at $t=0$ gives $A^*+A=0$. Conversely, if $A^*=-A$, then
>
> $$
> (e^{tA})^*=e^{tA^*}=e^{-tA}=(e^{tA})^{-1},
> $$
>
> so $e^{tA}\in U_2$. By the spectral theorem there are $U\in U_2$ and $\alpha,\beta\in\mathbb R$ such that
>
> $$
> A=U
> \begin{pmatrix}i\alpha&0\\0&i\beta\end{pmatrix}U^*.
> $$
>
> Therefore all one-parameter groups in $U_2$ are precisely
>
> $$
> \varphi(t)=U
> \begin{pmatrix}e^{i\alpha t}&0\\0&e^{i\beta t}\end{pmatrix}U^*.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]

## Notes

- The image is periodic exactly when the nonzero frequencies are rationally commensurable; otherwise its closure is a torus of dimension two.
- **Source status:** Ex. 5.2 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The classification uses the standard spectral theorem and is independently derived.

