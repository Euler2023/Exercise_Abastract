---
title: "Exercise G347: Orders and Indices of Congruence Subgroups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.3, printed p. 21, PDF p. 36; Appendix A hint, printed p. 413, PDF p. 424"
source_refs:
  - "S7/ch-1/sec-2/ex-3"
created: 2026-10-24
---

# Exercise G347: Orders and Indices of Congruence Subgroups

## Problem Statement

> [!question] Original Exercise 1.2.3
> (a) Let $p$ be a prime and let $e$ be a positive integer. Show that
> $$
> |SL_2(\mathbb Z/p^e\mathbb Z)|=p^{3e}(1-1/p^2).
> $$
> (Hints for this exercise are at the end of the book.)
>
> (b) Show that $|SL_2(\mathbb Z/N\mathbb Z)|=N^3\prod_{p\mid N}(1-1/p^2)$, so this is also the index $[SL_2(\mathbb Z):\Gamma(N)]$.
>
> (c) Show that the map $\Gamma_1(N)\to\mathbb Z/N\mathbb Z$ given by $\begin{pmatrix}a&b\\c&d\end{pmatrix}\mapsto b\pmod N$ surjects and has kernel $\Gamma(N)$.
>
> (d) Show that the map $\Gamma_0(N)\to(\mathbb Z/N\mathbb Z)^*$ given by $\begin{pmatrix}a&b\\c&d\end{pmatrix}\mapsto d\pmod N$ surjects and has kernel $\Gamma_1(N)$.
>
> (e) Show that $[SL_2(\mathbb Z):\Gamma_0(N)]=N\prod_{p\mid N}(1+1/p)$.
>
> The groups are defined by $\Gamma(N)=\{\gamma:\gamma\equiv I\pmod N\}$, $\Gamma_1(N)=\{\gamma:(a,c,d)\equiv(1,0,1)\pmod N\}$, and $\Gamma_0(N)=\{\gamma:c\equiv0\pmod N\}$, inside $SL_2(\mathbb Z)$.

## Hints

> [!hint]- Hint 1
> For (a), count primitive first rows over $\mathbb Z/p^e\mathbb Z$, then solve one surjective linear equation for the second row.

> [!hint]- Hint 2
> For (b), use the Chinese Remainder Theorem and the reduction surjectivity proved in Exercise 1.2.2.

> [!hint]- Hint 3
> For (c) and (d), multiply the relevant upper triangular residue matrices and use the first isomorphism theorem; then divide indices.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a)** Put $R=\mathbb Z/p^e\mathbb Z$. The first row $(a,b)$ of a determinant-one matrix must be primitive: at least one entry is a unit. There are $p^{2e}-p^{2e-2}$ such rows. For each, the map
> $$
> R^2\to R,\qquad(c,d)\mapsto ad-bc
> $$
> is surjective, since $a$ or $b$ is a unit. Every fiber has $|R^2|/|R|=p^e$ elements, by the first isomorphism theorem for finite additive groups. Thus
> $$
> |SL_2(R)|=(p^{2e}-p^{2e-2})p^e=p^{3e}(1-p^{-2}).
> $$
>
> **(b)** Write $N=\prod_p p^{e_p}$. The Chinese Remainder Theorem applied to matrix entries and determinants gives
> $$
> SL_2(\mathbb Z/N\mathbb Z)\cong\prod_{p\mid N}SL_2(\mathbb Z/p^{e_p}\mathbb Z).
> $$
> Multiplying (a) proves the order formula. Reduction $SL_2(\mathbb Z)\to SL_2(\mathbb Z/N\mathbb Z)$ is surjective by Exercise 1.2.2 and has kernel $\Gamma(N)$, proving the index assertion.
>
> **(c)** Modulo $N$, elements of $\Gamma_1(N)$ are $\begin{pmatrix}1&b\\0&1\end{pmatrix}$, whose top-right entries add under multiplication. The map is therefore a homomorphism to the additive group, and $\begin{pmatrix}1&t\\0&1\end{pmatrix}$ maps to any $t$. Its kernel consists precisely of the matrices congruent to $I$, namely $\Gamma(N)$. Hence $[\Gamma_1(N):\Gamma(N)]=N$.
>
> **(d)** For upper triangular residue matrices the bottom-right entries multiply. The determinant condition makes $d$ a unit modulo $N$. For a given unit $u$, the residue matrix $\operatorname{diag}(u^{-1},u)$ has determinant $1$. Lift it to $SL_2(\mathbb Z)$ using Exercise 1.2.2; the lift lies in $\Gamma_0(N)$ and maps to $u$. The kernel is characterized by $d\equiv1$, which forces $a\equiv1$, so it is $\Gamma_1(N)$. Thus $[\Gamma_0(N):\Gamma_1(N)]=\varphi(N)$.
>
> **(e)** Multiplication of finite indices gives
> $$
> [SL_2(\mathbb Z):\Gamma_0(N)]
> =\frac{N^3\prod_{p\mid N}(1-p^{-2})}{N\varphi(N)}
> =N\prod_{p\mid N}(1+p^{-1}),
> $$
> using $\varphi(N)=N\prod_{p\mid N}(1-p^{-1})$. For $N=1$ all groups agree and empty products are $1$.
>
> For example, $|SL_2(\mathbb F_2)|=6$, $[SL_2(\mathbb Z):\Gamma_0(2)]=3$, and their ratio $2$ agrees with $[\Gamma_0(2):\Gamma(2)]=2\varphi(2)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

The problem and Appendix A hint (printed p. 413 / PDF p. 424) were visually checked. The proof is an independent finite-group count, using reduction surjectivity from Exercise 1.2.2, the Chinese Remainder Theorem, the first isomorphism theorem and multiplication of finite indices. These quotient and index arguments determine the group-theory routing.
