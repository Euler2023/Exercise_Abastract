---
title: "Exercise Rep34: Complex Lie Algebras of Dimension at Most Three"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - classification
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.10, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep34: Complex Lie Algebras of Dimension at Most Three

## Problem Statement

> [!question] Exercise 6.10
> Classify complex Lie algebras of dimension $\le3$.

## Hints

> [!hint]- Hint 1
> In dimension two, write $[e_1,e_2]$ in a suitable basis.

> [!hint]- Hint 2
> Every nonsimple three-dimensional complex Lie algebra has a two-dimensional abelian ideal.

## Solution

> [!success]- Solution
> In dimensions $0$ and $1$, only the abelian algebra occurs. In dimension $2$, there are two types: the abelian algebra and, up to basis, the nonabelian algebra
>
> $$
> [e_1,e_2]=e_2.
> $$
>
> In dimension $3$, there is the simple algebra $\mathfrak{sl}_2(\mathbb C)$. Every nonsimple algebra has a two-dimensional abelian ideal $V$ and can be written
>
> $$
> \mathfrak g_D=\mathbb Ce_0\ltimes_D V,
> \qquad [e_0,v]=Dv,
> \qquad [V,V]=0,
> $$
>
> for some $D\in M_2(\mathbb C)$. The case $D=0$ is the abelian algebra. For $D\ne0$, two such algebras are isomorphic exactly when
>
> $$
> D'=cPDP^{-1}
> $$
>
> for some $c\in\mathbb C^{\times}$ and $P\in GL_2(\mathbb C)$. Thus the remaining classes are the projective similarity classes of nonzero $2\times2$ matrices. Jordan normal form makes this explicit: diagonal types $\operatorname{diag}(1,\lambda)$ modulo $\lambda\sim\lambda^{-1}$, the nonzero Jordan block $\begin{pmatrix}1&1\\0&1\end{pmatrix}$, and the nilpotent block $\begin{pmatrix}0&1\\0&0\end{pmatrix}$. The last is the Heisenberg algebra.
>
> These cases are mutually nonisomorphic and exhaust all dimensions at most three. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]

## Notes

- **External standard input:** The reduction of a nonsimple three-dimensional complex Lie algebra to a two-dimensional abelian ideal is the small-dimensional solvable/semisimple dichotomy; the remaining classification is elementary linear algebra.
- **Source status:** Ex. 6.10 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. Artin states the classification task but does not print this solution.
