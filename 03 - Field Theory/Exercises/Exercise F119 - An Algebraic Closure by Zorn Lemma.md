---
title: "Exercise F119: An Algebraic Closure by Zorn Lemma"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 9, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise F119: An Algebraic Closure by Zorn Lemma

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 9
> Let $K$ be an infinite field. Prove that there exists an algebraically closed field $K^a$ containing $K$ as a subfield, and algebraic over $K$. [Hint: Let $\Omega$ be a set of cardinality strictly greater than the cardinality of $K$, and containing $K$. Consider the set $S$ of all pairs $(E,\varphi)$ where $E$ is a subset of $\Omega$ such that $K\subseteq E$, and $\varphi$ denotes a law of addition and multiplication on $E$ which makes $E$ into a field such that $K$ is a subfield, and $E$ is algebraic over $K$. Define a partial ordering on $S$ in an obvious way; show that $S$ is inductively ordered, and that a maximal element is algebraic over $K$ and algebraically closed. You will need Exercise 5 in the last step.]

## Hints

> [!hint]- Hint 1: Keep all carriers inside one set
> Order the field structures on subsets of $\Omega$ by inclusion with agreement of both operations. A chain union is again an algebraic extension of $K$.

> [!hint]- Hint 2: Transport a larger extension back into the carrier
> If a maximal field $E$ is not algebraically closed, adjoin a root of an irreducible polynomial. The resulting field is algebraic over $K$ and has cardinality $|K|$ by Exercise 5, so its new elements fit in $\Omega\setminus E$.

## Solution

> [!success]- Complete independent derivation
> Put $\kappa=|K|$. By Cantor's theorem choose a set $\Omega\supseteq K$ with $|\Omega|>\kappa$, for example by adjoining a disjoint copy of $\mathcal P(K)$ to $K$.
>
> Let $\mathcal S$ consist of all subsets $E\subseteq\Omega$ containing $K$, together with two binary operations on $E$ that make it a field extending the given operations of $K$ and algebraic over $K$. This is a set: the carriers lie in $\mathcal P(\Omega)$, and operation graphs lie in $\mathcal P(\Omega^3)$. It is nonempty because the original field $K$ is an element. Order it by inclusion of carriers and agreement of the two operations on the smaller carrier.
>
> For a nonempty chain, take the union $E$ of its carriers and the unions of the operation graphs. Any finitely many elements belong to one chain member. Therefore both operations are well-defined, every field axiom holds in that member, and additive and multiplicative inverses remain in the union. Each element lies in a chain member algebraic over $K$, so it is algebraic over $K$ in the union. This gives an upper bound. The empty chain has the upper bound $K$. Zorn's lemma yields a maximal element $E$.
>
> Suppose $E$ is not algebraically closed. Then some nonconstant polynomial has no root, and choosing an irreducible factor gives an irreducible $f\in E[t]$ of degree at least two. The quotient $L=E[t]/(f)$ is a field and a finite extension of $E$, strictly larger than it. We identify the constant copy of $E$ inside $L$ with $E$ itself.
>
> The field $L$ is algebraic over $K$. Indeed an element of $L$ is algebraic over $E$; the finitely many coefficients of an algebraic relation lie in a finite extension $E_0$ of $K$, since each is algebraic over $K$. The element is algebraic over $E_0$, hence belongs to a finite extension of $K$ by the degree tower formula. This proves transitivity here without any algebraic-closure input.
>
> Exercise 5, proved independently in the linked note, gives $|L|=|E|=\kappa$. On the other hand, $|\Omega\setminus E|>\kappa$: if its cardinality were at most $\kappa$, then $|\Omega|\le|E|+\kappa=\kappa$, a contradiction. By cardinal comparison there is an injection of $L\setminus E$ into $\Omega\setminus E$. Extend it by the identity on $E$ to a bijection
>
> $$
> u:L\xrightarrow{\sim}\widetilde E\subseteq\Omega.
> $$
>
> Transport the field operations by $u$, namely $u(a)+_{\widetilde E}u(b)=u(a+b)$ and similarly for multiplication. Because $u$ fixes $E$, the new operations extend those of $E$ exactly. The new carrier strictly contains $E$, since $L\ne E$, and it is still algebraic over $K$. Thus $\widetilde E$ is a strictly larger element of $\mathcal S$, contradicting maximality.
>
> Every nonconstant polynomial over $E$ consequently has a root in $E$. Repeated factorization by linear factors shows that every polynomial splits, so $E$ is algebraically closed. Taking $K^a=E$ proves the assertion.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]
- [[03 - Field Theory/Concepts/Algebraic Closure]]
- [[03 - Field Theory/Concepts/Algebraic Extensions]]
- [[03 - Field Theory/Exercises/Exercise F118 - Cardinality of an Algebraic Extension]]

## Notes

Statement and full hint checked at printed p. 893 / PDF p. 908. This is an independent construction with field structures restricted to a fixed set; it does not apply Zorn's lemma to a proper class of all field extensions. It uses only the polynomial quotient construction of a simple extension, transitivity of algebraicity proved above, Exercise 5, and the stated choice principles. The carrier transport fixes the existing field pointwise.
