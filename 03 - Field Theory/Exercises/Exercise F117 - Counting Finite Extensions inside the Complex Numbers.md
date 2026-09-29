---
title: "Exercise F117: Counting Finite Extensions inside the Complex Numbers"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 4, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise F117: Counting Finite Extensions inside the Complex Numbers

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 4
> Let $K$ be a subfield of the complex numbers. Show that for each integer $n\ge1$, the cardinality of the set of extensions of $K$ of degree $n$ in $\mathbb C$ is $\le\operatorname{card}(K)$.

## Hints

> [!hint]- Hint 1: Count possible basis elements
> Every element of a degree-$n$ extension satisfies a monic polynomial over $K$ of degree at most $n$.

> [!hint]- Hint 2: Count generating tuples
> A finite basis also generates the extension as a field. Bound the set of ordered $n$-tuples of possible basis elements.

## Solution

> [!success]- Complete independent derivation
> Put $\kappa=|K|$. Since $K\subseteq\mathbb C$ contains $\mathbb Q$, it is infinite. There are $\kappa$ monic polynomials over $K$ of degrees from $1$ to $n$: a degree-$d$ monic polynomial is determined by $d$ coefficients, so its set has cardinality $\kappa^d=\kappa$, and a nonempty finite union still has size $\kappa$.
>
> Let $T_n\subseteq\mathbb C$ be the union of the roots of those polynomials. A nonzero polynomial of degree $d$ has at most $d$ roots in a field, by successive division by $t-\alpha$. Thus $|T_n|\le\kappa n=\kappa$. More explicitly, choose an order on each finite root set and map a root to a chosen polynomial having it as a root and its position in that root set. This bounds the union by the polynomial set times $\{1,\ldots,n\}$.
>
> If $E$ is a field with $K\subseteq E\subseteq\mathbb C$ and $[E:K]=n$, then for every $\alpha\in E$ the $n+1$ vectors $1,\alpha,\ldots,\alpha^n$ are linearly dependent over $K$. Dividing a nonzero relation by its leading coefficient gives a monic polynomial of degree at most $n$; hence $E\subseteq T_n$. Choose a $K$-basis $b_1,\ldots,b_n$ of $E$. Since all elements of $E$ are $K$-linear combinations of this basis,
>
> $$
> E=K(b_1,\ldots,b_n),\qquad (b_1,\ldots,b_n)\in T_n^n.
> $$
>
> The map taking a tuple to its generated subfield therefore has every degree-$n$ extension in its image. The relevant tuples form a subset of a set of size at most $\kappa^n=\kappa$. Choosing one tuple for each resulting field yields the desired cardinal bound. For $n=1$ the only extension is $K$, consistent with the result.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[03 - Field Theory/Concepts/Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials]]

## Notes

Statement and endpoint $n\ge1$ checked at printed p. 893 / PDF p. 908. This independent proof counts polynomial roots and finite generating bases. The primitive-element theorem would give another route, but is unnecessary here. The argument uses the cardinal arithmetic and choice convention proved and stated in the linked concept. Its field-degree and algebraicity arguments determine the Field Theory routing.
