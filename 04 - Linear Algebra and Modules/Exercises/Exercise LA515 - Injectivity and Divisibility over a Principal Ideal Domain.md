---
title: "Exercise LA515: Injectivity and Divisibility over a Principal Ideal Domain"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 19, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA515: Injectivity and Divisibility over a Principal Ideal Domain

## Problem Statement

> [!question] Lang XX.19
> **(a)** Show that an injective abelian group $T$ is divisible.
>
> **(b)** Let $A$ be a principal entire ring. Define divisibility by elements of $A$ for modules, analogously to abelian groups. Show that an $A$-module is injective if and only if it is $A$-divisible. The proof for $\mathbb Z$ should work in exactly the same way.

## Hints

> [!hint]- Hint 1
> Extend a map from the ideal $aA$ to $A$.

> [!hint]- Hint 2
> For the converse, apply Baer's criterion to a principal ideal.

## Solution

> [!success]- Independent derivation
> **(a)** For $n\ge1$ and $t\in T$, define $f:n\mathbb Z\to T$ by $f(nk)=kt$. Injectivity extends it to $F:\mathbb Z\to T$. Then $nF(1)=F(n)=t$. Thus multiplication by every positive integer is onto.
>
> **(b)** “Principal entire ring” means a principal ideal domain. A module $Q$ is $A$-divisible if $aQ=Q$ for every $0\ne a\in A$. If $Q$ is injective, define $aA\to Q$ by $ar\mapsto rq$ for any $q\in Q$. The domain hypothesis makes this well defined. Extending to $A$ supplies $y$ with $ay=q$.
>
> Conversely let $Q$ be divisible. Every ideal is $aA$. For $a\ne0$, a map $f:aA\to Q$ is determined by $f(a)$. Choose $y$ with $ay=f(a)$; the map $r\mapsto ry$ extends $f$. The zero ideal poses no restriction. Baer's criterion, proved independently in Exercise XX.23 (LA519), now gives injectivity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 19, printed p. 830, PDF p. 845]. The original page image was checked; the solution above is an independent derivation.
- Only the explicitly proved ideal-extension criterion is imported from LA519; no classification of divisible groups is needed.
