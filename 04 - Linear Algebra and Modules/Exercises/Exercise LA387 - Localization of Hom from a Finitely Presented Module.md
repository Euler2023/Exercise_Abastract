---
title: "Exercise LA387: Localization of Hom from a Finitely Presented Module"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 13, printed p. 444, PDF p. 459"
created: 2026-09-22
---

# Exercise LA387: Localization of Hom from a Finitely Presented Module

## Problem Statement

> [!question] Lang, Chapter X, Exercise 13
> Let $A$ be any commutative ring, and $M,N$ modules over $A$. If $M$ is finitely presented, and $S$ is a multiplicative subset of $A$, show that
> $$
> S^{-1}\operatorname{Hom}_A(M,N)\approx\operatorname{Hom}_{S^{-1}A}(S^{-1}M,S^{-1}N).
> $$
> This is usually applied when $A$ is Noetherian and $M$ finitely generated, in which case $M$ is also finitely presented since the module of relations is a submodule of a finitely generated free module.

## Hints

> [!hint]- Hint 1
> Specify the canonical map on $f/s$. Choose finitely many generators of $M$ and finitely many relations.

> [!hint]- Hint 2
> Clear denominators in the images of the generators, then use a second common denominator to make all generating relations vanish in $N$.

## Solution

> [!success]- Independent derivation
> The canonical map is
> $$
> \Phi(f/s)(m/t)=f(m)/(st).
> $$
> Indeed localization sends $f$ to the $S^{-1}A$-linear map $f_S:m/t\mapsto f(m)/t$. The target Hom module is an $S^{-1}A$-module, so the universal property of localization uniquely extends $f\mapsto f_S$ to $\Phi$. This establishes well-definedness and linearity.
>
> **Injectivity.** Choose generators $m_1,\ldots,m_q$ of $M$. If $\Phi(f/s)=0$, then $f(m_j)/1=0$ for each $j$. Choose $u_j\in S$ with $u_jf(m_j)=0$. The product $u=\prod_j u_j$ satisfies $uf=0$, proving $f/s=0$ in the localized Hom module.
>
> **Surjectivity.** Choose a finite presentation $A^p\to A^q\to M\to0$. Let $m_j$ be the images of the standard basis of $A^q$ and write the finitely many generating relations as
> $$
> \sum_{j=1}^q a_{ij}m_j=0\qquad(1\le i\le p).
> $$
> Given $g:S^{-1}M\to S^{-1}N$, choose a common denominator $s\in S$ and $n_j\in N$ such that $g(m_j/1)=n_j/s$. Every generating relation gives $(\sum_j a_{ij}n_j)/s=0$. Choose $v_i\in S$ killing $\sum_j a_{ij}n_j$ in $N$, and put $v=\prod_i v_i$. The assignment $m_j\mapsto vn_j$ now satisfies all relations and defines $f:M\to N$. On each generator,
> $$
> \Phi(f/(vs))(m_j/1)=vn_j/(vs)=n_j/s=g(m_j/1).
> $$
> Hence $\Phi(f/(vs))=g$. Empty products, if there are no generators or relations, mean $1$.
>
> If $A$ is Noetherian and $M$ is finitely generated, the kernel of a surjection $A^q\to M$ is finitely generated because $A^q$ is Noetherian. Its finite generating set supplies the asserted finite presentation.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Notes

- Statement, formula, and concluding comment checked on the original page [S2, Ch. X, Exercise 13, printed p. 444, PDF p. 459]. The denominator-clearing proof is independently supplied.
- Finite generation supplies injectivity; finite presentation supplies finitely many relations for surjectivity. No finiteness assumption on $N$ is used.
- The formula commutes with precomposition and postcomposition, so the isomorphism is natural. If $0\in S$, both localized modules and both sides of the assertion are zero.

