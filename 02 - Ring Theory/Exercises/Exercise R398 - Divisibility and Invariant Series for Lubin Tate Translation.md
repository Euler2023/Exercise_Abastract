---
title: 'Exercise R398: Divisibility and Invariant Series for Lubin Tate Translation'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 1, printed p. 351, PDF p. 370
source_refs:
- S4/ch-V/sec-5/ex-1
created: '2026-10-23'
---

# Exercise R398: Divisibility and Invariant Series for Lubin Tate Translation

## Problem Statement

> [!question] Neukirch V.5.1
> Let $F=F_e$ be the Lubin–Tate module for the Lubin–Tate series $e\in\mathcal E_\pi$, with the endomorphisms $[a]=[a]_e$. Let $S=\mathfrak o_K[[X]]$ and $S^*=\{g\in S\mid g(0)\in U_K\}$. Show:
>
> (i) If $g\in S$ is a power series such that $g(F(1))=0$, then $g$ is divisible by $[\pi]$, i.e., $g(X)=[\pi](X)h(X)$, $h(X)\in S$.
>
> (ii) Let $g\in S$ be a power series such that
> $$
> g(X+_F\lambda)=g(X)\quad\text{for all }\lambda\in F(1),
> $$
> where we write $X+_F\lambda=F(X,\lambda)$. Then there exists a unique power series $h(X)$ in $S$ such that $g=h\circ[\pi]$.

## Hints

> [!hint]- Hint 1
> Apply Weierstrass division to the distinguished degree-$q$ series $[\pi](X)$ and use its $q$ distinct division roots.

> [!hint]- Hint 2
> For invariant $g$, $g-g(0)$ vanishes on $F(1)$. Divide it by $[\pi]$ and show that the quotient is still invariant. Repeat this to build $h$.

## Solution

> [!success]- Independent derivation
> Write $\mathfrak o=\mathfrak o_K$, $S=\mathfrak o[[X]]$, $e=[\pi]_F$, and $F(n)=\ker[\pi^n]_F$. Source Proposition (5.2) gives $\#F(n)=q^n$, and Theorem (5.4) gives the totally ramified Galois division fields and their scalar action. Evaluating a bounded integral series at division points of positive valuation is legitimate; coefficients after translating $X$ by such a point are convergent $p$-adic sums. The notation $X+_F\lambda$ means $F(X,\lambda)$, not ordinary addition.
>
> **(i)** The series $e$ has $e(X)\equiv X^q\pmod\pi$ and linear coefficient $\pi$. The Weierstrass preparation/division theorem over the complete DVR $\mathfrak o$ writes $e=UP$, where $U\in S^*$ and $P\in\mathfrak o[X]$ is monic of degree $q$, with all lower coefficients divisible by $\pi$. It also gives $g=Ph+r$ with $h\in S$ and $r\in\mathfrak o[X]$ of degree less than $q$. This named power-series division theorem is an imported algebraic input. The roots of $P$ are exactly the $q$ distinct elements of $F(1)$. If $g$ vanishes there, then $r$ vanishes at all $q$ roots. Over the field containing these roots a polynomial of degree less than $q$ with $q$ distinct roots is zero. Thus $r=0$ and $g=e(U^{-1}h)$, as asserted.
>
> **(ii)** Invariance evaluated at $X=0$ gives $g(\lambda)=g(0)$. By (i),
> $$
> g(X)=a_0+e(X)g_1(X),\qquad a_0=g(0),\quad g_1\in S.
> $$
> Since $e(X+_F\lambda)=e(X)$, translation in this identity and cancellation of the nonzero series $e(X)$ show $g_1(X+_F\lambda)=g_1(X)$ in the integral-domain series ring over the division field. Repeat to obtain
> $$
> g(X)=a_0+a_1e(X)+\cdots+a_Ne(X)^N+e(X)^{N+1}g_{N+1}(X),\qquad a_i\in\mathfrak o.
> $$
> The final term has $X$-adic order at least $N+1$, because $e(0)=0$. Hence it tends to zero coefficientwise as $N\to\infty$. Defining $h(T)=\sum_{i\ge0}a_iT^i\in S$ gives $g=h\circ e$.
>
> Uniqueness follows from the first nonzero coefficient: if $h_1-h_2$ has initial term $bT^r$, then $(h_1-h_2)(e(X))$ has initial term $b\pi^rX^r\ne0$. Thus composition with $e$ is injective. Conversely every $h\circ e$ is invariant, since $e$ kills $F(1)$. This also identifies the full invariant subring as $\mathfrak o[[[\pi](X)]]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The exercise and all printed subparts were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, printed pp. 351–352, PDF pp. 370–371]. The division-point modules and their field/Galois description were checked at [Proposition (5.2), Theorem (5.4), printed pp. 347–349, PDF pp. 366–368]. No source figure is needed.
- **Proof scope:** Independent division and iterative-invariance proof. The Weierstrass preparation/division theorem is the explicitly named external standard algebraic input; the translation-invariant conclusion itself is proved here. In part (i), $g(F(1))=0$ means vanishing on the whole division-point set, including $0$.
