---
title: "Exercise LA484: Nakayama's Lemma over Noncommutative Rings"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - nakayama-lemma
  - jacobson-radical
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 4, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise LA484: Nakayama's Lemma over Noncommutative Rings

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 4: Nakayama's lemma
> Let $R$ be any ring and $M$ a finitely generated module. Let $N$ be the radical of $R$. If $NM=M$ show that $M=0$.
>
> **Printed hint.** Observe that the proof of Nakayama's lemma still holds.

> [!info] One-sided conventions
> The modules are unital left modules, and $N=J(R)$ is the intersection of the maximal left ideals. The ring need not be commutative. Coefficients in a linear combination of generators act on the left.

## Hints

> [!hint]- Hint 1: A radical element cannot obstruct a left inverse
> If $a\in N$ and the left ideal $R(1-a)$ were proper, it would be contained in a maximal left ideal. Such an ideal would contain both $a$ and $1-a$.

> [!hint]- Hint 2: Remove one generator
> Choose a generating set of smallest positive size. From $NM=M$, express its last generator as $\sum_i a_i x_i$ with every $a_i\in N$. Multiply the resulting equation for $(1-a_n)x_n$ by a left inverse of $1-a_n$.

## Solution

> [!success]- Independent derivation by eliminating a generator
> By R301, $N$ is a two-sided ideal. We first establish exactly the inverse property needed for left modules.
>
> **Left-inverse lemma.** For every $a\in N$, there is $b\in R$ with $b(1-a)=1$. Indeed, if $R(1-a)$ were a proper left ideal, Zorn's lemma would place it in a maximal left ideal $L$. Since $a\in N\subseteq L$ and $1-a\in L$, we would have $1\in L$, a contradiction. Hence $R(1-a)=R$, which gives the required $b$. We do not need a right-inverse assertion.
>
> Now suppose $M\ne0$. Among its finite generating sets choose one of smallest size $n\ge1$, say $x_1,\ldots,x_n$. Since $NM=M$, the last generator has an expression
>
> $$
> x_n=\sum_{\ell=1}^t c_\ell y_\ell,
> \qquad c_\ell\in N,\quad y_\ell\in M.
> $$
>
> Write $y_\ell=\sum_{i=1}^n r_{\ell i}x_i$. Substitution gives
>
> $$
> x_n=\sum_{i=1}^n a_ix_i,
> \qquad a_i=\sum_{\ell=1}^t c_\ell r_{\ell i}\in N.
> $$
>
> Here the inclusion $a_i\in N$ uses the right-ideal property of $N$; no coefficients have been commuted. Rearranging gives
>
> $$
> (1-a_n)x_n=\sum_{i=1}^{n-1}a_ix_i.
> $$
>
> By the left-inverse lemma choose $b$ with $b(1-a_n)=1$. Multiply the equation on the left by $b$ to obtain
>
> $$
> x_n=\sum_{i=1}^{n-1}(ba_i)x_i.
> $$
>
> Thus $x_1,\ldots,x_{n-1}$ already generate $M$, contradicting minimality of $n$. For $n=1$, the formula says $x_1=0$, which gives the same contradiction. Hence $M=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[02 - Ring Theory/Exercises/Exercise R301 - The Jacobson Radical and Simple Modules|Exercise R301]]

## Notes

- **Source and proof status:** The statement and full printed hint were checked at [S2, Ch. XVII, Ex. 4, printed p. 661, PDF p. 676]. The proof is independently supplied. It uses the two-sided radical property proved in R301 and the existence of maximal left ideals above proper left ideals, obtained by Zorn's lemma.
- **Noncommutative boundary:** The proof uses left inverses and left multiplication in the displayed order. It does not use determinants or a commutative-ring version of Nakayama without justification. Finite generation is used to choose a smallest finite generating set.
- **Routing:** The main computation eliminates a generator of a module, so this exercise belongs to Linear Algebra and Modules, with the ring-theoretic radical cross-linked.
