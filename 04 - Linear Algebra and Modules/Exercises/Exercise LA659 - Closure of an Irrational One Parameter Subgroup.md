---
title: "Exercise LA659: Closure of an Irrational One Parameter Subgroup"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 10, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-10"
created: 2026-11-12
---

# Exercise LA659: Closure of an Irrational One Parameter Subgroup

## Problem Statement

> [!question] Original Exercise 10
> Let $a$ be an irrational real number and let $G$ be the following subgroup of $\mathrm{GL}(2;\mathbb C)$:
> $$
> G=\left\{\begin{pmatrix}e^{it}&0\\0&e^{ita}\end{pmatrix}\,\middle|\,t\in\mathbb R\right\}.
> $$
> Show that
> $$
> \overline G=\left\{\begin{pmatrix}e^{i\theta}&0\\0&e^{i\phi}\end{pmatrix}\,\middle|\,\theta,\phi\in\mathbb R\right\},
> $$
> where $\overline G$ denotes the closure of the set $G$ inside the space of $2\times2$ matrices.
>
> *Hint:* Use Exercise 9.

## Hints

> [!hint]- Hint 1
> The set of diagonal matrices whose diagonal entries have absolute value one is closed and contains $G$.

> [!hint]- Hint 2
> To approximate $\operatorname{diag}(e^{i\theta},e^{i\phi})$, keep the first coordinate exactly fixed by setting $t=\theta+2\pi n$. Apply the density of $e^{2\pi ina}$ to the second coordinate.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation, using the independently proved density result in [[04 - Linear Algebra and Modules/Exercises/Exercise LA658 - Density of Irrational Circle Rotations|Hall Chapter 1, Exercise 9]].
>
> Write
> $$
> T=\{\operatorname{diag}(z,w):|z|=|w|=1\}.
> $$
> In $M_2(\mathbb C)$, the conditions that both off-diagonal entries vanish and that each diagonal entry has absolute value one are closed conditions, because matrix entries and absolute value are continuous. Thus $T$ is closed. Every element of $G$ belongs to $T$, so $\overline G\subseteq T$.
>
> Conversely, fix $\theta,\phi\in\mathbb R$. The first coordinate of the element with parameter $t=\theta+2\pi n$ is exactly $e^{i\theta}$, whereas its second coordinate is
> $$
> e^{ia(\theta+2\pi n)}=e^{ia\theta}e^{2\pi ina}.
> $$
> By Exercise 9, for every positive integer $j$ there is an integer $n_j$ such that
> $$
> \left|e^{2\pi in_ja}-e^{i(\phi-a\theta)}\right|<\frac1j.
> $$
> With $t_j=\theta+2\pi n_j$, this yields
> $$
> \begin{pmatrix}e^{it_j}&0\\0&e^{iat_j}\end{pmatrix}
> \longrightarrow
> \begin{pmatrix}e^{i\theta}&0\\0&e^{i\phi}\end{pmatrix}.
> $$
> Each matrix on the left lies in $G$, so every point of $T$ lies in $\overline G$. Therefore $\overline G=T$.
>
> The subgroup is proper. For example, $\operatorname{diag}(1,e^{i\pi a})\in T$. If it belonged to $G$, the first entry would force $t=2\pi n$ for some integer $n$, and the second would give
> $$
> a(2n-1)\in2\mathbb Z,
> $$
> contrary to irrationality of $a$. Thus $G$ is dense in $T$ and is not closed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[01 - Group Theory/Concepts/Discrete and Dense Subgroups|Discrete and Dense Subgroups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- **Source status:** The complete exercise, both matrices, and the printed hint were checked on the 200 dpi original page, printed p. 28 / PDF p. 40. The proof is independently supplied.
- **Method boundary:** This is closure in the ambient matrix space. The closed target $T$ consists entirely of invertible matrices, so no singular matrices occur in the closure.
- **Routing:** The decisive tools are entrywise matrix limits and density in a finite-dimensional torus.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
