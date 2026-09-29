---
title: "Exercise ST4: Cantor Theorem for Power Sets"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 6, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST4: Cantor Theorem for Power Sets

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 6
> Finish the proof of the Corollary 3.11.
>
> **Corollary 3.11 (printed p. 891 / PDF p. 906).** Let $A$ be an infinite set, and let $S$ be the set of all subsets of $A$. Then $\operatorname{card}(A)\le\operatorname{card}(S)$ and $\operatorname{card}(A)\ne\operatorname{card}(S)$.
>
> Proof. We leave it as an exercise. [Hint: If $B$ is a non-empty subset of $A$, use the characteristic function $\varphi_B$ such that
>
> $$
> \varphi_B(x)=1\quad\text{if }x\in B,\qquad
> \varphi_B(x)=0\quad\text{if }x\notin B.
> $$
>
> What can you say about the association $B\mapsto\varphi_B$?]

## Hints

> [!hint]- Hint 1: Include the empty subset
> The characteristic function of the empty subset is the zero function.

> [!hint]- Hint 2: Use a diagonal subset
> For any proposed surjection $f:A\to\mathcal P(A)$, examine $D=\{a:a\notin f(a)\}$.

## Solution

> [!success]- Complete independent derivation
> The map $B\mapsto\varphi_B$ is a bijection $\mathcal P(A)\to\{0,1\}^A$. Distinct subsets have different membership functions, and the inverse sends $u$ to $u^{-1}(\{1\})$. The empty subset corresponds to the zero function, extending the hint to all of $S$.
>
> The singleton map $a\mapsto\{a\}$ is injective, proving $|A|\le|S|$. If $f:A\to S$ were surjective, define $D=\{a:a\notin f(a)\}$ and choose $d$ with $f(d)=D$. Then
>
> $$
> d\in D\quad\Longleftrightarrow\quad d\notin f(d)=D,
> $$
>
> a contradiction. Thus no surjection and no bijection exist. The proof also works for finite and empty $A$ and needs no choice.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

Exercise checked at printed p. 893 / PDF p. 908; full referenced corollary and hint at printed p. 891 / PDF p. 906. The independent diagonal proof supplies the needed conclusion directly. Include the empty set in the characteristic-function correspondence.
