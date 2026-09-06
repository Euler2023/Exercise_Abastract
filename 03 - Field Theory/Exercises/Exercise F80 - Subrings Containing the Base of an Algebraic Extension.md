---
title: "Exercise F80: Subrings Containing the Base of an Algebraic Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 19, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F80: Subrings Containing the Base of an Algebraic Extension

## Problem Statement

> [!question] Lang, Chapter V, Exercise 19
> Let $E$ be an algebraic extension of $F$. Show that every subring of $E$ which contains $F$ is actually a field. Is this necessarily true if $E$ is not algebraic over $F$? Prove or give a counterexample.

## Hints

> [!hint]- Hint 1
> For a nonzero algebraic element, its minimal polynomial has nonzero constant term.

## Solution

> [!success]- Solution and proof status
> Let $R$ be a subring with $F\subseteq R\subseteq E$, and let $0\ne a\in R$. Its monic minimal polynomial over $F$ has the form
> $$
> X^m+c_{m-1}X^{m-1}+\cdots+c_1X+c_0
> $$
> with $c_0\ne0$. Otherwise irreducibility would force this polynomial to be $X$, contradicting $a\ne0$. Dividing the relation at $a$ by $a$ gives
> $$
> a^{-1}=-c_0^{-1}(a^{m-1}+c_{m-1}a^{m-2}+\cdots+c_1)\in R.
> $$
> Thus every nonzero element of $R$ is invertible in $R$, which is a field.
>
> If $E/F$ is not algebraic, choose a transcendental element $t\in E$. The subring $F[t]$ contains $F$ but not $t^{-1}$: an identity $t^{-1}=h(t)$ would give the nonzero polynomial relation $th(t)-1=0$. Thus the assertion fails for every nonalgebraic extension, not merely for one isolated example.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[02 - Ring Theory/Concepts/Subrings|Subrings]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 19, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
