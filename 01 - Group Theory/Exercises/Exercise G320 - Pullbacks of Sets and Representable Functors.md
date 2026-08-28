---
title: "Exercise G320: Pullbacks of Sets and Representable Functors"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - category-theory
  - pullbacks
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 51, printed p. 81, PDF p. 96"
created: 2026-08-28
---

# Exercise G320: Pullbacks of Sets and Representable Functors

## Problem Statement

> [!question] Exercise 51
> (a) Show that fiber products exist in the category of sets.
>
> (b) In a category $\mathcal C$, consider the slice category $\mathcal C_Z$. Fix $h:T\to Z$ and define $F(X)=\operatorname{Mor}_Z(T,X)$. Show that $F$ takes fiber products over $Z$ to fiber products of sets.

## Hints

> [!hint]- Hint 1
> A map into a fiber product is exactly a compatible pair of maps into its two factors.

## Solution

> [!success]- Solution
> **(a)** For maps $f:X\to Z$ and $g:Y\to Z$, set
>
> $$
> X\times_ZY=\{(x,y)\in X\times Y:f(x)=g(y)\}.
> $$
>
> Given maps $u:Q\to X$, $v:Q\to Y$ with $fu=gv$, the unique mediating map is $q\mapsto(u(q),v(q))$.
>
> **(b)** Let $P=X\times_ZY$ in $\mathcal C$, with projections $p_X,p_Y$. The map
>
> $$
> \operatorname{Mor}_Z(T,P)
> \longrightarrow
> \operatorname{Mor}_Z(T,X)\times\operatorname{Mor}_Z(T,Y),
> \qquad u\longmapsto(p_Xu,p_Yu)
> $$
>
> is bijective by the universal property of $P$. Its inverse sends a compatible pair $(a,b)$ to the unique map $T\to P$ with projections $a,b$. More generally, the same argument gives
>
> $$
> F(X\times_WY)\cong F(X)\times_{F(W)}F(Y)
> $$
>
> for any pullback in the slice category. Thus the representable functor $F=\operatorname{Mor}_Z(T,-)$ preserves these fiber products.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[01 - Group Theory/Exercises/Exercise G319 - Pullbacks of Abelian Groups|Exercise G319]]

## Notes

- **Terminology:** $\mathcal C_Z$ is the category of objects over $Z$; its products are pullbacks over $Z$.
- **Source status:** [S2, Ch. I, Ex. 51, printed p. 81, PDF p. 96]. The universal-property proof is independent.

