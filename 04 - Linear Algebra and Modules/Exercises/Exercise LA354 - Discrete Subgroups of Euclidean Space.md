---
title: "Exercise LA354: Discrete Subgroups of Euclidean Space"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - free-abelian-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 5, printed p. 166, PDF p. 181"
created: 2026-08-29
---

# Exercise LA354: Discrete Subgroups of Euclidean Space

## Problem Statement

> [!question] Lang, Chapter III, Exercise 5
> Let $A$ be an additive subgroup of Euclidean space $\mathbb R^n$, and assume that every bounded region contains only finitely many elements of $A$. Show that $A$ is a free abelian group on at most $n$ generators.

## Hints

> [!hint]- Lang's printed induction hint
> Induct on the maximal number of elements of $A$ that are linearly independent over $\mathbb R$. Let $v_1,\ldots,v_m$ be a maximal such set and let $A_0$ be the subgroup in the real span of $v_1,\ldots,v_{m-1}$. After applying induction to $A_0$, consider the bounded set of elements
>
> $$
> v=a_1v_1+\cdots+a_mv_m,
> \qquad
> 0\le a_i<1\ (i<m),
> \qquad
> 0\le a_m\le1.
> $$
>
> Choose an element $v_m'$ in this set whose nonzero $a_m$ is smallest.

> [!hint]- Hint 2
> For an arbitrary $x\in A$, divide its last coordinate by the last coordinate of $v_m'$, then reduce the first $m-1$ coordinates modulo integers. Minimality forces the last-coordinate remainder to vanish.

## Solution

> [!success]- Independently derived solution
> Put $V=\operatorname{span}_{\mathbb R}A$ and $m=\dim_{\mathbb R}V\le n$. We prove by induction on $m$ that $A$ is free of rank $m$. The case $m=0$ is immediate.
>
> Choose $m-1$ real-linearly independent elements of $A$, let $V_0$ be their span, and put $A_0=A\cap V_0$. The finiteness condition is inherited by $A_0$. By induction, after replacing the chosen elements by a basis if necessary, there are $v_1,\ldots,v_{m-1}\in A_0$ such that
>
> $$
> A_0=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_{m-1}.
> $$
>
> Choose $v_m\in A\setminus V_0$. Then $v_1,\ldots,v_m$ is a real basis of $V$. Consider
>
> $$
> S=\left\{\sum_{i=1}^m a_iv_i\in A:
> 0\le a_i<1\ (i<m),\ 0\le a_m\le1\right\}.
> $$
>
> This set lies in a bounded parallelepiped, so it is finite. It contains $v_m$, and hence contains an element
>
> $$
> v_m'=c_1v_1+\cdots+c_{m-1}v_{m-1}+cv_m
> $$
>
> for which $c>0$ is minimal among all positive last coordinates occurring in $S$.
>
> Let $x=\sum_{i=1}^m b_iv_i\in A$. Write $b_m=qc+r$ with $q\in\mathbb Z$ and $0\le r<c$. Subtract $qv_m'$ from $x$, and then subtract suitable integer multiples of $v_1,\ldots,v_{m-1}$ so that all first $m-1$ coordinates lie in $[0,1)$. The resulting element $y\in A$ lies in $S$ and has last coordinate $r$. If $r>0$, this contradicts the minimality of $c$; hence $r=0$.
>
> It follows that $x-qv_m'\in A_0$, so
>
> $$
> A=\mathbb Zv_1+\cdots+\mathbb Zv_{m-1}+\mathbb Zv_m'.
> $$
>
> These generators are real-linearly independent, and therefore also $\mathbb Z$-linearly independent. Thus they form a $\mathbb Z$-basis of $A$. Consequently $A$ is free abelian of rank $m\le n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Method boundary:** The bounded-region hypothesis is stronger than merely being a subgroup; it supplies the finite set in which a smallest positive coordinate exists.
- **Source context:** Lang notes immediately after the exercise that this lattice argument is used for unit groups in algebraic number theory.
- **Source status:** [S2, Ch. III, Ex. 5, printed p. 166, PDF p. 181]. The proof follows the printed hint but supplies the induction and remainder argument independently.
- **Figure status:** No source figure is required.
