---
title: "Exercise ST10: Comparability of Cardinalities"
topic: set-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 14, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST10: Comparability of Cardinalities

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 14
> Let $A,B$ be non-empty sets. Prove that
>
> $$
> \operatorname{card}(A)\le\operatorname{card}(B)\quad\text{or}\quad
> \operatorname{card}(B)\le\operatorname{card}(A).
> $$
>
> [Hint: consider the family of pairs $(C,f)$ where $C$ is a subset of $A$ and $f:C\to B$ is an injective map. By Zorn's lemma there is a maximal element. Now finish the proof.]

## Hints

> [!hint]- Hint 1: Specify the order
> Order partial injections by extension of their domains and their graphs.

> [!hint]- Hint 2: Extend by one pair
> If a maximal partial injection has both an unused domain element and an unused target element, adding that pair contradicts maximality.

## Solution

> [!success]- Complete independent derivation
> Let $\mathcal S$ be the set of pairs $(C,f)$ with $C\subseteq A$ and $f:C\to B$ injective. Order it by $(C,f)\le(D,g)$ if $C\subseteq D$ and $g|_C=f$. It is nonempty because the empty map is allowed.
>
> For a chain $\{(C_i,f_i)\}$, let $C=\bigcup_i C_i$ and define $f$ by the union of the graphs of the $f_i$. This is a well-defined map: two values assigned to the same element agree in a chain member extending both. It is injective: if $f(x)=f(y)$, some chain member contains both $x$ and $y$ and its injectivity gives $x=y$. Thus $(C,f)$ is an upper bound. The empty chain also has an upper bound, the empty pair. Zorn's lemma gives a maximal pair $(C,f)$.
>
> If $C=A$, then $f$ injects $A$ into $B$. If $C\ne A$, choose $a\in A\setminus C$. Were $f(C)\ne B$, an element $b\in B\setminus f(C)$ could be assigned to $a$ to extend $f$ injectively, contradicting maximality. Therefore $f(C)=B$. Since $f$ is injective too, its inverse is a bijection $B\to C$, and composition with $C\subseteq A$ injects $B$ into $A$. This proves the alternative.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]

## Notes

Statement and full hint checked at printed p. 893 / PDF p. 908. This independent proof uses Zorn's lemma explicitly. Schroeder–Bernstein needs no choice, whereas universal cardinal comparability is equivalent to choice; the hypotheses must not be conflated.
