---
title: "Exercise LA296: Orbits of GLn on Real Vectors"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - general-linear-group
  - group-actions
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.7, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise LA296: Orbits of GLn on Real Vectors

## Problem Statement

> [!question] Exercise 7.7
> Let $G=GL_n(\mathbb R)$ operate on $V=\mathbb R^n$ by left multiplication.
>
> (a) Describe the decomposition of $V$ into orbits for this operation.
>
> (b) What is the stabilizer of $e_1$?

## Hints

> [!hint]- Hint 1
> Any two nonzero vectors can be extended to bases.

> [!hint]- Hint 2
> The equation $Pe_1=e_1$ prescribes the first column of $P$.

## Solution

> [!success]- Solution
> **(a)** Every invertible matrix fixes $0$, so $\{0\}$ is one orbit. Given nonzero $v,w$, extend each to a basis and take the change-of-basis matrix sending the first basis to the second. It sends $v$ to $w$. Hence
>
> $$
> \mathbb R^n=\{0\}\sqcup(\mathbb R^n\setminus\{0\})
> $$
>
> is the orbit decomposition.
>
> **(b)** In the decomposition $\mathbb R^n=\mathbb Re_1\oplus\mathbb R^{n-1}$, the condition $Pe_1=e_1$ is equivalent to
>
> $$
> P=\begin{pmatrix}1&u\\0&B\end{pmatrix},
> \qquad u\in\mathbb R^{1\times(n-1)},\quad B\in GL_{n-1}(\mathbb R).
> $$
>
> These and only these matrices form the stabilizer. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- The upper-right row $u$ is arbitrary; fixing $e_1$ does not require preserving its chosen complementary subspace.
- **Source status:** [S1, Ch. 6, §7, Ex. 7.7, printed p. 191, PDF p. 203]; independent derivation.
