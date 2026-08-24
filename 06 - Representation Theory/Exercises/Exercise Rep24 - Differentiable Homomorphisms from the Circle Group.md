---
title: "Exercise Rep24: Differentiable Homomorphisms from the Circle Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - circle-group
  - real-representations
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.10, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep24: Differentiable Homomorphisms from the Circle Group

## Problem Statement

> [!question] Exercise 5.10
> Determine the differentiable homomorphisms from the circle group $SO_2$ to $GL_n$.

## Hints

> [!hint]- Hint 1
> Pull the homomorphism back along $\theta\mapsto R(\theta)$ and write it as $e^{\theta A}$.

> [!hint]- Hint 2
> The period condition is $e^{2\pi A}=I$. Average an inner product over the circle to make the image orthogonal.

## Solution

> [!success]- Solution
> Let $R(\theta)$ denote rotation through $\theta$. Pulling a differentiable homomorphism $\rho:SO_2\to GL_n(\mathbb R)$ back to $\mathbb R$ gives
>
> $$
> \rho(R(\theta))=e^{\theta A},
> \qquad e^{2\pi A}=I.
> $$
>
> Because $SO_2$ is compact, averaging any positive-definite inner product over the group produces a $\rho$-invariant one. After a change of basis, the image is orthogonal, so $A$ is real skew-symmetric. Orthogonal block diagonalization gives zero $1\times1$ blocks and blocks
>
> $$
> \begin{pmatrix}0&-\lambda_j\\\lambda_j&0\end{pmatrix}.
> $$
>
> The condition $e^{2\pi A}=I$ forces every $\lambda_j$ to be an integer. Consequently every homomorphism has the form
>
> $$
> \rho(R(\theta))
> =P\operatorname{diag}
> \bigl(I_r,R(m_1\theta),\ldots,R(m_k\theta)\bigr)P^{-1},
> $$
>
> where $P\in GL_n(\mathbb R)$, $r+2k=n$, and $m_j\in\mathbb Z$. Conversely, every displayed formula is a differentiable homomorphism. Up to real equivalence one may replace each nonzero $m_j$ by $|m_j|$, because $R(-m\theta)$ is conjugate to $R(m\theta)$ by a reflection.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]

## Notes

- The integer $m_j$ is the weight or winding number of the corresponding real two-dimensional summand.
- **Source status:** Ex. 5.10 was visually checked at [S1, Ch. 9, §9.5, printed p. 286, PDF p. 298]. The classification uses the standard averaging argument and real skew-symmetric normal form; the periodicity step is explicit.
